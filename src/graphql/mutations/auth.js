import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      message
      user {
        id
        name
        email
        role
        image
      }
    }
  }
`;



export const SIGN_UP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!, $imageUrl: String!) {
    signUp(name: $name, email: $email, password: $password, imageUrl: $imageUrl) 
  }
`;

export const OTP_VERIFY = gql`
  mutation OtpVerify($email: String!, $otp: String!) {
    otpVerify(email: $email, otp: $otp)
  }
`;