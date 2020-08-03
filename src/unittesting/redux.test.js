import React from "react";
import provinsi from "../reducers/provinsi/stateProvinsi";
import kabupaten from "../reducers/kabupaten/stateKabupaten";
import kecamatan from "../reducers/kecamatan/stateKecamatan";
import kelurahan from "../reducers/kelurahan/stateKelurahan";


it('[TEST STATE REDUX PROVINSI]should create an action to add data to state dataProvinsi', () => {
    const dummyData = [{
        id: 1,
        nama: "Kalimantan Selatan"
    }]
    const expectedAction = {
        dataProvinsi: dummyData
    }
    expect(provinsi([], {type: "GETPROVINSI", data: dummyData})).toEqual(expectedAction)
})

it('[TEST STATE REDUX KABUPATEN]should create an action to add data to state dataKabupaten', () => {
    const dummyData = [{
        id: 101,
        name: "Kota Banjarmasin"
    }]
    const expectedAction = {
        dataKabupaten: dummyData
    }
    expect(kabupaten([], {type: "GETKABUPATEN", data: dummyData})).toEqual(expectedAction)
})

it('[TEST STATE REDUX KECAMATAN]should create an action to add data to state dataKecamatan', () => {
    const dummyData = [{
        id: 10102,
        name: "Kecamatan Banjarmasin Barat"
    }]
    const expectedAction = {
        dataKecamatan: dummyData
    }
    expect(kecamatan([], {type: "GETKECAMATAN", data: dummyData})).toEqual(expectedAction)
})

it('[TEST STATE REDUX KELURAHAN]should create an action to add data to state dataKelurahan', () => {
    const dummyData = [{
        id: 1010201,
        name: "Kelurahan Belitung Utara"
    }]
    const expectedAction = {
        dataKelurahan: dummyData
    }
    expect(kelurahan([], {type: "GETKELURAHAN", data: dummyData})).toEqual(expectedAction)
})

