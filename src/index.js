import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";

import css from "./footer.css";
import buttonStyle from "./button.css";

// import Foo from "./foo.ts";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(image);
document.body.appendChild(button);
document.body.appendChild(footer);
