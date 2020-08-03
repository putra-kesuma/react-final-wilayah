import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import swal from 'sweetalert';
import {Link} from "react-router-dom";
import "../../assets/css/stylePageWelcome.css"
import bgWelcome from "../../assets/video/bg-welcome.mp4"
import {pageWelcome} from "../../utils/textPageWelcome";


const PageWelcome = () => {
    // let [redirect, setRedirect] = useState(false)
    //
    // const CallGetToken = () => {
    //     getToken()
    //         .then((response) => {
    //             if (response.data.code === 200) {
    //                 sessionStorage.setItem("token",
    //                     response.data.token);
    //                 setRedirect(true);
    //                 // console.log("respon token", response)
    //             } else {
    //                 swal("Token Tidak Ditemukan")
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             swal("error can't access server api")
    //         })
    // }
    //
    // if (redirect === true) {
    //     return <Redirect to='/peta'/>;
    // }
    return (
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={bgWelcome} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
            <div className="mycontent">
                <h1>WELCOME</h1>
                <div className="myparagraph">
                    <p>{pageWelcome.description}</p>
                </div>
                <br/>
                <h2>Yuk Pelajari Peta INDONESIA</h2>
                <Link to="/peta">
                    <button id="myBtn"
                            // onClick={() => {
                            //     CallGetToken()
                            // }}
                    >Mulai
                    </button>
                </Link>
                </div>

        </div>
    );
};

export default PageWelcome;