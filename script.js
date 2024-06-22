const adviceId = document.querySelector('.generator__advice-id')
const adviceContent = document.querySelector('.generator__advice-content')
const generateButton = document.querySelector('.generator__generate-button')
const generateIcon = document.querySelector('.generator__generate-icon')

function generate() {
    generateIcon.src = 'assets/icon-loading.svg'
    generateIcon.alt = 'Loading'

    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        generateIcon.src = 'assets/icon-dice.svg'
        generateIcon.alt = 'Generate'
        adviceId.innerText = `ADVICE #${data.slip.id}`
        adviceContent.innerText = `"${data.slip.advice.replaceAll('"', '\'')}"`
      })
}
