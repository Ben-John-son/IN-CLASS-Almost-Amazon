import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import startApp from '../utils/startApp';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

init();
startApp();
