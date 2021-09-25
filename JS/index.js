const productos = [
    {
        id: "1",
        nombre: "inter",
        url: "https://i.ibb.co/dgjzjvK/images-q-tbn-ANd9-Gc-TUtrjy-hxo-S7itymm994-PWb1-o-SLUZMo38-Fg-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 2000,
        stock: 5,
        cant: 0
    },
    {
        id: "2",
        nombre: "defensa y justicia",
        url: "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 1500,
        stock: 5,
        cant: 0

    },
    {
        id: "3",
        nombre: "atletico madrid",
        url: "https://i.ibb.co/Z2zDQ6y/images-q-tbn-ANd9-Gc-Re-FPQu-FEjev-D6-YS2-NTIug-Fx-X-fsjkr-Jucp-BQ-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 2500,
        stock: 5,
        cant: 0

    },
    {
        id: "4",
        nombre: "boca",
        url: "https://i.ibb.co/cgsvGpL/images-q-tbn-ANd9-Gc-RYp-WVv-PP3-SU9-C-s1cxww-4v-F9ea-CYd-Eg8lpg-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 2000,
        stock: 5,
        cant: 0

    },
    {
        id: "5",
        nombre: "psg",
        url: "https://i.ibb.co/52DSLcg/images-q-tbn-ANd9-Gc-Til-RUA4u4-VPSO2stk-XFd-Lkd-Ufey-Pw-A6-VOYpn-N-JUJvoqsqr-BG1-Nb-TPbsl-JYy-Uk-Re.jpg",
        tipo: "camisetas",
        precio: 3000,
        stock: 5,
        cant: 0

    },
    {
        id: "6",
        nombre: "real madrid",
        url: "https://i.ibb.co/zhSGT73/images-q-tbn-ANd9-Gc-RBw-Tp-Kj-J-uwdb34-Wz-Wc-H-bjy-ASQm-X5li-LGb-Q-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 2800,
        stock: 5,
        cant: 0

    },
    {
        id: "7",
        nombre: "buzo boca",
        url: "https://i.ibb.co/RHY1gvK/images-q-tbn-ANd9-Gc-TEIij-Rh-Dbdw0w-Sg-Qp-SJr-UQw-Ktuvv7-WXFVWpg-Thxh3-TKb-Yuc-Pupy-Kon-T9-q-Sqpcp6.jpg",
        tipo: "buzos",
        precio: 4000,
        stock: 5,
        cant: 0

    },
    {
        id: "8",
        nombre: "buzo bayern",
        url: "https://i.ibb.co/n8mx8dF/images-q-tbn-ANd9-Gc-R4-Do0c-UTRx-UYCr1-FJl4-OWR-v-Tbvu2-Jm3-R24-Q-usqp-CAU.jpg",
        tipo: "buzos",
        precio: 4200,
        stock: 5,
        cant: 0

    },
    {
        id: "9",
        nombre: "buzo velez",
        url: "https://i.ibb.co/nMRbmC1/images-q-tbn-ANd9-Gc-Skjv-K1-N84d-Ng4n-KGwr-F8y-Yzdr-Hf-W-131-A82w-usqp-CAU.jpg",
        tipo: "buzos",
        precio: 3500,
        stock: 5,
        cant: 0

    },
    {
        id: "10",
        nombre: "campera chacarita",
        url: "https://i.ibb.co/0GvW6Dn/images-q-tbn-ANd9-Gc-To8-Zvhotm2z78h-FB5-l-U-cj-RAi91-Cj-Anp-Ga-Q-usqp-CAU.jpg",
        tipo: "camperas",
        precio: 4600,
        stock: 5,
        cant: 0

    },
    {
        id: "11",
        nombre: "campera boca",
        url: "https://i.ibb.co/JzRXY1N/images-q-tbn-ANd9-Gc-RQk-MLJP1-B9t8-Ab-L-BW28-Z3kd-FXgv-Tw-Ox8gg-usqp-CAU.jpg",
        tipo: "camperas",
        precio: 5000,
        stock: 5,
        cant: 0

    },
    {
        id: "12",
        nombre: "campera colon",
        url: "https://i.ibb.co/3vGHG0v/images-q-tbn-ANd9-Gc-TNJ9-Kg-In-Q5-O2-YRTT-5y-NXC1-BH24gmp-KJjbg-usqp-CAU.jpg",
        tipo: "camperas",
        precio: 4600,
        stock: 5,
        cant: 0

    },
    {
        id: "13",
        nombre: "campera ferro",
        url: "https://i.ibb.co/5s19dpn/images-q-tbn-ANd9-Gc-TBOMZGVi5-HTr-Dv-Ppt-VZkkc-TSuoga2-BHHLIn-A-usqp-CAU.jpg",
        tipo: "camperas",
        precio: 4100,
        stock: 5,
        cant: 0

    }

]

function borrado() {
    let del = document.getElementsByClassName("row");
    let count = del.length;
    for (i = 0; i < count; i++) {
        del[0].parentNode.removeChild(del[0]);
    }

}

function createCatalog(prod) {
    for (i = 0; i < productos.length; i++) {
        if (productos[i].tipo === prod.toLowerCase()) {
            let new_item = document.createElement("div");
            new_item.innerHTML = `
            <div class=" card bg-secondary bg-card">
            <div class="card-body mx-auto">
         <a href=${productos[i].url}><img src=${productos[i].url} alt="producto" border="0"  heigth="50%"/></a>
         <br>
         <p>precio: ${productos[i].precio}<p/>
         <p>Disponibles: ${productos[i].stock}<p/>
 <button class="btn btn-outline-info btn-block" id="menosButton"  onclick="restarCant(${i})"> - </button>
 <span id="${productos[i].id}"  > 1 </span>
 <button id="masButton"class="btn btn-outline-info btn-block"  onclick="sumarCant(${i})"> +  </button><br/><br/>
 <button id="add-button" class="btn btn-outline-info btn-block" onclick="agregarAlCarrito(${i})">Agregar</button>
         </div>
         </div>
         `
            new_item.className = "row prueba"
            document.getElementById("prod").appendChild(new_item);
        }
    }

}



function home() {

    if (document.getElementsByClassName("row")) {
        borrado();
    }
    for (let i = 0; i < productos.length; i++) {

        let new_item = document.createElement("div");
        new_item.innerHTML = `
        <div class=" card bg-secondary bg-card ">
        <div class="card-body mx-auto">
 <a href=${productos[i].url}><img src=${productos[i].url} alt="producto" border="0"  /></a>
 <br>
 <p>precio: ${productos[i].precio}<p/>
 <p>Disponibles: ${productos[i].stock}<p/>
 
 
 <button class="btn btn-outline-info btn-block" id="menosButton"  onclick="restarCant(${i})"> - </button>
 <span id="${productos[i].id}"  > 1 </span>
 <button id="masButton"class="btn btn-outline-info btn-block"  onclick="sumarCant(${i})"> +  </button><br/><br/>
 <button id="add-button" class="btn btn-outline-info btn-block" onclick="agregarAlCarrito(${i})">Agregar</button>
 </div>

 </div>
 `


        new_item.className = "row prueba"
        document.getElementById("prod").appendChild(new_item);

    }
}

function sumarCant(producto) {
    let tmp = productos[producto].id
    let contador = $(`#${tmp}`).html();
    contador = parseInt(contador);
    contador += 1;
    if (contador < productos[producto].stock) {
        $(`#${tmp}`).html(contador);
        productos[producto].cant = contador;
    }
    else {
        $(`#${tmp}`).html(productos[producto].stock);
    }

}
function restarCant(producto) {
    let tmp = productos[producto].id
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

function renderItemMenu(menu) {
    let param = "";
    let tipo;
    borrado();
    if (menu === "menu2") {
        tipo = document.getElementById("menu2");
        param = tipo.innerHTML;
    }
    else if (menu === "menu1") {
        tipo = document.getElementById("menu1");
        param = tipo.innerHTML;

    }
    else {
        tipo = document.getElementById("menu");
        param = tipo.innerHTML;
    }
    createCatalog(param);
}


function agregarAlCarrito(producto) {
    let tmp = productos[producto].id
    productos[producto].cant+=1;
    let contador = $(`#${tmp}`).html();
    let count = $("#contar").html()
    $("#contar").html(parseInt(count) + parseInt(contador))
    localStorage.setItem(`${productos[producto].id}`, JSON.stringify(productos[producto]));

}

function quitarDeCarrito(producto) {
    let contador = document.getElementById("contar");
    let count = parseInt(contador.innerHTML) - 1
    contador.innerHTML = count;
    productos[producto].cant -= 1;
    if (productos[producto].cant === 0) {
        localStorage.removeItem(productos[producto].id);

    }
    console.log(localStorage);
    console.log(producto);
    renderCarrito();
}

function renderCarrito() {
    //console.log(localStorage);
    let temp;
    borrado();
    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        temp = localStorage.getItem(key);
        temp = JSON.parse(temp);
        //console.log(temp);

        if (temp != null) {

            for (let i = 0; i < productos.length; i++) {
                if (productos[i].nombre === temp.nombre) {
                    let new_item = document.createElement("div");
                    new_item.innerHTML = `
                    <div class=" card bg-secondary bg-card">
                    <div class="card-body mx-auto">
         <a href=${productos[i].url}><img src=${productos[i].url} alt="producto" border="0"  heigth="50%"/></a>
         <br>
         <p>precio: ${productos[i].precio}<p/>
         <p>Disponibles: ${productos[i].stock}<p/>

 <button id="add-button" class="btn btn-outline-info btn-block" onclick="quitarDeCarrito(${i})">Quitar</button>
         </div>
         </div>
         `
                    new_item.className = "row prueba"

                    document.getElementById("prod").appendChild(new_item);

                }

            }
        }
    }
}


function search(busqueda) {

    borrado();
    let prueba = productos.filter(e => e.nombre.includes(busqueda.toLowerCase()))
    console.log(prueba)

    for (i = 0; i < prueba.length; i++) {

        $("#prod").append(`
        <div class="row prueba">
       
        <div class=" card bg-secondary">
        <div class="card-body">
        <p>${prueba[i].nombre}<p/>
         <a href=${prueba[i].url}><img src=${prueba[i].url} alt="producto" border="0"  heigth="50%"/></a>
         <br>
         <p>precio: ${prueba[i].precio}<p/>
         <button id="add-button" class="btn btn-outline-info btn-block" onclick="agregarAlCarrito(${i})">Agregar</button>
         </div>
         </div>
         </div>
         
         `)

    }
}


$(document).ready(function() {
    $(".nav-link")
      .hover(()=>{
        $('.nav-link').stop().animate({'width': '150px', 'height': '34px'}, 500);
      })
      .mouseout(() =>{
        $('.nav-link').stop().animate({'width': '95px', 'height': '34px'}, 500);
      });
    });

localStorage.clear()
home();
$("#searchButton").click(() => {
    let ingreso = $("#searchInput").val();
    search(ingreso);
})


/*const url='https://jsonplaceholder.typicode.com/posts'
const post={
    nombre:"",
    email:""
}

$("#form").prepend(`

<span style="color: #fff"> Nombre: </span> <input type="text" id="nombre"/> 
<span style="color: #fff">Mail: </span><input type="email" id="email"/>
<button id="send" class="btn btn-outline-info btn-block" >Enviar</button>

    `
)




$("#send").click(()=>{
    post.nombre=$("#nombre").val()
    post.email=$("#email").val()
    $.ajax({
        method: "POST",
        url: url,
        data: post,
        success: function(res){
            $("#form").prepend(`
            <p>Envio exitoso</p>
            `
            )
        }
    })
})*/
