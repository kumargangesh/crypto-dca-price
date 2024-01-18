import React, { useState } from 'react';
import "./Style.css";

function DataNotLoaded() {

  const [textColor, setTextColor] = useState({ color : "#bfa181" });  
  const [divBK, setDivBK] = useState({ backgroundColor : "rgb(12, 25, 37)" });

  return (
    <div className="container" style={divBK}>
        <center><h1 className="heading" style={textColor}>Sorry, still no price and respective quantities present at this moment, please go back and enter the price and quantity</h1></center>
    </div>
  )
}

export default DataNotLoaded;
