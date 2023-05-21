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


let content = {
    'step1':['Personal info','Please provide your name, email address, and phone number.'],
    'step2':['Select your plan', 'You have the option of monthly or yearly billing.' ],
    'step3': ['Pick add-ons','Add-ons help enhance your gaming experience.'],
    'step4':['Finishing up', 'Double-check everything looks OK before confirming.']
}
let toggle1 = document.querySelector('.step1')
let toggle2 = document.querySelector('.step2')
let toggle3 = document.querySelector('.step3')
let toggle4 = document.querySelector('.step4')

let Header = document.querySelector('.HeaderText')
let paragraph = document.querySelector('.paragraphText')
let goBack = document.querySelector('.goback')
let submitFormButton = document.querySelector('#submit-form')
let formSpace = document.querySelector('.form-space')


click =1
click1=1
submitFormButton.addEventListener('click',()=>{
    if(click<4){

                if(click==1 && toggle1.classList.contains('active')){
                    goBack.style.display="block"
                    formControl.style.display='none'
                    toggle1.classList.remove('active')
                    toggle2.classList.add('active')
                    Header.innerText= content.step2[0]
                    paragraph.innerText=content.step2[1]
                }
                if(click==2 && toggle2.classList.contains('active')){
                    goBack.style.display="block"
                    formControl.style.display='none'
                    toggle1.classList.remove('active')
                    toggle2.classList.remove('active')
                    toggle3.classList.add('active')
                    toggle4.classList.remove('active')
                    Header.innerText= content.step3[0]
                    paragraph.innerText=content.step3[1]
                   
                }
                if(click==3 && toggle3.classList.contains('active')){
                    goBack.style.display="block"
                    formControl.style.display='none'
                    toggle1.classList.remove('active')
                    toggle2.classList.remove('active')
                    toggle3.classList.remove('active')
                    toggle4.classList.add('active')
                    Header.innerText= content.step4[0]
                    paragraph.innerText=content.step4[1]
                    
                }
        click+=1
        console.log('click ',click,click1)
      
            
    }
    else(
        console.log("click is now 4")
    )
   
})

goBack.addEventListener('click',()=>{
    click =click-click1

    if(click1<4){
        if(click==3 && toggle4.classList.contains('active')){
            goBack.style.display="block"
            formControl.style.display='none'
            toggle1.classList.remove('active')
            toggle2.classList.remove('active')
            toggle3.classList.add('active')
            toggle4.classList.remove('active')
            Header.innerText= content.step3[0]
            paragraph.innerText=content.step3[1]
        }
        if(click==2 && toggle3.classList.contains('active')){
            goBack.style.display="block"
            formControl.style.display='none'
            toggle1.classList.remove('active')
            toggle2.classList.add('active')
            toggle3.classList.remove('active')
            toggle4.classList.remove('active')
            Header.innerText= content.step2[0]
            paragraph.innerText=content.step2[1]
           
        }
        if(click==1 && toggle2.classList.contains('active')){
            goBack.style.display="none"
            formControl.style.display='block'
            toggle1.classList.add('active')
            toggle2.classList.remove('active')
            toggle3.classList.remove('active')
            toggle4.classList.remove('active')
            Header.innerText=content.step1[0]
            paragraph.innerText=content.step1[1]
            
        }
console.log('click ',click,click1)

    
}
else(
console.log("click is now 4")
)
})


