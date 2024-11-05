import { countContacts } from './countContacts.js';
import { getAllContacts } from './getAllContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const allContacts = await getAllContacts();
    const numberAllcontact = await countContacts();
    if (numberAllcontact > 0) {
      const updateData = allContacts.slice(0, numberAllcontact - 1);
      await fs.writeFile(PATH_DB, JSON.stringify(updateData, null, 2));
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

removeLastContact();
