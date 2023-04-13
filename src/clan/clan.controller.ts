import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { QueryResult } from 'neo4j-driver-core';
import { Neo4jService } from 'nest-neo4j/dist';
import { ErrorException } from 'src/excecption/error.exception';
import { ErrorCode } from 'src/types/common/ErrorCode';
import { PersonFamily } from 'src/types/neo4j/PersonFamily';

@Controller('clan')
export class ClanController {
  constructor(private readonly neo4jService: Neo4jService) {}

  @Get()
  async getHello(): Promise<any> {
    const res: QueryResult<PersonFamily> = await this.neo4jService.read(
      `MATCH (p1:Person)-[r:Family]->(p2:Person) RETURN p1, r, p2`,
    );
    return res.records.map((item) => item.get('r'));
    // return res;
  }

  @Get('/create')
  async add(): Promise<any> {
    const res: QueryResult<PersonFamily> = await this.neo4jService.read(
      `MATCH (p1:Person)-[r:Family]->(p2:Person) RETURN p1, r, p2`,
    );
    // throw new HttpException('Forbidden', HttpStatus.ACCEPTED);
    // throw new ErrorException(
    //   ErrorCode.PARAMS_VALIDATE_FAIL.code,
    //   ErrorCode.PARAMS_VALIDATE_FAIL.message,
    // );
    throw new Error('123');
    // return res.records.map((item) => item.get('r'));
    // return res;
  }
}
