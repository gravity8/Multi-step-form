let formControl = document.querySelector('.form-control')
let toggle1 = document.querySelector('.step1')
let toggle2 = document.querySelector('.step2')
let toggle3 = document.querySelector('.step3')
let toggle4 = document.querySelector('.step4')
let firstStep = document.querySelector('.first-step')
let secondStep = document.querySelector('.second-step')
let thirdStep = document.querySelector('.third-step')
let fourthStep = document.querySelector('.fourth-step')
let fifthStep = document.querySelector('.fifth-step')

let Header = document.querySelectorAll('.HeaderText')
let paragraph = document.querySelectorAll('.paragraphText')
let goBack = document.querySelector('.goback')
let submitFormButton = document.querySelector('#submit-form')
let formSpace = document.querySelector('.form-space')


formControl.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formName = document.querySelector('.name').value;
    let formEmail =document.querySelector('.email').value;
    let formPhoneno= document.querySelector('.phoneNo').value;
    let errorMessages= document.getElementsByClassName('error-Message')
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
        if(formName!=""&&formEmail!=""&&formPhoneno!=""){
            submitFormButton.style.display='block'
            submitFormButton.click()
        }

       
})


let content = {
    'step1':['Personal info','Please provide your name, email address, and phone number.'],
    'step2':['Select your plan', 'You have the option of monthly or yearly billing.' ],
    'step3': ['Pick add-ons','Add-ons help enhance your gaming experience.'],
    'step4':['Finishing up', 'Double-check everything looks OK before confirming.']
}


click =1
click1=1
submitFormButton.addEventListener('click',()=>{
    if(click<4){
                if(click==1 && toggle1.classList.contains('active')){
                    goBack.style.display="block"
                    formControl.style.display='none'
                    toggle1.classList.remove('active')
                    toggle2.classList.add('active')
                    Header[1].innerText= content.step2[0]
                    paragraph[1].innerText=content.step2[1]
                    firstStep.style.display='none'
                    secondStep.style.display='block'
                    thirdStep.style.display='none'
                    fourthStep.style.display='none'
                    fifthStep.style.display ='none'

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
                    firstStep.style.display='none'
                    secondStep.style.display='block'
                    thirdStep.style.display='block'
                    fourthStep.style.display='none'
                    fifthStep.style.display ='none'
                   
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
                    firstStep.style.display='none'
                    secondStep.style.display='block'
                    thirdStep.style.display='none'
                    fourthStep.style.display='block'
                    fifthStep.style.display ='none'
                    
                }
        click+=1        
    }
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
            firstStep.style.display='block'
            secondStep.style.display='none'
            thirdStep.style.display='none'
            fourthStep.style.display='none'
            fifthStep.style.display ='none'
            
        }
}
})

let selections = document.querySelectorAll('.selection')


function checkedvalidate(){
    if(document.querySelector("#check").checked==true){
    document.querySelector('.monthly').style.color='hsl(231, 11%, 63%)'
    document.querySelector('.yearly').style.color='hsl(213, 96%, 18%)'
    document.getElementsByClassName('selections')[1].classList.add('display-active')
    document.getElementsByClassName('selections')[0].classList.remove('display-active')
    goBack.classList.add('yearly-goback')
    submitFormButton.classList.add('yearly-nextstep')
}
else{
    document.querySelector('.monthly').style.color='hsl(213, 96%, 18%)'
    document.querySelector('.yearly').style.color='hsl(231, 11%, 63%)'
    document.getElementsByClassName('selections')[0].classList.add('display-active')
    document.getElementsByClassName('selections')[1].classList.remove('display-active')
    goBack.classList.remove('yearly-goback')
    submitFormButton.classList.remove('yearly-nextstep')
}
}
checkedvalidate()

/// second method

selections.forEach((el)=>{
    el.addEventListener('click',()=>{
        if(!el.classList.contains('active')){
            for(let i=0; i< selections.length; i++){
                selections[i].classList.remove('active')
            }
            el.classList.add('active')
        }  
    })
})





