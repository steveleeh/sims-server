import { Dict } from 'neo4j-driver-core/types/record';
import { FamilyRelationship } from './FamilyRelationship';
import { PersonNode } from './PersonNode';

export interface PersonFamily extends Dict {
  p1: PersonNode;
  r: FamilyRelationship;
  p2: PersonNode;
}
