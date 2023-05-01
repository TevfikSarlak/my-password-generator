//Slider function that arrange the length of the password
function mySlider() {
    let lengthOfPass = document.getElementById("myInput").value
    document.getElementById("demo").textContent = lengthOfPass

    return lengthOfPass
}

//Main generating password function
function generatePassword() {
    
    //Password section, length of password and the empty array of the password
    let myPassword = document.getElementById("myPass")
    let myPassLength = mySlider()
    let resultOfPass = []

    //Features of passwords
    let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]

    //Empty array of characters that is used in chosen features
    let myCharacters = []
    
    //A conditional sentence including or not uppercase
    if (document.getElementById("upper-case").checked) {
        myCharacters = myCharacters.concat(upperCase)
    }
    
    //A conditional sentence including or not lowercase
    if (document.getElementById("lower-case").checked) {
        myCharacters = myCharacters.concat(lowerCase)
    }
    
    //A conditional sentence including or not numbers
    if (document.getElementById("numbers").checked) {
        myCharacters = myCharacters.concat(numbers)
    }
    
    //A conditional sentence including or not symbols
    if (document.getElementById("symbols").checked) {
        myCharacters = myCharacters.concat(symbols)
    }
    
    // Alert of not chosen features
    if (myCharacters.length === 0){
        alert("Please select at least one feature")
    }
    
    // The loop of the generated password
    for (i=0; i < myPassLength; i++) {
        
        // Randomize the index of characters
        var randomIndex = Math.floor((Math.random())*myCharacters.length)
        // Converting the element to string
        var randomElement = myCharacters[randomIndex].toString()

        // Adding the elements in password array
        resultOfPass.push(randomElement)
    }

    // Writing the password in screen
    myPassword.value = resultOfPass.join("")
}

// Function which copies the password
function copyPassword() {
    // Get the password field
   let copyText = document.getElementById("myPass");
     
    // Select the password field
    copyText.select();
    
    // Copy the text inside the password field
   navigator.clipboard.writeText(copyText.value);
     
   // Alert the copied password
   alert("Copied the Password: " + copyText.value);
}

