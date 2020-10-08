// Testar med kodexempel från uppgift 2 för att se att Babel fungerar

// Arrow function 
name = () => {
    return "Lena";
}

//Filter 
const animals = ["Moira", "Reapurr", "Mei", "Ana", "Genji", "Mercy"];
const result = animals.filter(animal => animal.endsWith("a"));
console.log(result);