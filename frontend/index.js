(function () {
    "use strict";
    

    

    


    const obtenerDatos = (categorys) =>{    

        
        
        // function crearNode(element) {
        //     return document.createElement(element)
        // }
        // function append(parent,el) {
        //     return parent.appendChild(el)
        // }

        let url = 'http://localhost:3000/api/v1/products'        
        const fetchData = {
            method: 'GET',            
        }  
        fetch(url,fetchData)
            .then(response => response.json())
            .then(function (data) {
                let productos = data
                return productos.map(function (productos) {
                    const contenedor = document.querySelector('#contenedor')

                    if (productos.category == categorys ) {
                        let col = document.createElement('div')
                        let card = document.createElement('div');
                        let img = document.createElement('img');
                        let card_body = document.createElement('div');
                        let card_title = document.createElement('h5')
                        let card_text = document.createElement('p')
                        let btn = document.createElement('a')
                        
                        col.className = "col-lg-4 col-md-6 mt-5"
                        card.className = "card";
                        card.style = "width: 18rem;";
                        img.className = "card-img-top";
                        img.src = './assets/img/' + productos.image;
                        card_body.className = "card-body";
                        card_title.className = "card-title";
                        card_text.className = "card-text";
                        btn.className = "btn btn-details";

                        card_title.innerHTML = productos.name
                        card_text.innerHTML = productos.price
                        btn.innerHTML = 'Ver Detalles'

                        card_body.appendChild(card_title);
                        card_body.appendChild(card_text);
                        card_body.appendChild(btn);
                        card.appendChild(img);
                        card.appendChild(card_body)
                        col.appendChild(card)
                        contenedor.appendChild(col)    
                        
                        const botones = document.querySelectorAll('.btn-details')

                        

        
                        for (let i = 0; i < botones.length; i++) {
                            botones[i].addEventListener('click',()=>{
                                console.log(i)
                            })
                            
                        }
                    }
                })
            })

        
    }
    obtenerDatos('Cake')
    
})()