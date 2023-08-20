# AngularExamSoftuni
This is the project for Angular course June 2023


This is a basic implementation of all CRUD operations.

For the backend I am using Firebase.
For storing the data I am using Firestore.
For authentication I am using Firebase with Authentication with email and password.
All of the routing paths are configured in app-routing.module.
For 2 of the pages I am using routing with parameters passed in the query string.
I have 2 services 1 is for the authentication and the other one is for manipulating with the data of recipes.
I have used 1 resolver to get the data prehand in the MyRecipesComponent
to redirect to other pages I am using router.navigate
for checking if user is looged in I am storing him in the local storage when he click logout he is being deleted.
For handling data in request I am using Observables and Promises.
The website is mobile friendly and has validations.
