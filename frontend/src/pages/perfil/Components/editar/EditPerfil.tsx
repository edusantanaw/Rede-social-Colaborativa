import React, { useRef, useState } from "react";
import { IUser } from "../../../../shared/types/user";
import { formatImage } from "../../../../shared/utils/formatImage";
import ImageIcon from "@mui/icons-material/Image";
import { UppdateContainer } from "./styles";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import { useFormik } from "formik";
import { updateUserSchema } from "../../../../shared/validation/user";
import { Api } from "../../../../shared/utils/api";
import { useAuth } from "../../../../shared/hooks/auth";
import { makeOptions } from "../../../../shared/utils/makeOptions";
import { userKey } from "../../../../constants/keys";
import { usePrevImage } from "../../../../shared/hooks/usePrevImage";

interface props {
  currentInfos: IUser;
  handleCreate: (data: IUser) => void;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const EditPerfil = ({ currentInfos, handleCreate }: props) => {
  const { user } = useAuth();

  const bioRef = useRef<HTMLInputElement | null>(null);

  const { handleImageChange, image, prevImage } = usePrevImage();

  const handleSubmit = async (values: { email: string; name: string }) => {
    const bio = bioRef.current!.value;
    const formData = new FormData();
    image && formData.append("image", image);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("bio", bio);
    const response = await Api.put<IUser>(
      `/user/${user?.id}`,
      formData,
      makeOptions()
    );
    localStorage.setItem(userKey, JSON.stringify(response.data));
    handleCreate(response.data);
  };

  const formik = useFormik({
    initialValues: {
      name: currentInfos.name,
      email: currentInfos.email,
      bio: currentInfos.bio,
    },
    onSubmit: async (values) => await handleSubmit(values),
    validationSchema: updateUserSchema,
  });

  return (
    <UppdateContainer onSubmit={formik.handleSubmit} className="modal">
      <div className="img">
        <img
          src={prevImage ?? formatImage(currentInfos.perfilPhoto)}
          id="user_image"
          alt="userPhoto"
        />
        <div className="file">
          <label htmlFor="image">
            <ImageIcon /> Image
          </label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
      </div>
      <ThemeProvider theme={darkTheme}>
        <TextField
          variant="filled"
          color="secondary"
          label="Nome"
          id="name"
          fullWidth
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          onChange={formik.handleChange}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="filled"
          color="secondary"
          label="Email"
          id="email"
          fullWidth
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onChange={formik.handleChange}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
        />
        <TextField
          variant="filled"
          color="secondary"
          label="Bio"
          id="bio"
          defaultValue={currentInfos.bio}
          inputRef={bioRef}
        />
      </ThemeProvider>
      <input type="submit" />
    </UppdateContainer>
  );
};

export default EditPerfil;
