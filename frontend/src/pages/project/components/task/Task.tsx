import React, { useState } from "react";
import { TaskContainer } from "./styles";
import { Box, Tabs, Tab } from "@mui/material";
import TODO from "./TODO";
import AddIcon from '@mui/icons-material/Add';

const Task = () => {
  const [value, setValue] = useState<string>("Geral");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TaskContainer>
      <Box sx={{ width: "100%" }}>
        <Tabs
          onChange={handleChange}
          value={value}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab sx={{color: "#d2d2d2"}} value="Geral" label="Geral" />
          <Tab value="myTask" sx={{color: "#d2d2d2"}} label="Suas tarefas" />
        </Tabs>
      </Box>
      {value === "Geral" ? <TODO /> : <>Nothing</> }
      <div className="new">
        <AddIcon />
      </div>
    </TaskContainer>
  );
};

export default Task;
