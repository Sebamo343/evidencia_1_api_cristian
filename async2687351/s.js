const axios = require('axios')

const url='https://api-colombia.com/api/V1/Region'

//ejecutar asycrona con promesas
axios.get (url)
     .then((respuesta)=>{
        //console.log(respuesta.data)
        let regiones = respuesta.data
        regiones.forEach(region => {
                    console.log(region.name)
                    console.log('--------------')
                });
    })
    
     .catch((error)=>{
          console.log(error.code)
     })