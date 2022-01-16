import { getSin } from '../getSin.js';
// Get Data from sin.json
const data = await getSin('./src/js/help/help.json');

export const help = (help) => {
  if (help) {
    for (const [key, dat] of Object.entries(data)) {
      if (typeof dat === 'string') {
        console.log(key + ': ' + dat);
      } else if (typeof dat === 'object') {
        console.log(' ');
        console.log(key + ': ');
        console.table(dat);
        console.log(' ');
      } else if (typeof dat === 'boolean') {
        console.warn('help.json should not contain boolean data. Recieved: "' + dat + '" in "' + key + '"');
      }
    }
  } else {
    console.log('help.json is disabled. You can enable help by changing help to true in sin.json');
  }
};
