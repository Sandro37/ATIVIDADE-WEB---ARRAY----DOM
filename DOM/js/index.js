var conta;
var valor;
var tipo;

function pegarValor() {
    if(document.getElementById("conta").value == ""){
        alert("PREENCHA CONTA!");
    }else if(document.getElementById("valor").value == ""){
        alert("PREENCHA VALOR!");
    }else{
        var select = document.getElementById('tipo');

        conta = document.getElementById("conta").value;
        valor = document.getElementById("valor").value 
        tipo = select.options[select.selectedIndex].text;

        document.getElementById("conta").value = "";
        document.getElementById("valor").value = "";
        
        adicionar("tabela");
    }
}


function adicionar(id) {
    var tabela = document.getElementById(id);
    var numLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numLinhas);

    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);

    celula1.innerHTML = conta;
    celula2.innerHTML =  tipo; 
    celula3.innerHTML = valor;
    celula4.innerHTML =  "<button id='resultado' onclick='removeLinha(this)'></button>";
}


function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tabela').deleteRow(i);
  } 