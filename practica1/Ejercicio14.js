const miFuncion = (callback) => {
    console.log("Esperando...");
    new Promise(ok => {
        console.log("cargando...");
        setTimeout(() => ok("respuesta lista"), 2000);
    }).then(r => callback(r));
}

miFuncion((res) => {
    console.log(res);
});