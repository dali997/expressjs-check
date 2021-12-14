

let date = new Date();


let currentHour = date.getHours();
console.log(currentHour)

let currentDay = date.getDay();
console.log(currentDay)

function logger (req,res,next) {
    if (currentHour > 9 && currentHour < 17 && currentDay > 0 && currentDay < 6){
        next()
    }else {
        res.send("<h1>sorry our service is currently unavailable please come back in our working time  !!!!</h1>")
    }
}

module.exports = logger