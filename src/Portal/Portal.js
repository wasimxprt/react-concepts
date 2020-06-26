import React from 'react';
import ReactDOM from "react-dom"

function Portal(props) {
    return ReactDOM.createPortal (
        <div>
            <h1>React Portal</h1>
        </div>
    ,document.getElementById("portal-root"));
}

export default Portal;