//Função para criar curso

let listaCurso = [
]

function criarCurso(ID, titulo, descricao, imagem, nomeProf, listaAulas, dataCriacao) {
    let data = new Date(dataCriacao);
    let newCurso =  {ID, titulo, descricao, imagem, nomeProf, listaAulas, data}
    listaCurso.push(newCurso)
}
 
//Função para exibir cursos buscando pelo Id

 function exibirCurso(numId) {
    let cursoComId = []
    for (i = 0; i < listaCurso.length; i++) {
      if (listaCurso[i].ID.includes(numId)) {
        cursoComId.push(listaCurso[i]);
        console.log(`Curso com ID ${numId}:`)
        console.log(cursoComId) }
      }
    }

//Função para atualizar curso

function atualizarCurso(checkID, titulo, descricao, imagem, nomeProf, listaAulas, dataAtualizacao) {
    objIndex = listaCurso.findIndex((obj => obj.ID == checkID))
    listaCurso[objIndex].titulo = titulo;
    listaCurso[objIndex].descricao = descricao;
    listaCurso[objIndex].imagem = imagem;
    listaCurso[objIndex].nomeProf = nomeProf;
    listaCurso[objIndex].listaAulas = listaAulas;
    let atualizadoEm = new Date(dataAtualizacao)
    listaCurso[objIndex].dataAtualizacao = atualizadoEm;
}

//Função para deletar curso

function deletarCurso(deleteID) {
    let index = listaCurso.findIndex((obj => obj.ID == deleteID))
    if (index > -1) {
      listaCurso.splice(index, 1);
    }
    return listaCurso;
  }


  console.log(listaCurso)





