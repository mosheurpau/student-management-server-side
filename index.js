import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectDB from "./db.js";

// server setup
const server = new ApolloServer({
  // typeDefs
  // resolvers
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`Server ready at: ${url}`);
};

startServer();
