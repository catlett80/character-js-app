

var repository = [];


var Bulbasaur = {
  name: 'Bulbasaur',
  height: '0.7',
  types: ['Grass', 'Poison']
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

repository.push(Bulbasaur);
repository.push(Ivysaur);
repository.push(Venusaur);
console.log(repository)


for (var i = 0; i < repository.length; i++){
  var message =""
  if(repository[i].height>1){
    message= "Wow that's big!"
  }
  document.write(repository[i].name + ":" + repository[i].height + " " + message + "<br>");
}
