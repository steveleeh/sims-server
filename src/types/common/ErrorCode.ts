export interface IErrorCode {
  code: number;
  message: string;
}

/**
 * 请求错误码
 */
export const ErrorCode: Record<string, IErrorCode> = {
  /**
   * 参数校验错误
   */
  PARAMS_VALIDATE_FAIL: {
    code: 1001,
    message: '参数校验错误',
  },
};
