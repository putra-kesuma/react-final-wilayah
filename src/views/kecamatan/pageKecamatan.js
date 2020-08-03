import React, {useState, useEffect} from 'react';
import {Header, Pagination} from "semantic-ui-react"
import {connect} from "react-redux"
import KecamatanCards from "../../components/cards/kecamatanCards";
import {Link} from "react-router-dom";

const PageKecamatan = (props) => {
    //data for pages
    let [kecamatanDatas, setKecamatanDatas] = useState([])
    //prepare begin and end for pagination
    let [begin, setBegin] = useState([0])
    let [end, setEnd] = useState([12])

    const [search, setSearch] = useState("")

    const searchSpace = (event) => {
        let keyword = event.target.value;
        setSearch(keyword)
    }

    useEffect(() => {
        setKecamatanDatas(props.dataKecamatan.slice(begin, end))
    }, [props.dataKecamatan, begin])


    const dataKecamatan = search.length === 0 ?
        kecamatanDatas.map((value, index) => {
            return <KecamatanCards sendValue={value}/>
        }) :
        props.dataKecamatan.filter((data) => {
            if (search == null)
                return data
            else if (data.nama.toLowerCase().includes(search.toLowerCase())) {
                return data
            }
        }).map((value, index) => {
            return <KecamatanCards sendValue={value}/>
        })

    // console.log("data result",initialState)
    return (
        <div>
            {/*component header bisa dipisah*/}
            <Header as='h1' block>
                <div className="ui secondary menu">
                    <h2 className="item">Daftar Nama Kecamatan</h2>
                    <Link className="item" to="/peta">Home</Link>
                </div>
            </Header>
            {/*body section*/}
            <div className="ui container">
                <div className="ui icon input">
                    <input type="text" placeholder="search ..."
                           onChange={(e) => searchSpace(e)}/>
                    <i aria-hidden="true" className="search icon"></i>
                </div>
                <div className="ui vertically divided grid" style={{paddingTop: 25}}>
                    <div className="four column row">
                        {dataKecamatan}
                    </div>
                </div>
                <Pagination
                    defaultActivePage={1}
                    totalPages={Math.ceil(props.dataKecamatan.length / 12)}
                    onPageChange={(event, data) => {
                        console.log("data active", data.activePage)
                        setBegin(data.activePage * 12 - 12)
                        setEnd(data.activePage * 12)
                        setKecamatanDatas(props.dataKecamatan.slice(begin, end))
                    }}
                />
            </div>
        </div>
    );
};

//state from redux
const mapStateToProps = (state) => {
    return {dataKecamatan: state.rKecamatan.dataKecamatan}
};

export default connect(mapStateToProps, null)(PageKecamatan);