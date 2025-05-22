//install npm
npm is not node package manager
npm init
package.json is the configuration for npm
what are dependencies? packages are known as dependencies!
what is bundler? packages our app need to get eligible for production
install bundler - webpack, parcel,vite
what is webpack?
npm install -D parcel ? why is this D ?
* there are two types of dependencies
1) Dev dependency 
2) Normal dependency
  // ~ ^ 
  # what is caret? why is it overthere is package.json?
 ^   if a new version comes tomorrow, then parcel will automatically update it's version!
 ~   if we have tilda over there it will upgrade the major version as well.
why do we have package-lock.json?
what's the diff between package.json and package-lock.json!
to keep whatever we have on our local works the same on production , package-lock.json contains integrity(hash code at the start) that ensures this.



to ignite are app we use the command
//npx parcel index.html//
what does this mean? just like we have npm , similarly we have npx, when we use npm we are calling the command of npm.
npx means executing a package!!

we can get react into our app using npm as well!! cdn links is not a preferred way to bring react and react dom in our project!
## parcel
-dev build
-local server
-HMR - Hot Module Replacement 
-File watching Algorithm (written in C++)
-Caching - Faster Builds

-parcel is giving you a faster development experience cuz it is caching things up!
-when we install parcel, parcel quickly sneks into our project and also caches things.
-most important thing in web browsers is to load images. 
-parcel does image optimization for us.
-it does minification.
-bundling
-compressing
-consistent hashing (read yourself)
-code splitting
-differential bundling -written in C++ (  support older browsers as well)
-Diagnostics
-Error handling
-HTTPS 
-Tree shaking -remove unused code 
-Different build for dev and production bundles (production build takes a little more time than on dev)
-
//read parcel documentation , npm, js try reading documentation a part of routine








