module.exports = class Doggo {
  constructor(name=null,color=null,breed=null,weight=null){
    if(!name||!color||!breed||!weight) throw new Error('missing values')
    if(typeof name !== 'string' || typeof color !== 'string' || typeof breed !== 'string' || typeof weight !== 'number' ) throw new Error('incorrect input type')
    this.name = name
    this.color = color
    this.breed = breed
    this.weight = weight
  }
  getName(){
    return this.name
  }
  setName(name){
    if(!name || typeof name !== 'string') throw new Error('incorrect name input')
    this.name = name
  }
  getColor(){
    return this.color
  }
  setColor(color){
    if(!color || typeof color !== 'string') throw new Error('incorrect color input')
    this.color = color
  }
  getBreed(){
    return this.breed
  }
  setBreed(breed){
    if(!breed || typeof breed !== 'string') throw new Error('incorrect breed input')
    this.breed = breed
  }
  getWeight(){
    return this.weight
  }
  setWeight(weight){
    if(!weight || typeof weight !== 'number') throw new Error('incorrect weight input')
    this.weight = weight
  }
  describe(){
    return `${this.name} is a ${this.color} ${this.breed} who weighs ${this.weight} lbs`
  }
}
