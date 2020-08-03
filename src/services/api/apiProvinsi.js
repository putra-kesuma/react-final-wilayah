import axios from 'axios';

const getProvinsi = async () => {
    const provinsi = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi`)
    return provinsi
}

export {getProvinsi}
