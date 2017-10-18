import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';
import User, { createURL, gravatar } from './src/user';

const david = new User('Davey T', 'daveyt@gmail.com', 'daveyt.com');
const profile = createURL(david.name);
const image = gravatar(david.email);
console.log(image);

