window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Модальное окно 1
    const modalOne = () => {
        const callBtn = document.querySelectorAll('.call-btn'),
              popupCall = document.querySelector('.popup-call'); 
              
        callBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupCall.style.display = 'block';
               
            });
        });

        popupCall.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popupCall.style.display = 'none';
            }else if (target.classList.contains('popup-call')){
                popupCall.style.display = 'none';
            }
        });
  
    }; 
    modalOne();
    
    // Модальное окно 2
    const modalTwo = () => {
        const discountBtn = document.querySelectorAll('.discount-btn'),
              popupDiscount = document.querySelector('.popup-discount');
              
              discountBtn.forEach((elem) => {
                    elem.addEventListener('click', () => {
                        popupDiscount.style.display = 'block';
                    });
              });

              popupDiscount.addEventListener('click', (event) => {
                let target = event.target;
                console.log(target);
                if (target.classList.contains('popup-close')){
                    popupDiscount.style.display = 'none';
                } else if (target.classList.contains('popup-discount')){
                    popupDiscount.style.display = 'none';
                }
              });

    };
    modalTwo();

    // Аккордеон 2 
    const questions = () => {
        const accordionTwo = document.getElementById('accordion-two'),
              collapseOneTwo = document.getElementById('collapseOne-two'),
              collapseTwoTwo = document.getElementById('collapseTwo-two'),
              collapseThreeTwo = document.getElementById('collapseThree-two');

              const addClass = (panelOne, panelTwo, panelThree) => {
                panelOne.classList.add('in');
                panelTwo.classList.remove('in');
                panelThree.classList.remove('in');
              }

        accordionTwo.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target.closest('.panel-heading');
          

            if (target !== null && 'headingOne-two' === target.id){
                addClass(collapseOneTwo, collapseTwoTwo, collapseThreeTwo);
              
            
            }else if (target !== null && 'headingTwo-two' === target.id){
                addClass(collapseTwoTwo, collapseOneTwo, collapseThreeTwo);
              

            }else if (target !== null && 'headingThree-two' === target.id){
                addClass(collapseThreeTwo, collapseTwoTwo, collapseOneTwo);
                
            }
           
        });

    };
    questions();

    // Скидка
    const discount = () => {
        const popupCheck = document.querySelector('.popup-check'),
              checkBtn = document.querySelector('.check-btn');
              
              checkBtn.addEventListener('click', () => {
                popupCheck.style.display = 'block';
              }); 

              popupCheck.addEventListener('click', (event) => {
                let target = event.target;
                if (target.classList.contains('popup-close')){
                    popupCheck.style.display = 'none';
                }else if (target.classList.contains('popup-check')){
                    popupCheck.style.display = 'none';
                };
              });
    };
    discount();  

    // Калькулятор аккорд
     const colcAccordion = () => {
         const calcResult = document.getElementById('calc-result'), // вывод результата
               panelGroup = document.querySelector('.panel-group'), // панель калькулятора
               headingArrCalc = ['headingOne', 'headingTwo', 'headingThree', 'headingFour'],
               objCallapse = {
                'headingOne':'collapseOne',
                'headingTwo':'collapseTwo',
                'headingThree':'collapseThree',
                'headingFour':'collapseFour'
               };
            
               const openAcord = (selector) => {

                  for ( let elem in objCallapse){

                        if(objCallapse[elem] === objCallapse[selector]){
                            document.getElementById(objCallapse[elem]).classList.add('in');
                        } else {
                            document.getElementById(objCallapse[elem]).classList.remove('in');
                        }

                  }
                    
               }

               panelGroup.addEventListener('click', (event) => {
                    let target = event.target.closest('.panel-heading');
                    
                    headingArrCalc.forEach(elem => {
                       if(target !== null && elem === target.id){openAcord(elem)};
                    });
                     
               })
    }
    colcAccordion();



    //             AppData.prototype.sendForm = function(){
    
                    
    //                const input = document.querySelectorAll('input'),
    //                      form = document.querySelectorAll('form');
          
    //                 form.forEach((elem) => {
    //                     elem.addEventListener('submit', (event) => {
    //                              event.preventDefault();
                                 
    //                               const formData = new FormData(elem);
    //                               let body = {};
                              
    //                               formData.forEach((val, key) => {
    //                               body[key] = val;
    //                               });
    //                              const obj =  Object.assign(body, this.septic);
    
    //                               postData();
    //                       });
    //                 });
    //                 const postData = (obj) => { 
    //                   fetch('./server.php', {
    //                       method: 'POST',
    //                       headers: {
    //                           'Content-Type': 'application/json'
    //                       },
    //                       septic: JSON.stringify(obj)
          
    //                   })
    //                       .then((response) => {
    //                           if (response.status !== 200){
    //                               throw 'error';
    //                           }
    //                       return(response.json);
    //                   })
    //                   .then((response) => {
                      
    //                   })
    //                   .catch((error) => console.error(error));
    //               };
                     
    //             };
    
    //     appData.start();

    // };
    // 


});


