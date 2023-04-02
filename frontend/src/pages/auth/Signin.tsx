import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Checkbox, createTheme, FormControlLabel, TextField, ThemeProvider } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../shared/hooks/auth";
import { Container, Form } from "./styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Signin = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const rememberRef = useRef<HTMLInputElement | null>(null);

  const { handleAuth, error } = useAuth();

  useEffect(() => {
    console.log(error);
  }, [error]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const remember = rememberRef.current!.checked;
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      await handleAuth({ email, password, remember }, "/signin");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ThemeProvider theme={darkTheme}>
          <div className="icon">
            <AccountCircleIcon color="secondary" />
            <h2>Sign in</h2>
          </div>
          <TextField
            fullWidth
            variant="filled"
            label="Email"
            color="secondary"
            inputRef={emailRef}
          />
          <TextField
            variant="filled"
            label="Password"
            type="password"
            color="secondary"
            fullWidth
            inputRef={passwordRef}
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{ fontSize: "0.3em" }}
                color="secondary"
                inputRef={rememberRef}
              />
            }
            label="Manter-me logado"
            sx={{ alignSelf: "flex-start" }}
          />
          {error && <span>{error}</span>}
          <input type="submit" />
          <Link to="/signup">Ainda não tem uma conta? Criar conta.</Link>
        </ThemeProvider>
      </Form>
    </Container>
  );
};

export default Signin;
