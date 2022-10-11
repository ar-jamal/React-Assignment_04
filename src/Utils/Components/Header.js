import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

export default function Header() {
    return (
        
        <div className="Header">
            <div className="Sub-header">
                <h1>Plumbing</h1>
                <div className="Tabs-div">
                    <Tabs
                        value={"value"}
                        onChange={"handleChange"}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Home" />
                        <Tab label="Contacts" />
                        <Tab label="Services" />
                        <Tab label="Plumber's Profile" />
                    </Tabs>
                </div>
            </div>
            <div className="Header-image">
                <img className="Image"
                    src="../../Utils/images/Accessories-1"
                />
                <div className="OnImage-text">
                    <h1>Copper Piping</h1>
                    <p>Details</p>
                </div>
            </div>
        </div>
    )
}

