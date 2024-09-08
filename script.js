const messageElement = document.getElementById('message');
const message = "Querida Katherine, que cada momento de tu vida esté lleno de alegría y amor. 🌟 Eres una luz que ilumina el mundo de quienes te rodean. Gracias por ser tan increíble.";

let index = 0;
function typeMessage() {
  if (index < message.length) {
    messageElement.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, 80); // Controla la velocidad de escritura
  }
}

window.onload = typeMessage;
