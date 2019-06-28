import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin: 35% auto;
  width: 50%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  input {
    margin: 0 auto;
    text-decoration: underline;
    line-height: 2rem;
  }
`;

const signup_element = (
  <Form>
    <label>Full name</label>
    <input type="text" placeholder="fullname" />
    <label>Email</label>
    <input type="text" placeholder="email" />
    <label>Birthday</label>
    <input type="text" placeholder="birthday" />
    <label>Address</label>
    <input type="text" placeholder="address" />
    <label>Password</label>
    <input type="text" placeholder="password" />
    <label>Verify Password</label>
    <input type="text" placeholder="verify password" />

    <input type="submit" />
  </Form>
);

class SignUp extends Component {
  render() {
    return signup_element;
  }
}

export default SignUp;
