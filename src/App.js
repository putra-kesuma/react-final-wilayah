import React from 'react';
import {Redirect} from "react-router-dom"

function App() {
    return (
        <div>
            <Redirect to="/welcome"/>
        </div>
    );
}

export default App;
