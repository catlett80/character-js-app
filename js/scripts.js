


  var pokemonRepository = (function pokemon() {

    var repository = [
      {
      name: 'Bulbasaur',
      height: '0.7',
      types: ['Grass', 'Poison']
    }
];

function add(repository){
  repository.push(Ivysaur);
  repository.push(Vensaur);
};

var Ivysaur = {
  name: 'Ivysaur',
  height: '1',
  types: ['Grass', 'Poison']
};

var Venusaur = {
  name: 'Venusaur',
  height: '2',
  types: ['Grass', 'Poison']
};

console.log(repository)

function getAll(){
  return repository;
};

return {
  add: add,
  getAll: getAll
};

})();


repository.forEach(var i = 0; i < repository.length; i++){
  var message =""
  if(repository[i].height>1){
    message= "Wow that's big!"
  }
