
function Errormsg(Id, errmsg) {
      document.getElementById(Id).innerHTML = errmsg;
    }


function validate() {
    var count=0;
    var name_ex = /^[A-Za-z]+$/;
    var name = document.getElementById('name');
    var name_err = document.getElementById('name_err');
    
    if (name.value == '') {
        Errormsg('name_err',"This is a required feild")
        return name.focus();
    } else {
        if (name.value.match(name_ex)) {
            name_err.innerHTML = ' ';
            count=count+1;

        }
        else {
            
            Errormsg('name_err','You can only enter charecters in name feild')
            return name.focus();
        }
    }
  
        var mail_ex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var mail = document.getElementById('email');
        var mail_err = document.getElementById('email_err');
        if (mail.value == '') {
            
            Errormsg('email_err',"This is a required feild")
            return mail.focus();
        } else {
            if (mail.value.match(mail_ex)) { 
                mail_err.innerHTML = ' ';
                count=count+1;
        }
        else {
        
            Errormsg('email_err',"Enter valid email address")
            return mail.focus();
        }
    }

    
    var phone_ex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phno = document.getElementById("phone");
    var phone_err = document.getElementById('phone_err');
    if(phno.value==''){
       
        Errormsg('phone_err','This is a required feild')
        return phno.focus();
    }else{
        if (phno.value.match(phone_ex)) {
            phone_err.innerHTML = ' ';
            count=count+1;
        } else {

            Errormsg('phone_err','Enter Valid Phone no')
            return phno.focus();
        }
    }

    var sel = document.getElementById("subject");
    var sel_err = document.getElementById("subject_err");
    if(sel.value==''){
      
        Errormsg('subject_err','This is a required feild')
        sel.focus();
    }else{
        sel_err.innerHTML = ' ';
        count=count+1;
    }

    var msg = document.getElementById("massage");
    var msg_err = document.getElementById("msg_err");
    if(msg.value==''){
       
        Errormsg('msg_err','This is a required feild')
        msg.focus();
    }else{
        msg_err.innerHTML = ' ';
        count=count+1;
    }


    if(count==5){
        document.getElementById("true").style.display='block';  
        document.getElementById("form").style.display='none';
    }
    event.preventDefault();
}





function emailvalidate(){
    var footemail=document.getElementById("emailfooter");
    var email_ex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email_err = document.getElementById('emailerror');
    if (footemail.value == '') {
        Errormsg('error_email',"This is a required feild")
        return footemail.focus();
    } else {
        if (footemail.value.match(email_ex)) { 
            email_err.innerHTML = ' ';
    }
    else {
    
        Errormsg('error_email',"Enter valid email address")
        return footemail.focus();
    }
}
}