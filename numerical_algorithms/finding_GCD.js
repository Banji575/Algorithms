
//ES6 variant
const GCD = (x,y)=>{
   while(y){
       [x,y]=[y, x%y]
   }
   return x
}

//ES5 variant 
const GCD=(x,y)=>{
    while(x!=0 && y!=0){
        if(x>y){
            x=x%y
        }else{
            y=y%x
        }
    }
    return x+y 
}

//console.log(GCD(125,450))