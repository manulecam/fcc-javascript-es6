const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};



function makeList(arr) {
  // Cambia solo el código debajo de esta línea
  const failureItems = [];
  let contador = 0;
  let numeroProp = 0;
  for (let prop in result) {  
    if (contador == 1){
      while (numeroProp < 3){
        failureItems.push(`<li class="text-warning">${(result[prop])[numeroProp]}</li>`)
        console.log(failureItems)
        numeroProp+=1;
      }
    }
    contador += 1;
  }
  // Cambia solo el código encima de esta línea

  return failureItems;
}

const failuresList = makeList(result.failure);