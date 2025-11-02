import React from "react";
import { Box, Button, Container, Modal, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

const TaskAddCom = () => {
  const [taskcom, setIsOpen] = React.useState(false);
  const [task, setTask] = React.useState([]);

  const UploadTask = () => (e) => {
    e.preventDefault();

    let Newtodo =e.target.todotask.value;
    if (!task.includes(Newtodo)) {
      let finallist = [...task, Newtodo];
      setTask(finallist);
      localStorage.setItem("task", JSON.stringify([...task, Newtodo]));
    } else {
      alert("Task already added");
    }

    setIsOpen(false);
  };
  return (
    <Box>
      <Button
        type="button" data-testid="add-todo-button"
        variant="outlined"
        onClick={() => {
          setIsOpen(true);
        }}
        sx={{
          position: "absolute",
          right: "80px",
          top: "300px",
          borderRadius: "50%",
          minWidth: "0px",
          padding: "10px",
        }}
      >
        <Add />{" "}
      </Button>

        <Modal open={taskcom} onClose={() => { setIsOpen(false); }} >
        <Container
          sx={{
            width: "400px",
            height: "220px",
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
            background: "#ebf1ff",
            borderRadius: "8px",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={UploadTask()}
            style={{
              width: "400px",
              height: "220px",
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              border: "1px solid lightgray",
              borderRadius: "8px",
            }}
          >
            <h3>NEW TASK</h3>

            <TextField
            type="text"
            sx={{ height: "80px", marginTop: "0.5rem" }}
            variant="outlined"
            name="todotask"
            placeholder="Write your task"
            // onChange={(e) => { setTask(e.target.value); }}
            />

            <Box
            sx={{
                width: "370px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
            }}
            >
            <Button
                type="reset"
                onClick={() => {
                setIsOpen((prev) => !prev);
                }}
                variant="outlined"
                sx={{ marginTop: "0.9rem" }}
              >
                Cancel
            </Button>
                
            <Button
                type="submit"
                variant="outlined"
                sx={{ marginTop: "0.9rem" }}
            >
                Apply
            </Button>
            </Box>
        </form>
        </Container>
    </Modal>
    </Box>
  );
};

export default TaskAddCom;
