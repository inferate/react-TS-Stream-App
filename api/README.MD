This project was bootstrapped with [JSON-SERVER](https://github.com/typicode/json-server).

## Getting started

Install JSON Server

### `npm install`

Start JSON Server

### `npm start`

### `Usage`

Create a db.json file with some data

{
"posts": [
{ "id": 1, "title": "json-server", "author": "typicode" }
],
"comments": [
{ "id": 1, "body": "some comment", "postId": 1 }
],
"profile": { "name": "typicode" }
}

{ "id": 1, "title": "json-server", "author": "typicode" }

Now if you go to http://localhost:3000/posts/1, you'll get

Also when doing requests, it's good to know that:

If you make POST, PUT, PATCH or DELETE requests,<br> changes will be automatically and safely saved to db.json using lowdb.
Your request body JSON should be object enclosed, just like the GET output.<br> (for example {"name": "Foobar"})
Id values are not mutable. Any id value in the body <br>of your PUT or PATCH request will be ignored. Only a value set in a POST<br> request will be respected, <br>but only if not already taken.
A POST, PUT or PATCH request should include a Content-Type:<br> application/json header to use the JSON in the request body. <br>Otherwise it will result in a 200 OK but without changes being made to the data.
