import React from 'react';
import {connect} from "react-redux";
import swal from "sweetalert";
import {getKelurahan} from "../../services/api/apiKelurahan";
import {Link} from "react-router-dom";

const KecamatanCards = (props) => {


    return (
        <div className="column">
            <div className="ui card">
                <div className="content">
                    <div className="header center aligned">Nama Kecamatan<br/>
                        {props.sendValue.nama}
                    </div>
                </div>
                <div className="extra content">
                </div>
                <div className="center aligned">
                    <Link to="/kelurahan">
                        <button style={{marginBottom: 20}}
                                className="ui green icon button"
                                onClick={() => {
                                    props.onGetKelurahan(props.sendValue.id)
                                }}>
                            <i aria-hidden="true" className="write icon"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        onGetKelurahan: (idKecamatan) => {
            // let catchToken = sessionStorage.getItem("token")
            getKelurahan(idKecamatan)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch({
                            type: "GETKELURAHAN",
                            data: response.data.kelurahan,
                        })
                        console.log("response kelurahan", response)
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

export default connect(null, mapDispatchToProps)(KecamatanCards);