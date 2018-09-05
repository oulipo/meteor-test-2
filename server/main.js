import { Meteor } from 'meteor/meteor'
import { Players } from '../imports/api/players'

Meteor.startup(() => {
  // class Person {
  //   constructor(name = 'Anonyme', age = 0) {
  //     this.name = name
  //     this.age = age
  //   }
  //   getGreeting() {
  //     return `Bonjour, je suis ${this.name}.`
  //   }

  //   getPersonDescription() {
  //     return `${this.name} a ${this.age} an(s).`
  //   }
  // }

  // class Employe extends Person {
  //   constructor(name, age, title) {
  //     super(name, age)
  //     this.title = title
  //   }
  //   hasJob() {
  //     return !!this.title
  //   }
  //   getGreeting() {
  //     if(this.hasJob()) {
  //       return `Bonjour, je suis ${this.name} et je suis ${this.title}.`
  //     } else {
  //       return super.getGreeting()
  //     }
  //   }
  // }

  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assembleur') {
  //     super(name, age)
  //     this.preferredLanguage = preferredLanguage
  //   }
  //   getGreeting() {
  //     return `Bonjour, je suis ${this.name} et je développe en ${this.preferredLanguage}.`
  //   }
  // }

  // let other = new Employe('Sandrine', 46)
  // console.log(other.getPersonDescription())
  // console.log(other.hasJob())
  // console.log(other.getGreeting())

  // let me = new Programmer('Laurent', 47, 'Javascript')
  // console.log(me.getPersonDescription())
  // console.log(me.getGreeting())
})

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// }
// let yearBuilt = 1995

// let result = {
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// }

// console.log(result)