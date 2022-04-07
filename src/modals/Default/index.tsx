import React, {useContext} from 'react';
import {ModalTimeout} from '~services/utils';
import {
  CancelTouchArea,
  CancelText,
  Button,
  Container,
  Title,
  Description,
  Buttons,
} from './styles';
import {Store, IModal} from '~components/Modal';

export interface IButton {
  id: number | string;
  onPress?: () => any;
  title: string;
}

interface IDefaultModal {
  title: string;
  description: string;
  buttons?: IButton[];
  cancel?: boolean;
}

export const DynamicButtons = ({buttons}: {buttons: IButton[]}) => {
  const {hide} = useContext<IModal>(Store);
  return (
    <Buttons>
      {/* Dinamically generating buttons. Useful, as this is supposed to be a generic modal */}
      {buttons.map((button: IButton, index) => (
        <Button
          {...button}
          key={button.id}
          last={index === buttons.length - 1}
          onPress={async () => {
            hide();
            return button.onPress && ModalTimeout(button.onPress);
          }}>
          {button.title}
        </Button>
      ))}
    </Buttons>
  );
};

export default function Component({
  title,
  description,
  buttons = [{id: 0, title: 'Ok'}],
  cancel = true,
}: IDefaultModal) {
  const {close} = useContext<IModal>(Store);

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DynamicButtons buttons={buttons} />
      {cancel && (
        <CancelTouchArea onPress={close}>
          <CancelText>Cancelar</CancelText>
        </CancelTouchArea>
      )}
    </Container>
  );
}
