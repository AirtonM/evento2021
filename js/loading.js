(function (window, document, MessageBox) {

    function Loading(selector, messageSelector) {
      this.element = document.querySelector(selector);
      this.box = new MessageBox(messageSelector);
  
      this.message = null;
    }
  
    Loading.prototype.show = function(message) {
      this.element.style.display = 'block';
      this.message = this.box.show('info', message);
    };
  
    Loading.prototype.hide = function() {
      this.element.style.display = 'none';
      this.box.hide(this.message);
    };
  
    window.Loading = Loading;
  })(window, document, window.MessageBox);