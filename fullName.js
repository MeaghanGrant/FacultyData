var getFirstName=function(employeeObject)
   {
        return employeeObject.firstName
   }

var getLastName=function(employeeObject)
   {
        return employeeObject.lastName
   }

var getFullName=function(employeeObject)//accessor function an array of employees
    {
        return employeeObject.firstName+" "+employeeObject.lastName
    }
d3.select("body") //where you want it to happen
    .selectAll("h2")//what you want to create. does not exist yet
    .data(employees)//where the data is stored for names
    .enter()//what data needs an element
    .append("h2")//creates the element to bind to
    .text(getFullName)