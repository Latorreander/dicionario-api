addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const button = document.getElementById("search-button");
        button.click();
    }
});

async function wordSearch(wordToBeSearch) {
    const url = `https://api.dicionario-aberto.net/word/${wordToBeSearch}/1`;
    const response = await fetch(url);
    const searchResult = await response.json();

    if(wordToBeSearch === ''){
        return alert('VOCÊ PRECISA DIGITAR UMA PALAVRA!')
    }
    try{
        if(wordToBeSearch !== searchResult[0].word){
           
        }
    }
    catch{
         alert('PALAVRA INEXISTENTE!')
    }

    
    const answerArea = document.getElementsByClassName("search-result");
    
    answerArea[0].innerHTML = `<p>${searchResult[0].xml}</p>`;
}

function search() {
    let input = document.getElementsByName("input-word");
    let wordToBeSearch = input[0].value;

    wordSearch(wordToBeSearch);
}

