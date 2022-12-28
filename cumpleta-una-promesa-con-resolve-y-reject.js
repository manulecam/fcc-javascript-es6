const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer representa una respuesta de un servidor
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");// Cambia esta línea
  } else {  
    reject("Data not received");// Cambia esta línea
  }
});
