import { Integer, Node } from 'neo4j-driver';

interface ClanProperties {
  name: string;
}

/**
 * 家族
 */
export type ClanNode = Node<Integer, ClanProperties>;
