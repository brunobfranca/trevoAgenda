import database from '@react-native-firebase/database';

export default function* GetLogin({inscricao, password}) {
  try {
    let data = {};
    const response = yield database()
      .ref('users/' + inscricao + password)
      .once('value');
    const res = yield response;
    res.forEach(r => {
      data = r.toJSON();
    });
    if (data.length) {
      return yield response;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
}
