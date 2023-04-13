import { Controller, Get } from '@nestjs/common';
import { QueryResult, Result } from 'neo4j-driver';
import { Neo4jService } from 'nest-neo4j';
import { FamilyRelationship } from 'src/types/neo4j/FamilyRelationship';
import { PersonFamily } from 'src/types/neo4j/PersonFamily';

@Controller('cats')
export class CatsController {
  constructor(private readonly neo4jService: Neo4jService) {}

  @Get('/name')
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get()
  async getHello(): Promise<any> {
    const res: QueryResult<PersonFamily> = await this.neo4jService.read(
      `MATCH (p1:Person)-[r:Family]->(p2:Person) RETURN p1, r, p2`,
    );
    return res.records.map((item) => item.get('r'));
    // return res;
  }
}
