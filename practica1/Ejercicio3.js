const pares = (letra) => {
    let r = { pares:[], impares:[] };
    let n = letra.length;

    for (let i = 0; i < n; i++) {
        if (letra[i] % 2 == 0) 
r.pares.push(letra[i]);
        else r.impares.push(letra[i]);
    }

    return r;
}

console.log(pares([1,2,3,4,5]));