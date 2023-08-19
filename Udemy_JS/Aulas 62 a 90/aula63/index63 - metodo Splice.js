// Método Splice
//               -5      -4         -3        -2        -1
// indices        0       1          2         3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];
// const removidos = nomes.splice(-4, Number.MAX_VALUE);
const removidos = nomes.splice(3, 1, "Luiz", "Fábio");

console.log(nomes, removidos);
