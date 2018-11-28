/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(gameAttributes) {
  this.createdAt = new Date('November 28, 2018 03:24:00');
  this.dimensions = gameAttributes.dimensions;
  this.destroy = function () {
    return `${this.name} was removed from the game.`;
  }
}

// testing GameObject Constructor - confirmed working
// const tester = new GameObject({
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 2,
//   }
// });
// console.log(tester);
// console.log(tester.destroy());

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttibutes) {
  GameObject.call(this, characterAttibutes);
  this.healthPoints = characterAttibutes.healthPoints;
  this.name = characterAttibutes.name;
  this.takeDamage = function () {
    return `${this.name} took damage.`
  }
  this.death = function () {
    if (this.healthPoints === 0) {
      return `TEST`;
    }
  }
}
// testing CharacterStats Constructor - confirmed working
// const tester2 = new CharacterStats({
//   dimensions: 'who cares',
//   healthPoints: 10,
//   name: 'Tom'
// });

// console.log(tester2);

// console.log(tester2.destroy());

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  this.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}
// testing Humanoid Constructor - confirmed working
// const tester3 = new Humanoid({
//   dimensions: '12',
//   healthPoints: 20,
//   name: 'Jo',
//   team: "teamteam",
//   weapon: "star",
//   language: "yes"
// });

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


console.log(mage);
console.log(swordsman);
console.log(archer);
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




// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.

function Villian(villianAttributes) {
  Humanoid.call(this, villianAttributes);
  this.fireBomb = function (opponent) {
    console.log(opponent.takeDamage());
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
      console.log(opponent.destroy());
    }
  }
}

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
  this.banjo = function (opponent) {
    console.log(opponent.takeDamage());
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
      console.log(opponent.destroy());
    }
  }
}

const ryan = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 7,
  },
  healthPoints: 25,
  name: 'Ryan',
  team: 'Death to Hero',
  weapons: [
    'Fire'
  ],
  language: 'EvilAF',
});

const josh = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 7,
  },
  healthPoints: 25,
  name: 'Josh',
  team: 'Banjo for Life',
  weapons: [
    'Fire'
  ],
  language: 'EvilAF',
});

console.log(dingus.fireBomb(mage));
console.log(mage.healthPoints);
console.log(dingus.fireBomb(mage));
console.log(mage.healthPoints);
console.log(dingus.fireBomb(mage));
console.log(mage.healthPoints);
console.log(dingus.fireBomb(mage));
console.log(mage.healthPoints);
console.log(dingus.fireBomb(mage));



// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!