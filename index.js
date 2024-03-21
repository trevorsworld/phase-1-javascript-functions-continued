// Function to return a string describing a Saturday activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function to return a string describing a Monday activity
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function to create a wrapAdjective function
function wrapAdjective(flair = "*") {
    // Inner function to wrap an adjective with visual flair
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

// Testing the wrapAdjective function
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); //=> "You are !!!a dedicated programmer!!!"
