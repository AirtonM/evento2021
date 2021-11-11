(function(window, document, Loading, MessageBox) {
    function VLibrasPlugin() {
      this.loaded  = false;
      this.chooser = new qdClient.Chooser();
      this.glosa   = undefined;
      this.loading = new Loading('#loading-screen', '#message-box');
      this.message = new MessageBox('#message-box');
      this.lastReq = {
        url: null,
        millis: null,
        response: null
      };
    }
  
    VLibrasPlugin.prototype.sendGlosa = function(glosa) {
      var glosa = glosa || this.glosa;
  
      if (glosa !== undefined && this.loaded === true) {
        window.SendMessage('PlayerManager', 'catchGlosa', glosa);
      }
    };
  
    VLibrasPlugin.prototype.translate = function(text) {
      var self = this;
      self.loading.show('Traduzindo...');
      self.chooser.choose(self.lastReq.url, self.lastReq.millis, self.lastReq.response,
          function (url) {
              var start = new Date().getTime();
  
              if (!url) {
                self.loading.hide();
                self.message.show('warning', 'Não foi possível se conectar ao servidor. Irei soletrar!', 3000);
  
                self.glosa = decodeURI(text).toUpperCase();
                self.sendGlosa();
                return;
              }
  
              qdClient.request(url + '?texto=' + text, "GET", {},
                  function(status, response) {
                    self.lastReq.response = status !== 200 ? -1 : status;
                    self.lastReq.millis = (new Date().getTime() - start);
                    self.lastReq.url = url;
  
                    self.loading.hide();
                    if (status !== 200)
                      self.message.show('warning', 'Não foi possível se conectar ao servidor. Irei soletrar!', 3000);
  
                    self.glosa = response || decodeURI(text).toUpperCase();
                    self.sendGlosa();
                  });
          });
    };
  
    VLibrasPlugin.prototype.showMessage = function(level, message, time) {
      this.message.show(level, message, time);
    };
  
    VLibrasPlugin.prototype.hideMessage = function() {
      this.message.hide();
    };
  
    VLibrasPlugin.prototype.load = function() {
      this.loaded = true;
      this.sendGlosa();
    };
  
    VLibrasPlugin.prototype.errorHandler = function() {
      console.log('ErrorHandler!');
      this.message.show('warning', 'Ops! Ocorreu um problema, por favor entre em contato com a gente.');
    };
  
    // Expose
    window.VLibrasPlugin = new VLibrasPlugin();
    window.onerror = function() {
      this.VLibrasPlugin.errorHandler();
    };
  
    window.onLoadPlayer = function() {
      this.VLibrasPlugin.load();
    };
  })(window, document, Loading, MessageBox);