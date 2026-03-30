const miFuncion = async () => {
    let r = await new Promise(nombre => {
        console.log("Procesando...")
        setTimeout(() => nombre("fin del proceso"), 2000);
    });
    console.log(r);
}

miFuncion();