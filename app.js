const createInstructor = (firstName, lastName) =>
     ({
      firstName,
      lastName,
    })

    const favoriteNumber = 42;

    const instructor = {
      firstName: "Colt",
      [favoriteNumber]: "That is my favorite!"
    }
    

    
const instructors = {
        firstName: "Colt",
        sayHi() {
          return "Hi!";
        },
        sayBye(){
          return this.firstName + " says bye!";
        }
      }



const createAnimal = (species, verb, noise) => ({
    species,
    verb,
    noise,
    isCute(){
        if (this.species == "dog"){
            return true
        }
    }
})