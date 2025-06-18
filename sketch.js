let infoAgricultura, infoConsumo;
let inputSugestao, botaoEnviar;
let sugestoes = [];

function setup() {
  noCanvas(); // Sem canvas, só elementos HTML

  createElement('h1', '🌾🌆 Fortalecendo a Conexão entre Campo e Cidade 🌾🌆');

  infoAgricultura = createElement('h2',
    '🤍 A conexão entre o campo e a cidade é essencial para garantir alimentos, recursos e qualidade de vida para todos. O campo é responsável pela produção de alimentos frescos, água limpa e matérias-primas que abastecem os centros urbanos. Enquanto isso, a cidade oferece acesso a serviços de saúde, educação, tecnologia e mercados que fortalecem o desenvolvimento rural. 🤍'
  );

  infoConsumo = createElement('h2',
    '✨ No entanto, o campo enfrenta muitos desafios, como a falta de acesso a tecnologias, dificuldade na infraestrutura (estradas precárias, transporte limitado) e pouca valorização dos produtos locais. Ao mesmo tempo, é do campo que vem grande parte dos benefícios que chegam às cidades: alimentos saudáveis, diversidade alimentar, preservação do meio ambiente e manutenção dos recursos naturais. ✨'
  );

  createElement('h2', '💫 Entrevista 💫');
  createP('🎥 Entrevista com Agricultor Mario Ferreira:');

  // Vídeo do YouTube incorporado via iframe
  let containerVideo = createDiv();
  containerVideo.html(`
    <iframe width="400" height="240"
      src="https://www.youtube.com/embed/y7cPssAFUD0"
      title="Entrevista com Agricultor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `);

  createElement('h3', '🌟 Na sua opinião, quais são os benefícios e desafios de morar no campo ou na cidade? 🌟');

  inputSugestao = createInput();
  inputSugestao.attribute('placeholder', '✍️ Escreva aqui sua opinião...');
  inputSugestao.style('width', '300px');

  botaoEnviar = createButton('Enviar ❤️');
  botaoEnviar.mousePressed(enviarSugestao);
}

function enviarSugestao() {
  const texto = inputSugestao.value();
  if (texto.trim() !== '') {
    sugestoes.push(texto);
    createP(`• ${texto}`);
    inputSugestao.value('');
  }
}
