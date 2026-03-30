const verifica = (leer) => {
    let r = "";
    leer = leer.toLowerCase();
    let n = leer.length;

    for (let i = n-1; i >= 0; i--) {
        r = r + leer[i];
    }

    return leer == r;
}

console.log(verifica("paz"));
console.log(verifica("oso"));