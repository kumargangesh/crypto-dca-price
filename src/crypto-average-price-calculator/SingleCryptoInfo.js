import React, { useEffect, useState } from 'react';
import "./Style.css";

function SingleCryptoInfo(props) {

  const [containerStyle, changeStyle] = useState({
    backgroundColor : "rgb(12, 25, 37)",
    color : "#bfa181",
    padding : "1%"
  });  

  return (
    <div className="container" style={containerStyle}>
        <u><center><h1>Bought Price</h1></center></u>
        <center><p>{props.price}</p></center>
        <u><center><h1>Received Quantity</h1></center></u>
        <center><p>{props.quantity}</p></center>
    </div>
  )
}

export default SingleCryptoInfo;