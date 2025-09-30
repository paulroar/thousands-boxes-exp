const container = document.querySelector('.container');
const squares = [];
let cols = 0;
let rows = 0;

function createGrid() {
    container.innerHTML = '';
    squares.length = 0;
    const squareSize = 20;
    const gap = 2;
    const containerWidth = container.clientWidth;
    cols = Math.max(1, Math.floor(containerWidth / (squareSize + gap)));
    container.style.gridTemplateColumns = `repeat(${cols}, minmax(${squareSize}px, 1fr))`;
    const numSquares = cols * 30; // 30 rows

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(square);
        squares.push(square);
    }
    addEventListeners();
}


const getTrailElements = (index) => {
    const trailElements = [];
    const row = Math.floor(index / cols);
    const col = index % cols;

    for (let i = -5; i <= 5; i++) {
        const newCol = col + i;
        if (newCol >= 0 && newCol < cols) {
            const squareIndex = row * cols + newCol;
            if(squares[squareIndex]) trailElements.push({element: squares[squareIndex], delay: Math.abs(i) * 50});
        }
    }
    return trailElements;
};

const getRippleElements = (index) => {
    const rippleElements = [];
    const row = Math.floor(index / cols);
    const col = index % cols;
    rows = Math.floor(squares.length / cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const distance = Math.sqrt(Math.pow(i - row, 2) + Math.pow(j - col, 2));
            const squareIndex = i * cols + j;
            if(squares[squareIndex]) rippleElements.push({element: squares[squareIndex], delay: distance * 100});
        }
    }

    return rippleElements;
};

function addEventListeners() {
    squares.forEach((square, index) => {
        square.addEventListener('mouseover', () => {
            const trailElements = getTrailElements(index);
            trailElements.forEach(({element, delay}) => {
                setTimeout(() => {
                    element.classList.add('hovered');
                    setTimeout(() => {
                        element.classList.remove('hovered');
                    }, 500);
                }, delay);
            });
        });

        square.addEventListener('click', () => {
            const rippleElements = getRippleElements(index);
            rippleElements.forEach(({element, delay}) => {
                setTimeout(() => {
                    element.classList.add('clicked');
                    element.addEventListener('animationend', () => {
                        element.classList.remove('clicked');
                    }, {once: true});
                }, delay);
            });
        });
    });
}

const debounce = (fn, delay = 150) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
};

const handleResize = debounce(createGrid, 150);

window.addEventListener('resize', handleResize);
createGrid();