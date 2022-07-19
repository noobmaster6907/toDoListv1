exports.getDate = function() {
    let today= new Date();
    //instead of if-else 
    let options= {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
    return day;}


   exports.getDay = function() {
    let today= new Date();
    //instead of if-else 
    let options= {
        weekday: "long",
    };
    return day= today.toLocaleDateString("en-US", options);
}
