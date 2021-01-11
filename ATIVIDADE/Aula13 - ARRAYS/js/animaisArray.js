var animais = []
var animal;

function VerificarAnimal() {
    animal = document.getElementById("animal").value;
    if(animal == ""){
        alert("Digite algo");
        return false;
    }else{
        return true;
    }
}

function limparNome() {
    document.getElementById("animal").value = "";
}

function adicionarInicioVetorAnimal(){
    if(VerificarAnimal()){
        animais.unshift(animal);
        limparNome();
        alert("Animal Adicionado ao Inicio");
    }

}

function adicionarFinalVetorAnimal() {
    if(VerificarAnimal()){
        animais.push(animal)
        limparNome();
        alert("Animal Adicionado ao Final");
    }
}

function removerAnimalInicio() {
        animais.shift();
        alert("Animal Removido do inicio");
    
}

function removerAnimalFinal() {
        animais.pop()
        alert("Animal Removido do final");  
}

function exibirNaTelaAnimais() {
    document.getElementById("ExibirAnimais").innerHTML = "";
    for(let i = 0; i < animais.length; i++){
        document.getElementById("ExibirAnimais").innerHTML += animais[i] + "<br>"
    }
}

function exibirAleatorioAnimal() {
    document.getElementById("ExibirAnimais").innerHTML = "";

    let animalAleatorio = Math.floor(Math.random() * animais.length)

    if(animais.length == 0){
        alert("Array Vazio");
    }else{
        document.getElementById("ExibirAnimais").innerHTML = animais[animalAleatorio];
    }
    
}