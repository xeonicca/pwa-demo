const app = new Vue({
  el: 'main',
  data: {
    message: 'I am ready',
    complexData: Array.from({length: 500}, () => Math.floor(Math.random() * 40))
  }
})