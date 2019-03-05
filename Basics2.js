function add(a, b){
	return a+b;
	
}

console.log(add(4,5));

//Arrays - collection of values

var a = 4;
var b = ["one", "two", "3"]; //this is an array as it has multiple values

for(var i = 0; i<b.length; i++){ //iterating through the array
	console.log(b[i]); // we are passing the index here
	
}

// another way to declare an array
var c = new Array();
c[0] = "zero";
c[1] = "one";
c[2] = "two";
console.log(c.length);
console.log(c[0]);
//print in reverse pattern
for(var j=c.length-1;j>=0;j--){
	console.log(c[j]);
}