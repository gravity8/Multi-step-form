let formControl = document.querySelector('.form-control')

formControl.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formName = document.querySelector('.name').value;
    let formEmail =document.querySelector('.email').value;
    let formPhoneno= document.querySelector('.phoneNo').value;
    let errorMessages= document.getElementsByClassName('error-Message')
        console.log(formName,formEmail,formPhoneno)
        if(formName==""){
            errorMessages[0].style.display="unset"
        }
        else{
            errorMessages[0].style.display="none"
        }
        if(formEmail=="" || undefined){
            errorMessages[1].style.display="unset"
         
        }
        else{
            errorMessages[1].style.display="none"
        }
        if(formPhoneno=="" || undefined){
            errorMessages[2].style.display="unset"
        }
        else{
            errorMessages[2].style.display="none"
        }

       
})