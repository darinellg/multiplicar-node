const argv = require('./Config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`.green, `${archivo} del ${argv.base} al ${argv.limite}`.red))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
// console.log(argv);
// crearArchivo(argv.base)
//     .then(archivo => console.log(`Archivo ${archivo} creado!`))
//     .catch(err => console.log(err));