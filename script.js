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
              questArr = ['headingOne-two', 'headingTwo-two', 'headingThree-two'],
              objCallapseQuest = {
                'headingOne-two' : 'collapseOne-two',
                'headingTwo-two' : 'collapseTwo-two',
                'headingThree-two' :'collapseThree-two'
              };

              const addClass = (element) => {
                  for ( let elem in objCallapseQuest) {
                        if (elem === element) {
                            document.getElementById(objCallapseQuest[elem]).classList.add('in');
                        } else {
                            document.getElementById(objCallapseQuest[elem]).classList.remove('in');
                        }
                  }
              }

        accordionTwo.addEventListener('click', (event) => {
           event.preventDefault();
            let target = event.target.closest('.panel-heading');
          
            questArr.forEach(element => {
                if(target !== null && element === target.id){
                    addClass(element);
                }
            });

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
         const $calcResult = document.getElementById('calc-result'), // вывод результата
               $panelGroup = document.querySelector('.panel-group'), // панель калькулятора
               $onoffTypeSept = document.getElementById('myonoffswitch'), //switch одна/две камеры
               $formControl = document.querySelectorAll('.form-control'), // диаметр и количество колец
               $selectBox = document.querySelectorAll('.select-box'), 
               panelHeadOpen = ['headingOne', 'headingTwo', 'headingThree', 'headingFour'], //шапки вкладок конструктора
               panelCallapseOpen = ['collapseOne', 'collapseTwo', 'collapseThree', 'collapseFour'], //кнопки следующий шаг
               sum = {};
        
               
                //слушатель 
               $panelGroup.addEventListener('click', (event) => {
                   let target = event.target

                   //при нажатие на шапку 
                   panelHeadOpen.forEach((elem) => {  
                    if(document.getElementById(`${elem}`) === target.closest(`${'#'}${elem}`)){
                        panelOpenHead(target.closest(`${'#'}${elem}`).id)
                    }
                   })

                   //при нажатии нп кнопку "СЛЕДУЮЩИЙ ШАГ"
                   panelCallapseOpen.forEach((elem, index) => {  
                  
                     if(target.closest('.construct-btn') != null && target.closest('.construct-btn').closest(`${'#'}${elem}`) === document.getElementById(`${elem}`)){
                        panelOpenButt(document.getElementById(`${elem}`).id, panelCallapseOpen[index + 1])   
                    }
                   })
                
                });

                //открытие вкладок при нажатие шапок конструктора 
               const panelOpenHead = (selector) => {
                   let collapseTab = document.getElementById(selector).nextElementSibling.id
                   

                    panelCallapseOpen.forEach((elem) => {
                        
                        if(collapseTab === elem){
                           
                            document.getElementById(elem).classList.add('in')
                        
                        } else if(collapseTab != elem){
                           
                            document.getElementById(elem).classList.remove('in')
                        
                        }
                    })
                    
               }
               //открытие вкладок при нажатии кнопок следующий шаг
               const panelOpenButt = (selector, nextElem) => {
                
                    if(nextElem){
                        document.getElementById(nextElem).classList.add('in')
                        document.getElementById(selector).classList.remove('in')
                    }
                    
               }

                    
    
               const counterResult = (obj, result) => {
                      let summa = 0;
                       sum[obj] = result;
                        
                    for(let key in sum){
                        if(key === 'typeSept'){
                            summa = sum[key];
                        } else {
                            summa = summa * (1 + sum[key]/100);
                        }
                        console.log(summa)
                    }
                    console.log(sum)
                    //    enterResult(sum)
               }
               
            // вывод результата   
               const enterResult = (num) => {
                      
                     const stepSetInterval = (res) => {
                         if(res) $calcResult.value = res;
                     }
                   
                    let step = 0;
                    let n = 0;
                    const idSet = setInterval(() => {
                        num -= step;
                        if(num === 0){
                            stepSetInterval(String(num))
                        }
                        if (num <= 10 && num !== 0){
                            step = 1;
                        } else {
                            step = Math.round((num*10)/100);
                        }
                        stepSetInterval(n += step);
                        if(num === 0){
                            clearInterval(idSet)
                        } 

                    },10);


               }
               enterResult();
            
            // тип септика
               const typeSeptick = () => {
                   $onoffTypeSept.addEventListener('change', (event) => {
                        if($onoffTypeSept.checked){
                            counterResult('typeSept', 10000);
                            
                        } else {
                            counterResult('typeSept', 15000);
                        }                     
                   })  
               }
               typeSeptick();

            // Диаметр и количество колец
               const diameterNamberRings = () => {

                    const summ = (target, index, targetSelect) => {
                       // console.log(target, index,  targetSelect);
                        if(index === 0 && targetSelect === 1){
                            counterResult('diameterOne', 20)
                        } else if(index === 2 && targetSelect === 1){
                            counterResult('diameterTwo', 20)
                        } else if(index === 1 && targetSelect === 1){
                            counterResult('numberRingsOne', 30)
                        } else if(index === 1 && targetSelect === 2){
                            counterResult('numberRingsOne', 50)
                        }else if(index === 3 && targetSelect === 1){
                            counterResult('numberRingsTwo', 20)
                        } else if(index === 3 && targetSelect === 2){
                            counterResult('numberRingsTwo', 40)
                        }
                    }

                   $selectBox.forEach((box, index) => {
                       box.addEventListener('click', (event) => {
                            let target = event.target,
                                targetSelect = target.selectedIndex;
                                
                            summ(target, index, targetSelect)
                            

                       })
                   
                    
                   })
              

               }
               diameterNamberRings();
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


