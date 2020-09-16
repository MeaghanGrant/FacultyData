console.log("employees",employees)
var getFirstName=function(employeeObject)//accessor function. an array of employees
     { 
          return employeeObject.firstName
     }
d3.select("body") //where you want it to happen
    .selectAll("h2") //all things you want to create-not yet created
    .data(employees) //binds this to nothing-the new name where the data is stored is called firstNames.
    .enter() //which data needs an element
    .append("h2") //creates the element (the one that binds to the data)
    .text(getFirstName)//need an accessor function
