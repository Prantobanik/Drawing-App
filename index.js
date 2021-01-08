const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorE1 = document.getElementById("color");
const clear = document.getElementById("clear");
const save = document.getElementById("save");
let size =2;
let isPressed = false;
let color = "black";

let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
        x = e.offsetX;
        y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

        x = undefined;
        y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
        if (isPressed) {
                const x2 = e.offsetX;
                const y2 = e.offsetY;

                drawCircle(x2, y2);

                drawline(x, y, x2, y2);
                x = x2;
                y = y2;
        }
 
});

function drawCircle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
}
function drawline(x1,y1,x2,y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = size*2;
        ctx.stroke();
        
}
increaseBtn.addEventListener('click', () => {
        size += 2;

        if (size > 10) {
                size = 10;
                
        }
        updateSize();
 });
decreaseBtn.addEventListener('click', () => {
        size -= 2;
        if (size < 2) {
                size = 2;
        }
        updateSize();
});
function updateSize(params) {
        sizeEl.innerText = size;
}
colorE1.addEventListener('change', (e) => { 
        color = e.target.value;
});

clear.addEventListener('click', () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);     
});

save.addEventListener("click", DownloadCanvasAsImage);
        
       

function DownloadCanvasAsImage() {
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", "CanvasAsImage.png");
  
  let dataURL = canvas.toDataURL("image/png");
  let url = dataURL.replace(
    /^data:image\/png/,
    "data:application/octet-stream"
  );
  downloadLink.setAttribute("href", url);
  downloadLink.click();
}

