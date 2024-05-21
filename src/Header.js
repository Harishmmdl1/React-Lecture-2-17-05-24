import React from "react";
import ClassComp from "./ClassComp";

class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>THis is Header Section</h1>
                <p>Inside the Header section Class Component will present</p>
                <ClassComp />
                <p>Header section End's Here....</p>
                

            </div>
        )
    }
}

export default Header;
