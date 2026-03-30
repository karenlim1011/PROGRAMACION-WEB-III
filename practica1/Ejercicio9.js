const leer = () => {
    return new Promise((palabra, no) => {
      console.log("procesando");
        setTimeout(() => {
            palabra("exito");
        }, 3000);
    });
}

leer().then(r => console.log(r));
