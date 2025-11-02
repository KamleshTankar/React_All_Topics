import React from 'react'
import TaskCom from '../Todo List/components/TaskCom';
import TaskAddCom from '../Todo List/components/TaskAddCom';
import { Box, Container, TextField, Button, Select, FormControl, MenuItem } from '@mui/material';

const TodoListCom = () => {
  const [todofilter, setTodoFilter] = React.useState('');
  const [bodytheam, setBodyTheam] = React.useState(false);

  const handleChange = (event) => {
    setTodoFilter(event.target.value);
  };



  return (
    <>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Todo List</h2>
      <Container sx={{ width:"800px", height:"400px", background:`${bodytheam ?"black":"white"}`, display:"flex", flexDirection:"column", alignItems:"center", position:"relative", gap:"1rem", marginTop:"1rem", border: "1px solid lightgray"}}>
        <Box data-testid="todo-list" sx={{ width: "800px", height: "60px", background:`${bodytheam ? "white" :""}`, border: "1px solid lightgray", borderRadius: "8px", padding: "0.5rem" }}>  
          <TextField type='text' sx={{ width: "70%", marginBottom: "1rem" }} variant="outlined" placeholder='Search your task' />
          <FormControl sx={{ minWidth: 120, marginBottom: "1rem" }}>
  <Select labelId="demo-simple-select-label" id="demo-simple-select"
    value={todofilter} onChange={handleChange}>
    <MenuItem value="All">All</MenuItem>
    <MenuItem value="Completed">Completed</MenuItem>
    <MenuItem value="Incompleted">Incompleted</MenuItem>
  </Select>
          </FormControl>
          <Button type="button" variant="outlined" onClick={()=>{setBodyTheam((prev)=>!prev)}} sx={{ marginBottom: "1rem" }}>
            {bodytheam ? "light":"dark" }</Button>
        </Box>
        <TaskCom Bodytheam={bodytheam} />
        <TaskAddCom />
      </Container>
    </>
  )
}

export default TodoListCom