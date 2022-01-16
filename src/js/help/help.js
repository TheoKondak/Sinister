import { getSin } from '../getSin.js';
// Get Data from sin.json
const data = await getSin('./src/js/help/help.json');

export const help = (help) => {
  help ? console.table(data) : console.log('Help is disabled. You can enable help by changing help to true in sin.json');
};
