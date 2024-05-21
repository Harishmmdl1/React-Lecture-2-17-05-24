import React from "react";
import FunctionComp from "./functionalComp";

const Main = () => {
    return(
        <div>
            <h1>THis is Main Section</h1>
                <p>Inside the Main section Functional Component will present</p>
                <FunctionComp />
                <p>Main section End's Here....</p>
        </div>
    )
}

export default Main;