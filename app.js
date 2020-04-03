const { argv } = require('./config/yargs')
const { getParidad } = require('./paridad/paridad')
const colors = require('colors/safe');
const moment = require('moment');
const logger = require('./config/logger');
require('./config/util');


let getMain = async() => {


    const command_ = argv._[0]
    const moneda = argv.moneda
    let yy = argv.year
    let dd = typeof(argv.day) === 'number' ? argv.day : 0
    let mm = typeof(argv.month) === 'number' ? argv.month : 0

    // Validaciones
    let msg = ''
    if (!Number(yy)) msg += `- Año no válido.\n`
    else {
        if (!yy.betweenNum(2019, 2020)) msg += `- Año fuera de rango.\n`
    }
    if (!Number(mm) && mm !== 0) msg += `- Mes no válido.\n`
    else {
        if (!mm.betweenNum(1, 12) && mm !== 0) msg += `- Mes fuera de rango ${mm}.\n`
    }
    if (!Number(dd) && dd !== 0) msg += `- Día no válido.\n`
    else {
        if (!dd.betweenNum(1, 31) && dd !== 0) msg += `- Día fuera de rango.\n`
    }

    if (mm !== 0 && dd !== 0 && msg === '') {
        const fecha = moment(`${mm}-${dd}-${yy}`, 'MM-DD-AAAA')
        if (!fecha.isValid()) msg += `- Fecha no válida ${dd}-${mm}-${yy}.\n`
    }
    if (command_ !== 'listar' && command_ !== 'crear') msg += `- Comando ${command_} no reconocido.\n`;
    if (moneda !== 'uf' && moneda !== 'dolar' && moneda !== 'euro' && moneda !== 'utm') {
        msg += `moneda ${moneda} no soportada.\n`
    }
    if (moneda === 'utm' && dd !== 0) msg += `- UTM sólo se visualiza por mes.`

    // Fin validaciones

    if (msg === '') {
        try {
            const file = await getParidad(command_, moneda, dd, mm, yy)
            switch (command_) {
                case 'crear':
                    console.info(colors.green(`Archivo creado con éxito`))
                    break
                case 'listar':
                    console.info(colors.blue(file))
            }
        } catch (err) {
            logger.error('No se pudo obtener los datos', err);
        }
    } else logger.error(msg)
}
getMain()