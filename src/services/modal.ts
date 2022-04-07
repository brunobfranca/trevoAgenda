import * as React from 'react';
import {IModal} from '~components/Modal';

export const modalRef = React.createRef<IModal>();

export const show: IModal['show'] = (component, config?: {}) => {
  return modalRef?.current?.show(component, config);
};

export const hide: IModal['hide'] = () => {
  return modalRef?.current?.hide();
};

export const close: IModal['close'] = () => {
  return modalRef?.current?.close();
};
