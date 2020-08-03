import axios from 'axios';

const getKelurahan = async (idKecamatan) => {
    const kelurahan = await axios.get(
        ` https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${idKecamatan}`
    )
    return kelurahan
}

export {getKelurahan}