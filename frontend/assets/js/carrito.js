(function () {
    "use strict";


    const obtenerDatos = (token) =>{    

        let url = 'http://localhost:3000/api/v1/orders/'      
        const fetchData = {
            method: 'GET',            
        }  
        
        fetch(url,fetchData)
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                const contenedor = document.querySelector('.list-products')
                data.forEach(pastel => {


                    
                    if (pastel.idPayment == token) {
                        console.log(pastel)

                        let url = 'http://localhost:3000/api/v1/products/' + pastel.idProduct;
                        const fetchData = {
                            method: 'GET',           
                        } 
                        fetch(url,fetchData)
                        .then(response => response.json())
                        .then(function (pastel) {

                            let row = document.createElement('div')
                            let item = document.createElement('div');
                            let col1 = document.createElement('div')
                            let img = document.createElement('img');
                            let details = document.createElement('div')
                            let col2 = document.createElement('div')
                            let card_title = document.createElement('h3')
    
       
                            let card_text = document.createElement('p');
                            
    
                            row.className = "row"
                            item.className = "items";
                            col1.className = "col-4";
                            img.className = "img-fluid";
                            img.src = './assets/img/' + pastel.image;
                            col2.className = "col-4 offset-1";  
                            details.className = 'details' 
                            
                            card_title.innerHTML = pastel.name
                            card_text.innerHTML = pastel.price    
    
                            col1.appendChild(img);
                            details.appendChild(card_title);
                            details.appendChild(card_text);
                            col2.appendChild(details)
                            // item.appendChild(col1);
                            // item.appendChild(col2);
                            row.appendChild(col1);
                            row.appendChild(col2);
                            contenedor.appendChild(row)                             
                            
                        })

 
                    }
                });

            })
    }
    obtenerDatos(localStorage.getItem('token'))
    
})()