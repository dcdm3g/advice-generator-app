const id = document.querySelector('.generator__advice-id')
const content = document.querySelector('.generator__advice-content')

function generate() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        id.innerText = `ADVICE #${data.slip.id}`
        content.innerText = `"${data.slip.advice.replaceAll('"', '\'')}"`
      })
}
