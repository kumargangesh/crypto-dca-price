import React, { useEffect, useState } from 'react';
import "./Style.css";
import DataNotLoaded from './DataNotLoaded';

function ShowAveragePrice(props) {
    const [textColor, changeTextColor] = useState({ color : "#bfa181"});
    const [prices, setPrices] = useState([]);
    const [quantities, setQuantities] = useState([]);

    useEffect(() => {
        if (props.mode === true) {
            changeTextColor({color : "#bfa181"});
            console.log("state in average price : " + props.mode);
        } else {
            changeTextColor({color : "black"});
            console.log("state in average price : " + props.mode);
        }
        if (props.priceArray.length > 0 && props.quantityArray.length > 0) {

            if(prices.length > 0 && quantities.length > 0){
                for(let i=0;i<props.priceArray.length;i++){
                    prices.pop();
                    quantities.pop();
                }
            }

            props.priceArray.map((price) => {
                prices.push(price);
            });
            props.quantityArray.map((quantity) => {
                quantities.push(quantity);
            });
            // setPrices(...prices, ...props.priceArray);
            // setQuantities(...quantities, ...props.quantityArray);
            console.log(prices + " " + quantities);
        } else {
            console.log("still don't get the arrays");
        }
    }, [props]);

    const totalPrice = () => {
        let priceSum = 0;
        for (let i = 0; i < prices.length; i++) {
            priceSum += (parseFloat(prices[i]));
        } return priceSum;
    }

    const totalQuantity = () => {
        let quantitySum = 0;
        for (let i = 0; i < quantities.length; i++) {
            quantitySum += (parseFloat(quantities[i]));
        } return quantitySum;
    }

    const getFullPrice = () => {
        let everyTotalPrice = 0;
        for (let i = 0; i < prices.length; i++) {
            everyTotalPrice += ((parseFloat(prices[i])) * (parseFloat(quantities[i])));
        }
        return (everyTotalPrice / totalQuantity());
    }

    return (
        <div>
            <center><h1 className="heading" style={textColor}>Crypto's Average Price...</h1></center>
            {
                prices.length > 0 && quantities.length > 0 ?
                    <div className="container" style={{backgroundColor : "rgb(12, 25, 37)"}}>
                        <u><center><h1>Average Price</h1></center></u>
                        <center><p>{getFullPrice()}</p></center>
                        <u><center><h1>Total Crypto Bought</h1></center></u>
                        <center><p>{totalQuantity()}</p></center>
                    </div>
                    :
                        <DataNotLoaded />
            }
        </div>
    )
}

export default ShowAveragePrice;