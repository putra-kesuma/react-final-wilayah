import React, {useEffect, useState} from 'react';
import {Button, Dimmer, Loader, Modal, Table} from "semantic-ui-react";
import {connect} from "react-redux"
import swal from "sweetalert";
import {getKecamatan} from "../../services/api/apiKecamatan";
import {Link} from "react-router-dom";


const ModalDetailProvinsi = (props) => {
    const [search, setSearch] = useState(null)

    const searchSpace = (event) => {
        let keyword = event.target.value;
        setSearch(keyword)
    }


    const dataKabupaten = props.dataKabupaten.filter((data) => {
        if (search == null)
            return data
        else if (data.nama.toLowerCase().includes(search.toLowerCase())) {
            return data
        }
    }).map((value, index) => {

        return <Table.Row>
            <Table.Cell>{value.id}</Table.Cell>
            <Table.Cell>{value.nama}</Table.Cell>
            <Table.Cell>
                <Link to="/kecamatan">
                    <button className="ui green icon button"
                            onClick={() => {
                                props.onGetKecamatan(value.id)
                            }}>
                        <i aria-hidden="true" className="write icon"></i>
                    </button>
                </Link>
            </Table.Cell>
        </Table.Row>

    })
    return (

        <Modal open={props.open} basic onClose={props.close}>
            <Modal.Header>List Nama Kota/Kabupaten</Modal.Header>
            <Modal.Content>
                <div className="ui icon input">
                    <input type="text" placeholder="search ..."
                           onChange={(e) => searchSpace(e)}/>
                    <i aria-hidden="true" className="search icon"></i>
                </div>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Nama Kota/Kabupaten</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {dataKabupaten}
                    </Table.Body>
                </Table>
            </Modal.Content>
            <Modal.Actions>
                <Button negative
                        onClick={() => {
                            props.close()
                        }}>Tutup</Button>
            </Modal.Actions>
        </Modal>
    );
};
//state from redux
const mapStateToProps = (state) => {
    return {dataKabupaten: state.rKabupaten.dataKabupaten}
};
//action redux
const mapDispatchToProps = (dispatch) => {
    return {
        onGetKecamatan: (idKabupatan) => {
            // let catchToken = sessionStorage.getItem("token")
            getKecamatan(idKabupatan)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch({
                            type: "GETKECAMATAN",
                            data: response.data.kecamatan,
                        })
                        console.log("response kecamatan", response)
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


export default connect(mapStateToProps, mapDispatchToProps)(ModalDetailProvinsi);