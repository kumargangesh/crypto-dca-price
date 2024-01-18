import React from 'react'

function ClearAllPrice(props) {
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
            <center><h1 style={textColor}>{props.name}</h1></center>
        </div>
    )
}


export default ClearAllPrice;