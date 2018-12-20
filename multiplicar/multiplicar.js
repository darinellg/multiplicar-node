// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('*******************'.green)
    console.log(`*** tabla del ${base}***`.red)
    console.log('*******************'.green)
    if (!Number(base)) {
        console.log(`La base intruducido "${base}" debe de ser numerica`);
        return;
    }
    if (!Number(limite)) {
        console.log(`El limite intruducido "${limite}" debe de ser numerico`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${base}' No es un numero!`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite intruducido "${limite}" debe de ser numerico`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-del ${base} as ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}