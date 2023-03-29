import React, { useEffect, useRef } from "react";
import { useAuth } from "../../shared/hooks/auth";
import { Form } from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { signin, error } = useAuth();

  useEffect(() => {
    console.log(error);
  }, [error]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("submit")
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      await signin({ email, password });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="icon">
        <AccountCircleIcon color="secondary" />
        <h2>Sign in</h2>
      </div>
      <TextField fullWidth variant="filled" label="Email" inputRef={emailRef} />
      <TextField
        variant="filled"
        label="Password"
        type="password"
        fullWidth
        inputRef={passwordRef}
      />
      <FormControlLabel
        control={
          <Checkbox size="small" sx={{ fontSize: "0.3em" }} color="secondary" />
        }
        label="Manter-me logado"
        sx={{ alignSelf: "flex-start" }}
      />
      {error && <span>{error}</span>}
      <Button
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        color="secondary"
        size="large"
      >
        Enviar
      </Button>
      <Link to="/signup">Ainda não tem uma conta? Criar conta.</Link>
    </Form>
  );
};

export default Signin;
