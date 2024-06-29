let nombres=["Nicolas", "Gabriel","Joaquín","Agustín","Nahuel"];

// let nombre1=nombres[0];
// let nombre2=nombres[1];
// let nombre3=nombres[2];
// let nombre4=nombres[3];
// let nombre5=nombres[4];


// Desestructurando

// Los arrays se desestructuran por posición

let [nombre1,nombre2,nombre3,nombre4,nombre5] = nombres;

console.log(nombre1)
console.log(nombre2)
console.log(nombre3)
console.log(nombre4)
console.log(nombre5)

console.log(nombres)

let [nombre1b,,,nombre4b,nombre5b] = nombres;
//      1   2,3    4        5

console.log(nombre1b);
console.log(nombre4b);
console.log(nombre5b);

//Con rest operator

let [ausente, ...presentes]=nombres;

console.log(ausente);
console.log(presentes); // es un array con el RESTo de los elementos

// Desestructurando funciones

function estudiantes(){
    return ["Lara","Cata","Fernanda"];
}

let [estudiante1,estudiante2,estudiante3]=estudiantes();

console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);


// Desestructuración de objetos
//Desestructura por propiedad

let estudiante= {
    nombre: "Lara",
    apellido: "Coradi",
    cursos: ["frontend","backend"]
}

// let nombre=estudiante.nombre;
// let apellido=estudiante.apellido;
// let cursos=estudiante.cursos;



let {apellido,nombre}=estudiante;

console.log(nombre);
console.log(apellido);



let {cursos}=estudiante;

console.log(cursos)

// definir otro nombre de variable al desestructurar

let {cursos:cursos2} = estudiante;

console.log(cursos2);

