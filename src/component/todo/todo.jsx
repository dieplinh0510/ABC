import React, { useContext, useReducer } from "react";
import reducer, { initState } from "../../reducer/reducer";
import { addJob, deleteJob, setJob } from "../../reducer/actions";
import ListJob from "./ListTodo/listJob";
import { ThemeContext } from "../../store/ThemeContext";
import { toast } from "react-toastify";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/material/IconButton/IconButton";
import SendIcon from "@mui/material/IconButton/IconButton";
import BasicRating from "../material-ui/Rating";

import { Link } from 'react-router-dom'

// 1. Init state
// 2. Define actions
// 3. Viết reducer ứng với các action bên trên
// 4. Thực hiện dispatch các action tương ứng

const TodoApp = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const context = useContext(ThemeContext);
  console.log(context);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value === "") {
        toast("Cần nhập thông tin job!");
      } else {
        dispatch(addJob(e.target.value));
      }
    }
  };

  return (
    <>
      <div className={context.theme} style={{ padding: "0 20px" }}>
        <h3 className="text-lg font-bold text-red-500  border-solid border-red-50 border-2">
          Todo app
        </h3>
        <button
          onClick={context.toggleTheme}
          className="block border-red-100 border-2"
        >
          Change Theme
        </button>
        <input
          className="border-red-100 border-2 mr-10"
          type="text"
          placeholder="Enter todo"
          value={job}
          onChange={(e) => dispatch(setJob(e.target.value))}
          onKeyDown={(e) => onKeyDownHandler(e)}
        />
        <button
          className="border-red-100 border-2 px-10 rounded-md"
          onClick={() => {
            if (job !== "") {
              dispatch(addJob(job));
            } else {
              toast("Cần nhập thông tin job!");
            }
          }}
        >
          Add
        </button>

        <ListJob jobs={jobs} dispatch={dispatch} />

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button
            onClick={() => {
              alert("clicked");
            }}
          >
            Click me
          </Button>

          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>

        {/* <BasicRating /> */ }
        
        <div style={{marginTop: '100px'}}>
          <Link to="/counter">To Couter App</Link>
        </div>
      </div>
    </>
  );
};

export default TodoApp;

// https://mui.com/material-ui/react-autocomplete/
