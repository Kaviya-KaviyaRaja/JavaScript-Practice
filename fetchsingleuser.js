const identy = async() =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
        const user = await response.json()

        
            console.log(`Name : ${user.name} | Email : ${user.email} | Phone: ${user.phone}`);
       
    }
    catch(error){
        console.log("Something Went wrong",error);
    }
}
identy()