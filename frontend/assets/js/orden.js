(function () {
    
    function pintarProducto() {
        console.log("Hola")
        let url = 'http://localhost:3000/api/v1/products/' + localStorage.getItem('idProduct');
        const fetchData = {
            method: 'GET',           
        }     
        fetch(url,fetchData)
            .then(response => response.json())
            .then(function (data) {
                console.log(data)

                const name_cake = document.querySelectorAll('.name-cake')

                for (let i= 0; i < name_cake.length; i++) {
                    name_cake[i].innerHTML = data.name
                    
                }
                console.log(data.name)
                
            })
    }
    pintarProducto()
    
})()