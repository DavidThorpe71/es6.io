import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';
import User, { createURL, gravatar } from './src/user';

const david = new User('David Thorpe', 'davidthorpe878@gmail.com', 'http://www.davidthorpe.com');
console.log(david);
const profile = createURL(david.name);
console.log(profile);
const image = gravatar(david.email);
console.log(image);
