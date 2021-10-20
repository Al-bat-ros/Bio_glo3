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
               $onoffBottomWell = document.getElementById('myonoffswitch-two'), // switch наличи днища
               $selectBox = document.querySelectorAll('.select-box'), 
               panelHeadOpen = ['headingOne', 'headingTwo', 'headingThree', 'headingFour'], //шапки вкладок конструктора
               panelCallapseOpen = ['collapseOne', 'collapseTwo', 'collapseThree', 'collapseFour'], //кнопки следующий шаг
               sumObj = {},
               // объект с ценами 
               selectOptionObj = {
                    typeSeptOne: 10000, // однокамерный 
                    typeSeptTwo: 15000, // двухкамерный

                    diameterOneDef: 0,// диаметр первый колодец 1.4м
                    diameterOne: 20, // диаметр первый колодец 2м  
                    numberRingsOneOne: 0, // первый колодец, одно кольцо
                    numberRingsOneTwo: 30, // первый колодец, два кольца
                    numberRingsOneThree: 50, // первый колодец, три кольца
                    
                    diameterTwoDef: 0,// диаметр второй колодец 1.4м
                    diameterTwo: 20, // диаметр второй колодец 2м
                    numberRingsTwoOne: 0, // второй колодец, одно кольцо
                    numberRingsTwoTwo: 20, // второй колодец, два кольца
                    numberRingsTwoThree: 40 // второй колодец, три кольца
               };
        
               
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
                      let sumResult = 0;
                       sumObj[obj] = result;
                        
                    for(let key in sumObj){
                        if(key === 'typeSept'){
                            sumResult = sumObj[key];
                        } else {
                            sumResult = sumResult * (1 + sumObj[key]/100);
                        }     
                    }
                        enterResult(Math.round(sumResult))
                        sumResult = 0;      
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
                            counterResult('typeSept', selectOptionObj.typeSeptOne);
                            
                        } else {
                            counterResult('typeSept', selectOptionObj.typeSeptTwo);
                        }                     
                   })  
               }
               typeSeptick();

            // Диаметр и количество колец
               const diameterNamberRings = () => {

                    const summFunc = (target, index, targetSelect) => {
                        
                       if(index === 0 && targetSelect === 0){counterResult('diameterOne', selectOptionObj.diameterOneDef)} //диаметр первый колодец 1.4м
                        if(index === 0 && targetSelect === 1){counterResult('diameterOne', selectOptionObj.diameterOne)} // диаметр первый колодец 2м 
                        if(index === 1 && targetSelect === 0){ counterResult('numberRingsOne', selectOptionObj.numberRingsOneOne) } // первый колодец, одно кольцо
                        if(index === 1 && targetSelect === 1){ counterResult('numberRingsOne', selectOptionObj.numberRingsOneTwo) } // первый колодец, два кольца
                        if(index === 1 && targetSelect === 2){counterResult('numberRingsOne', selectOptionObj.numberRingsOneThree) } // первый колодец, три кольца
                        
                        if(index === 2 && targetSelect === 0){counterResult('diameterTwo', selectOptionObj.diameterTwoDef) } // диаметр второй колодец 1.4м
                        if(index === 2 && targetSelect === 1){counterResult('diameterTwo', selectOptionObj.diameterTwo) } // диаметр второй колодец 2м
                        if(index === 3 && targetSelect === 0){counterResult('numberRingsTwo', selectOptionObj.numberRingsTwoOne) } // второй колодец, одно кольцо
                        if(index === 3 && targetSelect === 1){counterResult('numberRingsTwo', selectOptionObj.numberRingsTwoTwo) }  // второй колодец, два кольца
                        if(index === 3 && targetSelect === 2){counterResult('numberRingsTwo', selectOptionObj.numberRingsTwoThree) } // второй колодец, три кольца
                    }

                   $selectBox.forEach((box, index) => {
                       box.addEventListener('change', (event) => {
                            let target = event.target,
                                targetSelect = target.selectedIndex;
                                
                            summFunc(target, index, targetSelect)
                            

                       })
                   
                    
                   })
              

               }
               diameterNamberRings();

            // наличие днища у колодца
               const bottomWell = () => { 
                    $onoffBottomWell.addEventListener('change', (event) => {
                        if($onoffBottomWell.checked){
                            console.log(true)
                            counterResult('bottWell', 10) 
                        } else {
                            console.log(false)
                            counterResult('bottWell', 20)
                        }
                    })
               }
               bottomWell();
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


