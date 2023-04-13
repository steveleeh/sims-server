import { HttpException, HttpStatus } from '@nestjs/common';

export interface ErrorExceptionParams<T = any> {
  code: number;
  message: string;
  data?: T;
}

export class ErrorException<T = any> extends HttpException {
  constructor(statusCode: number, message: string, data?: T) {
    super(
      {
        statusCode,
        message,
        data,
      },
      HttpStatus.OK,
    );
  }
}
