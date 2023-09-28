/* Objetivo: fazer o carregamento da url com filmes
Será usado o comando fetch() para localizar
e carregar os filmes e exebir em uma pagina html */

function carregarFilmes() {
  //LOCALIZE O ARQUIVO
  //fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR-US&page=1")
  fetch("js/apiFilmes.json")  
  //RECEBA OS DADOS LOCALIZADOS EM JSON   //GUARDE OS DADOS NA VARIÁVEL DADOS
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados.results);
      var saida = "<div id=filme>";
      dados.results.map((item, i) => {
        saida += ` 
                <div>

                <a href="${item.link}" target="_blank">
                <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
                </a>
                <p id=voto>${item.vote_average}</p>
                <h2>${item.title}</h2>
                <p id=data>${item.release_date}</p>
                </div> 
                
                
            `;
      });
      saida += "</div>";
      document.body.innerHTML += saida;
    })
    .catch((erro) => console.log(`Erro ao tentar executar a API -> ${erro}`));
}
