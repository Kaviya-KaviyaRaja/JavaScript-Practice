const buychocolate = new Promise((resolve, reject) => {
console.log("Can you buy chocolate for me?")


    setTimeout(() => {
         const diarymilk = false ;
         if(diarymilk){
            resolve("Yes, He buy chocolate for you");
         }
         else{
            reject("No, He doesn't buy chocolate");
         }

    }, 5000);
    });
    buychocolate
            .then(result => console.log(result))
            .catch(error => console.log(error));
   
        