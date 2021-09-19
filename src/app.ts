import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { PingResolver } from "./resolvers/ping";
import { UserResolver } from "./resolvers/user";
import { Error } from "aws-sdk/clients/s3";
const cors = require('cors');


export async function startServer() {
 
  const app = express();
  app.use(cors());
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });
  
  const {
    generateGetUrl,
    generatePutUrl
    } = require('./aws-file-upload/AWSPresigner');
    // GET URL
  app.get('/generate-get-url', (req, res) => {
    // Both Key and ContentType are defined in the client side.
    // Key refers to the remote name of the file.
    const { Key } = req.query;
    generateGetUrl(Key)
      .then((getURL:any) => {      
        res.send(getURL);
      })
      .catch((err:any) => {
        res.send(err);
      });
  });

  // PUT URL
  app.get('/generate-put-url', (req,res)=>{
    // Both Key and ContentType are defined in the client side.
    // Key refers to the remote name of the file.
    // ContentType refers to the MIME content type, in this case image/jpeg
    const { Key, ContentType } =  req.query;
    generatePutUrl(Key, ContentType).then((putURL :any) => {
      res.send({putURL});
    })
    .catch((err: any) => {
      res.send(err);
    });
  });
  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
