// A place to store app variables, including the number count, max number and list of numbers
var obj = {
    count: 5,
    maxNum: 100,
    numbers: [],
}

// Get random number
function getRandomNum(max){
    // If max equals 1, retun with 0 as the smallest number else use 1 as smallest number
    if (max === 1){
        return Math.floor((Math.random() * 2))
    } else {
        return Math.floor((Math.random() * max) + 1)
    }
}

// Create and display list of random numbers  
function generateList(count, max) {
    // Get element to add alert to
    var logEle = document.getElementById('log-text')
    // Clear element
    logEle.innerHTML = ''
    logEle.style.display = 'none'

    // If amount selected is less than one it logs a alert and stops the function
    if (count < 1){
        logEle.style.display = 'block'
        logEle.innerHTML = 'At least one number must be generated'
        return
    }
    // If amount selected is more than 10,000 it logs a alert and stops the function
    if (count > 10000){
        logEle.style.display = 'block'
        logEle.innerHTML = 'Amount must be less than 10,000'
        return
    }
    //If max is less than 1 print warning and stop function
    if (max < 1){
        logEle.style.display = 'block'
        logEle.innerHTML = 'Max must be 1 or greater'
        return
    }
    //If max is greater than 100,000,000,000,000,000,000 print alert and stop function
    if (max > 100000000000000000000){
        logEle.style.display = 'block'
        logEle.innerHTML = 'Max must be less than 100,000,000,000,000,000,000'
        return
    }

    // Create array to store new numbers
    var numArr = []

    // Get element of list
    var listEle = document.getElementById('generated-list')

    // Clear previous text element
    listEle.innerHTML = ''

    // Use a for loop to generate as many random numbers as chosen by 'count' variable 
    for (var a = 0; a < count; a++){
        // Add new num to array
        numArr.push(getRandomNum(max))

        // Create new element to push to list
        var newEle = document.createElement("span");

        // Add number to new element with comma
        if (a < count - 1){
            newEle.innerHTML = numArr[a] + ', '
        } else {
            // On last iteration do not add comma
            newEle.innerHTML = numArr[a]
        }

        // Add new element with number to list
        listEle.appendChild(newEle)
    }

    // Save list to object
    obj.numbers = numArr
}

// Function to generate numbers on app start-up
function startApp(){
    // Get elements of input to 
    var countEle = document.getElementById('count-input')
    var maxNumEle = document.getElementById('max-input')

    // Set input values to default stored values
    countEle.value = obj.count
    maxNumEle.value = obj.maxNum

    // Add and event listener to  update the variables on change
    countEle.addEventListener('change', function(){
        obj.count = Number(countEle.value)
    })
    maxNumEle.addEventListener('change', function(){
        obj.maxNum = Number(maxNumEle.value)
    }) 

    // Get initial random integers
    generateList(obj.count, obj.maxNum)
}

// Runs start function when page loads
window.onload = startApp()