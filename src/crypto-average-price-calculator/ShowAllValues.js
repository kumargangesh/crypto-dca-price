import React, { useEffect, useState } from 'react';
import SingleCryptoInfo from './SingleCryptoInfo';
import "./Style.css";
import DataNotLoaded from './DataNotLoaded';

function AllValues(props) {

    const [textColor, changeTextColor] = useState({ 
        color: "#bfa181",
        backgroundColor : "rgb(12, 25, 37)"
     });
    const [prices, setPrices] = useState([]);
    const [quantities, setQuantities] = useState([]);

    useEffect(() => {
        if (props.mode === true) {
            console.log("state in frontPage : " + props.mode);
            changeTextColor({ 
                color: "#bfa181",
                backgroundColor : "rgb(12, 25, 37)"
             });
        } else {
            console.log("state in frontPage : " + props.mode);
            changeTextColor({ 
                color: "#bfa181",
                backgroundColor : "rgb(12, 25, 37)"
             });
        }
        if (props.priceArray.length > 0 && props.quantityArray.length > 0) {
            setPrices([...prices, ...props.priceArray]);
            setQuantities([...quantities, ...props.quantityArray]);
        } else {
            console.log("in useState, still don't get arrays");
        }
    }, [props]);

    return (
        <div>
            <center><h1 style={textColor} className="heading">All Prices and Quantities</h1></center>
            {
                props.priceArray.length > 0 && props.quantityArray.length > 0 ?
                    props.priceArray.map((price, index) => {
                        const quantity = props.quantityArray[index];
                        return (
                            <div>
                                <SingleCryptoInfo price={price} quantity={quantity} mode={props.mode} />
                            </div>
                        )
                    })
                    :
                        <DataNotLoaded />
            }
        </div>
    )
}

export default AllValues;