$(document).ready(function() {
	gerarQuote(); 
 
  function gerarQuote() {
    var quoteArray = [
      '"A sociologia é um esporte de combate, a escola é violenta, a educação não é romântica como falam." Fabrízzia Santos',
      '“Os jovens brancos precisam se reconhecer como atores dessa violência.”   Fabrízzia Santos',
      '“Vida é dor, é sofrimento também” Beatriz Batista Silva',
      '“Não é todo dia que tenho orgulho, de ser preta e deficiente, as vezes queria ser branca e poder entrar em todos os lugares sem nenhuns problemas, essa estrutura nos leva a querer isso, por isso devemos ter orgulho para nos mantermos de pé.” Beatriz Batista Silva',
      '“Não podemos estar sozinhos e é essencial ter referência. Professores que sejam exemplos e referência.” Beatriz Batista Silva',
      '“Quando a escola é de vidro (Rute Rocha), nós precisamos primeiro quebrar nosso vidro, não mudamos fora se não mudarmos dentro.” Silvia Mota',
      '"Uma potência" Ângela Maria de Sousa Lima',
      '“São questões que ferem o ECA, mandar prender o cabelo vai contra a identidade dos adolescentes. Vamos usar a lei ao nosso favor. Os estudantes fizeram um B.O. para os militares.” Silvia Mota',
      '"O que se vê quando se olha?" Zuleika Bueno',
      '"Se abrissemos as pessoas. Encontraríamos paisagens" Zuleika Bueno',
      '"A plena cidadania do índio depende de sua interação com a sociedade nacional e do conhecimento, dos valores morais e costumes por ela adotados, a partir desta interação." Chiquinha Paresi',
      '"Deixar claro quem você é e o que pretende." Paulo Stumpf',
      '"O currículo do curso de História da Universidade é Branca" Marilyn Beloni'
      '"O lugas mais racista na escola é a sala dos professores" Marilyn Beloni'
    ];
    
   var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    document.getElementById("quote").innerHTML = randomQuote;
    var by = " %23indiretasdobem via https://codepen.io/itska/full/PzwyxZ/";
    document.getElementById("tweet").href = "https://pos.uel.br/profsocio/" + randomQuote + by;
}
 
document.getElementById("quoteButton").onclick = gerarQuote;
  
});