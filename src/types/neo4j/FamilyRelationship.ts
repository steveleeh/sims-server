import { Integer, Relationship } from 'neo4j-driver';

interface FamilyRelationshipProperties {
  relationship: string;
}

export type FamilyRelationship = Relationship<
  Integer,
  FamilyRelationshipProperties
>;
