const buy = new Promise ((resolve, reject)=>{
    const stock = true;
    if(stock){
        resolve("Tasks completed");
    }
    else{
        reject("Tasks not completed ");
    }
},3000);
buy
    .then(result => console.log(result))
    .catch(error => console.log(error));
