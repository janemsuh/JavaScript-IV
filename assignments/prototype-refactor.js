/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(objectAttrs) {
//     this.createdAt = new Date();
//     this.name = objectAttrs.name;
//     this.dimensions = objectAttrs.dimensions;
//   }
  
// GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
// };

class GameObject {
    constructor(name, dimensions) {
        this.createdAt = new Date();
        this.name = name;
        this.dimensions = dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
  
/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(charAttrs) {
//     GameObject.call(this, charAttrs);
//     this.healthPoints = charAttrs.healthPoints;
// }
  
// CharacterStats.prototype = Object.create(GameObject.prototype);
  
// CharacterStats.prototype.takeDamage = function() {
//     if (this.healthPoints <= 0) {
//       return this.destroy();
//     }
//     return `${this.name} took damage and has ${this.healthPoints} hp remaining.`;
// };

class CharacterStats extends GameObject {
    constructor(attrs) {
        super(attrs.name, attrs.dimensions);
        this.healthPoints = attrs.healthPoints;
    }
    takeDamage() {
        if (this.healthPoints <= 0) {
            return this.destroy();
        }
        return `${this.name} took damage and has ${this.healthPoints} hp remaining.`;
    };
}
  
/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
*/
// function Humanoid(humanoidAttrs) {
//     CharacterStats.call(this, humanoidAttrs);
//     this.team = humanoidAttrs.team;
//     this.weapons = humanoidAttrs.weapons;
//     this.language = humanoidAttrs.language;
// }
  
// Humanoid.prototype = Object.create(CharacterStats.prototype);
  
// Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
// };

class Humanoid extends CharacterStats {
    constructor(attrs) {
        super(attrs);
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    };
}
  
// function Villain(villainAttrs) {
//     Humanoid.call(this, villainAttrs);
//     this.vehicle = villainAttrs.vehicle;
// }
  
// Villain.prototype = Object.create(Humanoid.prototype);
  
// Villain.prototype.punch = function() {
//     this.healthPoints += 2;
//     hero.healthPoints -= 3;
//     console.log(`${this.name} punched ${hero.name} and now has ${this.healthPoints} hp!`);
//     return hero.takeDamage();
// };

class Villain extends Humanoid {
    constructor(attrs) {
        super(attrs);
        this.vehicle = attrs.vehicle;
    }
    punch() {
        this.healthPoints += 2;
        hero.healthPoints -= 3;
        console.log(`${this.name} punched ${hero.name} and now has ${this.healthPoints} hp!`);
        return hero.takeDamage();
    };
}
  
// function Hero(heroAttrs) {
//     Humanoid.call(this, heroAttrs);
//     this.food = heroAttrs.food;
// }
  
// Hero.prototype = Object.create(Humanoid.prototype);
  
// Hero.prototype.slash = function() {
//     this.healthPoints += 5;
//     villain.healthPoints -= 5;
//     console.log(`${this.name} slashed ${villain.name} and now has ${this.healthPoints} hp!`);
//     return villain.takeDamage();
// };

class Hero extends Humanoid {
    constructor(attrs) {
        super(attrs);
        this.food = attrs.food;
    }
    slash() {
        this.healthPoints += 5;
        villain.healthPoints -= 5;
        console.log(`${this.name} slashed ${villain.name} and now has ${this.healthPoints} hp!`);
        return villain.takeDamage();
    };
}
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const hero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 3,
        height: 5,
      },
      healthPoints: 15,
      name: 'Al',
      team: 'CAPS',
      weapon: 'Sword',
      language: 'Common Tongue',
      food: 'cookies',
    });
  
    const villain = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 5,
      },
      healthPoints: 10,
      name: 'Kate',
      team: 'Strategy',
      weapon: 'Hammer',
      language: 'Rant',
      vehicle: 'pickup',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(villain.punch()); // Kate punched Al and now has 12 hp! Al took damage and has 12 hp remaining.
    console.log(hero.slash()); // Al slashed Kate and now has 17 hp! Kate took damage and has 7 hp remaining. 
    console.log(hero.slash()); // Al slashed Kate and now has 22 hp! Kate took damage and has 2 hp remaining.
    console.log(villain.punch()); // Kate punched Al and now has 4 hp! Al took damage and has 19 hp remaining.
    console.log(hero.slash()); // Al slashed Kate and now has 24 hp! Kate was removed from the game.
   
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
 