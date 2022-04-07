// Didn't found a good lib to call modals imperatively. This component facilitates displaying
// modals through sagas and such, which is a widespread need. That's why I made it.

import React, {
  createContext,
  useState,
  useImperativeHandle,
  useCallback,
} from 'react';
import {Container} from './styles';
import {ModalTimeout} from '~services/utils';
import {KeyboardAvoidingView, View} from 'react-native';

const INITIAL_STATE: {
  Component?: () => any;
  config?:
    | {onHide?: () => void; onClose?: () => void; isVisible: boolean}
    | any;
} = {
  config: {isVisible: false},
};

export interface IModal {
  show: (
    newComponent: typeof INITIAL_STATE.Component,
    newConfig?: typeof INITIAL_STATE.config,
  ) => Promise<void>;
  close: () => void;
  hide: () => void;
}

export const Store = createContext<IModal>({
  show: () => undefined,
  close: () => undefined,
  hide: () => undefined,
});

const Modal: React.RefForwardingComponent<IModal> = (_props, ref) => {
  const [{config, Component = () => <></>}, setState] = useState(INITIAL_STATE);

  const setVisibility = useCallback((isVisible: boolean) => {
    setState((oldState: typeof INITIAL_STATE) => ({
      ...oldState,
      config: {...oldState.config, isVisible},
    }));
  }, []);

  const hide: IModal['hide'] = useCallback(() => {
    if (config?.onHide) {
      ModalTimeout(config?.onHide);
    }
    setVisibility(false);
  }, [config?.onHide, setVisibility]);

  const close: IModal['close'] = useCallback(() => {
    if (config?.onClose) {
      ModalTimeout(config?.onClose);
    }
    setVisibility(false);
  }, [config?.onClose, setVisibility]);

  const show: IModal['show'] = useCallback(
    async (newComponent, newConfig) => {
      if (config?.isVisible) {
        setVisibility(false);
        await new Promise(ModalTimeout); // Await dismissal before changing the component
      }

      setState({Component: newComponent, config: newConfig});
      setVisibility(true);
    },
    [config?.isVisible, setVisibility],
  );

  useImperativeHandle(ref, () => ({
    hide,
    show,
    close,
  }));

  return (
    <Container
      {...config}
      onBackdropPress={close}
      onSwipeComplete={close}
      onBackButtonPress={close}>
      <Store.Provider value={{show, close, hide}}>
        <KeyboardAvoidingView behavior="padding">
          <Component />
        </KeyboardAvoidingView>
      </Store.Provider>
    </Container>
  );
};

export default React.forwardRef(Modal);
