const invertir = (letras) => {
  let r = " ";
  let n = letras.length;
  
  
  for (let i= n-1; i >= 0; i--){
    r = r + letras[i];
  }
  
  return r;
}
console.log(invertir("abcd"));