const moment = require('moment');

const opts = {
    moneda: {
        demand: true,
        alias: 'p',
        //default: 'dolar',
        describe: 'Moneda a elegir',
        choices: ['dolar', 'uf', 'euro', 'utm']
    },
    year: {
        alias: 'y',
        demand: true,
        describe: 'Años desde 2015'
    },
    month: {
        alias: 'm',
        demand: true,
        describe: 'Mes 1-12'
    },
    day: {
        alias: 'd',
        describe: 'Días 1-31'
    }
}
const argv = require('yargs')
    .command('listar', 'Lista en consola paridad de <moneda>', opts)
    .command('crear', 'Guarda en archivo <moneda>-<AAAAMMDD>.txt la paridad de monedas', opts)
    .help()
    .argv

module.exports = { argv }