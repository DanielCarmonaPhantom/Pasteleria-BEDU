(function () {
    "use strict";


    const obtenerDatos = (categorys) =>{    

        let url = 'http://localhost:3000/api/v1/products'        
        const fetchData = {
            method: 'GET',            
        }  

        
        fetch(url,fetchData)
            .then(response => response.json())
            .then(function (data) {
                let indexproducto = 0
                const contenedor = document.querySelector('#contenedor')

                data.forEach(pastel => {
                    
                    if (pastel.category == categorys ) {
                        
                        let col = document.createElement('div')
                        let card = document.createElement('div');
                        let img = document.createElement('img');
                        let card_body = document.createElement('div');
                        let card_title = document.createElement('h5')
                        let card_text = document.createElement('p');
                        let btn = document.createElement('a');
                        

                        col.className = "col-lg-4 col-md-6 mt-5"
                        card.className = "card";
                        card.style = "width: 18rem;";
                        img.className = "card-img-top";
                        img.src = './assets/img/' + pastel.image;
                        card_body.className = "card-body";
                        card_title.className = "card-title";
                        card_text.className = "card-text";
                        btn.className = "btn btn-details";  
                        
                        card_title.innerHTML = pastel.name
                        card_text.innerHTML = pastel.price
                        btn.innerHTML = 'Ver Detalles'
                        btn.href= 'orden.html'

                        card_body.appendChild(card_title);
                        card_body.appendChild(card_text);
                        card_body.appendChild(btn);
                        card.appendChild(img);
                        card.appendChild(card_body)
                        col.appendChild(card)
                        contenedor.appendChild(col)  
                    }
                });
                    const botones = document.querySelectorAll('.btn-details')

                    
                    for (let i = 0; i < botones.length; i++) {
                        botones[i].addEventListener('click', ()=>{

                            let url = 'http://localhost:3000/api/v1/payment'; 
                            if (localStorage.getItem('token')) {
                                console.log("Mi id es: " + localStorage.getItem('token'))
                                localStorage.setItem('idProduct', i+1) 
                            }else{
                                const fetchData = {
                                    method: 'POST',            
                                }  
                                fetch(url, fetchData)
                                    .then(response => response.json())
                                    .then(function (data) {
                                        const { id } = data;
                                        localStorage.setItem('token',id)
                                        localStorage.setItem('idProduct', i+1) 
                                    })                                    
                            }
                        })                        
                    }
            })
    }
    obtenerDatos('Cake')
    
})()