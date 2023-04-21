import React from 'react'
import { defaults, } from 'react-chartjs-2'
import { useState } from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import RadarChart from './RadarChart'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Typography from '@mui/material/Typography';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

export const Homepage = () => {

  const [message, setMessage] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [newMess, setNew] = useState([]);
  const [updated, setUpdated] = useState(message);
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCli = (event) => {
    setTitle(event.target.value)
  }

  const handleClick = () => {

    setUpdated(message);
    setNew([title, message]);


  };

  return (
    <div className='DigEdit'
      style={{

        scrollBehavior: "smooth",

      }}>

      <ul>
        <Box sx={{ p: 1, backgroundColor: 'primary.main' }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'light', color: 'white' }}>Welcome to DigEdit</Typography>
          
          <Typography variant="body" component="hgroup" sx={{ fontWeight: 'light', color: 'white' }}>A visualization application for editing and viewing discussion graphs</Typography>
        </Box>
        <br></br><br></br>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'light' }}>Please enter the title for the y-axis</Typography>
        <input
          type="text"
          id="title"
          name="title"
          placeholder='Sales(in millions)'
          onChange={handleCli}

        />
        <br></br>
        <br></br>
        <Typography variant="h4" component="h3" sx={{ fontWeight: 'light' }}>Please enter in the format: (name,data) separated by ";"</Typography>
        <form>
          <TextareaAutosize
            aria-label="text area data entry"
            placeholder="(Toast, 23);(Meat,78);(Salad, 12);(Biscuit, 34);(Cake, 45);(Cookie, 69)" style={{
              maxHeight: '500px',
              minHeight: '250px',
              minWidth: '1000px',
              resize: 'none',
              padding: '9px',
              boxSizing: 'border-box',
              fontSize: '15px'
            }} onChange={handleChange} />



        </form>

        <Button variant="contained" size="large" onClick={handleClick} >Submit</Button>
        <br></br>
        <FormControl sx={{ m: 1, minWidth: 135 }}>
          <InputLabel id="select-label">Select Graph</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={selectValue}
            label="Graph Type"
            onChange={onChange}
          >
            <MenuItem value="BarChart">Bar Chart</MenuItem>
            <MenuItem value="LineChart">Line Chart</MenuItem>
            <MenuItem value="PieChart">Pie Chart</MenuItem>
            <MenuItem value="RadarChart">Radar Chart</MenuItem>
          </Select>
        </FormControl>
      </ul>

      {(selectValue === "BarChart") && <BarChart name={newMess} />}
      {(selectValue === "LineChart") && <LineChart name={newMess} />}
      {(selectValue === "PieChart") && <PieChart name={newMess} />}
      {(selectValue === "RadarChart") && <RadarChart name={newMess} />}

    </div>

  );

}

export default Homepage
