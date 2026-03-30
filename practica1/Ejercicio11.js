const miFuncion = () => {
    Promise.resolve(20)
    .then(x => x + 5)
    .then(x => x * 2)
    .then(x => console.log(x));
}

miFuncion();