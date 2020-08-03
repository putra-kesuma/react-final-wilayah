//action type bisa dipisah untuk yang lebih rapi


const initialState = {
    dataProvinsi: []
}

const provinsi = (state = initialState, action) => {
    switch (action.type) {
        case "GETPROVINSI":
            return {...state, dataProvinsi: action.data}
        default:
            return state
    }
}

export default provinsi;