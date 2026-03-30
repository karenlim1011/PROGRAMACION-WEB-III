const miFuncion = async () => {
    console.log("cargando...");
    let p = new Promise(r => setTimeout(r, 2000));
    await p;
    console.log("proceso terminado con exito");
}

miFuncion();