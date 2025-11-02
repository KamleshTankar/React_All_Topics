import React, {useState} from 'react'
import { FormLabel, FormControlLabel, RadioGroup, Radio, InputAdornment, IconButton, Button, FormHelperText, TextField, 
  Box} from "@mui/material";
import { AccountCircle, EmailRounded, PhoneAndroidRounded, PasswordRounded, Visibility, VisibilityOff} from '@mui/icons-material';

const FormHandlingCom = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(firstname,lastname,number,email,gender,password);
    alert("clicked");
  }
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }} >
    <h2>Form Component</h2> 
      <form onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width: "600px", marginTop: "1rem", padding:"1rem" , border: "1px solid lightgray", borderRadius: "8px", }}
      >
        <Box sx={{ width: "500px", display: "flex", gap: "1rem" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              sx={{width:"210px"}} data-testid="first-name"
              label="First Name" onChange={(e)=>{setFirstName(e.target.value)}} type="text" variant="standard" />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              sx={{width:"210px"}} data-testid="last-name" label="Last Name" type="text"
              onChange={(e)=>{setLastName(e.target.value)}} variant="standard"
            />
          </Box>
        </Box>

        <Box sx={{ width: "500px", display: "flex", alignItems: "flex-end" }}>
          <PhoneAndroidRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            data-testid="number" sx={{ width: "500px" }} label="number"
            onChange={(e)=>{setNumber(e.target.value)}}  type="number" variant="standard"
          />
        </Box>

        <Box sx={{ width: "500px", display: "flex", alignItems: "flex-end" }}>
          <EmailRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            sx={{ width: "500px" }} data-testid="email" label="Email Address" type="email"
            onChange={(e)=>{setEmail(e.target.value)}} variant="standard" aria-describedby="my-helper-text"
          />
        </Box>
        <FormHelperText id="my-helper-text"> We'll never share your email. </FormHelperText>

        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{ width: "500px", fontWeight: "700" }}
        >
          Gender
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio-buttons-group-label"
          sx={{ display: "flex", width: "500px" }}
          onChange={(e) => {
            setGender(e.target.value);
          }}
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <Box sx={{ width: "500px", display: "flex", alignItems: "flex-end" }}>
          <PasswordRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="standard-password-input"
            sx={{ width: "500px" }}
            data-testid="password"
            label="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
            type={showpassword ? "text" : "password"}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="password-showhide-button"
                      onClick={() => setshowPassword((prev) => !prev)}
                    >
                      {showpassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            autoComplete="current-password"
            variant="standard"
          />
        </Box>

        <Button type="submit" variant="outlined" sx={{ marginTop: "0.9rem" }}> Submit </Button>
      </form>
    </div>
  );
}

export default FormHandlingCom