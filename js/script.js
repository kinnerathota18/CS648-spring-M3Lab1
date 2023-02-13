//Question 1
var m=["Raid Redemption", "The Call", "Zodiac", "Social Network", "Forest Gump"];
console.log("Ques1",m[1]);

//Question 2
var movies=new Array(5);
movies[0]="Raid Redemption";
movies[1]="The Call";
movies[2]="Zodiac";
movies[3]="Social Network";
movies[4]="Forest Gump";
console.log("Ques2",movies[0]);


//Question 3
movies.splice(2,0,"American Sniper");

console.log("Ques3",movies.length);

//Question 4
var new_movies = [];
new_movies[0]="Raid Redemption";
new_movies[1]="The Call";
new_movies[2]="Zodiac";
new_movies[3]="Social Network";
new_movies[4]="Forest Gump";
delete new_movies[0];
console.log("Ques4",new_movies);

//Question 5
var new_movies_1 = [];
new_movies_1[0]="Raid Redemption";
new_movies_1[1]="The Call";
new_movies_1[2]="Zodiac";
new_movies_1[3]="Social Network";
new_movies_1[4]="Forest Gump";
new_movies_1[5]="American Sniper";
new_movies_1[6]="Shutter Island";
console.log("Ques5"+"\n");
for (var key in new_movies_1) {
    console.log(new_movies_1[key]);
}

console.log("Ques6"+"\n");
//Question 6
for (var iterator of new_movies_1) {
    console.log(iterator); 
}

//Question 7
console.log("Ques7"+"\n");
new_movies_1.sort();
for (var iterator of new_movies_1) {
    console.log(iterator); 
}


//Question 8
var new_movies_1=["Raid Redemption", "The Call", "Zodiac", "Social Network", "Forest Gump", "American Sniper", "Shutter Island"];
var leastFavMovies=["The Menu", "Frozen", "See you Yesterday"];

console.log("Ques8"+"\n");
console.log("Movies I like:");

console.log("\n");
for(var i of new_movies_1) {
  "use strict";
  console.log(i);
}

console.log("\n");
console.log("Movies I regret watching:");

console.log("\n");
for(var i of leastFavMovies) {
  "use strict";
  console.log(i);
}

//Question 9
var allMovies=new_movies_1.concat(leastFavMovies);
console.log("Ques9"+"\n");
console.log(allMovies.sort().reverse());

//Question 10
var lastMovie = allMovies.slice(-1);
console.log("Ques10"+"\n");
console.log(lastMovie);

//Question 11
console.log("Ques11"+"\n");
console.log(allMovies.shift());


//Question 12
allMovies.sort().reverse();
var doNotLikeIndices = [];

allMovies.forEach((mo, index) => {
  if (leastFavMovies.includes(mo)) {
    doNotLikeIndices.push(index); }
});

var like = ["Inception", "Reverant", "Molly's Game"];

doNotLikeIndices.forEach((idx) => {
    allMovies[idx] = like.shift();
});

console.log("Ques12"+"\n");
console.log(allMovies);



//Question 13
var new_movies_2 = [["Raid Redemption", 1], ["The Call", 2], ["Social Network", 3], ["Zodiac", 4], ["Inception", 5]];

var movieNames = new_movies_2.filter(function(movie) {
  return typeof movie[0] === "string";
});

console.log("Ques13"+"\n");
console.log(movieNames.map(movie => movie[0]));

//Question 14


var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
  console.log("Employees: "); 
  employees.forEach(function(employee) {
    console.log(employee);
  });
};
console.log("Ques14"+"\n");
showEmployee(employees);


//Question 15

var values = [58, '', 'abcd', true, null, false, 0];

var filterValues = function(values){
    return values.filter(function(v) {
  return v !== false && v !== null && v !== 0  && v !== "";
});
};
console.log("Ques15"+"\n");
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//Question 16


var RandomNumber = function(v) {
  return v[Math.floor(Math.random() * v.length)];
};
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Ques16"+"\n");
console.log(RandomNumber(nums));


//Question 17
var LargestNumber = function(v){
    return Math.max(...v);
}

var nums = [99,100,102,7000,8080,69];
console.log("Ques17"+"\n");
console.log(LargestNumber(nums));

