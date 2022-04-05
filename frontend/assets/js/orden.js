(function () {
    
    function paintProduct() {

        let url = 'http://localhost:3000/api/v1/products/' + localStorage.getItem('idProduct');
        const fetchData = {
            method: 'GET',           
        }     
        fetch(url,fetchData)
            .then(response => response.json())
            .then(function (data) {
                localStorage.setItem('priceProduct', data.price)

                const name_cake = document.querySelectorAll('.name-cake')
                const img_cake = document.querySelectorAll('.img-cake')
                const price_cake = document.querySelectorAll('.price-cake')

                for (let i= 0; i < name_cake.length; i++) {
                    name_cake[i].innerHTML = data.name                    
                }
                
                for (let i = 0; i < img_cake.length; i++) {                    
                    img_cake[i].setAttribute('src', './assets/img/' + data.image)                    
                }
                for (let i = 0; i < price_cake.length; i++) {                    
                    price_cake[i].innerHTML = data.price + ' MX'               
                }
                
                
            })
    }
    paintProduct()

    
    
})()

const order_add = document.querySelector('#order-add')
    order_add.addEventListener('click', async ()=>{


        let url = 'http://localhost:3000/api/v1/orders';
        
        let quantity = document.querySelector('#inputGroupSelect01').value;
        let size = document.querySelector('#inputGroupSelect02').value;

        
        let price = parseFloat(localStorage.getItem('priceProduct')) * quantity
        

        let params = {
            idPayment: parseInt(localStorage.getItem('token')),
            idProduct: parseInt(localStorage.getItem('idProduct')) ,
            amount: parseInt(quantity),
            size: parseInt(size),
            price: parseFloat(price)
        }        

        const fetchData = {            
            method: 'POST',    
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json'}   
                
        }  
        fetch(url, fetchData)
            .then(response => response.json())
            .then(function (data) {
                
            })

         
    })