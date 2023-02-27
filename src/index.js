addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const button = document.getElementById("search-button");
        button.click();
    }
});

async function pesquisar() {
    let input = document.getElementsByName("input-palavra");
    let palavraASerPesquisada = input[0].value;

    if(palavraASerPesquisada === ''){
        return
    }

    pesquisarPalvra(palavraASerPesquisada);
}

async function pesquisarPalvra(palavraASerPesquisada) {
    const url = `https://api.dicionario-aberto.net/word/${palavraASerPesquisada}/1`;
    const response = await fetch(url);
    const pesquisa = await response.json();

    const resposta = document.getElementsByClassName("resultado-pesquisa");

    resposta[0].innerHTML = `<p>${pesquisa[0].xml}</p>`;
}
