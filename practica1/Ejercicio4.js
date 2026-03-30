const comparar = (numeros) => {
    let may = numeros[0];
    let men =numeros[0];
    let n = numeros.length;

    for (let i = 0; i < n; i++) {
        if (numeros[i] > may) may = numeros[i];
        if (numeros[i] < men) men = numeros[i];
    }

    return { mayor:may, menor:men };
}

console.log(comparar([3,1,5,4,2]));