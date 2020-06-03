// Write your code here!
const div1 = document.createElement('div')
document.body.appendChild(div1)

const ul1 = document.createElement('ul')

for (let i=0; i < 4; i++) {
    let li = document.createElement('li')
    li.innerHTML = `${i}`
    ul1.appendChild(li)
}

div1.appendChild(ul1)

const main = document.querySelector('main#main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'Gavin is the champion'
newHeader.style.textAlign = 'center'
newHeader.style.color = 'purple'

document.body.appendChild(newHeader)