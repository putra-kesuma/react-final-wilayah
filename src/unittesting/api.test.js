import React from "react";
import {getProvinsi} from "../services/api/apiProvinsi";
import {getKecamatan} from "../services/api/apiKecamatan";
import {getKabupaten} from "../services/api/apiKabupaten";
import {getKelurahan} from "../services/api/apiKelurahan";

// const apiToken = () => {
//     return getToken()
//         .then((res) => {
//             return res.data
//         })
// }

const apiProvinsi = () => {
    return getProvinsi()
        .then((res) => {
            return res
        })
}

const apiKabupaten = (idProvinsi) => {
    return getKabupaten(idProvinsi)
        .then((res) => {
            return res
        })
}
const apiKecamatan = (idKabupaten) => {
    return getKecamatan(idKabupaten)
        .then((res) => {
            return res
        })
}
const apiKelurahan = (idKecamatan) => {
    return getKelurahan( idKecamatan)
        .then((res) => {
            return res
        })
}
//
// it('[TEST GET TOKEN]should get response code 200 from API to make sure get a token', async function () {
//     // console.warn(await api())
//     const data = await apiToken()
//     expect(data.code).toEqual(200)
// });

it('[TEST GET PROVINSI]shoud get responese code 200 to get data provinsi', async function () {
    const getProvinsi = await apiProvinsi()
    // console.warn(getProvinsi.status)
    // const data = await apiToken()
    // expect(data.code).toEqual(200)
    expect(getProvinsi.status).toEqual(200)
});

it('[TEST GET KABUPATEN]shoud get responese code 200 to get data Kabupaten', async function () {
    // const data = await apiToken()
    // console.warn(await apiKabupaten(data.token,63))
    // expect(data.code).toEqual(200)
    //try it id provinsi with prov kalsel
    const getKabupaten = await apiKabupaten( 63)
    expect(getKabupaten.status).toEqual(200)
});

it('[TEST GET KECAMATAN]shoud get responese code 200 to get data kecamatan', async function () {

    // console.warn(await apiKecamatan(data.token,6371))
    // expect(data.code).toEqual(200)
    //try it id provinsi with kot/kec banjarmasin
    const getKecamatan = await apiKecamatan( 6371)
    expect(getKecamatan.status).toEqual(200)
});

it('[TEST GET KELURAHAN]shoud get responese code 200 to get data kelurahan', async function () {
    // const data = await apiToken()
    // console.warn(await apiKecamatan(data.token,6371))
    // expect(data.code).toEqual(200)
    //try it id provinsi with kec banjarmasin barat
    const getKelurahan = await apiKelurahan(6371030)
    expect(getKelurahan.status).toEqual(200)
});