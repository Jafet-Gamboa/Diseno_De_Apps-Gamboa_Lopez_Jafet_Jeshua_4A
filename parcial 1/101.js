/*
Examen primer parcial
Profesor: Ray Brunett Parra Galaviz
Alumno: Gamboa Lopez Jafet Jeshua
Grupo: 4A
Cuatrimestre: 4
Fecha: 05/02/2024
*/

const url = "https://jsonplaceholder.typicode.com/todos";

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function menu() {
    console.log("\nMENU")
    console.log("1.- Lista de todos los pendientes(IDs)");
    console.log("2.- Lista de todos los pendientes(IDs y titles)");
    console.log("3.- Lista de todos los pendientes sin resolver(ID y title)");
    console.log("4.- Lista de todos los pendientes resueltos(ID y title)");
    console.log("5.- Lista de todos los pendientes(IDs y userIDs)");
    console.log("6.- Lista de todos los pendientes sin resolver(ID y userID)");
    console.log("7.- Lista de todos los pendientes resueltos(ID y userID)");
    console.log("8.- Salir");
    
    rl.question("Porfavor, seleccione una opcion del menu: ", (respuesta) => {
        const opcion = parseInt(respuesta);
        fetch(url).then(response => response.json())
        .then( response => {
            switch (opcion) {
                case 1:
                    for (var key of response) {
                        console.log("ID: " + key.id)
                    }
                    menu()
                    break;
                case 2:
                    for (var key of response) {
                        console.log("ID: " + key.id)
                        console.log("Title: " + key.title)
                    }
                    menu()
                    break;
                case 3:
                    for (var key of response) {
                        if(key.completed == false){
                            console.log("ID: " + key.id)
                            console.log("Title: " + key.title)
                        }
                    }
                    menu()
                    break;
                case 4:
                    for (var key of response) {
                        if(key.completed == true){
                            console.log("ID: " + key.id)
                            console.log("Title: " + key.title)
                        }
                        
                    }
                    menu()
                    break;
                case 5:
                    for (var key of response) {
                        console.log("ID: " + key.id)
                        console.log("UserID: " + key.userId)
                    }
                    menu()
                    break;
                case 6:
                    for (var key of response) {
                        if(key.completed == false){
                            console.log("ID: " + key.id)
                            console.log("UserID: " + key.userId)
                        }
                        
                    }
                    menu()
                    break;
                case 7:
                    for (var key of response) {
                        if(key.completed == true){
                            console.log("ID: " + key.id)
                            console.log("UserID: " + key.userId)
                        }
                    }
                    menu()
                    break;
                case 8:
                    console.log("\nGracias por usar");
                    rl.close()
                    break;
                default:
                    console.log("\nEsa no es una opcion del menu\n")
                    menu()
                    break;
            }
        })
    });
}

console.log("APLICACION PARA LA LIGA DE LA NFL");

menu();
