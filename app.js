const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar.js');
const { compileFunction } = require('vm');
const argv = require("./config/yargs.js").argv;
const colors = require('color');

let commando = argv._[0]


switch (commando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then(list => console.log(list))
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log("comando no reconocido")
}