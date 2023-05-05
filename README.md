# chandanv.me

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0. The prod version of the website is built using [Scully](https://scully.io).


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build
Building a Sully app needs a few additional steps.
 - Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
 - Run `npx sully` to pre-render static pages. Alternatively, if you have changes to routes, say you've added a new blog post, run `npx sully --scanRoutes` to update the routes. Now, you have the `dist/static` folder populated with all the pre-rendered static pages.


## Serving
To serve the website, copy the contents of `dist/static` folder onto your webroot. Since everythig - html, css, js - is all statically linked, any web server that can serve files can be used to host your website.

To test the Scully-rendered pages locally, you can run `npx scully serve` and head to `http://localhost:1668/`.


## Live Version
This website is live [here](https://chandanv.me/)!


## Further help
For more detailed steps on how to develop using Angular and Scully, check this [post](https://www.digitalocean.com/community/tutorials/how-to-build-a-jamstack-portfolio-with-angular-11-and-scully).