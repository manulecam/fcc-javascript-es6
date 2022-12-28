const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.catch(error => {
  console.log(error);
});