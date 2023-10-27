import React, { useRef, useState } from "react";
import "./popup.css";
const Popup = ({ closeBtn ,onTextChange,setText}) => {
    const textRef = useRef()
    const handlText = () => {
        setText(textRef.current.value)
        closeBtn()
        onTextChange(textRef.current.value);
        setText(textRef.current.value)
    }
  return (
    <div className="outer-popup">
      <div className="inner-popup ">
              <div className="form ">
                  <div className="colose-btn" onClick={closeBtn}>x</div>
          <input ref={textRef} type="text" placeholder="أكتب شيئا" className="text-center"/>
          <input type="button" value="تـــم" className="done" onClick={handlText}/>
        </div>
      </div>
    </div>
  );
};

export default Popup;
