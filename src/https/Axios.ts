import axios from 'axios';
import type { RequestOptions } from './axiosType';
import type { AxiosRequestConfig, AxiosInstance } from 'axios';

export class VAxios {
  axiosInstance: AxiosInstance;
  private readonly options: AxiosRequestConfig;
  constructor(options: AxiosRequestConfig) {
    this.options = options;
    this.axiosInstance = axios.create(options);
  }
  /**
   * @description:  创建axios实例
   */
  private createAxios(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }
  /**
   * @description:  获取axios实例
   */
  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }
}
