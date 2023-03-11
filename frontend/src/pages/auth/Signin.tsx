import React, { useEffect, useRef } from "react";
import { useAuth } from "../../hooks/auth";
import { Form } from "./styles";

const Signin = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { signin, error } = useAuth();

  useEffect(() => {
    console.log(error);
  }, [error]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      await signin({ email, password });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" ref={emailRef} />
      </div>
      <div className="">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
        />
      </div>
      {error && <span>{error}</span>}
      <input type="submit" />
    </Form>
  );
};

export default Signin;
