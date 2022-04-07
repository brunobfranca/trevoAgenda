import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import {makeUseAxios, UseAxios} from 'axios-hooks';
import {Store, Action} from 'redux';
import Config from 'react-native-config';

export class Interceptor {
  store: Store<any, Action> = null;

  instance: AxiosInstance = null;

  useAxios: UseAxios = null;

  constructor() {
    this.instance = axios.create({
      baseURL: Config.ENDPOINT_APP,
      timeout: 40000,
    });
    this.useAxios = makeUseAxios({axios: this.instance});
  }

  interceptRequest = async (config: AxiosRequestConfig) => {
    // User authentication
    const {login} = this.store.getState();

    if (login.data) {
      config.headers.Authorization = `Bearer ${login.data}`;
    }

    // Perf monitoring
    // const httpMetric = perf().newHttpMetric(
    //   config.url,
    //   config.method.toUpperCase()
    // );
    // config.metadata = { httpMetric };
    // await httpMetric.start();

    return config;
  };

  interceptResponseSuccess = async (response: AxiosResponse) => {
    // const { httpMetric } = response.config.metadata;
    // httpMetric.setHttpResponseCode(response.status);
    // httpMetric.setResponseContentType(response.headers['content-type']);
    // await httpMetric.stop();

    return response;
  };

  interceptResponseError = async (error: AxiosError) => {
    // const { httpMetric } = error.config.metadata;
    // httpMetric.setHttpResponseCode(error.response.status);
    // httpMetric.setResponseContentType(error.response.headers['content-type']);
    // await httpMetric.stop();

    // Ensure failed requests throw after interception
    return Promise.reject(error);
  };

  configure = (store: Store<any, Action>) => {
    this.store = store;
    this.instance.interceptors.request.use(
      this.interceptRequest,
      Promise.reject,
    );
    this.instance.interceptors.response.use(
      this.interceptResponseSuccess,
      this.interceptResponseError,
    );
  };
}

const Axios = new Interceptor();

export const {useAxios, configure} = Axios;

export default Axios.instance;
