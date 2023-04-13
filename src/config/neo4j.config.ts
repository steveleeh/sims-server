import { Neo4jConnection } from 'nest-neo4j/dist';

const Neo4jConfig: Neo4jConnection = {
  scheme: 'neo4j',
  host: 'localhost',
  port: 7687,
  username: 'neo4j',
  password: '123456789',
};

export { Neo4jConfig };
