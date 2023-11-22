document.addEventListener('DOMContentLoaded', function () {
  const words = ['javascript', 'html', 'css', 'react', 'nodejs'];
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  let guessedLetters = [];
  let hangmanTries = 20;

  function setupGame() {
    document.getElementById('hangmanFigure').innerHTML = '';
    document.getElementById('word').innerHTML = '';
    document.getElementById('letters').innerHTML = '';
  
 
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === ' ') {
        document.getElementById('word').innerHTML += ' ';
      } else {
        document.getElementById('word').innerHTML += '_ ';
      }
    }

    // Display available letters
    for (let letter = 65; letter <= 90; letter++) {
      const letterChar = String.fromCharCode(letter);
      const letterButton = document.createElement('button');
      letterButton.innerText = letterChar;
      letterButton.addEventListener('click', () => guessLetter(letterChar));
      document.getElementById('letters').appendChild(letterButton);
    }
  }

  function guessLetter(letter) {
    if (guessedLetters.includes(letter)) {
      return; 
    }

    guessedLetters.push(letter);

    if (!selectedWord.includes(letter) && letter !== ' ') {
      hangmanTries--;
      updateHangmanFigure();
    }

    updateWordDisplay();

    // Check if the player won or lost
    if (!document.getElementById('word').innerText.includes('_')) {
      alert('Parabéns! Você ganhou!');
      resetGame();
    } else if (hangmanTries === 0) {
      alert(`Você perdeu! A palavra era: ${selectedWord}`);
      resetGame();
    }
  }

  function updateHangmanFigure() {
    const hangmanFigure = document.getElementById('hangmanFigure');
    hangmanFigure.innerHTML = `
      <div>Restantes tentativas: ${hangmanTries}</div>
      <pre>
        _______
       |      |
       |      ${hangmanTries < 6 ? 'O' : ''}
       |     ${hangmanTries < 4 ? '/' : ''}${hangmanTries < 5 ? '|' : ''}${hangmanTries < 3 ? '\\' : ''}
       |     ${hangmanTries < 2 ? '/' : ''} ${hangmanTries < 1 ? '\\' : ''}
       |
      </pre>
    `;
  }

  function updateWordDisplay() {
    const wordDisplay = document.getElementById('word');
    wordDisplay.innerHTML = '';

    for (let i = 0; i < selectedWord.length; i++) {
      if (guessedLetters.includes(selectedWord[i]) || selectedWord[i] === ' ') {
        wordDisplay.innerHTML += `${selectedWord[i]} `;
      } else {
        wordDisplay.innerHTML += '_ ';
      }
    }
  }

  function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    hangmanTries = 6;
    setupGame();
  }

  // Inicializa o jogo
  setupGame();
});

