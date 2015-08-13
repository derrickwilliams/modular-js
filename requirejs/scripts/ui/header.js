define(function() {
  return {
    render: function(el, text) {
      var header = document.createElement('h1');
      header.innerText = text;
      el.appendChild(header);
    }
  }
})
