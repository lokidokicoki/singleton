import Sing from './sing';
import Sing2 from './sing2';

console.log('hello');

const instance2 = new Sing();

instance2.type;
console.log(instance2.time);
console.log(Sing.staticTest());

const inst = new Sing();
console.log(inst.time);

console.log(`---`);


const inst3 = Sing2.instance;
const inst4 = Sing2.instance;

console.log(inst3.test1(), inst3.type, inst3.time);
console.log(inst4.test1(), inst4.type, inst4.time);
console.log(Sing2.staticTest());
