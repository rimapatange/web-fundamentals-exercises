function randomGame(){

    let counter = 0;
    let timer = setInterval(function(){
        num = Math.random();
        counter++;
        if(num > .75){
            clearInterval(timer);
            console.log("Program tried " + counter + " times!");
        }
    },1000);
}