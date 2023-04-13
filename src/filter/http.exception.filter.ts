import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
} from '@nestjs/common';
import { error } from 'console';
import { Request, Response } from 'express';
import { ErrorException } from 'src/excecption/error.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 自定义异常抛出
    if (exception instanceof ErrorException) {
      const status = exception.getStatus();
      response.status(status).json(exception.getResponse());
      return;
    }

    // HTTP异常抛出
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      response.status(status).json({
        statusCode: status,
        message: exception.message,
      });
      return;
    }

    // 其他异常抛出
    console.error(exception);
    response.status(200).json({
      statusCode: 500,
      message: '业务处理失败',
    });
  }
}
