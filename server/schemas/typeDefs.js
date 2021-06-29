//import the gql template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors: String
    description: String
    title: String
    link: String
    image: String
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(description: String, authors: String, title: String, bookId: ID!, link: String): User
    removeBook(bookId: ID!): User
}
type Auth {
    token: ID!
    user: User
}`
;

module.exports = typeDefs;