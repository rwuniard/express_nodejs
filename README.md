# express_nodejs
Express crash course
This shows an example on how to a web page and Rest service with Express JS.
The URL is http://localhost:5000 and it will show a welcome html page.
The URL for Rest service is http://localhost:5000/api/members
  - Make a get request to get member data -> http://localhost:5000/api/members
  - To add a member make a post request using Postman -> http://localhost:5000/api/member, 
    put content-type:application/json with body of this json object
    {
      "name": "Jake Smith",
      "email": "jake@gmail.com"
    }
  - To delete a member make a delete request using Postman -> http://localhost:5000/api/members/1 where 1 is the member id.
    put content-type:application/json with body of this json object
 
 
 Open this project under Visual Studio Code. This project was setup with nodemon, so to start it you can type:
 <HOME_DRIVE>/express_nodejs> npm run dev
 
