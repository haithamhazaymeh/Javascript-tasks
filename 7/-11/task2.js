let ln = "largestNumber" 

integer(6,1)

function integer (a,b) {

    if (a > 0 && b > 0 && a > b) {
        document.write("The larger number is " + a );
      } else if (a > 0 && b > 0 && a < b) {
        document.write("The larger number is " + b);
      } else if (a === b && a > 0 && b > 0) {
        document.write("Both numbers are equal!")
      } else {
          document.write("Please add an integer!");
    
      }
    }

