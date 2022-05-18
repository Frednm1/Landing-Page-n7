        $(function(){
            $("#hamburger").click(function(){
                var menu = $(".menu-mobile-display");
                var display = menu.css('display')
                if(display == "none"){
                    document.getElementById('hamburger').src = "assets/close.png"
                    menu.fadeIn();
                }else{
                    document.getElementById('hamburger').src = "assets/hamburger.png"
                    menu.fadeOut();
                }
                
            })
        })
        
        window.addEventListener("load",function(){
            var width = this.window.innerWidth;
            console.log(width)
            if(width >1080){
                let box1 = document.getElementsByClassName('target')[0];
                let box2 = document.getElementsByClassName('target')[1];
                let box3 = document.getElementsByClassName('target')[2];
                window.addEventListener("scroll", listener2 = function(){
                    altura2 = window.scrollY;
                    
                    if(altura2 > 100){
                        box1.classList.add('animate')
                        box2.classList.add('animate')
                        box3.classList.add('animate')
                    }
                })
            

                window.addEventListener("scroll",listener = function(){
                    altura = window.scrollY;
                    if(altura>800){
                        let valueDisplays = document.querySelectorAll('.num');
                        let interval = 1;
                        valueDisplays.forEach((valueDisplays)=>{
                                let startValue = 999700;
                                let endValue = parseInt(valueDisplays.getAttribute("data-val"));
                                let duration = Math.floor(interval/endValue);
                                let counter = setInterval(function(){
                                    startValue += 1;
                                    valueDisplays.textContent = startValue;
                                    if(startValue == endValue){
                                        clearInterval(counter);
                                        valueDisplays.textContent = "1.000.000"
                                    }
                                },duration);
                            }); 
                        
                        window.removeEventListener("scroll",listener) 
                        } 
                })

            }else{
                let number = document.getElementsByClassName('num')[0];
                number.textContent = "1.000.000"
                let box1 = document.getElementsByClassName('target')[0];
                let box2 = document.getElementsByClassName('target')[1];
                let box3 = document.getElementsByClassName('target')[2];
                box1.removeAttribute("data-anime")
                box2.removeAttribute("data-anime")
                box3.removeAttribute("data-anime")
            }
        })

        
        



        
               
        
            

         
                
                
                
                
            
