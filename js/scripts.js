

var pokemonRepository = (function pokemon() {

  var repository = [
    {
      name: 'Bulbasaur',
      height: '0.7',
      types: ['Grass', 'Poison']
  }
];

function add(pokemon){
  repository.push(pokemon);
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

add(Ivysaur);
add(Venusaur);

console.log(repository)

function getAll(){
  return repository;
};

return {
  add: add,
  getAll: getAll
};

})();

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write('<h1>Name: ' + pokemon.name + '<h1>');
})
