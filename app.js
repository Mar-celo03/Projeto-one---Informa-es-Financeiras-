function pesquisar() { 
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa=document.getElementById
    ("campo-pesquisa").value

    // Se campPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum Resultado Encontrado. Você precisa digitar o fiis, criptomoeda ou Ação</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = ""; 
    let descricao = ""; 
    let tags = "";

    // Itera sobre cada dado na lista de resultados da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Concatena HTML formatado para cada resultado, incluindo título, descrição e link
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <P class="descricao-meta">${dado.descricao}</P>
                <A href= ${dado.link} target="_blank">Mais Informações</A>
            </div>`;
        }     
    }

    if (!resultados) {
        resultados = "<P>Nenhum Resultados Encontrado</P>"
        return
    }

    // Atribui o HTML formatado à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}
 


