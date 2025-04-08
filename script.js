console.log("Hola mundo!");


const colores = ['azul', 'rojo', 'verde'];
console.log(colores[0]);
colores[2] = 22;
colores.forEach((color)=> console.log(color));



const alumno = {name: "Luis"};
alumno.edad = 20;
console.log(alumno.edad);


//function msg(){console.log('Hola')};

//msg();

function msg(name){console.log('Hola ' + name)};

msg('Lewis');