import Sing from './sing';
import Sing2 from './sing2';
import { Lib as lib } from './lib';

console.log('hello');
console.log(`constructable singleton`);

const instance2 = new Sing();

instance2.type;
console.log(instance2.time);
console.log(Sing.staticTest());

const inst = new Sing();
console.log(inst.time);

console.log(`---`);
console.log(`instanceable singleton`);

const inst3 = Sing2.instance;
const inst4 = Sing2.instance;

console.log(inst3.test1(), inst3.type, inst3.time);
console.log(inst4.test1(), inst4.type, inst4.time);
console.log(Sing2.staticTest());

console.log(`---`);
console.log(`test lib with only static methods`);
lib.lib1();

console.log(lib.lib2());

console.log(`---`);
console.log(`create instance of static only lib`);
console.log('this should fail...');
let l = new lib();
l.lib1();
