import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((obj) => process.stdout.write(`${obj.body} `)).catch(() => console.log('Signup system offline'));
  createUser().then((obj) => console.log(obj.firstName, obj.lastName)).catch(() => console.log('Signup system offline'));
}
