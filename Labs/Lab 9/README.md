# Lab 9

We talked about the steps that we could possibly take to deploy a website. I want you to think about the combination of those things that you would consider if you had to deploy your website. This is a good thinking exercise to do because you gain insight to what all of the different steps entail and are responsible for. Write out what parts you would use below and describe why. It doesn't have to be the most detailed but personally what would you want to do? (I'm not looking for perfect but it should be a working configuration. Assuming all of the website code is done. I don't need to hear about that unless its for the certificate or web server).

<!-- Answer Down Here -->
So first off we have express (along with nodeJS). Nodejs will be our webapp server which lets us use javascript on the back end, and speaking of back end that is what express is for.


then we need something like mongoDB which is a database that will hold all of our users data and things that need to be updated with a database

We can also use something for the front end weither that be react or something like angularjs

with this we can create a diagram that would look like this:

MongoDB server (cloud) That holds anything that needs to be in a database

the mongodatabase will be connected to the static web stuff along with nodejs/express and any APIs

this then gets connected to Angularjs or react which are front end things and that will be the UI that the internet/user sees.

also consider using mongoose to interact with the mongodb database and ypu could use ejs to embed javascript