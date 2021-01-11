function Livro(nome, autor, numPaginas, genero){
    this.nome = nome;
    this.autor = autor;
    this.numPaginas = numPaginas;
    this.genero = genero;
}

//let livro = new Livro('merendeiro', 'ele Mesmo', '50', 'sei lá');
var livros = []
//livros.push(livro);

function adicionarLivro() {

    if(document.getElementById("nome").value == ""){
        alert("PREENCHA O NOME!");
    }else if(document.getElementById("autor").value == ""){
        alert("PREENCHA O AUTOR");
    }else if(document.getElementById("numPaginas").value == ""){
        alert("PREENCHA O NÚMERO DE PÁGINAS");
    }else if(document.getElementById("genero").value == ""){
        alert("PREENCHA O GENERO");
    }else{
        let livro = new Livro(document.getElementById("nome").value, document.getElementById("autor").value, document.getElementById("numPaginas").value,document.getElementById("genero").value);

        livros.push(livro);

        alert("LIVRO CADASTRADO COM SUCESSO!");
        document.getElementById("nome").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("numPaginas").value = "";
        document.getElementById("genero").value = "";
    }
}

function listarLivros() {
    document.getElementById("listar").innerHTML = "";
    for(let i = 0; i < livros.length; i++){
        document.getElementById("listar").innerHTML +=
        "NOME: "+ livros[i].nome  + "<br>" +
        "AUTOR: " + livros[i].autor + "<br>" +
        "NÚMERO DE PÁGINAS: " + livros[i].numPaginas + "<br>" +
        "GENERO: " + livros[i].genero + "<br>" +
        "________________________<br>";
    }
}