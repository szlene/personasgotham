// persona
const persona = [
  {
    id: 1,
    nome: "bruce wayne",
    ator: "david mazouz",
    img:
      "https://i.imgur.com/38teiCu.jpg",
    text:
      "Bruce Wayne é filho dos falecidos Thomas e Martha Wayne, e o herdeiro da Wayne Enterprises. Quando seus pais foram assassinados, Bruce se dedicou a identificar quem era o assassino, encontrando como aliado o detetive Jim Gordon do Departamento de Polícia de Gotham City. Para cumprir sua promessa de proteger gotham, Bruce começa um treinamento que molda seu destino como um temido vigilante chamado Batman.",
  },
  {
    id: 2,
    nome: "jim gordon",
    ator: "ben mckenzie",
    img:
      "https://i.imgur.com/zILAWBy.jpg",
    text:
      "James Gordon mais conhecido como Jim Gordon é um detetive de homicídios que trabalha para o Departamento de Polícia de Gotham City. Ele é parceiro de Harvey Bullock, o ex-noivo de Barbara Kean e o namorado de Leslie Thompkins. Jim, juntamente com Bullock, foram designados para o caso do assassinato Wayne. Depois de Dick Lovecraft ser assassinado com sua arma, Jim foi re-atribuído como guarda do Asilo Arkham pelo prefeito Aubrey James. Mais tarde, volta como um detetive do Comissário Gillian Loeb após a captura e derrota com sucesso de Jack Buchinsky.",
  },
  {
    id: 3,
    nome: "harvey bullock",
    ator: "donal logue",
    img:
      "https://i.imgur.com/aA1JiE5.jpg",
    text:
      "Harvey Bullock é um detetive do Departamento de Polícia de Gotham City. Ele também atua como o mentor e parceiro para Jim Gordon. Depois de Gillian Loeb demolir Bullock, este se aposentou de ser um detetive para viver sua vida. Depois de um ataque no Departamento de Polícia de Gotham City, Bullock retornou à força.",
  },
  {
    id: 4,
    nome: "alfred pennyworth",
    ator: "sean pertwee",
    img:
      "https://i.imgur.com/8BrTw4h.jpg",
    text:
      "Alfred Pennyworth é o mordomo de Bruce Wayne. Um membro anterior do serviço aéreo britânico especial, Alfred transformou-se o guardião legal de Bruce após o assassinato de Thomas e de Martha Wayne. Depois que Bruce começou a perseguir a corrupção na Wayne Enterprises e procura a razão por trás do assassinato de seu pai, Alfred começou a orientá-lo.",
  },
  {
    id: 5,
    nome: "selina kyle",
    ator: "camren bicondova",
    img:
      "https://i.imgur.com/3ix32vo.jpg",
    text:
      "Selina Kyle é uma adolescente órfã e uma ladra de rua habilidosa que vive em Gotham City, com um fascínio com os gatos. A mãe de Selina retorna, e acaba quebrando o coração da filha. Em algum momento de sua vida, Selina fez amizade com Bridgit Pike.",
  },
  {
    id: 6,
    nome: "oswald cobblepot",
    ator: "robin lord taylor",
    img:
      "https://i.imgur.com/9dc2osn.jpg",
    text:
      "Filho de Gertrud Kapelput e Elijah Van Dahl. Gertrud deixou seu pai sem sequer dizer-lhe que estava grávida. Oswald foi criado por sua mãe depois de seu nascimento e foi dito que seu pai morreu quando era jovem. 'Oswald, não ouça as outras crianças', sua mãe lhe dissera quando pequeno. Ela costumava cantar com ele à noite e dizer-lhe que algum dia seria um grande homem, desenvolvendo seus desejos de poder e grandes ambições. Ele entrou no submundo criminoso através de Fish Mooney e sua gangue, onde recebeu o apelido de 'Pinguim', que desprezou.",
  },
  {
    id: 7,
    nome: "carmine falcone",
    ator: "john doman",
    img:
      "https://i.imgur.com/qoZmhtz.jpg",
    text:
      "Carmine Falcone é o chefe da maior rede de crime organizado de Gotham City. Outros líderes de gangues, como Fish Mooney, são responsáveis perante Falcone. Ele também tem influência dentro do governo de Gotham City e do Departamento de Polícia de Gotham City.",
  },
  {
    id: 8,
    nome: "fish mooney",
    ator: "jada pinkett smith",
    img:
      "https://i.imgur.com/Ny0Kbml.jpg",
    text:
      "Maria Mercedes, mais conhecida como Fish Mooney, é a chefe e proprietária da boate gangster, cabeça quente e notoriamente sádica, com esperteza e habilidades extra-sensoriais de ler as pessoas como um livro aberto e, portanto, é alguém que não está a fim de ser desafiada. Fish Mooney foi criada exclusivamente para a série de TV e não tem origem nos quadrinhos.",
  },
  {
    id: 9,
    nome: "salvatore maroni",
    ator: "luiz antônio lobue",
    img:
      "https://i.imgur.com/N7Fj8rK.jpg",
    text:
      "Salvatore 'Sal' Maroni foi um chefe da máfia de Gotham City, era o chefe da família do crime Maroni, uma crescente organização criminosa que era uma ameaça para Carmine Falcone, cuja família era uma das mais antigas e bem estabelecidas.",
  },
  {
    id: 10,
    nome: "edward nygma",
    ator: "cory michael smith",
    img:
      "https://i.imgur.com/0Zth1GZ.jpg",
    text:
      "Edward é inteligente, calculista, gentil e atencioso. Sua natureza meticulosa e observadora faz dele um excelente cientista, muitas vezes detectando pistas e conexões que seus superiores perdem. No entanto, ele também é narcisista, sendo apaixonado por sua inteligência e gosta de contar enigmas para provar isso, muito para o aborrecimento da maioria de seus colegas de trabalho. Ele também pode ser desajeitado, não intencionalmente insultante e egoísta, como quando faz com que o médico-legista anterior seja despedido por vingança por ter feito Edward ser suspenso, fazendo parecer que ele estava roubando partes do corpo.",
  },
];
// selecionar itens
const img = document.getElementById("person-img");
const nome = document.getElementById("nome");
const ator = document.getElementById("ator");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// item inicial
let currentItem = 0;

// carregar item inicial
window.addEventListener("DOMContentLoaded", function () {
  const item = persona[currentItem];
  img.src = item.img;
  nome.textContent = item.nome;
  job.textContent = item.ator;
  info.textContent = item.text;
});

// mostrar persona
function showPerson(person) {
  const item = persona[person];
  img.src = item.img;
  nome.textContent = item.nome;
  job.textContent = item.ator;
  info.textContent = item.text;
}
// mostrar próxima persona
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > persona.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// mostrar persona de antes
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = persona.length - 1;
  }
  showPerson(currentItem);
});
// persona random
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * persona.length);
  showPerson(currentItem);
});