const fs = require("fs")
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("No es un numero")

            return;
        }

        if (!Number(limite)) {
            reject("No es un numero")

            return;
        }

        let data = ""
        for (let i = 1; i <= limite; i++) {
            data = data + `${base} * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`.green)
            }

        });
    });
}

let listarArchivo = (base, limite = 10) => {


    console.log('========================'.red)
    console.log(`   Tabla de ${base}`)
    console.log("========================".red)

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("No es un numero")

            return;
        }

        if (!Number(limite)) {
            reject("No es un numero")

            return;
        }

        let data = ""

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}\n`)
        }

        resolve(`listar tabla-${base} en consola`)
    });
}


module.exports = {
    crearArchivo,
    listarArchivo
}