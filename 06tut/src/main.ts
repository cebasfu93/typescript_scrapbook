// CLASSES
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }

// VISIBILITY MODIFIERS
class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {}

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 25, "Typescript");
// console.log(Dave.age) // not allowed because it is private
// console.log(Dave.lang) // not allowed because it is protected
console.log(Dave.getAge());

// EXTENDING CLASSES
class WebDev extends Coder {
  constructor(public computer: string, name: string, music: string, age: number) {
    super(name, music, age);
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sata = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sata.getLang());
// console.log(Sata.age); // not allowed because it is private

// IMPLEMENTING INTERFACES
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

//
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);

// GETTERS AND SETTERS
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((item) => {
        return typeof item === "string";
      })
    ) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
// myBands.data = [...myBands.data, "Van Halen", 5150]; // error
