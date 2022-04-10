import React from 'react';
import Toast, {IToast} from '~modals/Toast';
import * as Modal from '~services/modal';

export function error(props: IToast) {
  return Modal.show(() => <Toast {...props} variant="error" />, {
    swipeDirection: 'up',
    hasBackdrop: false,
    coverScreen: false,
    style: {justifyContent: 'flex-start'},
    animationIn: 'slideInDown',
    animationOut: 'slideOutUp',
  });
}
export function success(props: IToast) {
  return Modal.show(() => <Toast {...props} variant="success" />, {
    swipeDirection: 'up',
    hasBackdrop: false,
    coverScreen: false,
    style: {justifyContent: 'flex-start'},
    animationIn: 'slideInDown',
    animationOut: 'slideOutUp',
  });
}
export function alert(props: IToast) {
  return Modal.show(() => <Toast {...props} variant="alert" />, {
    swipeDirection: 'up',
    hasBackdrop: false,
    coverScreen: false,
    style: {justifyContent: 'flex-start'},
    animationIn: 'slideInDown',
    animationOut: 'slideOutUp',
  });
}
