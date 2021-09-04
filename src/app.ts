import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { PingResolver } from "./resolvers/ping";
import { UserResolver } from "./resolvers/user";
const {
  generateGetUrl,
  generatePutUrl
} = require('./image-upload/server/AWSPresigner');


export async function startServer() {
 
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app, path: "/graphql" });

  app.get('/generate-get-url', (req, res) => {
    // Both Key and ContentType are defined in the client side.
    // Key refers to the remote name of the file.
    const { Key } = req.query;
    generateGetUrl(Key)
        .then((getURL: any) => {
          res.send(getURL);
        })
        .catch((err: any) => {
          res.send(err);
        });
  });

// PUT URL
  app.get('/generate-put-url', (req,res)=>{
    // Both Key and ContentType are defined in the client side.
    // Key refers to the remote name of the file.
    // ContentType refers to the MIME content type, in this case image/jpeg
    const { Key, ContentType } =  req.query;
    generatePutUrl(Key, ContentType).then((putURL: any) => {
      res.send({putURL});
    })
        .catch((err: any) => {
          res.send(err);
        });
  });

  app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
    console.log(`Listening on port 4000`);
  })
  return app;
}
