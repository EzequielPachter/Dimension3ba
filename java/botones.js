      let botonInfoEnvios = document.getElementById("info-envios")

      botonInfoEnvios.addEventListener("click", respuestaClick)
      function respuestaClick(){
        alert("Respuesta evento");
      }
      const precioTuqueras = 1000; 
      let tuq = document.getElementById("add-cart-tuqueras")

      tuq.addEventListener("click", agregarTuqueras)
      function agregarTuqueras(){
        let cantidadTuq = parseInt(prompt("ingrese cantidad de tuqueras que quiere comprar, el valor es por 10U"));
        console.log(cantidadTuq);
        var totalTuqueras = precioTuqueras * cantidadTuq;
        return totalTuqueras
      }
      
      let Carro = document.getElementById("cart")
      Carro.addEventListener("click", totalCompra)
      function totalCompra(){
        totalcompra = totalTuqueras + " "; 
        alert(totalcompra);
      }