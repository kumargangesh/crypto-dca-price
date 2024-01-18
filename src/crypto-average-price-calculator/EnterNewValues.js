import React, { useEffect, useState } from 'react';
import "./Style.css";

function EnterValues(props) {

    const [textColor, changeTextColor] = useState({ color: "#bfa181" });
    const [containerBK, changeContainerBK] = useState({backgroundColor : "rgb(12, 25, 37)"});
    const [price, changePrice] = useState("");
    const [quantity, changeQuantity] = useState("");

    useEffect(() => {
        if(props.mode === true){
            console.log("state in frontPage : "+props.mode);
            changeTextColor({color : "#bfa181"});
            changeContainerBK({backgroundColor : "rgb(12, 25, 37)"});
        }else{
            console.log("state in frontPage : "+props.mode);
            changeTextColor({color : "rgb(12, 25, 37)"});
            changeContainerBK({backgroundColor : "rgb(12, 25, 37)"});
        }
      }, [props]);

      const checkEmptyInput =() => {
        if(price === "" && quantity === ""){
            alert("Enter bought price and quantity");
        }else if(price === ""){
            alert("enter bought price");
        }else if(quantity === ""){
            alert("enter quantity");
        }
      }

      const clearAll =() => {
        if(price !== "" && quantity !== ""){
            changePrice("");
            changeQuantity("");
            alert("values successfully cleared");
        }else{
            checkEmptyInput();
        }
      }

      const addValues =() => {
        if(price !== "" && quantity !== ""){
            console.log("after enter price : "+price+" quantity is : "+quantity);
            props.priceArray.push(parseFloat(price));
            props.quantityArray.push(parseFloat(quantity));
            changePrice("");
            changeQuantity("");
            alert("values successfully entered");
        }else{
            checkEmptyInput();
        }
      }

      const handlePrice =(event) => {
        changePrice(event.target.value);
      }

      const handleQuantity =(event) => {
        changeQuantity(event.target.value);
      }

    return (
        <div>
            <div className="container" style={containerBK}>
                <center><h3>Enter New Price & Quantity</h3></center>
                <input className="input" type="number" name="" id="" placeholder="Enter Bought Price" onChange={handlePrice} value={price} />
                <input type="number" name="" id="" placeholder="Enter the Quantity" onChange={handleQuantity} value={quantity} />
                <button className="btn btn-outline-success btn1" onClick={clearAll}>Clear All</button>
                <button className="btn btn-outline-success btn2" onClick={addValues}>Add Price And Quantity</button>
            </div>
        </div>
    )
}

export default EnterValues;
