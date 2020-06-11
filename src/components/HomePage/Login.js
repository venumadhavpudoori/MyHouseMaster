import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "../../libs/hooksLib";
import "./Login.css";

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login" id="login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" size="lg">
          <Form.Label>Email</Form.Label>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" size="lg">
          <Form.Label>Password</Form.Label>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          size="lg"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </form>
    </div>
  );
}
