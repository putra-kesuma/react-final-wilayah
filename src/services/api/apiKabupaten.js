import axios from 'axios';

const getKabupaten = async (idProvinsi) => {
    const kabupaten = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idProvinsi}`
    )
    return kabupaten
}

export {getKabupaten}