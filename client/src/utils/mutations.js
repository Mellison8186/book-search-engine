import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($description: String, $authors: [String] $title: String, $bookId: String, $link: String) {
    saveBook(description: $description, authors: $authors, title: $title, bookId: $bookId, link: $link) {
        _id
    username
    email
    bookCount
    savedBooks {
        bookId
        authors
        description
        title
        link
        image
    }
    }
}`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            link
            image
        }
    }
}`;