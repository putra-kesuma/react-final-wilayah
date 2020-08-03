const initialState = {
    dataKelurahan: []
}

const kelurahan = (state = initialState, action) => {
    switch (action.type) {
        case "GETKELURAHAN":
            return {dataKelurahan: action.data}
        default:
            return state
    }
}

export default kelurahan;