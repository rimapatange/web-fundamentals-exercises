function countDown(num){
 let number = setInterval(function(){
    num--;
    if(num <= 0){
       clearInterval(number);
       console.log("DONE!");
    }
    else{
    console.log(num);
    }
 
},1000)

}

// Another way of using sleep

// function sleep(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// async function countDown(num){
//     while(num > 1){
//         await sleep(1000);
//         num--;
//         console.log(num);
//     }
//     await sleep(1000);
//     console.log("Done!");
// }

