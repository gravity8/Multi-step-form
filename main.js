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
let diffArea = document.querySelector('.diffArea')
let Header = document.querySelectorAll('.HeaderText')
let paragraph = document.querySelectorAll('.paragraphText')
let goBack = document.querySelector('.goback')
let submitFormButton = document.querySelector('#submit-form')
let formSpace = document.querySelector('.form-space')
let addsonprice= document.querySelectorAll('.adds-on-pricing')

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

if(toggle1.classList.contains('active')){
    firstStep.style.display='block'
    secondStep.style.display='none'
    thirdStep.style.display='none'
    fourthStep.style.display='none'
    fifthStep.style.display ='none'
}

console.log( document.querySelector('.yearly-goback'))
click =1
click1=1
submitFormButton.addEventListener('click',()=>{
    if(click<4){
                if(click==1 && toggle1.classList.contains('active')){
                    goBack.style.display="block"
                    formControl.style.display='none'
                    toggle1.classList.remove('active')
                    toggle2.classList.add('active')
                    toggle3.classList.remove('active')
                    toggle4.classList.remove('active')
                    goBack.style='display:block;'
                    // document.querySelector('.yearly-goback').style='bottom: -'
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
                    Header[2].innerText= content.step3[0]
                    paragraph[2].innerText=content.step3[1]
                    firstStep.style.display='none'
                    secondStep.style.display='block'
                    goBack.style='display:block;'
                    document.querySelector('.next-step').style='display:block;'
                    secondStep.style.backgroundColor='unset'
                    diffArea.style.display='none'
                    thirdStep.style.display='block'
                    fourthStep.style.display='none'
                    fifthStep.style.display ='none'
                    // third stage
                    checks=document.querySelectorAll('#check1')
                    for(let i=0; i<checks.length; i++){
                        checks[0].addEventListener('click',()=>{
                            if(checks[0].checked==false){
                                checks[0].checked==true
                                document.querySelector('#first-addon').style=' border: 1.5px solid hsl(229, 24%, 87%) !important;background-color:none;'

                            }
                            else{
                                checks[0].checked==false
                                document.querySelector('#first-addon').style=' border: 1.5px solid hsl(243, 100%, 62%) !important;background-color:hsla(228, 100%, 84%, 0.131);'
                            }
                        })
                        checks[1].addEventListener('click',()=>{
                            if(checks[1].checked==false){
                                checks[1].checked==true
                                document.querySelector('#second-addon').style=' border: 1.5px solid hsl(229, 24%, 87%) !important;background-color:none;'

                            }
                            else{
                                checks[1].checked==false
                                document.querySelector('#second-addon').style=' border: 1.5px solid hsl(243, 100%, 62%) !important;background-color:hsla(228, 100%, 84%, 0.131);'
                            }
                        })
                        checks[2].addEventListener('click',()=>{
                            if(checks[2].checked==false){
                                checks[2].checked==true
                                document.querySelector('#third-addon').style=' border: 1.5px solid hsl(229, 24%, 87%) !important;background-color:none;'

                            }
                            else{
                                checks[2].checked==false
                                document.querySelector('#third-addon').style=' border: 1.5px solid hsl(243, 100%, 62%) !important;background-color:hsla(228, 100%, 84%, 0.131);'
                            }
                        })

                    }
                     console.log(document.querySelector('.checkbox').checked)
                    if(document.querySelector('.checkbox').checked==true){
                        addsonprice[0].innerText='+$10/yr'
                        addsonprice[1].innerText='+$20/yr'
                        addsonprice[2].innerText='+$20/yr'
                    }
                    else{
                        for(let i= 0; i<addsonprice.length;i++){
                            addsonprice[0].innerText='+$1/mo'
                            addsonprice[1].innerText='+$2/mo'
                            addsonprice[2].innerText='+$2/mo'
                        }
                    }


                   
                }

                if(click==3 && toggle3.classList.contains('active')){
                    goBack.style.display="block"
                    formControl.style.display='none'
                    toggle1.classList.remove('active')
                    toggle2.classList.remove('active')
                    toggle3.classList.remove('active')
                    toggle4.classList.add('active')
                    Header[3].innerText= content.step4[0]
                    paragraph[3].innerText=content.step4[1]
                    firstStep.style.display='none'
                    secondStep.style.display='block'
                    diffArea.style.display='none'
                    thirdStep.style.display='none'
                    fourthStep.style.display='block'
                    fifthStep.style.display ='none'
                    
                }
        click+=1        
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
            firstStep.style.display='none'
            secondStep.style.display='block'
            diffArea.style.display='none'
            thirdStep.style.display='block'
            fourthStep.style.display='none'
            fifthStep.style.display ='none'
        }

        if(click==2 && toggle3.classList.contains('active')){
            goBack.style.display="block"
            formControl.style.display='none'
            toggle1.classList.remove('active')
            toggle2.classList.add('active')
            toggle3.classList.remove('active')
            toggle4.classList.remove('active')
            diffArea.style.display='block'
            Header[1].innerText= content.step2[0]
            paragraph[1].innerText=content.step2[1]

            firstStep.style.display='none'
            secondStep.style.display='block'

            secondStep.style.backgroundColor='#fff'
            thirdStep.style.display='none'
            fourthStep.style.display='none'
            fifthStep.style.display ='none'

           
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

