// setTimeout(() => {
//   new Vue({
//     el: 'main',
//     data: {
//       message: 'I am ready',
//       complexData: Array.from({length: 100}, () => Math.floor(Math.random() * 100))
//     }
//   })
// }, 0)

setTimeout(() => {
  let data = Array.from({length: 3000}, () => Math.floor(Math.random() * 100))
  let stringTemplate = data.map(num => {
    return `<li class="list-group-item"><span class="text-dark">${num}</span></li>`
  }).join('')
  let frag = document.createDocumentFragment()
  let ul = document.createElement('ul')
  ul.classList.add('list-group')
  ul.innerHTML = stringTemplate
  frag.appendChild(ul)

  document.querySelector('main').appendChild(frag)
  document.getElementById('itemCount').textContent = data.length
})