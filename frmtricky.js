let arr  = [1,2,3,4,5,6,7,8];

let result = arr.filter(num => num % 2 != 0);
     
        console.log(result);


   let mult =  arr.map(num => num *3)
   console.log(mult);

   let  sum = arr.reduce((acc,curr) => acc+curr, 0);
   console.log(sum);