const initialState = {
    dataKabupaten: []
}

const kabupaten = (state = initialState, action) => {
    switch (action.type) {
        case "GETKABUPATEN":
            return {dataKabupaten: action.data}
        default:
            return state
    }
}

export default kabupaten;