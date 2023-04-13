import { Integer, Node } from 'neo4j-driver';

interface PersonProperties {
  name: string;
  gender: string;
}

export type PersonNode = Node<Integer, PersonProperties>;
