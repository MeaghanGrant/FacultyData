var getLastName=function(employeeObject)
    {
        return (employeeObject.lastName)
    }
d3.select("body")
.append("ol")
    .selectAll("li")
    .data(employees)
    .enter()
    .append("li")
    .text(getLastName)