import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const dataUsers = await getAllContacts();
    const toCount = dataUsers.length;
    return toCount;
  } catch (error) {
    throw new Error(error.message);
  }
};

console.log(await countContacts());
