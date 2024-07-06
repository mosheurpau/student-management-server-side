import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectDB from "./db.js";
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    async students() {
      const db = await connectDB();
      return db.collection("students").find().toArray();
    },
    async student(_, args) {
      const db = await connectDB();
      return db.collection("students").findOne({ id: args.id });
    },
  },
};

// Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`Server ready at: ${url}`);
};

startServer();
