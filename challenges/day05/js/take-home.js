function testPassword() {
    const password = prompt('Enter a password');
    if (password.length < 6) {
        alert('Password is not long enough');
        return testPassword(); // this is how you call the function again if the condition fails
    }
    if (password.length > 20) {
        alert('Password is too long');
        return testPassword();
    }
    const firstCharacter = password[0];

    const isLowerCase = firstCharacter.charCodeAt(0) >= 96 && 
        firstCharacter.charCodeAt(0) <= 122;

    const isUpperCase = firstCharacter.charCodeAt(0) >= 65 && 
        firstCharacter.charCodeAt(0) <= 90;

    if (isLowerCase || isUpperCase) {
        alert('Password is valid');
    } else {
        alert('Password does not start with a letter');
        return testPassword();
    }
}

// testPassword();


// using Regex
function testPassword2() {
    const password = prompt('Enter a password');
    const isLetterPattern = /[a-zA-Z]/;
    const isCorrectLengthPattern = /^.{6,20}$/;

    if (!isLetterPattern.test(password[0])) {
        alert('Password does not start with a letter');
        return testPassword2();
    }
    if (!isCorrectLengthPattern.test(password)) {
        alert('Password is not the correct length');
        return testPassword2();
    }
    alert('Password is valid');
}
testPassword2();
console.log(testPassword2.password);