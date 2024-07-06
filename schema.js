export const typeDefs = `#graphql
type Student {
  id: ID!
  name: String!
  age: Int!
  gender: String!
  state: String!
  city: String!
  agreed: Boolean!
}

type Query {
  students: [Student]
  student(id: ID!): Student
}
`;
