
let cantidad = 0;
let totalElementos = [];
const prices = {
    Pasta: 450,
    Miel: 670,
    Oliva: 360,
}

const factu = {};

let totalProducto = 0;
let totalGeneral = 0;

function buttonProduct(value) {
    cantidad = parseInt(prompt('Ingrese cuantos quiere comprar'));
    Object.entries(prices).forEach(val => {
        if (value === val[0]) {
            totalProducto = cantidad * val[1];
            totalGeneral = totalGeneral + totalProducto;
            factu[val[0]] = totalProducto;
            totalElementos.push(cantidad);
        }
    })
}

function buttonReceipt() {
    alert('Para ver la factura abra la consola')
    let i = 0;
    Object.keys(factu).map(key => {
        const value = factu[key];
        console.log(`Producto: ${key} - Cantidad: ${totalElementos[i]} - Total: ${value}`)
        i++;

    })
    console.log(`Total General: ${totalGeneral} `)
}

