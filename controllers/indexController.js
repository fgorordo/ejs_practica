const indexController = {
  // About se muestra dinamicamente
  index: (req, res) => {
    let tituloDelSitio = 'Pimienta & Sal';
    let primerParrafo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.';
    let segundoParrafo = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    res.render('index.ejs', {
      menu:menu,
      tituloDelSitio: tituloDelSitio,
      primerParrafo: primerParrafo,
      segundoParrafo: segundoParrafo
  })
  
  // Detalle del menu se muestra dinamicamente
  },
  detalleMenu: (req,res) => {

    let productoSeleccionado = menu.find(element => {
      return element.id === parseInt(req.params.id);
    })

    if(productoSeleccionado.descripcion === undefined) {
      productoSeleccionado.descripcion = 'Plato tipico'
    }
    res.render('detalleMenu', {
      productoSeleccionado : productoSeleccionado
    })

    // menuID = req.params.id
    // let titulo = "";
    // let descripcion= "";
    // let precio = "";
    // menu.forEach(element => {
    //   if (element.id === parseInt(menuID)) {
    //     titulo = element.titulo;
    //     precio = element.precio;
    //     if (element.descripcion === undefined) {
    //       descripcion = "Plato tipico"
    //     } else {
    //       descripcion = element.descripcion
    //     }
    //   }
    // })
    // res.render('detalleMenu.ejs', {
    //   titulo: titulo,
    //   descripcion:descripcion,
    //   precio: precio
    // })
  }
}


const menu = [
  {
    id : 1,
    titulo: 'Carpaccio fresco',
    descripcion: 'Entrada Carpaccio de salm??n con c??tricos',
    precio: 'U$S 65.50',
    product_img: '/images/carpaccio-de-salmon.jpg'
  },
  {
    id: 2,
    titulo: 'Rissoto de berenjena',
    descripcion: 'Rissoto de berenjena y queso de cabra',
    precio: 'U$S 47.00',
    product_img: '/images/Risotto-berenjena-queso-cabra.jpg'
  },
  {
    id: 3,
    titulo: 'Mousse de arroz',
    descripcion: 'Mouse de arroz con leche y armoa de azahar',
    precio: 'U$S 27.50',
    product_img: '/images/Mousse-de-arroz-con-leche.jpg'
  },
  {
    id: 4,
    titulo: 'Esp??rragos blancos',
    descripcion: 'Esp??rragos blancos con vinagreta de verduras y jam??n ib??rico',
    precio: 'U$S 37.50',
    product_img:'/images/esparragos.png'
  },
  {
    id: 5,
    titulo:'??oquis con salsa roja',
    descripcion: '??oquis con salsa roja tipo bolognesa (Pan incluido)',
    precio: 'U$S 12.00',
    product_img:'/images/??oquis.jpg'
  }
  
]
module.exports= indexController;