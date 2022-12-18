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
##Version1.2
```
--allow to store the coach data to firebase realtime database.
```

##Version 1.3
```
-Add auth method to this project including login and register page.
-serve side based on firebase application,
  - reference the sign up and log in Firebase Auth API with email and password
 
```
##Version 1.4
```
-Upgrade log in, register and user home page
- Allow user to register as coach and send request after they logged in
-deploy serve in netfliy
-Upgrading UI Styling
-Usability to moblie version.

```
###Deploy website:  https://inspiring-croissant-ce422c.netlify.app/
    
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
