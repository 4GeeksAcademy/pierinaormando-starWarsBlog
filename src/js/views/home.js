import React from "react";

import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/Vehicles";


export const Home = () => {
    return (
        <div className=" container-fluid container-home" >
            <div className="container">
                <Characters />
                <Planets />
                <Vehicles />
            </div>
        </div>
    )
}