const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];
console.log(pets)
const getAge = (pet) =>{
  return new Date().getFullYear() - pet.bornOn;
}


const petsWithAge=pets.map(pet => {return({...pet,...{age:getAge(pet)}})})
console.log(petsWithAge)


const dogs =pets.filter(pet=>{return(pet.type==="dog")})
console.log(dogs)



let jasper;
petsWithAge.forEach((pet) =>{if(pet.name==="Jasper"){jasper =pet ;
  return(jasper);}})
console.log (`Jasper is ${jasper.age} years old`)
