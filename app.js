var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

// See All The Restaurants
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   if (allChoice == "all") {
//   	collection.find().toArray(function(err, docs){
//     	console.log(docs);
//   	});
//   } else {
//   	console.log("Aw, you don't want to see the restaurants?");
//   }	
// });

// See One Restaurant
// mongo.connect(url, function(err, db) {
// 	var collection = db.collection('restaurants');
// 	var singleChoice = prompt("Enter a restaurant please: ");
// 	collection.find({"name":singleChoice}).toArray(function(err, docs) {
// 		console.log(docs);
// 	});
// });

// Add A Restaurant To The Database
// mongo.connect(url, function(err, db) {
// 	var collection = db.collection('restaurants');
// 	var newRestaurantName = prompt("Enter the new restaurant name please: ");
// 	var newRestaurantAddress = {};
// 	var newRestaurantStAddress = prompt("Enter the new restaurant street address please: ");
// 	var newRestaurantZipcode = prompt("Enter the new restaurant zipcode please: ");
// 	var yelpLink = prompt("Enter the new restaurant Yelp link please: ");
// 	collection.insert({"name":newRestaurantName, "address":{"street":newRestaurantStAddress, "zipcode":newRestaurantZipcode}, "yelp":yelpLink}, function(err, docs) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log(docs);
// 	});
// });

// Edit A Restaurant In The Database
mongo.connect(url, function(err, db) {
	var collection = db.collection('restaurants');
	var editWhichRestaurant = prompt("Enter the name of the restaurant you want to edit: ");
	var editWhichProperty = prompt("Enter the restaurant property you want to edit. Choose from: 'name', 'street', 'zipcode', or 'yelp'. DO NOT INCLUDE QUOTES. ");
	var editPropertyValue = prompt("Enter the restaurant property value: ");
	collection.update({"name": editWhichRestaurant}, {$set: {editWhichProperty: editPropertyValue}}, function(err, docs) {
		if (err) {
			console.log(err);
		}
		console.log(docs);
	});
});

// Delete A Restaurant From The Database
// mongo.connect(url, function(err, db) {
// 	var collection = db.collection('restaurants');
// 	var deleteRestauarant = prompt("Enter the name of the restaurant you want to delete: ");
// 	collection.remove({"name":deleteRestauarant}, function(err, docs) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("Restaurant DELETED");
// 	});
// });



