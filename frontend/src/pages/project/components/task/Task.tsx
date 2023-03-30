import React, { useState } from "react";
import { TaskContainer } from "./styles";
import { Box, Tabs, Tab } from "@mui/material";
import TODO from "./components/TODO";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../../../components/modal/Modal";
import NewTask from "./components/NewTask";
import { ITask } from "../../../../shared/types/project";



const Task = () => {
  const [value, setValue] = useState<string>("Geral");
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [task, setTask] = useState<ITask[]>([])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleNewTaskModal() {
    setNewTaskModal((current) => (current ? false : true));
  }

  function handleNewTask(data: ITask){  
      setTask((current)=> [data, ...current])
    
  }

  return (
    <TaskContainer>
      <Modal open={newTaskModal} handleClose={handleNewTaskModal}>
        <NewTask handleNewTask = {handleNewTask} />
      </Modal>
      <Box sx={{ width: "100%" }}>
        <Tabs
          onChange={handleChange}
          value={value}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab sx={{ color: "#d2d2d2" }} value="Geral" label="Geral" />
          <Tab value="myTask" sx={{ color: "#d2d2d2" }} label="Suas tarefas" />
        </Tabs>
      </Box>
      {value === "Geral" ? <TODO /> : <>Nothing</>}
      <div className="new" onClick={handleNewTaskModal}>
        <AddIcon />
      </div>
    </TaskContainer>
  );
};

export default Task;
