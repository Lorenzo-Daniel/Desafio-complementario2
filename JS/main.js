//Simulador compra de productos
const saludo = () => {
  alert("¡Hola!, Bienvenido a la tienda de Musa Acuarelas!");
  let registro = prompt("Ya estás Registrado?\n\n◉ si\n◉ no").toLowerCase();

  while (registro !== "si" && registro !== "no") {
    alert("Ingresaste un dato Incorrecto");
    registro = prompt("Ya estas Registrado?");
  }
  if (registro === "si") {
    let nombreUsuario = prompt("Ingresa tu nombre de usuario");
    alert("Hola " + nombreUsuario + " ¡Bienvenido!")
  } else if (registro === "no") {
    alert("Puedes continuar sin registrarte, pero si quieres acceder a promociones debes estar registrado");
    confirmarRegistro();
  }
}

function confirmarRegistro() {
  let confirmarRegistro = prompt("Deseas Registrarte?\n\n◉ si\n◉ no");
  confirmarRegistro = confirmarRegistro.toLowerCase();
  while (confirmarRegistro !== "si" && confirmarRegistro !== "no") {
    alert("Ingresa un dato valido");
    confirmarRegistro = prompt("¿Deseas Registrarte?");
  }
  if (confirmarRegistro === "no") {
    confirmarRegistro = true;
  } else if (confirmarRegistro === "si") {
    registroDatos();
  }
}

function registroDatos() {
  let nombre = prompt("Ingresa tu Nombre");
  let apellido = prompt("Ingresa tu Apellido");
  let direccion = prompt("Ingresa tu dirección (Calle/Número)");
  let confDatos = prompt("Los datos ingresados son correctos? \n- Nombre: " + nombre + "\n- Apellido: " + apellido + "\n- Dirección: " + direccion + "\n◉ si\n◉ no");
  confDatos = confDatos.toLocaleLowerCase();
  if (confDatos === "si") {
    alert("Registrado Correctamente");
  } else if (confDatos = "no") {
    registroDatos();
  }
}

function datosEnvio() {
  alert("Confirme sus datos para terminar la compra")
  let nombre = prompt("Ingresa tu Nombre");
  let telefono = parseInt(prompt("Ingresa tu Teléfono"));
  let direccion = prompt("Ingresa tu dirección (Calle/Número)");
  alert("Los datos ingresdos son: \n\n◉ Nombre: " + nombre + "\n◉ Dirección: " + direccion + "\n◉ Teléfono: " + telefono);
}

function envio() {
  let envio = prompt("Desea envío a Domicilio?\n\n◉ si\n◉ no");
  envio = envio.toLowerCase();
  while (envio !== "si" && envio !== "no") {
    envio = prompt("Ingrese un dato valido");
  }
  if (envio === "si") {
    datosEnvio();
    alert("¡El producto será enviado a su Domicilio\n\nMuchas Gracias por su compra!")
  } else if (envio === "no") {
    datosEnvio();
    alert("¡Puede pasar a retirar el producto reservado por nuestra tienda de 9 a 18 hs\n\nMuchas Gracias por su compra!");
  }
}


saludo();

for (let index of productos) {
  const recorrido = new Producto(index);
  let pregunta = prompt("Desea comprar el producto: " + index.nombre + "\nprecio: $ " + index.precio)
  if (pregunta === null) {
    break;
  }
  switch (pregunta) {
    case "si":
      alert("Agregaste producto: " + index.nombre + " al Carrito");
      productosSeleccionados.push(index);
    default:
      break;
  }
}

let precio_total = 0

for (let index of productosSeleccionados) {
  const recorrido = new Producto(index);
  recorrido.aplicarIva();
  precio_total += recorrido.precio;
}

alert("El precio total de tu compra es: $ " + precio_total);

envio();