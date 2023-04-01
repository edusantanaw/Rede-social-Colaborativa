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

interface props {
  currentInfos: IUser;
  handleCreate: (data: any) => void;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const EditPerfil = ({ currentInfos, handleCreate }: props) => {
  const [image, setImage] = useState<File | null>(null);
  const [prevImage, setPrevImage] = useState<string | undefined>();
  const { user } = useAuth();

  const bioRef = useRef<HTMLInputElement | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    console.log(files);
    const reader = new FileReader();
    if (files) {
      for (let item of files) {
        setImage(item);
        reader.readAsDataURL(item);
        reader.onloadend = () => {
          setPrevImage(reader.result?.toString());
        };
      }
    }
  }

  const handleSubmit = async (values: { email: string; name: string }) => {
    console.log("ola");
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
    handleCreate(response.data);

    localStorage.setItem(userKey, JSON.stringify(response.data));
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
          label="Nome"
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
          ref={bioRef}
        />
      </ThemeProvider>
      <input type="submit" />
    </UppdateContainer>
  );
};

export default EditPerfil;
