import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Project from "../components/Project";


function Dashboard(){

    return(
        <div>
            <Nav />
            <div>
            <Project />
            </div>
        </div>
    )
}

export default Dashboard;