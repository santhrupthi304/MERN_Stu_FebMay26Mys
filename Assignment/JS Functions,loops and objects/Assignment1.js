function typepassword(password) {
    if (typeof password !== "string") {
        return "INVALID";
    }
    let hasLetter = false;
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        let ch = password[i];
        if ((ch>='a' && ch<='z') || (ch>='A' && ch<='Z')) {
            hasLetter = true;
        }
        if (ch>='0' && ch<='9') {
            hasNumber = true;
        }
    }
    if (password.length<8) {
        return "WEAK";
    }
    else if (password.length >= 12 && hasLetter && hasNumber) {
        return "STRONG"
    }
    else if (password.length >= 8 && hasLetter && hasNumber) {
        return "MEDIUM"
    }
    else {
        return "WEAK"
    }
}
console.log(typepassword("abcd"));
console.log(typepassword("Sonu304"));
console.log(typepassword(1234));
console.log(typepassword("santhrupthi"));
console.log(typepassword("abc123456789"));
console.log(typepassword("abcd1234567"));
