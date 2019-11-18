Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'kopo',
    gloceryList: [
      { id: 0, text: 'A' },
      { id: 1, text: 'B' }
    ]
  }
})
