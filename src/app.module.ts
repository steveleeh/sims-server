import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { Neo4jModule } from 'nest-neo4j';
import { Neo4jConfig } from './config/neo4j.config';
import { ClanController } from './clan/clan.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './interceptor/response.interceptor';
import { ClanService } from './clan/clan.service';

@Module({
  imports: [Neo4jModule.forRoot(Neo4jConfig)],
  controllers: [AppController, CatsController, ClanController],
  providers: [
    AppService,
    ClanService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
