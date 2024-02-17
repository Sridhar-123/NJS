console.log(b); "--> undefined"

// here before the single line of code executed Js keeps everything with intialising the special keyword "undefined" so it wont throw error
//console.log(a);
// here it gives an error😡 it says  that 'a' cannot be acces before the iniliazation

let a=10;
console.log(a);
// here let & const will be allocated in different container w.r.t to the GEC
// this let and const keywords wont access the global ecxecutive container

var b=100;
// temporal dead zone is the time between the value created and its begin hoisted
// if here console.log(a);  line 3:let a=10; then the value of the a will be saved in another space script and there it will be initialzied with special value "undefined"
// hoisting phenomenon
// when it comes to line 3 again then the value of temporal dead zone ends it get assign o its original value