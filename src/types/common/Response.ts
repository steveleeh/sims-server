export interface Response<T> {
  /**
   * 状态码
   */
  code: number;
  /**
   * 数据内容
   */
  data: T;
  /**
   * 错误信息
   */
  errorMsg?: string;
}
