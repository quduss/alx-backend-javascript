import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);
  return Promise.allSettled([p1, p2])
    .then((res) => res.map((x) => ({ status: x.status, value: x.status === 'fulfilled' ? x.value : x.reason })));
}
