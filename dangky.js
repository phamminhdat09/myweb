function kiemtra(){
    var flag = true;
    var name =  document.getElementById("name").value.trim();
    if(name == '')
    {
        flag = false;
        document.getElementById("nameError").innerHTML = "Tên đăng nhập không được để trống !";
    }
    else if((name.length > 0 && name.length < 5))
    {
        flag = false;
        document.getElementById("nameError").innerHTML = "Vui lòng nhập lại lại !!!";
    }


    var usename = document.getElementById("hoten").value.trim();
    if(usename == '')
    {
        flag = false;
        document.getElementById("usenameError").innerHTML = "Họ tên không được để trống !";
    }
    else if((usename.length > 0 &&  usename.length < 5))
    {
        flag = false;
        document.getElementById("usenameError").innerHTML = "Vui lòng nhập lại lại !!!";
    }


    var Email =  document.getElementById("Email").value.trim();
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$/;
    if(!mailFormat.test(Email) || Email.length < 10)
    {
        flag = false;
        document.getElementById("EmailError").innerHTML = "Vui lòng kiểm tra Email !";
    }


    var Password = document.getElementById("Pass").value.trim();
    if(Password.length  < 10)
    {
        flag = false;
        document.getElementById("PasswordError").innerHTML = "Kiểm tra lại Pass phải từ 10 ký tự";
    }
        sessionStorage.user = document.forms["F"]["name"].value;
if(flag==true)
        {
            location.assign("./shopbansach.html");
        }
}