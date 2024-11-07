import React from "react";


export default function Alert(props){
    const capitilaize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className="container">
            <div className={`alert alert-${props.alert.type}`}>
                {`${capitilaize(props.alert.type)} : ${props.alert.massage}`}
            </div> 
        </div>
    )
}