import React from 'react';
import SideBar from "./SideBar";

function Content(){
    return(
        <div className="content_wrapper">
            <SideBar/>
            <main>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
            </main>
        </div>
    )
}

export default Content;