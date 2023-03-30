import React, { useContext } from "react";
import { Container, Form } from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TextField, Checkbox, Button, FormControlLabel, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "../../shared/validation/user";
import { useAuth } from "../../shared/hooks/auth";

const Signup = () => {
  const { handleAuth, error } = useAuth();

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  async function handleSubmit(values: {
    email: string;
    password: string;
    name: string;
  }) {
    await handleAuth(values, "/signup");
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => handleSubmit(values),
    validationSchema: userSchema,
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <div className="icon">
          <AccountCircleIcon color="secondary" />
          <h2>Sign up</h2>
        </div>
        <TextField
          variant="filled"
          label="Name"
          fullWidth
          id="name"
          color="warning"
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          onChange={formik.handleChange}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="filled"
          label="Email"
          fullWidth
          id="email"
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onChange={formik.handleChange}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="filled"
          label="Password"
          fullWidth
          id="password"
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          onChange={formik.handleChange}
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
        />
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              sx={{ fontSize: "0.3em" }}
              color="secondary"
            />
          }
          label="Manter-me logado"
          sx={{ alignSelf: "flex-start" }}
        />
        <input type="submit" />
        {error && <Typography color="error" >{error}</Typography>}
        <Link to="/signin">Já tem uma conta? Login.</Link>
      </Form>
    </Container>
  );
};

export default Signup;
