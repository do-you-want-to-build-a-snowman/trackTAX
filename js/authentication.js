// number of days to expired
var expDays = 5; 

// ฟังก์ชันเรียกใช้ฟังก์ชันอื่นตามปุ่มที่กด
function checkAction(funcName) {
    switch(funcName) {
        case signUp:
            signUp($("#email").val(), $("#password").val());
            break;
        case login:
            login($("#email").val(), $("#password").val());
            break;
        case authenGoogle:
            // code
            break;
        case logout:
            // code
            break;
        case changePassword:
            // code
            break;
        case forgotPassword:
            // code
            break;
    }
}

// ฟังก์ชันเช็ก email ที่ user ให้มาว่าถูกใช้ในเว็บเราหรือยัง
function existEmail(email) {
    $.get("php file", {
        user: email
    }, function(userID) { return userID != '' ? true : false })
}

// ฟังก์ชันกำหนดค่า cookie
function setCookie(userID) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "userID=" + userID + ";" + expires + ";path=/";
  }

// ฟังก์ชันสร้างบัญชีผู้ใช้
function signUp(email, password) {
    if(!existEmail(email)) {
        $.post("php file", {
            user: email,
            password: CryptoJS.MD5(password)
        }, setCookie(userID), "text")
    } else {
        alert("Email: " + email + "is used already.");
    }
}

// ฟังก์ชันลงชื่อเข้าใช้ระบบ
function login(email, password) {
    if(existEmail(email)) {
        $.post("php file", {
            user: email,
            password: CryptoJS.MD5(password)
        }, setCookie(userID), "text")
    } else {
        alert("Email: " + email + "is invalid!");
    }
}

// ฟังก์ชันยืนยันตัวตนด้วย google
function authenGoogle() {

}

// ฟังก์ชันลงชื่อออกจากระบบ