const productos = [

    {
        "id": "1",
        "nombre": "inter",
        "url": "https://i.ibb.co/dgjzjvK/images-q-tbn-ANd9-Gc-TUtrjy-hxo-S7itymm994-PWb1-o-SLUZMo38-Fg-usqp-CAU.jpg",
        "tipo": "camisetas",
        "precio": 2000,
        "stock": 5,
        "cant": 0
    },
    {
        "id": "2",
        "nombre": "defensa y justicia",
        "url": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
        "tipo": "camisetas",
        "precio": 1500,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "3",
        "nombre": "atletico madrid",
        "url": "https://i.ibb.co/Z2zDQ6y/images-q-tbn-ANd9-Gc-Re-FPQu-FEjev-D6-YS2-NTIug-Fx-X-fsjkr-Jucp-BQ-usqp-CAU.jpg",
        "tipo": "camisetas",
        "precio": 2500,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "4",
        "nombre": "boca",
        "url": "https://i.ibb.co/cgsvGpL/images-q-tbn-ANd9-Gc-RYp-WVv-PP3-SU9-C-s1cxww-4v-F9ea-CYd-Eg8lpg-usqp-CAU.jpg",
        "tipo": "camisetas",
        "precio": 2000,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "5",
        "nombre": "psg",
        "url": "https://i.ibb.co/52DSLcg/images-q-tbn-ANd9-Gc-Til-RUA4u4-VPSO2stk-XFd-Lkd-Ufey-Pw-A6-VOYpn-N-JUJvoqsqr-BG1-Nb-TPbsl-JYy-Uk-Re.jpg",
        "tipo": "camisetas",
        "precio": 3000,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "6",
        "nombre": "real madrid",
        "url": "https://i.ibb.co/zhSGT73/images-q-tbn-ANd9-Gc-RBw-Tp-Kj-J-uwdb34-Wz-Wc-H-bjy-ASQm-X5li-LGb-Q-usqp-CAU.jpg",
        "tipo": "camisetas",
        "precio": 2800,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "7",
        "nombre": "buzo boca",
        "url": "https://i.ibb.co/RHY1gvK/images-q-tbn-ANd9-Gc-TEIij-Rh-Dbdw0w-Sg-Qp-SJr-UQw-Ktuvv7-WXFVWpg-Thxh3-TKb-Yuc-Pupy-Kon-T9-q-Sqpcp6.jpg",
        "tipo": "buzos",
        "precio": 4000,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "8",
        "nombre": "buzo bayern",
        "url": "https://i.ibb.co/n8mx8dF/images-q-tbn-ANd9-Gc-R4-Do0c-UTRx-UYCr1-FJl4-OWR-v-Tbvu2-Jm3-R24-Q-usqp-CAU.jpg",
        "tipo": "buzos",
        "precio": 4200,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "9",
        "nombre": "buzo velez",
        "url": "https://i.ibb.co/nMRbmC1/images-q-tbn-ANd9-Gc-Skjv-K1-N84d-Ng4n-KGwr-F8y-Yzdr-Hf-W-131-A82w-usqp-CAU.jpg",
        "tipo": "buzos",
        "precio": 3500,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "10",
        "nombre": "campera chacarita",
        "url": "https://i.ibb.co/0GvW6Dn/images-q-tbn-ANd9-Gc-To8-Zvhotm2z78h-FB5-l-U-cj-RAi91-Cj-Anp-Ga-Q-usqp-CAU.jpg",
        "tipo": "camperas",
        "precio": 4600,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "11",
        "nombre": "campera boca",
        "url": "https://i.ibb.co/JzRXY1N/images-q-tbn-ANd9-Gc-RQk-MLJP1-B9t8-Ab-L-BW28-Z3kd-FXgv-Tw-Ox8gg-usqp-CAU.jpg",
        "tipo": "camperas",
        "precio": 5000,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "12",
        "nombre": "campera colon",
        "url": "https://i.ibb.co/3vGHG0v/images-q-tbn-ANd9-Gc-TNJ9-Kg-In-Q5-O2-YRTT-5y-NXC1-BH24gmp-KJjbg-usqp-CAU.jpg",
        "tipo": "camperas",
        "precio": 4600,
        "stock": 5,
        "cant": 0

    },
    {
        "id": "13",
        "nombre": "campera ferro",
        "url": "https://i.ibb.co/5s19dpn/images-q-tbn-ANd9-Gc-TBOMZGVi5-HTr-Dv-Ppt-VZkkc-TSuoga2-BHHLIn-A-usqp-CAU.jpg",
        "tipo": "camperas",
        "precio": 4100,
        "stock": 5,
        "cant": 0

    }

]




/*------------------------------ MVC ------------------------------*/
class ProductoView {

    listarProductos(padre, data) {
        let html = '';
        let prods = []
        let i = 0
        for (const producto of data){ 
        //for (let i = 0; i < data.length; i++) {
            html += `<div class=" card bg-secondary bg-card " id="prod${producto.id}">
             <div class="card-body mx-auto">
      <a href=${producto.url}><img src=${producto.url} alt="producto" border="0"  /></a>
      <br>
      <p>precio: ${producto.precio}<p/>
      <p>Disponibles: ${producto.stock}<p/>
      
      
      
      <button class="btn btn-outline-info btn-block menos" id="menosButton${producto.id}" onclick="restarCant(${producto.id})"  > - </button>
      <span id="${producto.id}" class="num"  > 1 </span>
      <button id="masButton${producto.id}"class="btn btn-outline-info btn-block mas" onclick="sumarCant(${producto.id})" > +  </button><br/><br/>
      <button id="add-button${producto.id}" class="btn btn-outline-info btn-block" onclick="agregarAlCarrito(${producto.id})" >Agregar</button>
     
      </div>
     
      </div>

      `

        }

        $(padre).html(html);
       

    }

    listarCart(padre, data) {

        let html = '';
      

        console.log(data);

        for (let i = 0; i < data.length; i++) {
            html += `<div class=" card bg-secondary bg-card  " id="prod${data[i].id}">
             <div class="card-body mx-auto cart ">
      <a href=${data[i].url}><img src=${data[i].url} alt="producto" border="0"  /></a>
      <br/>
      <p>precio: ${data[i].precio}<p/>
      <p>Cantidad de unidades: ${data[i].cant}<p/>
      
      <button id="quitar-button${data[i].id}" class="btn btn-outline-info btn-block" onclick="quitarDelCarrito(${data[i].id})" )" >Quitar</button>
      <button id="vaciar" class="btn btn-outline-info btn-block vaciarC" )"  onclick="vaciarCarrito()">Vaciar Carro</button>
      
      </div>
      </div>
      
      `

        }
        $(padre).html(html);
     
        
        //$(".btnComprar").click(callback);
        


    }

}
/*------------------------------ MVC ------------------------------*/
class ProductoController {

    constructor() {
        this.vista = new ProductoView();
    }

    list() {

        this.vista.listarProductos("#prod", productos)
    }

    camisetas() {
        const camisetas = productos.filter(e => e.tipo === "camisetas")
        this.vista.listarProductos("#prod", camisetas)

    }
    buzos() {
        const buzos = productos.filter(e => e.tipo === "buzos")
       
        this.vista.listarProductos("#prod", buzos)
        

    }
    camperas() {
        const camperas = productos.filter(e => e.tipo === "camperas")
        this.vista.listarProductos("#prod", camperas)

    }

    cart() {
        const prodsCart = []
        //console.log(prodsCart);
        let clave=""
        let temp
        for (let i = 0; i < localStorage.length; i++) {
            clave = localStorage.key(i);
           
            temp = localStorage.getItem(clave);
            temp = JSON.parse(temp);
            prodsCart[i] = temp
            console.log(prodsCart);


        }
        this.vista.listarCart("#prod", prodsCart)

    }
    search(prods) {
        const prueba = productos.filter(e => e.nombre.includes(prods.toLowerCase()))

        this.vista.listarProductos("#prod", prueba)

    }

}


const app = new ProductoController();

/*------------------------------ rutas del sitio ------------------------------*/

const routes = [
    { path: '/', action: 'listar' },
    { path: '/camisetas', action: 'camisetas' },
    { path: '/buzos', action: 'buzos' },
    { path: '/camperas', action: 'camperas' },
    { path: '/cart', action: 'cart' },
    { path: '/search', action: 'search' }
];

const ErrorComponent = (padre) => {
    $(padre).html("<h2>Error 404</h2>");
}

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined);

const router = () => {

    const path = parseLocation();
    const { action = 'error' } = findActionByPath(path, routes) || {};

    switch (action) {
        case 'listar':
            app.list();
            break;
        case 'camisetas':
            app.camisetas();
            break;
        case 'buzos':
            app.buzos();
            break;
        case 'camperas':
            app.camperas();
            break;
        case 'cart':
            app.cart();
            break;
        case 'search':
            $("#searchButton").click(() => {
                let ingreso = $("#searchInput").val();
                app.search(ingreso);
            })

            break;
        default:
            ErrorComponent('#prod')
            break;
    }

};

$(window).on('load', function () {
    router();
});

$(window).on('hashchange', function () {
    router();
});

/*------------------------------ aumento del boton mas para agregar mas de una unidad ------------------------------*/
function sumarCant(producto) {
    //let tmp = productos[producto].id
    let tmp = producto
    let contador = $(`#${tmp}`).html();
    contador = parseInt(contador);
    contador += 1;
    if (contador < productos[producto].stock) {
        $(`#${tmp}`).html(contador);
    }
    else {
        $(`#${tmp}`).html(productos[producto].stock);
    }

}
/*------------------------------ restar unidad ------------------------------*/
function restarCant(producto) {
    //let tmp = productos[producto].id
    let tmp = producto
    let contador = $(`#${tmp}`).html();
    contador = parseInt(contador);
    contador -= 1;
    if (contador > 1) {
        $(`#${tmp}`).html(contador);
    }
    else {
        $(`#${tmp}`).html(1);
    }

}
/*------------------------------ Agregar producto al carrito ------------------------------*/
function agregarAlCarrito(producto) {
    //let tmp = productos[producto].id 
    let tmp = producto
    //console.log(tmp);
    //productos[producto].cant=productos[producto].cant+1;
    let contador = $(`#${tmp}`).html();
    let count = $("#contar").html()
    let index= productos.findIndex(prod=>prod.id===producto.toString())
    //console.log(index);
    if(tmp in localStorage){
        productos[index].cant+=parseInt(contador);
        localStorage.setItem(`${producto}`, JSON.stringify(productos[index]));
    }
    else{
        $("#contar").html(parseInt(count) + 1)
        productos[index].cant+=parseInt(contador);
        
        localStorage.setItem(`${producto}`, JSON.stringify(productos[index]));
        //console.log(localStorage);
    }


}

/*------------------------------ Quitar producto del carrito ------------------------------*/

function quitarDelCarrito(producto){
    let tmp=producto
    let contador = $(`#${tmp}`).html();
    let count = $("#contar").html()
    let index= productos.findIndex(prod=>prod.id===producto.toString())
    //console.log(index);
    localStorage.removeItem(`${producto}`);
    productos[index].cant=0;
    $("#contar").html(parseInt(count) - 1)
    app.cart();

}

/*------------------------------ Vaciar carrito ------------------------------*/
function vaciarCarrito(){
    for (const producto of productos){
        producto.cant=0
    }
    localStorage.clear()
    alert("el carro esta vacio")
    $("#contar").html(0)
    app.cart()

}


localStorage.clear()