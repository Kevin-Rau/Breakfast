# WebServer
Team Fuzzy Potatoes: Do they make a good breakfast?

Catherine dewerd: catdewey
Kevin Rau: Kevin-Rau
Ian Moore: Brefew

For the Database:
In one terminal window, start mongod:
mongod --config /usr/local/etc/mongod.conf

In another terminal, where mongo is installed, run command:
mongo

Then switch to the database breakfast:
use breakfast

To look at what is in the database:
db.usercollection.find().pretty()

To add stuff:
db.usercollection.insert({ "Breakfast food" : "Lima Beans", "Rating" :"0"})

For the Web Server, with mongod running:
To run, go into the diretory breakfast: 
npm start

go to: http://localhost:3000/userlist






-Ian and Kevin worked together to put together a lot of the files, Ian was having trouble pushing to github so 
we kinda just made workarounds.
