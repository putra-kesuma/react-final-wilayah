import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from "../App";
import PageWelcome from "../views/welcome/pageWelcome";
import PagePeta from "../views/peta/pagePeta";
import PageKecamatan from "../views/kecamatan/pageKecamatan";
import PageKelurahan from "../views/kelurahan/pageKelurahan";

const Routes = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={App}/>
                <Route path="/welcome" component={PageWelcome}/>
                <Route path="/peta" component={PagePeta}/>
                <Route path="/kecamatan" component={PageKecamatan}/>
                <Route path="/kelurahan" component={PageKelurahan}/>

            </div>
        </Router>
    );
};

export default Routes;