class Point{
    x: number;
    y: number;
    readonly z: number = 0; //readonly property
    
    //constructor
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    //getters
    get getX(): number {
        return this.x;
    }
    get getY(): number {
        return this.y;
    }
    //setters
    set setX(x: number) {
        this.x = x;
    }
    set setY(y: number) {
        this.y = y;
    }
    //method
    getPoint(): string {
        return `x: ${this.x}, y: ${this.y}`;
    }
}

const p = new Point();
p.x = 10;
p.y = 20;
console.log(p.x);
console.log(p.y);
console.log(`x: ${p.x}, y: ${p.y}`);

//inheritance
//same as Prog Meth Class
class Point3D extends Point {
    z: number;
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y);
        this.z = z;
    }
    getPoint3D(): string {
        return `x: ${this.x}, y: ${this.y}, z: ${this.z}`;
    }
}

const p3d = new Point3D(10, 20, 30);
console.log(p3d.getPoint3D());
// → x: 10, y: 20, z: 30

//abstract class
abstract class Shape {
    abstract getArea(): number;
    abstract getPerimeter(): number;
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

//interface
interface Shape2D {
    getArea(): number;
    getPerimeter(): number;
}
class Rectangle implements Shape2D {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 20);
console.log(`Circle area: ${circle.getArea()}`);
console.log(`Circle perimeter: ${circle.getPerimeter()}`);
console.log(`Rectangle area: ${rectangle.getArea()}`);

//polymorphism
function printShapeInfo(shape: Shape2D) {
    console.log(`Area: ${shape.getArea()}`);
    console.log(`Perimeter: ${shape.getPerimeter()}`);
}
printShapeInfo(circle);
printShapeInfo(rectangle);

//access modifiers
class Person {
    private name: string;
    protected age: number;
    public email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    private getName(): string {
        return this.name;
    }
    protected getAge(): number {
        return this.age;
    }
    public getEmail(): string {
        return this.email;
    }
    public getInfo(): string {
        return `Name: ${this.getName()}, Age: ${this.getAge()}, Email: ${this.getEmail()}`;
    }
}
