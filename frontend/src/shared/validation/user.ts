import * as yup from "yup";

const schema = {
  name: yup
    .string()
    .required("O nome é obrigatorio!")
    .min(2, "O nome deve ter no minimo 2 caracteres!")
    .max(40, "O nove deve conter 40 caracters"),
  email: yup
    .string()
    .required("O email é obrigatorio!")
    .email("Email invalido!"),
};

export const userSchema = yup.object().shape({
  password: yup
    .string()
    .required("A senha é necessaria!")
    .min(5, "A senha deve ter no mínimo 5 caracteres")
    .max(20, "A senha deve ter no maxímo 20 caractes"),
    ...schema
});

export const updateUserSchema = yup.object().shape({
  ...schema
});
