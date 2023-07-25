
let usuario = prompt("Elija una opción: 1: Tijera - 2: Papel - 3: Tijera")

let maquina = parseInt(Math.random()*3+1)

if (usuario === "1"){
    usuario = "Tijera"
    //alert("Elegiste " + usuario)
} else if(usuario === "2"){
    usuario = "Papel"
    //alert("Elegiste " + usuario)
} else if (usuario === "3"){
    usuario = "Piedra"
    //alert("Elegiste " + usuario)
} else {
    alert("Opción incorrecta")
}

alert("Elegiste: " + usuario)

if(maquina === 1){
    maquina = "Tijera"
} else if (maquina === 2){
    maquina = "Papel"
} else if (maquina === 3){
    maquina = "Piedra"
} 

alert("La maquina elijió: " + maquina)


if(usuario === "Tijera" && maquina == "Tijera"){
    alert("Empate")
} else if (usuario === "Tijera" && maquina == "Papel"){
    alert("Ganador: Usuario")
} else if (usuario === "Tijera" && maquina == "Piedra"){
    alert("Ganador: Maquina")
} else if (usuario === "Papel" && maquina == "Tijera"){
    alert("Ganador: Maquina")
} else if (usuario === "Papel" && maquina == "Papel"){
    alert("Empate")
} else if (usuario === "Papel" && maquina == "Piedra"){
    alert("Ganador: Usuario")
} else if (usuario === "Piedra" && maquina == "Tijera"){
    alert("Ganador: Usuario")
} else if (usuario === "Piedra" && maquina == "Papel"){
    alert("Ganador: Maquina")
} else if (usuario === "Piedra" && maquina == "Piedra"){
    alert("Empate")
}


