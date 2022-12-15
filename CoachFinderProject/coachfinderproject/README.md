# coachfinderproject
```
Version 1.0
  - Set up the project
  - Building the basic structure of this project
    - HomePage
    -Coach Page
      -Coach Register Page
    -Request Page
      -Send Request Page
  - Adding Navigation bar and footer bar to all pages
  -Set up the router of each pages including the sub path such as coach register and send new request
    -Sub path not working, main path working as normal
  -Implment functionality:
    - Allow user to send request and assign to coach 
```
##Version 1.1
```
- Add style to all pages by bootstrap5.
- Implment add new coach and send request functionality by using vueX.
-In both features, using getters to get the list of coach and request
  - mutations read and store the addCoach/Request function
   - actions create a formatData to store this kind of data to coachlist/requestlist
   -dispatch this method in CoachRegister.vue and RequestForm.vue components.
```
## Features will updated later on:
```
    - Adding Style to all pages.
    - The Coach register request will send to verification page after they sending coach application.
    -Once the Application is approved, then it will appear to the main page.
    -Assign coach to serval types such as backend, front end and full stack.
    -In Coach Home Page, user will able to find speific coach by filter section.
    -Adding content to Home Page.
    -Update the functionality to Vuex.
    -Adding backend to allow user to store the coach and request information
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
