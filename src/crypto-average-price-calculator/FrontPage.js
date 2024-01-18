import React, { useEffect, useState } from 'react';
import "./Style.css";
import { Link } from "react-router-dom";

function FrontPage(props) {

  const [textColor, changeTextColor] = useState({color : "#bfa181"});  

  useEffect(() => {
    if(props.mode === true){
        console.log("state in frontPage : "+props.mode);
        changeTextColor({color : "#bfa181"});
    }else{
        console.log("state in frontPage : "+props.mode);
        changeTextColor({color : "rgb(12, 25, 37)"});
    }
  }, [props]);

  return (
    <div>
        <Link to="/enterNewValues"><button className="btn btn-outline-success btn2">Enter New Buy Price And Quantity</button></Link>
    </div>
  )
}

export default FrontPage;
