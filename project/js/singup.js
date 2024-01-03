var arr = [];
function SignUp() {
    var name=document.getElementById("mame");
    var pass=document.getElementById("pass");
    var cpass=document.getElementById("cpass");
    var email=document.getElementById("email");
    var gender = document.querySelector('input[name="gender"]');
    var city = document.getElementById('select');
    var scity =city.options[city.selectedIndex].value;
    var regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&*()_]).{8,16}$/;
    if (name != "" && pass != "" && email != "" && gender!="" && city!="") {
    if (5 < name.length < 10 && regex.test(pass)&&pass==cpass) {
        var inputs = {
        user: name,
        Pass: pass,
        Email:email,
        Gender:gender,
        City:city
        };
        arr.push(inputs);
        console.log(arr);
        } else {
            alert("the user must be from 5 to 9 AND the Pass Must Contain specail char and only one digit number..."
        );
        }
        } else {
            alert("please Fill Out The Data");
        }
}
