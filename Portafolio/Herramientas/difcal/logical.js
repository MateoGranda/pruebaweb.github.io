function calcular(){
    while(!!document.getElementById("element_dif")){
    const clean = document.getElementById("element_dif");
    clean.remove();
}
    Num_dif = document.getElementById("Num_dif").value;
    Num_nota = document.getElementById("Num_nota").value;
    if (Num_dif == null|| Num_dif == 0 || Num_nota == null || Num_nota == 0){
        document.getElementById("Error").style.display = "block";
    } else{
    let i = 0, dif = Num_dif;
    while(i <= Num_dif){
        nota = (Num_dif * Num_nota)/dif;
        var notaRedondeada = nota.toFixed(2);
        console.log(Num_dif + " = " + notaRedondeada);
        const respuesta = document.createElement("div");
        respuesta.innerText = (Num_dif + " = " + notaRedondeada);
        respuesta.setAttribute("id", "element_dif");
        respuesta.setAttribute("class", "difucultades");
        var divPadre = document.getElementById("result-container")
        divPadre.appendChild(respuesta);
        Num_dif --;
    }
    document.getElementById("Num_dif").value = null;
}
}
function clean(){
while(!!document.getElementById("element_dif")){
    const clean = document.getElementById("element_dif");
    clean.remove();
}
    document.getElementById("Num_dif").value = null;
    document.getElementById("Num_nota").value = 10;
}
function closeError() 
{
    document.getElementById("Error").style.display = "none";
}