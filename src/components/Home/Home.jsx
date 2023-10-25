import React from "react";
import { Button } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const numRef = useRef()
  const navigate=useNavigate()
  const conNumb = () => {
    localStorage.setItem("cNumber", JSON.stringify(numRef.current.value));
    navigate("/game")
  }

  return (
    <div className="text-center mt-5">
      <div className="number ">
        <input
          type="number"
          placeholder="عدد الدول"
          style={{ padding: "10px", textAlign: "center" ,width:"auto"}}
          min={1}
          max={10}
          ref={numRef}
        />
        <Button variant="info" className="d-block m-auto mt-5"
        onClick={conNumb}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;
