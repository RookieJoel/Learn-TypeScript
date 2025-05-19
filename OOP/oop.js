var Client = /** @class */ (function () {
    function Client() {
        this.firstname = "";
        this.lastname = "";
        this.age = 0;
    }
    Client.prototype.greeting = function () {
        return "Hello Guys! I'm ".concat(this.firstname, " ").concat(this.lastname, ", age: ").concat(this.age, " years old.");
    };
    return Client;
}());
var user = new Client();
user.firstname = 'Suttanop';
user.lastname = 'Chanah';
user.age = 20;
console.log(user.greeting());
// → Hello Guys! I'm Suttanop Chanah, age: 20 years old.
