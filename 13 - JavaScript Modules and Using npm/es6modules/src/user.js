import slug from 'slug';
import { url } from './config';

export default function User(name, email, website) {
    return { name, email, website };
}

export function createURL (name) {
    return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
    const encoded = new Buffer(email).toString('base64');
    const photoURL = `https://www.gravatar.com/avatar/${encoded}`;
    return photoURL;
}