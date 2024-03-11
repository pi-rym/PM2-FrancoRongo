class CarritoCompra {
  constructor() {
    this.carrito = [];
  }

  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    let precioTotal = 0;
    this.carrito.forEach(producto => {
      precioTotal= precioTotal += producto.price * producto.quantity;
      
    });
    return precioTotal;
  }
  aplicarDescuento(porcentaje) {
    const precioTotal = this.calcularTotal();
    const descuento = precioTotal*(porcentaje/100);
    return precioTotal-descuento;
  }
}
module.exports=CarritoCompra;