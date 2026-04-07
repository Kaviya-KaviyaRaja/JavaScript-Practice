const data = async() => {
    try{
    const dot = await fetch("https://gitshubs.com/settings/keys");
    const slash = await dot.json();
    console.log("Successfully");
}
catch(error){
    console.log("Something went wrong", error);
}
}
data();