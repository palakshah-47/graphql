import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
/*
 schema is the mostly default value and so not necessary to define everytime,
 instead when try on the sandbox, start with lower case letter for specific type,
 for example, if type is starting with Uppercase, like Query then run in sandbox 
 with lower case letter as query
*/
const typeDefs = `#graphql
 schema {
    query: Query 
 }
  type Query {
    greeting: String
  }`;

const resolvers = {
  Query: {
    greeting: () => 'Hello, world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(` Server running at ${url}`);
