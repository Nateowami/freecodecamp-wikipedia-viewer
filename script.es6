document.querySelector('button.random').addEventListener('click', () => {
  location.href = 'https://en.wikipedia.org/wiki/Special:Random'
}, false)

const searchResults = document.querySelector('.search-results')

function setResults(element) {
  if(searchResults.lastChild) searchResults.removeChild(searchResults.lastChild)
  searchResults.appendChild(element)
}

function setMessage(msg) {
  const p = document.createElement('p')
  p.textContent = msg
  setResults(p)
}

document.querySelector('form.search').addEventListener('submit', evt => {
  evt.preventDefault()

  setMessage('Searching...')
  const searchText = evt.target.querySelector('input').value

  const req = new XMLHttpRequest()
  req.open('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + encodeURIComponent(searchText))

  req.onload = function () {
    if(this.status >= 200 && this.status < 400) {
      const res = this.response
      loadResults(JSON.parse(res))
    }
    else setMessage('Error ' + this.status)
  }

  req.onerror = function () {
    setMessage('Network error')
  }

  req.send()
})

function loadResults(results) {
  console.log(results)
  const ul = document.createElement('ul')

  for(let i = 0; i < results[1].length; i++) {
    const li = document.createElement('li')

    const [title, snippet, url] = [ results[1][i], results[2][i], results[3][i] ]

    const h3 = document.createElement('h3')
    const a = document.createElement('a')
    const p = document.createElement('p')

    a.textContent = title
    a.href = url
    p.textContent = snippet

    h3.appendChild(a)

    li.appendChild(h3)
    li.appendChild(p)
    ul.appendChild(li)
  }

  setResults(ul)
}
