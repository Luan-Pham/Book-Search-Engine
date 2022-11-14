import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $userID: ID!
    $authors: [String]!
    $title: String!
    $image: String!
    $link: String!
  ) {
    saveBook(author: $authors, title: $title, image: $image, link: $link) {
      authors
      title
      image
      link
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $userID: ID!
    $authors: [String]!
    $title: String!
    $image: String!
    $link: String!
  ) {
    removeBook(author: $authors, title: $title, image: $image, link: $link) {
      authors
      title
      image
      link
    }
  }
`;
