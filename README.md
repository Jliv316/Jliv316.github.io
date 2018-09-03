# SPIN App

## Summary:
Spin is an web app that leverages the google location api, spotify api, and spotify web playback sdk to generate 
dynamic playlists based on a user's location.

Upon logging to Spin(HearIt) through spotify's oath process, the application grabs all user tracks and playlists, along with their geolocation data (much more accurate if accessing mobily). Upon collecting this data, the application searches and notes all users within a 50ft radius of the current user. The app then generates a playlist for all users in that area by cross referencing top tracks for each user.

While currently a web app, spin will be deployed mobiling this september.

## What does the application do for a user?
It creates an application that dynamically changes the mood or feel of a room by the people that are in it. If Joe walks into a restaurant or dinner party, Joe's tracks will be added to the pool of potential tracks to play from. If enough people have similar tracks, these similar tracks are added to the master playlist.

## How to run in development:

Clone down the following repos:

Rails API: $ git clone https://github.com/Jliv316/spin.git

React.js Client: $ git clone https://github.com/Jliv316/spin_react.git

spin up rails api locally: $ rails s -p 3166 

spin up react app: $ npm start

ENJOY GEODYNAMIC MUSIC!!

Home Page:

<img width="1419" alt="screen shot 2018-08-22 at 11 33 20 am" src="https://user-images.githubusercontent.com/35744655/44480582-ce878980-a600-11e8-8253-def61c1cc9bb.png">

Player Page:
<img width="1420" alt="screen shot 2018-08-22 at 11 33 52 am" src="https://user-images.githubusercontent.com/35744655/44480663-0abaea00-a601-11e8-81a6-513c83f562a8.png">
