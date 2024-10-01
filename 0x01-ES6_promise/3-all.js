import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then((results) => {
      const { body } = results[0];
      const { firstName, lastName } = results[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
