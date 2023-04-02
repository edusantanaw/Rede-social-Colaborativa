import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Checkbox,
  createTheme,
  FormControlLabel,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useAuth } from "../../shared/hooks/auth";
import { userSchema } from "../../shared/validation/user";
import { Container, Form } from "./styles";
import { useRef } from "react";
import Austronaut from "../../components/animations/Austronaut";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#d84f53",
    },
  },
});

const initialValues = {
  email: "",
  name: "",
  password: "",
};

const Signup = () => {
  const { handleAuth, error } = useAuth();

  const rememberRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(values: {
    email: string;
    password: string;
    name: string;
  }) {
    const remember = rememberRef.current!.checked;
    await handleAuth({ ...values, remember }, "/signup");
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => handleSubmit(values),
    validationSchema: userSchema,
  });

  return (
    <Container>
      <Austronaut w="40%" />
      <Form onSubmit={formik.handleSubmit}>
        <ThemeProvider theme={darkTheme}>
          <div className="icon">
            <AccountCircleIcon color="secondary" />
            <h2>Sign up</h2>
          </div>
          <TextField
            variant="filled"
            label="Name"
            fullWidth
            color="secondary"
            id="name"
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
                inputRef={rememberRef}
              />
            }
            label="Manter-me logado"
            sx={{ alignSelf: "flex-start" }}
          />
          <input type="submit" />
          {error && <Typography color="error">{error}</Typography>}
          <Link to="/signin">Já tem uma conta? Login.</Link>
        </ThemeProvider>
      </Form>
    </Container>
  );
};

export default Signup;
