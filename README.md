# [French Montana - No Stylist (feat. Drake)](https://www.youtube.com/watch?v=9_k_goMr5ZI)

## ** Disclaimer: This project has NOOOOOO styling. This was a showcase of my knowledge in building a RESTFul API and building a fullstack application. The only styling is what was required for the exam.

Here are the to the [basic requirements](https://github.com/joinpursuit/PCNW-Web-Final)

###### Please note there are no instructions on how to create the Genres link shown in the mockups nor are their instructions on how to display the Post page.

### /frontend: React

The project has a few **pages** which are as follows:

#### Home

Route: ```/```

---

The home page only serves to display a welcome message.

![alt text](https://github.com/nadavgreen/unit-6-final/blob/master/assests/home.png "home")

#### Users 

Route: ```/users```

---

The users page lists all of the users in the db. If the button **next** to the users name is pressed, the correcponding user is now the **active user**. Pressing a user directly will take you to their page regardless of if they are the active user.

![alt text](https://github.com/nadavgreen/unit-6-final/blob/master/assests/users.png "users")

#### User

Route: ```/user/:id```

---

The user/:id page list all of the shows watched by the selected user *(not only the active user)*. You can select the image of the show to go to the shows page.

![alt text](https://github.com/nadavgreen/unit-6-final/blob/master/assests/userShows.png "userShows")

#### Post

Route: ```/user/post```

---

The user/post page allows an **active user** to upload a show they have watched. This form takes a **title**, a **image url** and a selected **genre** from a pre-created list

![alt text](https://github.com/nadavgreen/unit-6-final/blob/master/assests/post.png "post")

#### Show

Route: ```/show/:id```

---

The show/:id page list the currently selected show. Showcasing the image, tile and genre.

![alt text](https://github.com/nadavgreen/unit-6-final/blob/master/assests/show.png "Show")

#### 

Route: ```/shows```

---

The /shows page list all of the tv shows in the database and the users that are watching them directly **below**

![alt text](https://github.com/nadavgreen/unit-6-final/blob/master/assests/tvShows.png "tvShows")

In this example, after a **post**, [Pam Beesley](https://www.youtube.com/watch?v=gO8N3L_aERg) has created the [Lion King](https://www.youtube.com/watch?v=4CbLXeGSDxg) show as can be seen **below**.

![alt text](https://github.com/nadavgreen/unit-6-final/blob/master/assests/editedTvShows.png "editedTvShows")

### /backend: Express

##### The practice server was not implemented with CI/CD, unit testing nor validation

###### Endpoints return '{"msg":"passed"}', '{"msg":"failed"}' or '{"msg":data}' where applicable

**Endpoints:**

**Route: ```/users```**

Post: ```/create```

---

The create endpoint on the users path allows you to post a new user. The only required data is a username

```
data = { 
	username: "YOUR DATA" 
}
```

```curl -X POST http://localhost:3001/users/create -H "Content-Type: application/json" -d '{"username":"YOUR DATA"}'```

GET: ```/read/:id```

---

The read/:id endpoint on the users path allows you to get a specific user based on id

```id = YOUR DATA```

```curl http://localhost:3001/users/read/YOUR DATA```

GET: ```/read```

---

The read endpoint on the users path allows you to get all users in the db. No data is required

```data : null```

```curl http://localhost:3001/users/read```

PUT: ```/update```

---

The update endpoint on the users path allows you to put new information of an existing user. The requirements are an existing id and a new username

```
data = {
	id: YOUR DATA,
	username: "YOUR DATA" 
}
```

```curl -X PUT http://localhost:3001/users/update -H "Content-Type: application/json" -d '{"username":"YOUR DATA"}'```

DELETE: ```/delete```

---

The delete endpoint on the users path allows you to delete the information of a specific user based on id

```
data = { 
	id : YOUR DATA 
}
```

```curl -X DELETE http://localhost:3001/users/delete -H "Content-Type: application/json" -d '{"id":"YOUR DATA"}'```

**Route: ```/genres```**

Post: ```/create```

---

The create endpoint on the genres path allows you to post a new genre. The only required data is a genre name

```
data = { 
	genre_name: "YOUR DATA" 
}
```

```curl -X POST http://localhost:3001/genres/create -H "Content-Type: application/json" -d '{"genre_name":"YOUR DATA"}'```

GET: ```/read/:id```

---

The read/:id endpoint on the genres path allows you to get a specific genre based on id

```id = YOUR DATA```

```curl http://localhost:3001/genres/read/YOUR DATA```

GET: ```/read```

---

The read endpoint on the genres path allows you to get all genres in the db. No data is required

```curl http://localhost:3001/genres/read```

PUT: ```/update```

---

The update endpoint on the genres path allows you to put new information of an existing genre. The requirements are an existing id and a new genre name

```
data = {
	id: YOUR DATA,
	genre_name: "YOUR DATA"
}
```

```curl -X POST http://localhost:3001/genres/update -H "Content-Type: application/json" -d {"id":YOUR DATA, "genre_name":"YOUR DATA"}``` 

DELETE: ```/delete```

---

The delete endpoint on the genres path allows you to delete the information of a specific genre based on id

```
data = { 
	id : YOUR DATA 
}
```

```curl -X DELETE http://localhost:3001/genres/delete -H "Content-Type: application/json" -d '{"id":"YOUR DATA"}'```

**Route: ```/shows```**

Post: ```/create```

---

The create endpoint on the shows path allows you to post a new show. Requiring title, img url, user id and genre id

```
data = { 
	title: "YOUR DATA",
	img_url: "YOUR DATA"
	user_id: YOUR DATA,
	genre_id: YOUR DATA, 
}
```

```curl -X POST http://localhost:3001/shows/create -H "Content-Type: application/json" -d '{"title":"YOUR DATA", img_url:"YOUR DATA", "user_id":YOUR DATA, "genre_id":YOUR DATA}'```

GET: ```/readgenres/:genre_id```

---

The readgenres/:genre_id endpoint on the shows path allows you to get a specific show based on genre id

```genre_id = YOUR DATA```

```curl http://localhost:3001/shows/readgenres/YOUR DATA```

GET: ```/read/:user_id```

---

The read/:user_id endpoint on the shows path allows you to get a specific show based on user id

```user_id = YOUR DATA```

```curl http://localhost:3001/shows/read/YOUR DATA```

GET: ```/readone/:id```

---

The readone/:id endpoint on the shows path allows you to get a specific show based on id

```id = YOUR DATA```

```curl http://localhost:3001/shows/readone/YOUR DATA```

GET: ```/read```

---

The read endpoint on the shows path allows you to get all shows in the db. No data is required

```curl http://localhost:3001/shows/read```

PUT: ```/update```

---

The update endpoint on the shows path allows you to put new information of an existing show. Because this is a **put** you will have to enter **all** information even if you aren't making changes to that column. The requirements are an existing id, a title, an img url, a user id and a genre id

```
data = {
	id: YOUR DATA,
	title: "YOUR DATA"
	img_url: "YOUR DATA",
	user_id: YOUR DATA,
	genre_id: YOUR DATA
}
```

```curl -X POST http://localhost:3001/shows/update -H "Content-Type: application/json" -d {"id":YOUR DATA, "title":"YOUR DATA", "img_url":"YOUR DATA", "user_id":YOUR DATA, "genre_id":YOUR DATA}``` 

DELETE: ```/delete```

---

The delete endpoint on the shows path allows you to delete the information of a specific show based on id

```
data = { 
	id : YOUR DATA 
}
```

```curl -X DELETE http://localhost:3001/shows/delete -H "Content-Type: application/json" -d '{"id":"YOUR DATA"}'```

**Route: ```/comments```**

Post: ```/create```

---

The create endpoint on the comments path allows you to post a new comment. Requiring comment body, user id and show id

```
data = { 
	comment_body: "YOUR DATA",
	user_id: YOUR DATA,
	show_id: YOUR DATA, 
}
```

```curl -X POST http://localhost:3001/comments/create -H "Content-Type: application/json" -d '{"comment_body":"YOUR DATA", "user_id":YOUR DATA, "show_id":YOUR DATA}'```

GET: ```/read/:id```

---

The read/:id endpoint on the comments path allows you to get a specific comment based on id

```id = YOUR DATA```

```curl http://localhost:3001/comments/read/YOUR DATA```

GET: ```/readshow/:show_id```

---

The readshow/:show_id endpoint on the comments path allows you to get a specific comment based on show id

```show_id = YOUR DATA```

```curl http://localhost:3001/comments/readshow/YOUR DATA```

GET: ```/read```

---

The read endpoint on the comments path allows you to get all comment in the db. No data is required

```curl http://localhost:3001/comments/read```

PUT: ```/update```

---

The update endpoint on the comments path allows you to put new information of an existing comment. Because this is a **put** you will have to enter **all** information even if you aren't making changes to that column. The requirements are an existing id, a comment body, a user id and a show id

```
data = {
	id: YOUR DATA,
	comment_body: "YOUR DATA",
	user_id: YOUR DATA,
	show_id: YOUR DATA
}
```

```curl -X POST http://localhost:3001/comments/update -H "Content-Type: application/json" -d {"id":YOUR DATA, "comment_body":"YOUR DATA", "user_id":YOUR DATA, "show_id":YOUR DATA}``` 

DELETE: ```/delete```

---

The delete endpoint on the comments path allows you to delete the information of a specific comment based on id

```
data = { 
	id : YOUR DATA 
}
```

```curl -X DELETE http://localhost:3001/comments/delete -H "Content-Type: application/json" -d '{"id":"YOUR DATA"}'```
