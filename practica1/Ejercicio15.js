const miFuncion = () => {
    return new Promise(r => {
        console.log("En espera...")
        setTimeout(() => {
            r("convertido a promesa");
        }, 2000);
    });
}

miFuncion().then(x => console.log(x));