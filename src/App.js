import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTheValue, deleteTheValue, editTheValue, removeAll } from "./action/Crud";
import { Button, TextField } from "@mui/material";


function App() {
  const [inputData, setInputData] = useState("");
  const myState = useSelector((state) => state.chnageTheNumber.list);
  const dispatch = useDispatch();

  const addClick = () => {
    if (inputData !== "") {
      dispatch(addTheValue(inputData));
      setInputData("");
    } else {
      alert("plz insert the value...");
    }
  };
   
  return (
    <>
      <div className="App">
        <TextField
          color="info"
          focused
          required
          label="Required"
          style={{ height: "30px" }}
          type="text"
          placeholder="write something..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />

        <Button
          variant="contained"
          color="success"
          style={{ margin: "2px", height: "48px" }}
          // onClick={() => dispatch(addTheValue(inputData), setInputData(""))}
          onClick={() => addClick()}
        >
          Add
        </Button>
      </div> 

      <div>
        {myState &&
          myState.length > 0 &&
          myState.map((elem, index) => {
            return (
              <div className="App">
                <h3>
                <label style={{color:"green"}}>
                  {elem.data}

                </label>
                {/* <Badge color="blue">

                </Badge> */}

                  <Button
                    variant="outlined"
                    
                    color="error"
                    style={{ color: "red", margin: "4px",  }}
                    onClick={() => dispatch(deleteTheValue(elem.id))}
                  >
                    Delete
                  </Button>

                  {/* <Button
                    variant="outlined"
                    color="success"
                    style={{ color: "green", margin: "4px",verticalAlign:"top" }}
                    onClick={() =>  dispatch(editTheValue(elem.id))}
                  >
                    Edit
                  </Button> */}
                </h3>
              </div>
            );
          })}
        <div className="App">
          <Button
            variant="contained"
            color="warning"
            style={{ color: "black", margin: "4px" }}
            onClick={() => dispatch(removeAll())}
          >
            RemoveAll
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
