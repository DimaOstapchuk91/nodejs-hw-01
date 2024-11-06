import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let generateUsers = [];
    for (let i = 0; i <= number; i += 1) {
      const generate = createFakeContact();
      generateUsers.push(generate);
    }

    await writeContacts(generateUsers);
  } catch (error) {
    throw new Error(error.message);
  }
};

generateContacts(2);
