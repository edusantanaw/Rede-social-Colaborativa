import React from "react";
import { NewTaskModal } from "./styles";
import { TextField } from "@mui/material";

const NewTask = () => {
  return (
    <NewTaskModal>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </NewTaskModal>
  );
};

export default NewTask;
