import React, { useEffect, useState } from 'react';
import "./Style.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import FrontPage from './FrontPage';
import EnterNewValues from './EnterNewValues';
import ShowAllValues from './ShowAllValues';
import ShowAveragePrice from './ShowAveragePrice';
import ShowAveragePriceAndQuantity from './ShowAveragePriceAndQuantity';
function Routing() {

    const [mode, toggleMode] = useState(false);
    const [navbarStyle, changeNavBarStyle] = useState({
        backgroundColor: "rgb(12, 25, 37)",
        color: "#bfa181"
    });
    const [price, addPrice] = useState([]);
    const [quantity, addQuantity] = useState([]);

    useEffect(() => {
        toggleSwitch();
    }, []);

    const toggleSwitch = () => {
        if (mode === true) {
            toggleMode(false);
            document.body.style.backgroundColor = "#F0FFFA";
            changeNavBarStyle({
                backgroundColor: "rgb(12, 25, 37)",
                color: "#bfa181"
            });
        } else if (mode === false) {
            toggleMode(true);
            document.body.style.backgroundColor = "rgb(12, 25, 37)";
            changeNavBarStyle({
                backgroundColor: "rgb(12, 25, 37)",
                color: "#bfa181"
            });
        }
        console.log("state : " + mode);
    }

    const clearAllPriceExceptFirst = () => {
        if(window.confirm("Are you sure want to remove prices and quantity") == true){
            if (price.length > 0 && quantity.length > 0) {
                const len = price.length
                console.log("in clearAllPriceExceptFirst, length : " + len);
                for (let i = 1; i < len; i++) {
                    price.pop();
                    quantity.pop();
                }
                alert("data successfully removed");
            } else {
                alert("their's no price and quantity releated data present");
            }
        }
    }

    const clearAllPrice = () => {
        if(window.confirm("Are you sure want to remove prices and quantity") == true){
            if (price.length > 0 && quantity.length > 0) {
                const len = price.length
                console.log("in clearAllPriceExceptFirst, length : " + len);
                for (let i = 0; i < len; i++) {
                    price.pop();
                    quantity.pop();
                }
                alert("data successfully removed");
            } else {
                alert("their's no price and quantity releated data present");
            }
        }
    }

    return (
        <BrowserRouter>
            <div className="navbar" style={navbarStyle}>
                <div className="title">
                    <p>Crypto Average Price Calculator</p>
                </div>
                <div className="mode">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleSwitch} />
                    </div>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-success dropDownName">Services</button>
                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <Link to="/enterNewValues"><li><button className="btn btn-outline-success">Enter Price And Quantity</button></li></Link>
                        <Link to="/showAllValues"><li><button className="btn btn-outline-success">Show All Values And Quantity</button></li></Link>
                        <Link to="/calculateAveragePrice"><li><button className="btn btn-outline-success">Calculate Average Price</button></li></Link>
                        <Link to="/showBoth"><li><button className="btn btn-outline-success">Show Average Price And Quantity</button></li></Link>
                        <li><button className="btn btn-outline-success" onClick={clearAllPriceExceptFirst}>Clear All Prices (Except Firt)</button></li>
                        <li><button className="btn btn-outline-success" onClick={clearAllPrice}>Clear All Prices</button></li>
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<FrontPage name="FrontPage" mode={mode} />} />
                <Route path="/enterNewValues" element={<EnterNewValues name="EnterNewValues" mode={mode} priceArray={price} quantityArray={quantity} />} />
                <Route path="/showAllValues" element={<ShowAllValues name="ShowAllValues" mode={mode} priceArray={price} quantityArray={quantity} />} />
                <Route path="/calculateAveragePrice" element={<ShowAveragePrice name="ShowAveragePrice" mode={mode} priceArray={price} quantityArray={quantity} />} />
                <Route path="/showBoth" element={<ShowAveragePriceAndQuantity name="ShowAveragePriceAndQuantity" mode={mode} priceArray={price} quantityArray={quantity} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;