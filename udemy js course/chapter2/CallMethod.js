//Call() is a predefined javascript method, which is used to write methods for different objects. It calls the method, taking the owner object as an argument. The keyword this refers to the “owner” of the function or the object it belongs to

const movie1 = {
  Movie_name: "Pirates of the carabiean",
  actor_name: "johny depp",
  feature: function (rating, comments) {
    console.log(
      `Every one like the  ${this.Movie_name} movie and apprecitate the actor ${this.actor_name}. Rating has been given to these movie ${rating} star. if you like these movie then comment ${comments} . `
    );
  },
};
// movie1.feature(5, "after a long a time I saw a great movie.");

const movie2 = {
  Movie_name: "harry potter ",
  actor_name: "stwart jackson",
};

movie1.feature.call(movie2, 8, "stwart did a great job in these movie.");

const student1 = {
  name :  "chandra",
  age: 25,
  details: function(performance){
    console.log(`${this.name} is very hard working person. He has 1 year of expereience.His age is ${this.age}.if we select him ${performance} `);
  }
}

const student2 = {
  name:"Rakesh",
  age: 27,
}
student1.details.call(student2, "he can share his experience with fresher.")