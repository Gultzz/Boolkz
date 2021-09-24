var container = document.querySelector(".container");
var btnPesquisar = document.querySelector(".pesquisar");
var footer = document.getElementById('footer');
btnPesquisar.addEventListener('click', encontrarLivros);
addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        encontrarLivros();
    }
});
async function encontrarLivros() {
    
    var inputPesquisa = document.querySelector(".pesquisa").value;
    if (inputPesquisa.trim().length < 1) {
        return false;
    }
    
    var link = await `https://www.googleapis.com/books/v1/volumes?q=${inputPesquisa}`;
    var API = await fetch(link).then(r => r.json()).then(API);
    
    container.innerHTML = '';
    for (book of API.items){
        var thumbBook = book.volumeInfo.imageLinks.thumbnail;
        var descriptionBook = book.volumeInfo.description;
        var idBook = book.id;
        var titleBook = book.volumeInfo.title;
        var title = titleBook.split(' ').join('_');
        var link2 = `https://www.google.com.br/books/edition/${title}/${idBook}?hl=pt-BR&gbpv=1&dq=${inputPesquisa}&printsec=frontcover`;

//TODO          Criar DIV
        let div = document.createElement('div');
        div.setAttribute('style', 'max-height: 430px; max-width:230px;');
        div.setAttribute('class', 'divs');



//TODO          Criar IMG
        let img = document.createElement('img');
        img.src = thumbBook;
        img.setAttribute('class', 'imgDivs');
        

//TODO          Criar P
        let p = document.createElement('p');
        p.setAttribute('class', 'p1');
        p.innerHTML = titleBook;
        

//TODO          Criar P-Text
        // let p2 = document.createElement('p');
        // p2.innerHTML = descriptionBook;
        // p2.setAttribute('class', 'p2');
        // div.appendChild(p2);
        // if (descriptionBook.length > 30) {
        //     console.log('muitas letras');
        // }

//TODO          Criar A
        let a = document.createElement('a');
        a.appendChild(img);
        a.href = link2;
        a.setAttribute('target', '_blank');
        div.appendChild(a);
        div.appendChild(p)
        

        
        img.addEventListener('mouseover', ()=>{
            img.style.cursor = "pointer";
        });
        div.addEventListener('click', ()=>{
            
        });

        container.appendChild(div);
        footer.style.top = '0px';
        footer.style.marginBottom = '5px';
    }
        
}
