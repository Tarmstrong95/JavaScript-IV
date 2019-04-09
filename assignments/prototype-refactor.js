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
class GameObject {
  constructor(attr) {
    this.createdAt = attr.createdAt;
    this.name = attr.name;
    this.dimensions = attr.dimensions;
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
class CharacterStats extends GameObject {
  constructor(attr) {
    super(attr);
    this.healthPoints = attr.healthPoints;
    this.prototype = Object.create(GameObject.prototype);
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
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
class Humanoid extends CharacterStats {
  constructor(attr) {
    super(attr);
    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }

  attack(enemy) {
    let rand = Math.ceil(Math.random(0, 5) * 10);
    enemy.healthPoints -= rand;
    if (this.healthPoints <= 0) {
      return ` `;
    } else if (enemy.healthPoints <= 0) {
      return this.destroy(enemy);
    } else {
      return `${this.name} attacked ${enemy.name} \n${enemy.name} health: ${
        enemy.healthPoints
      }`;
    }
  }

  destroy(enemy) {
    return `${this.name} attacked: \n${
      enemy.name
    } has been destroyed! \nGame Over: ${this.name} is the WINNER!`;
  }
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
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

//       ------------------GAME IS BELOW-------------------

//villain constructor---------------------------------------
class Villain extends Humanoid {
  constructor(attr) {
    super(attr);
  }
}
Villain.prototype = Object.create(Humanoid.prototype);

//Hero constructor---------------------------------------------
class Hero extends Humanoid {
  constructor(attr) {
    super(attr);
  }
}
Hero.prototype = Object.create(Humanoid.prototype);

//creates villain---------------------------------------------------
const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 5,
    height: 9
  },
  healthPoints: 100,
  name: "Dumpling",
  team: "boobano",
  weapons: ["Spork", "Banana"],
  language: "slookivono"
});

//creates hero-----------------------------------------------------
const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 3,
    height: 1
  },
  healthPoints: 120,
  name: "Pinoccio",
  team: "Potato",
  weapons: ["Spoon", "knife"],
  language: "eslakiv"
});

//Begins battle -----------------------------------------------------

// console.log("**************************************");
// console.log("************* Begin the Dual *********");
// console.log("**************************************");
// while (villain.healthPoints > 0 && hero.healthPoints > 0) {
//   console.log(villain.attack(hero));
//   console.log(hero.attack(villain));
// }
