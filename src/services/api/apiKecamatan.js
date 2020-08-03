import axios from 'axios';

const getKecamatan = async (idKabupaten) => {
    const kecamatan = await axios.get(
        ` https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${idKabupaten}`
    )
    return kecamatan
}

export {getKecamatan}