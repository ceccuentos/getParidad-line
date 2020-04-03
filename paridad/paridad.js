const axios = require('axios')
const fs = require('fs');
const logger = require('../config/logger');
require('dotenv').config()



let getParidad = async(salida, moneda, dd, mm, yy) => {

    const url = `${process.env.URL_SBIF}/${moneda}/${yy}/${mm}${(dd !== 0)?'/dias/'+dd:''}/?apikey=${process.env.API_KEY}&formato=JSON` ///
    const encodedUrl = encodeURI(url)

    try {
        const response = await axios.get(encodedUrl)
        data = response.data

        let name_ = '' // obtiene nombre de 1ra. key en JSON, para convertir a CSV

        for (key in data) {
            name_ = key;
            break
        }


        const items = data[name_] //UTMs 
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(items[0])

        let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        csv.unshift(header.join(','))
        csv = csv.join('\r\n')


        const file_ = `archivos/${moneda}-${yy}${'0'.concat(mm).slice(-2)}${dd!==0?dd:''}.txt`


        if (salida === 'crear') {
            fs.writeFile(file_, csv, (err) => {
                if (err) return (err);
                else {
                    return (file_);
                }
            })
        } else {
            logger.info(csv)
            return ('');
        }


    } catch (error) {
        logger.error(`No se pudo obtener la información ${error}`)
        return ('No se pudo obtener la información');

    }



}
module.exports = { getParidad }


function DownloadJSON2CSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';

        for (var index in array[i]) {
            line += array[i][index] + ',';
        }

        line.slice(0, line.Length - 1);

        str += line + '\r\n';
    }
    return str
        //$('div').html(str);
}