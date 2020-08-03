import React, {useState} from 'react'
import {

    Table,
    Sidebar,
} from 'semantic-ui-react'
import {connect} from "react-redux"
import ModalDetailProvinsi from "../modal/modalDetailProvinsi";
import {getKabupaten} from "../../services/api/apiKabupaten";
import swal from "sweetalert";


const SlideBottom = (props) => {
    const [search, setSearch] = useState(null)

    const [modalOpen, setModalOpen] = useState(false)

    const ModalOpen = () => {
        setModalOpen(true)
    }
    const ModalClose = () => {
        setModalOpen(false)
    }

    const searchSpace = (event) => {
        let keyword = event.target.value;
        setSearch(keyword)
    }
// eslint-disable-next-line
    const dataProvinsi = props.dataProvinsi.filter((data) => {
        if (search == null)
            return data
        else if (data.nama.toLowerCase().includes(search.toLowerCase())) {
            return data
        }
    }).map((value, index) => {
        return <Table.Row>
            <Table.Cell onClick={() => {
                props.onGetKabupaten(value.id)
                ModalOpen()
            }}>{value.nama}</Table.Cell>
        </Table.Row>
    })
    return (

        <Sidebar
            animation='scale down'
            direction='left'
            onHide={() => props.hide()}
            horizontal
            visible={props.visible}
        >
            <h3 style={{marginLeft:35,marginTop: 10, color: "white"}}>List Provinsi Indonesia</h3>
            <div className="ui icon input">
                <input style={{marginLeft:25}} type="text" placeholder="search ..."
                       onChange={(e) => searchSpace(e)}/>
                <i aria-hidden="true" className="search icon"></i>
            </div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name Provinsi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {dataProvinsi}
                </Table.Body>
            </Table>
            {/*ui modal for show data kota/kab*/}
            <ModalDetailProvinsi open={modalOpen}
                                 close={ModalClose}/>
        </Sidebar>

    )
}

const mapStateToProps = (state) => {
    return {dataProvinsi: state.rProvinsi.dataProvinsi}
};

//action for redux
const mapDispatchToProps = (dispatch) => {
    return {
        onGetKabupaten: (idProvinsi) => {
            // let catchToken = sessionStorage.getItem("token")
            getKabupaten(idProvinsi)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch({
                            type: "GETKABUPATEN",
                            data: response.data.kota_kabupaten,
                        })
                        console.log("response kabupaten", response)
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

export default connect(mapStateToProps, mapDispatchToProps)(SlideBottom)
