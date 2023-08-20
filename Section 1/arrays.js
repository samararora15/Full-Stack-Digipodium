//javascipt arrays behave like lists - dynamic size, multiple data size etc

const myarray = [ 'name', 23, 3.14, true, console.log]
console.log(myarray);
console.log(typeof(myarray));

const movies = ['KGF', 'Pushpa', 'RRR', 'Thor', 'DDLJ']
console.log((movies.length))    //also works with strings

movies.push('Ramanujan')    //push like append at last
console.log(movies)

movies.pop()    //pop like delete at end
console.log(movies)

movies.unshift('Batman')    //appends at beginning
console.log(movies)

movies.shift()
console.log(movies)

// movies.splice(3,2);  //to delete
// console.log(movies);

console.log( movies.slice(1,3) );   //to display