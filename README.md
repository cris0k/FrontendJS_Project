# FrontendJS "Vallapop" Project

## Description

This project is a multi-page application created using Javascript. It uses an API REST to show adverts posted by different logged users
that are ether selling or looking for a certain product.


## What will you need?

First, clone the project's repository, which is our frontend:

```
git clone https://github.com/cris0k/FrontendJS_Project.git
```
Then, open a new empty window in your editor and clone the repository of the API REST called `Sparrest.js` which will be used as our backend:

```
https://github.com/kasappeal/sparrest.js.git

```
Ones its clones, install all the dependencies:

```
npm i
```

Go back to the project and inside the folder `data` copy the file `db.json` and paste it into Sparrest.js.

This is the database that will be used to store all the adverts and user's data. 

There are already some adverts created so you have something to play with but feel free to delete it and start over if you wish.

## Instuctions to run the website

Now that everything is set, run sparrest.js with:

```
npm start
```

Then go to the main project page and run ;

```
npm live-server
```
Here is what you should expect to see:
# ![alt text](https://github.com/cris0k/FrontendJS_Project/blob/main/utils/image/Screenshot%20from%202022-10-09%2019-18-09.png)

## What can you do ?

- `Adverts List` : On the main page you will see all the adverts that have been posted, from the newest to oldest.

- `Advert detail` : If you click on any advert's photo or name, you will go to another page, where you can read more information about that specific product.

  * `Delete Advert` Button: Will only appear if you have posted that advert. It will delete that post, if you wish to do so.

  * `Send an offer` Button: will appear if you are not the owner of that post. It will just show you a nice message if you click on it.

- `Sign up`: A form where you can register, creating a username and a password so you can later log in and have available other actions on the web page. Ones you signed up, you will automatically log in.

- `Log in` : It allows you to log in into the webside if you already have an user created. Your username will appear on the main page's top-right side.

- `Post New Advert` : This button will appear only ones you have logged in. It will take you to another form where you will be able to post your own advert. 

  * Note: To upload the photo you must paste an URL, if you do not have one, dont worry, it will upload a 'Image Coming Soon' photo automatically.



