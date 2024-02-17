function x(){
    var a=7;
    function y(){
        function f(){
        console.log(a);
        }
        return f;
    }
    return y;
}
var z =x();
console.log(z); // returns function y function y(){ console.log(a); }

// when they are returned from another function they still maintain their lexical scope they remember where they actually present

console.log(z());

// Key Takeaway: Closures allow JavaScript functions to "remember" and access variables from their lexical environment even after the outer functions have finished executing.
// function along with its lexical scope bundled together forms a closure
function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        // a=100; // it locates reference of a alias address not the value
        y();
    }
    x();
}
z();

// Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !! Thank you so much, Akshay for this :) :)
