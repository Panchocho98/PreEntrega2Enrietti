# E-Commerce ColiFlor

E-Commerce de plantas creado como proyecto final de Coderhouse. Basado en mis proyectos de anteriores cursos, sumándole los conocimientos que fui adquiriendo a lo largo de la cursada y las nuevas herramientas a mi disposición.

Creado con `VITE`

### Herramientas y librerias.

### Visuales

Estas herramientas tienen el único propósito de hacer la experiencia de uso de la pagina mas amigable e inmersiva para el usuario, brindando ayudas visuales para comprender lo que ocurre en el momento.

- [Swal2](https://sweetalert2.github.io) (Avisos, alertas, etc).
- [MUI Material UI](https://mui.com/material-ui/) (Iconos, animaciones de carga).

### Funcionales

`Firebase` (o `Firestore`) fue utilizado para llevar a cabo el Backend de la aplicacion, utilizando las distintas funcionalidades del mismo, para recrear el stock, precio, y catálogo de la tienda.

- `Firebase` (`Firestore`)

### Funcionalidad del Proyecto.

El proyecto utiliza múltiples herramientas de `React` para poder crear un `catálogo` de distintas plantas de diferentes categorías, con la ayuda de `Firestore` como base de datos y herramienta de `Backend`. La aplicación permite entrar a los detalles de los productos y sumar una cantidad (acorde al stock disponible) al carro de compras. Una vez realizada la suma de productos al carrito, el usuario puede dirigirse al carro y evaluar los productos a comprar y, al revisar todo, proceder a la compra en `/checkout`, donde introducirán sus datos y al presionar `Enviar`, serán proveídos con un número de orden y sus datos serán subidos a la base de datos de `Firebase`.
