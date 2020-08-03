import React, {useEffect, useState} from 'react';
import {getProvinsi} from "../../services/api/apiProvinsi";
import {connect} from 'react-redux'
import swal from "sweetalert";
import Peta from "../../components/peta";
import "../../assets/css/stylePagePeta.css"
import SlideBottom from "../../components/bottomBar/slideBottom";
import {Button} from "semantic-ui-react";


const PagePeta = (props) => {
    const [visible, setVisible] = useState(false)
    //load automaticaly show data provinsi like a component did mount
    useEffect(() => {
        props.onGet()
    }, [])

    const onHide = () => {
        setVisible(false)
    }
    //check token on session storage
    //  if (sessionStorage.getItem("token") === null) {
    //      return <Redirect to='/welcome'/>;
    //  }

    return (
        <div>
            <div className="containerPeta">
                <div>
                    <h2 style={{marginTop: 16, color: "white"}}>PETA WILAYAH INDONESIA</h2>
                </div>
                <div>
                    <Peta data-test="peta"/>
                </div>
                <div>
                    <Button onClick={() => setVisible(true)} basic color='white' content='Liat List Provinsi'/>
                    <SlideBottom visible={visible} hide={onHide}/>
                </div>
            </div>
        </div>
    );
};


//state from redux
const mapStateToProps = (state) => {
    return {dataProvinsi: state.rProvinsi.dataProvinsi}
};

//action from redux
const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => {
            // let catchToken = sessionStorage.getItem("token")
            getProvinsi()
                .then((response) => {
                    if (response.status === 200) {
                        dispatch({
                            type: "GETPROVINSI",
                            data: response.data.provinsi,
                        })
                        console.log("respone get provinsi", response)
                    } else {
                        swal("Can't Access, You Don't Have Token!!")
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagePeta);