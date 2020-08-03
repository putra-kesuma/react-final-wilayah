import {combineReducers} from "redux";
import provinsi from "./provinsi/stateProvinsi";
import kabupaten from "./kabupaten/stateKabupaten";
import kecamatan from "./kecamatan/stateKecamatan";
import kelurahan from "./kelurahan/stateKelurahan";

const rootReducers = combineReducers({
    rProvinsi: provinsi,
    rKabupaten: kabupaten,
    rKecamatan: kecamatan,
    rKelurahan: kelurahan
})

export default rootReducers;