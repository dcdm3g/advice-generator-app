const adviceId = document.querySelector('.generator__advice-id')
const adviceQuote = document.querySelector('.generator__advice-quote')
const generateButton = document.querySelector('.generator__generate-button')
const generateIcon = document.querySelector('.generator__generate-icon')

function generate() {
    generateButton.disabled = true
    generateIcon.src = 'assets/icon-loading.svg'
    generateIcon.alt = 'Generating'

    fetch('https://api.adviceslip.com/advice')
      .then((res) => {
        if (!res.ok) throw new Error('API response was not ok')
        return res.json()
      })
      .then((data) => {
        generateButton.classList.add('generator__generate-button--limited')
        generateIcon.src = 'assets/icon-dice.svg'
        generateIcon.alt = 'Generate'
        adviceId.innerText = `ADVICE #${data.slip.id}`
        adviceQuote.innerText = data.slip.advice.replaceAll('"', '\'')

        setTimeout(() => {
          generateButton.classList.remove('generator__generate-button--limited')
          generateButton.disabled = false
        }, 2000)
      })
      .catch(() => {
        generateButton.disabled = false
        generateIcon.src = 'assets/icon-dice.svg'
        generateIcon.alt = 'Generate'
        alert('Oops, something went wrong! Please try again later.')
      })
}
