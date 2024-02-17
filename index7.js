function a() {
    console.log(b); // will it print undefined or not defined ?
}
var b=10;
a();
// it gives b as 10 
// another case
function a() {
  c();
    function c(){
    console.log(b); // will it print undefined or not defined ?
}}
var b=10;
a();
// then also output 10 
