import React from "react";
import "./ChartBar.css";

const ChartBar = props => {

    let hightLabel = '0%';

    if(props.maxVal > 0 ){
        hightLabel = Math.round((props.value / props.maxVal) * 100) +'%';
    }
    console.log(hightLabel);

    return <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:hightLabel, backgroundColor:"red"}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
    </div>
};

export default ChartBar;