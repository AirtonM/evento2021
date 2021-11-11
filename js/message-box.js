(function(window, document) {

    function MessageBox(selectors) {
      this.element = document.querySelector(selectors);
      this.message = null;
  
      this.element.classList.add('message-box');
  
      var self = this;
      var closeElement = this.element.querySelector('.close');
  
      if (closeElement) {
        closeElement.addEventListener('click', function (e) {
          self.hide();
        });
      }
  
      this.hide();
    }
  
    MessageBox.LEVELS = ['info', 'warning', 'success', 'default'];
  
    MessageBox.prototype.hide = function(message) {
      if (message !== this.message) return;
  
      this.message = null;
      this.element.classList.remove('active');
  
      MessageBox.LEVELS.forEach(function(level) {
        this.element.classList.remove(level);
      }, this);
    };
  
    MessageBox.prototype.show = function(level, message, time) {
      var self = this;
  
      level = MessageBox.LEVELS.indexOf(level) == -1 ? 'info' : level;
  
      this.hide();
  
      self.element.classList.add('active');
      self.element.classList.add(level);
      self.element.querySelector('.message').innerHTML = message;
  
      self.message = {
        text: message
      };
  
      var ref = self.message;
      if (time) {
        setTimeout(function () {
          self.hide(ref);
        }, time + 1);
      }
  
      return this.message;
    };
  
    // Expose
    window.MessageBox = MessageBox;
  })(window, document);