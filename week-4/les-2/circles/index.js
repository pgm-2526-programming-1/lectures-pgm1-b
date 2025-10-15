const $circles = document.getElementById("circles");

const colors = ["red", "blue", "orange", "green", "yellow", "purple", "cyan"];

function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

let html = "";
for (let i = 0; i < 3000; i++) {
  const randomColor = colors[generateRandomNumber(colors.length - 1)];
  const randomWidth = generateRandomNumber(60);
  const randomTop = generateRandomNumber(window.innerHeight - randomWidth);
  const randomLeft = generateRandomNumber(window.innerWidth - randomWidth);
  html += `<div class="circle" 
                style="
                  top: ${randomTop}px; 
                  left: ${randomLeft}px;
                  width: ${randomWidth}px;
                  height: ${randomWidth}px;
                  animation-delay: -${Math.random()}s;
                  background-color: ${randomColor};">
            </div>`;
}
$circles.innerHTML = html;
