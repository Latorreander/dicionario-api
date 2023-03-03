async function searchWord(typedWord) {
    const url = `https://api.dicionario-aberto.net/word/${typedWord.toLowerCase()}/1`;
    const response = await fetch(url);
    const searchResult = await response.json();

    try {
        const answerArea = document.querySelector(".search-result");

        answerArea.innerHTML = `<p>${searchResult[0].xml}</p>`;
        console.log(searchResult);
    } catch {
        alert("PALAVRA INEXISTENTE!");
    }
}

function send() {
    const typedWord = document.getElementById("typedword").value;
    searchWord(typedWord);
    return false;
}
