import {useEffect, useRef, EffectCallback, DependencyList} from 'react';
import {format} from 'currency-formatter';
import {Platform} from 'react-native';

// Products don't return a currency, but we can assume it's always BRL, for now.
export const formatToCurrency = (value: number) => format(value, {code: 'BRL'});

// Modals have issues if you try to navigate while they are closing (especially on IOS)
// To workaround this issue untill it's fixed we need to wait the closing animation delay.
export const DELAY = 300;
export const ModalTimeout = (cb: () => void) =>
  setTimeout(cb, Platform.OS === 'ios' ? DELAY + 100 : DELAY);

export const useDidMountEffect = (
  func: EffectCallback,
  deps: DependencyList,
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};
