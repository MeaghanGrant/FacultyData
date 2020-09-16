var getPhotos =function(employeeObject)
    {
        return (employeeObject.photo)
    }
d3.select("body")
    .selectAll("img")
    .data(employees)
    .enter()
    .append("img")
    .attr("src", getPhotos)