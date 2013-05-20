var App;

function App() {
  this.panda = "sad";
}

App.prototype.setPandaEmotionalState = function(thePandaIs) { 
  this.panda = thePandaIs;
};

App.prototype.getPandaEmotionalState = function() {
  return this.panda;
}; 

module.exports = App;
