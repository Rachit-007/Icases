function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function opensearch(){
    document.getElementById("onsearch").style.display="block"

}

function closesearch(){
    document.getElementById("onsearch").style.display="none";
}


 let flag=false;
function opencart(){
    var cart=document.getElementById("cart-opt");
    if(flag){
        cart.style.display="none";
        flag=false;
    }
    else{
        cart.style.display="block";
        flag=true;
    }
}


function emailvalidate(){
    var footemail=document.getElementById("emailfooter");
    var email_ex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email_err = document.getElementById('error_email');
    if (footemail.value == '') {
        email_err.innerHTML="This is required field"
        return footemail.focus();
    } else {
        if (footemail.value.match(email_ex)) { 
            email_err.innerHTML = ' ';
    }
    else {
        email_err.innerHTML="Please enter valid email address"
        return footemail.focus();
    }
}
}