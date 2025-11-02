import React,{useEffect} from 'react'
import { Box, Checkbox, Typography, List, ListItem, IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const TaskCom = ({Bodytheam}) => {
  const [checked, setChecked] = React.useState(false);
  const [viewNote, setViewNote] = React.useState([]);


    const handleCheck = (index) => {
      setChecked((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
  };
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task")) || [];
    setViewNote(storedTasks);
  }, [viewNote]);

  return (
      <Box
        sx={{
          width: "800px",
          height: "300px",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          background: `${Bodytheam ? "#333333" : "#f5f5f5"}`,
        }}
      >
        {viewNote.length === 0 ? (
          <Typography
            variant="body1"
            align="center"
            sx={{ color: Bodytheam ? "white" : "gray", mt: 4 }}
          >
            No tasks yet. Add one to get started!
          </Typography>
        ) : (
          <List>
            {viewNote.map((note, index) => {
              const isChecked = checked[index] || false;
              return (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: Bodytheam ? "white" : "black",
                    textDecoration: isChecked ? "line-through" : "none",
                    borderBottom: "1px solid",
                    borderColor: Bodytheam ? "#555" : "#ddd",
                    py: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={isChecked} data-testid="checkbox"
                      onChange={() => handleCheck(index)}
                      color={Bodytheam ? "success" : "primary"}
                    />
                    <Typography variant="body1" data-testid="todo-note">{note}</Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    {!isChecked && (
                      <>
                        <IconButton
                          size="small"
                          color="info"
                          data-testid="edit-button"
                          // onClick={() => onEdit && onEdit(index, note)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          data-testid="delete-button"
                          // onClick={() => onDelete && onDelete(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    )}
                  </Box>
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
  );
}

export default TaskCom


