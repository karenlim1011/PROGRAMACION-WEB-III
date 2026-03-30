const miFuncion = async () => {
    console.log("Cargando...");
    let dato = await new Promise(ok => {
        setTimeout(() => ok("datos guardados"), 2000);
    });
    console.log(dato);
}

miFuncion();