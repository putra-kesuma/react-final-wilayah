import React, {useEffect, useState} from 'react';
import {Header, Pagination} from "semantic-ui-react";
import {Link} from "react-router-dom";
import TableListKelurahan from "../../components/tables/tableListKelurahan";
import {connect} from "react-redux";

const PageKelurahan = (props) => {
    let [kelurahanDatas, setKelurahanDatas] = useState([])
    let [begin, setBegin] = useState([0])
    let [end, setEnd] = useState([19])


    useEffect(() => {
        setKelurahanDatas(props.dataKelurahan.slice(begin, end))
    }, [props.dataKelurahan, begin])

    return (
        <div>
            <Header as='h1' block>
                <div className="ui secondary menu">
                    <h2 className="item">Daftar Nama Kelurahan</h2>
                    <Link className="item" to="/peta">Home</Link>
                </div>
            </Header>
            <div className="ui container">
                <TableListKelurahan kelurahanDatas={kelurahanDatas}/>
                <Pagination
                    style={{marginTop:20}}
                    defaultActivePage={1}
                    totalPages={Math.ceil(props.dataKelurahan.length / 20)}
                    onPageChange={(event, data) => {
                        console.log("data active", data.activePage)
                        setBegin(data.activePage * 20 - 20)
                        setEnd(data.activePage * 20)
                        setKelurahanDatas(props.dataKelurahan.slice(begin, end))
                    }}
                />
            </div>

        </div>
    );
};

//state from redux
const mapStateToProps = (state) => {
    return {dataKelurahan: state.rKelurahan.dataKelurahan}
};

export default connect(mapStateToProps, null)(PageKelurahan);