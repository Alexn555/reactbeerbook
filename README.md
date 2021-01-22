# React Beer Book

v 1.0
 Base init stable application


##  How to install

```bash
# Install dependencies
cd reactbeerbook
npm install
```

Main plot
 React Beer Book is an application that uses classical redux pattern, with store and reducers.
 It's main idea to create view for showing beer and beer details.


## How to test
Currently using react-scripts build-in test tool based on jest with test help of enzyme.
Tests are commonly spread among component folders
Exm. utils tests are in folder  utils/test this way, in my opinion, is more comfortable for importing
required files

cmd -> npm run test


## How to run

### The client side
Use command: npm run start
Program will start localhost:3000


```bash
 Check the page in desired Browser

 Best viewed in Firefox, Chrome, works desktop and mobile

	Plot
   Uses redux pattern.
   Consists of components: lists, calendar graphics
   And actions with reducers

     Libraries:
	  node-sass - sass
	  sass-loader

    Dockerfile - docker container, it's first time for add project to this type of file
      It should work

     Scheme:
	   Contents
	    pages - pages of application
	    actions - redux actions (send signals to get data to server)
	    components - parts, that are required for pages
	    reducers - redux building blocks of handling state change with business logic (gets data from server)
		styles/ - common scss styles

		App.js - main page declaration
	    store.js - redux store
	    index.js - starting point whole application
	    setupTests - setup enzyme adapter
		tests are spread among folders

		App ->  entry point application

		  Beers component -> beer lists 
		  Beer-details component -> beer details

		 You also can adjust number of columns size.

  ### How to use the application
  Program will get all the beers from server
  Click on Toggle Brewed to filter only brewed before [n] year
  Click on Show Details to open beer details

  Enjoy the app and do call if you have some feedback.
  Thanks for the task!

