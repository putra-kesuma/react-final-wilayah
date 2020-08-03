const initialState = {
    dataKecamatan: []
}

const kecamatan = (state = initialState, action) => {
    switch (action.type) {
        case "GETKECAMATAN":
            return {dataKecamatan: action.data}
        default:
            return state
    }
}

export default kecamatan;