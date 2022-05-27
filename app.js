// A place to store the count, max number and integer list
var obj = {
    count: 3,
    maxNum: 100,
    numbers: [],
}

// Get random number
function getRandomNum(max){
    // 
    return Math.floor((Math.random() * max) + 1);
}

// Create and display list of random numbers  
function generateList(count, max) {
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
        obj.count = countEle.value
    })
    maxNumEle.addEventListener('change', function(){
        obj.maxNum = maxNumEle.value
    }) 

    // Get initial random integers
    generateList(obj.count, obj.maxNum)
}

// Runs start function when page loads
window.onload = startApp()