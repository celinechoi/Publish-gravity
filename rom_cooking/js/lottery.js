const $canvas = document.getElementById('canvas');
const context = $canvas.getContext('2d');
const { top: canvasTop, left: canvasLeft } = $canvas.getBoundingClientRect();
const WIDTH = 430;
const HEIGHT = 91;
const ERASE_RADIUS = 30;
const ERASE_DISTANCE = ERASE_RADIUS / 2; // 지워진 영역(투명한 원)간 임의 간격
const dpr = window.devicePixelRatio;
const erasedList = [];

let isDrawing = false;
let thresholdOfEraseCount = 0;
let isRevealed = false;

const initCanvas = () => {
  $canvas.style.width = `${WIDTH}px`;
  $canvas.style.height = `${HEIGHT}px`;
  $canvas.width = WIDTH * dpr;
  $canvas.height = HEIGHT * dpr;
  context.scale(dpr, dpr);

  // 회색 배경으로 덮기
  context.strokeStyle = '#ddd';
  context.fillStyle = '#ddd';
  context.beginPath();
  context.roundRect(0, 0, WIDTH, HEIGHT, 8);
  context.stroke();
  context.fill();

  // 안내 문구 추가
  context.font = '20px sans-serif';
  context.fillStyle = '#000';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  // context.fillText("여기를 긁어보세요", WIDTH / 2, HEIGHT / 2);

  // 자동으로 결과를 보여줄 임계치 설정
  const col = Math.ceil(WIDTH / (ERASE_RADIUS * 2 + ERASE_DISTANCE));
  const row = Math.ceil(HEIGHT / (ERASE_RADIUS * 2 + ERASE_DISTANCE));
  thresholdOfEraseCount = col * row;
  // 투명한 원이 최대로 그려질 경우를 캔버스에 표현
  /* for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      context.save();
      context.beginPath();
      context.arc(
        ERASE_RADIUS + i * (ERASE_RADIUS * 2 + ERASE_DISTANCE),
        ERASE_RADIUS + j * (ERASE_RADIUS * 2 + ERASE_DISTANCE),
        ERASE_RADIUS,
        0,
        2 * Math.PI,
        false
      );
      context.fill();
      context.closePath();
      context.restore();
    }
  } */
};

const handleDrawingStart = () => {
  if (!isDrawing) {
    isDrawing = true;
  }
};

const handleMouseMove = (event) => {
  event.preventDefault();
  const { offsetX, offsetY } = event;
  handleDrawing(offsetX, offsetY);
};

const handleTouchMove = (event) => {
  event.preventDefault();
  const { clientX, clientY } = event.changedTouches[0];
  handleDrawing(clientX - canvasLeft, clientY - canvasTop);
};

const drawTransparentCircle = (x, y) => {
  context.save();
  context.globalCompositeOperation = 'destination-out';
  context.beginPath();
  context.arc(x, y, ERASE_RADIUS, 0, 2 * Math.PI, false);
  context.fill();
  context.closePath();
  context.restore();

  const checkList = erasedList.filter(({ x: posX, y: posY }) => {
    const distX = posX - x;
    const distY = posY - y;
    return Math.sqrt(distX * distX + distY * distY) < ERASE_RADIUS + ERASE_DISTANCE;
  });
  if (!checkList.length) {
    erasedList.push({ x, y });
  }
};

const handleDrawing = (x, y) => {
  if (isDrawing) {
    if (erasedList.length < thresholdOfEraseCount) {
      drawTransparentCircle(x, y);
    } else {
      if (!isRevealed) {
        context.clearRect(0, 0, WIDTH, HEIGHT);
        isRevealed = true;
      }
    }
  }
};

const handleDrawingEnd = () => {
  if (isDrawing) {
    isDrawing = false;
  }
};

initCanvas();
$canvas.addEventListener('mousedown', handleDrawingStart);
$canvas.addEventListener('touchstart', handleDrawingStart);
$canvas.addEventListener('mousemove', handleMouseMove);
$canvas.addEventListener('touchmove', handleTouchMove);
$canvas.addEventListener('mouseup', handleDrawingEnd);
$canvas.addEventListener('touchend', handleDrawingEnd);
