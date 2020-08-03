import React, {useState} from 'react';
import {Table} from "semantic-ui-react";

const TableListKelurahan = (props) => {
    const [search, setSearch] = useState("")

    const searchSpace = (event) => {
        let keyword = event.target.value;
        setSearch(keyword)
    }

    const dataKelurahan = props.kelurahanDatas.filter((data) => {
        if (search == null)
            return data
        else if (data.nama.toLowerCase().includes(search.toLowerCase())) {
            return data
        }
    }).map((value, index) => {
        return <Table.Row>
            <Table.Cell>{value.id}</Table.Cell>
            <Table.Cell>{value.nama}</Table.Cell>
        </Table.Row>
    })
    return (
        <div>
            <div className="ui icon input">
                <input type="text" placeholder="search ..."
                       onChange={(e) => searchSpace(e)}/>
                <i aria-hidden="true" className="search icon"></i>
            </div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Nama Kelurahan/Desa </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {dataKelurahan}
                </Table.Body>
            </Table>
        </div>
    );
};


export default TableListKelurahan;