import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const getDataUsers = await readContacts();

    return JSON.parse(getDataUsers);
  } catch (error) {
    throw new error(error.message);
  }
};

console.log(await getAllContacts());
