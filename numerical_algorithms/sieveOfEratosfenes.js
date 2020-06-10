var arr = [];

for (var i = 2; i < 100; i++) {arr[i] = true;}

var p = 2;
do {
  for (i = 2 * p; i < 100; i += p) {
  	arr[i] = false;
  }
  
  for (i = p+1; i < 100; i++) {
    if (arr[i]) {
    	break;
    } else {
    }
  }
  p = i;
} while (p < 10); // шаг 5

list = arr.map((el,i)=>{
    if(el===true){
        return i
    }
}).filter(el=>typeof(el)==='number')

console.log(list);