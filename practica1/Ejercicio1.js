const vocal = (contar) => {
  let r = {a:0, e:0, i:0, o:0, u:0};
  
  contar = contar.toLowerCase();
  let n = contar.length;
  
  for (let i=0; i< n; i++){
    if (contar[i] == "a") r.a++;
    if (contar[i] == "e") r.e++;
    if (contar[i] == "i") r.i++;
    if (contar[i] == "o") r.o++;
    if (contar[i] == "u") r.u++;
  }
  
  return r;
}
console.log(vocal("foco"));
