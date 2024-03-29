import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = emailAddress === "" || password === "";

  const handleSignin = (event) => {
    event.preventDefault();
  };

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>

        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            value={password}
            autocomplete="off"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign In
          </Form.Submit>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </HeaderContainer>
  );
}
