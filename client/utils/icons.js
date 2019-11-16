// import and add the icons you want to need to use below
// then you can use it like this: <FontAwesomeIcon icon="coffee" />
// refer here for more info - https://www.npmjs.com/package/@fortawesome/react-fontawesome

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faArrowUp,
  faArrowDown,
  faCommentAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

library.add(fas, faArrowUp, faArrowDown, faCommentAlt, faShare);
