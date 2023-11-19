x = 0;
y = 0;
drawApple = "";
speakData = "";
toNumber = "";

function preload() {
  // Carregando a imagem da maçã
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML =
    "O sistema está ouvindo. Por favor, fale.";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);

  content = event.results[0][0].transcript;
  toNumber = Number(content);

  if (Number.isInteger(toNumber)) {
    // A maçã começou a ser desenhada
    status = "A maçã começou a ser desenhada";
    drawApple = "set";
  } else {
    // O número não foi reconhecido
    status = "O número não foi reconhecido";
  }

  document.getElementById("status").innerHTML =
    "A fala foi reconhecida: " + content;
};

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  // Criando a tela com base na largura e altura obtidas
  createCanvas(screen_width, screen_height - 150);

  // Posicionando a tela nas coordenadas entre 0 e 150
  canvas.position(0, 150);
}

function draw() {
  if (drawApple == "set") {
    document.getElementById("status").innerHTML =
      toNumber + " maçãs desenhadas";
    drawApple = "";

    if (drawApple == "set") {
      for (var i = 1; i <= toNumber; i++) {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, width, height);
      }
      (document.getElementById("status").innerHTML =
        to_number + "maças desenhadas"),
        (speakData = toNumber + " Maçãs desenhadas");
      speak();
    }
  }
}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speakData);

  synth.speak(utterThis);

  speakData = "";
}
