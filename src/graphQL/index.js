import { gql } from 'apollo-server-express';
import {typeDefsQuery, resolversQuery} from './Query'
import {typeDefsMutation, resolversMutation} from './Mutation'

const typeUSer = `
    type User {
        id: String,
        firebase_id: String,
        name: String,
        surname: String,
        email: String,
        createdDate: String
    }
`

export const typeDefs = gql`
    ${typeUSer}
  ${typeDefsQuery}
  ${typeDefsMutation}
`;

export const resolvers = {
    Query: resolversQuery,
    Mutation: resolversMutation
};

export const root = {
    ...resolversQuery,
    ...resolversMutation
}