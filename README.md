# Wikipedia viewer
### Just my solution to [a FreeCodeCamp challenge.](https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer) Nothing to be interested in.

Actually, I did one thing interestingly: I used Bash for a build tool instead of a purpose-built task runner (e.g. Gulp). I'm tired of tools like JSFiddle and CodePen on a slow connection, and I don't want to write plain old HTML, ES5, and CSS. I also wanted instant reloads with [Browsersync.](https://browsersync.io/). So I wrote a four-line Bash task runner (that could be written in two lines). It's in `run.sh`. Tasks are defined in `build.sh`. I'm running Babel, Sass, Pug, and Browsersync, all in one terminal with instant reloads (or, in the case of CSS, updated CSS is injected), and without a huge config file. It works beautifully, and I intend to extract it to create a base from which to start other projects.

If you want to see this project live, I extracted the code and put it on CodePen for the sake of FreeCodeCamp: https://codepen.io/Nateowami/pen/ZKeJYN.

Oh, and another "interesting" thing I did was *use the DOM API.* Yeah. That thing the W3C (or WHATWG or someone else, let's not start an argument) created so we could manipulate elements in the DOM, instead of pulling huge libraries, that, um, ultimately just manipulate the DOM.
