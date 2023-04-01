import AddIcon from "@mui/icons-material/Add";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Modal from "../../../../components/modal/Modal";
import { ITask } from "../../../../shared/types/project";
import NewTask from "./components/NewTask";
import Geral from "./components/Geral";
import { TaskContainer } from "./styles";
import MyTask from "./components/MyTask";

const Task = () => {
  const [value, setValue] = useState<string>("Geral");
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [task, setTask] = useState<ITask | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleNewTaskModal() {
    setNewTaskModal((current) => (current ? false : true));
  }

  function handleNewTask(data: ITask) {
    setTask(() => data);
    handleNewTaskModal();
  }

  return (
    <TaskContainer>
      <Modal open={newTaskModal} handleClose={handleNewTaskModal}>
        <NewTask handleNewTask={handleNewTask} />
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
      {value === "Geral" ? <Geral newTask={task} /> : <MyTask newTask={task} />}
      <div className="new" onClick={handleNewTaskModal}>
        <AddIcon />
      </div>
    </TaskContainer>
  );
};

export default Task;
