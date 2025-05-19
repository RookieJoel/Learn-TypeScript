
class Client {
  firstname: string = "";  
  lastname:  string = "";
  age:       number = 0;

  greeting(): string {
    return `Hello Guys! I'm ${this.firstname} ${this.lastname}, age: ${this.age} years old.`;
  }
}

const user = new Client();
user.firstname = 'Suttanop';
user.lastname  = 'Chanah';
user.age       = 20;

console.log(user.greeting());
// → Hello Guys! I'm Suttanop Chanah, age: 20 years old.
