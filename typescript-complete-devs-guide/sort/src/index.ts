import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection: NumbersCollection = new NumbersCollection([10, 300, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charsCollection: CharactersCollection = new CharactersCollection('XaAyb');
charsCollection.sort();
console.log(charsCollection.data);

const linkedList: LinkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
