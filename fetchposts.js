const picture = async()=>{
    try{
        const response  = await fetch("https://jsonplaceholder.typicode.com/posts");
        const pic = await response.json()
        console.log("Num of Posts: ", pic.length);
        pic.slice(0,5).forEach(pi => {
            console.log(`Title: ${pi.title}`);
        });
    }
    catch(error){
        console.log("Something Went wrong", error);
    }
}
picture();