import database from '@react-native-firebase/database';

export default function* GetLogin({user, password}) {
  try {
    const response = yield database()
      .ref('users/' + user + password)
      .once('value');

    if (response.toJSON() !== null) {
      return yield response.toJSON();
    }
  } catch (error) {
    return undefined;
  }
  return undefined;
}
