let tabela_corpo = document.querySelector("tbody")

function cadastraCurso() {
    let ID = document.getElementById("ID");
    let titulo = document.getElementById("titulo");
    let descricao = document.getElementById("descricao");
    let imagem = document.getElementById("imagem");
    let nomeProf = document.getElementById("nomeProf");
    let listaAulas = document.getElementById("listaAulas");
    let data = document.getElementById("data");

    let dados = JSON.parse(localStorage.getItem("listaCurso"));

    if (dados == null) {
    	localStorage.setItem("listaCurso", "[]");
    	dados = [];
    }

    let registroCursos = {
    	ID: ID.value,
    	titulo: titulo.value,
    	descricao: descricao.value,
    	Imagem: imagem.value,
    	nomeProf: nomeProf.value,
    	listaAulas: listaAulas.value,
    	data: data.value

    }
    
    dados.push(registroCursos);

    localStorage.setItem("listaCurso", JSON.stringify(dados)); 

    alert("Curso cadastrado com sucesso! :)")

    //colocando na tabela

    let tbody = document.getElementById("tbody");
      
    let tr = tbody.insertRow();
    let td_ID = tr.insertCell();
    let td_titulo = tr.insertCell();
    let td_descricao = tr.insertCell();
    let td_imagem = tr.insertCell();
    let td_nomeProf = tr.insertCell();
    let td_listaAulas = tr.insertCell();

    td_ID.innerText = ID.value;
    td_titulo.innerText = titulo.value;
    td_descricao.innerText = descricao.value;
    td_imagem.innerText = imagem.value;
    td_nomeProf.innerText = nomeProf.value;
    td_listaAulas.innerText = listaAulas.value;
    

    ID.value = ""; 
    titulo.value = "";
    descricao.value = "";
    imagem.value = "";
    nomeProf.value = "";
    listaAulas.value = "";
    data.value = "";
}


