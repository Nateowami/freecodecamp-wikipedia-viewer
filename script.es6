document.querySelector('button.random').addEventListener('click', () => {
  location.href = 'https://en.wikipedia.org/wiki/Special:Random'
}, false)

document.querySelector('form.search').addEventListener('submit', e => {
  console.log(e)
  e.preventDefault()
})
