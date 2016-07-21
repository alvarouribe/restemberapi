REST Ember API

This is my first attempt to create the smallest api connection between an express api + ember data (rest adapter).
I did [this](https://www.youtube.com/watch?v=p-x6WdwaJco) 10:08 minutes tutorial from youtube 


You need to have a mongo application installed.

git clone git@github.com:alvarouribe/restemberapi.git restemberapi

1. open a terminal
2. cd restemberapi
3. npm install 
4. run nodemon server.js
5. open a new terminal
6. cd restemberapi/frontend
7. npm install
8. bower install
8. ember server
9. access to localhost:4200

:D

Now open postman 

select post 
localhost:3000/api/products

in Body(raw) add: 
{
  "name": "TEST",
  "sku": "blablabal1234",
  "price": 99.99
}
