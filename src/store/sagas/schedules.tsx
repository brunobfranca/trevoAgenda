import React from 'react';
import {takeLatest} from 'redux-saga/effects';
import database from '@react-native-firebase/database';
import * as Modal from '~services/modal';
import {Default} from '~modals';

function* procurarAgendamento(client) {
  try {
    const response = database().ref('schedules').once('value');
    const data = [];
    const res = yield response;
    res.forEach(r => {
      data.push(r.toJSON());
    });
    const filtro = data.filter(a => a.client === client);
    return filtro ? true : false;
  } catch (error) {
    console.log(error);
  }
}

function* addSchedule({payload}) {
  try {
    const {date, client, boi, vaca, boiq, vacaq} = payload;
    const filtro = yield procurarAgendamento(client.id);
    if (filtro) {
      return Modal.show(() => (
        <Default
          cancel={false}
          title="✅"
          description="Este fornecedor ja possuir agendamento para esta data!!"
        />
      ));
    }
    database()
      .ref('abate/' + date)
      .set({
        id: date,
        boi: boiq - boi,
        vaca: vacaq - vaca,
      });
    database()
      .ref('schedules/' + date + client.id)
      .set({
        id: date,
        boiQ: boi,
        vacaQ: vaca,
        client: client.id,
        nameClient: client.name,
      });
    Modal.show(() => (
      <Default cancel={false} title="✅" description="AGENDADO COM SUCESSO!!" />
    ));
  } catch (error) {
    console.log(error);
    Modal.show(() => (
      <Default
        cancel={false}
        title="❌"
        description="ERRO AO REALIZAR AGENDAMENTO!!"
      />
    ));
  }
}

export default takeLatest<any>('schedules', addSchedule);
