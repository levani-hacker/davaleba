var scoope = "Global";

function myFunction() {
  var scoope = "Local";
  console.log("Inside the function: " + scoope);
}

myFunction();
console.log("Outside the function: " + scoope);
