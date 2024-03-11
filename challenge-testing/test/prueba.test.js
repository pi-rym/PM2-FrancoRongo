const { type } = require("os");
const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra();
    });

    describe("Sobre el constructor de la clase CarritoCompra", () => {
        it("CarritoCompra debería ser una clase", () => {
            expect(typeof CarritoCompra).toBe("function");
        });

        it("carritoCompra debería ser una instancia de la clase CarritoCompra", () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        });
        it("Deberia guardar productos en una lista",()=>{
            expect(carritoCompra.carrito).toEqual([]); //esperamos que carrito en carritoCompra sea igual a un array[].
        })

    })

   describe("Metodos de la clase CarritoCompra",()=>{
      const producto1={
        id:1,
        name: "Lapicera Blanca",
        price: 1000,
        quantity: 10
      };
      const producto2={
        id:2,
        name:"liquid paper",
        price: 1890,
        quantity:2

      };

      it("Deberia tener un metodo llamado agregarProducto",() =>{
        expect(typeof carritoCompra.agregarProducto).toBe("function");
       });
      it("El metodo agregarProducto deberia poder agregar un producto a la lista",()=>{
        carritoCompra.agregarProducto(producto1);
        expect(carritoCompra.carrito).toContain(producto1)
      });
      it("Deberia tener un metodo llamado calcularTotal",()=>{
        expect(typeof carritoCompra.calcularTotal).toBe("function");

      });
      it("El metodo calcularTotal deberia poder calcular el total de la compra sumando los precios de todos los productos en el carrito",()=>{
        carritoCompra.agregarProducto(producto1);
        carritoCompra.agregarProducto(producto2);
        const totalEsperado = producto1.price*producto1.quantity + producto2.price * producto2.quantity;
        const total= carritoCompra.calcularTotal();
        expect(total).toBe(totalEsperado);//Esperamos que Total sea el totalEsperado.
      });
     it("El metodo deberia aplicar un descuento al precio total de la compra",()=>{
        carritoCompra.agregarProducto(producto1);
        carritoCompra.agregarProducto(producto2);
        const subTotal= carritoCompra.calcularTotal();
        const porcentajeDto= 15;
        const totalEsperado = subTotal-subTotal*(porcentajeDto/100);
        const total = carritoCompra.aplicarDescuento(porcentajeDto);
        expect(total).toBe(totalEsperado);//Esperamos que total sea el totalEsperado.

        });

    })
})
