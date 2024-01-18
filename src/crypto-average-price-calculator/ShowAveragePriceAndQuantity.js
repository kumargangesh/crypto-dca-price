import React, { useEffect, useState } from 'react';
import DataNotLoaded from './DataNotLoaded';
import AllValues from './ShowAllValues';
import ShowAveragePrice from './ShowAveragePrice';
import "./Style.css";


function ShowAveragePriceAndQuantity(props) {
    const [textColor, changeTextColor] = useState({ color: "#bfa181" });

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
            {
                props.priceArray.length > 0 && props.quantityArray.length > 0 ?
                    <div className="container container2" style={{backgroundColor : "rgb(12, 25, 37)"}}>
                        <ShowAveragePrice mode={props.mode} priceArray={props.priceArray} quantityArray={props.quantityArray}  />
                        <AllValues mode={props.mode} priceArray={props.priceArray} quantityArray={props.quantityArray} />
                    </div>
                :
                    <DataNotLoaded />
            }
        </div>
    )
}

export default ShowAveragePriceAndQuantity;
