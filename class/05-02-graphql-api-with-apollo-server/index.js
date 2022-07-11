// const { ApolloServer, gql } = require('apollo-server');
import {ApolloServer, gql} from 'apollo-server'  //최신버전의 import하는 방법 : 많은 라이브러리에서 원하는 파일만 호출하기때문에 더 효율적

// The GraphQL schema
const typeDefs = gql`
  type Query {
    aaa: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    aaa: () => {
        return 'Hello World! 반가워요34433'
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers, //shorthand 
});

server.listen(3000).then(({ url }) => {
  console.log("프로그램을 켜는데 성공했어요");
});