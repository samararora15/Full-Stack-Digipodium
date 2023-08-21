const smartphones = [
    {brand : 'Samsung', model : 'Galaxy S22', price : 79990, color : ['blue', 'black']},
    {brand : 'Oppo', model : '15', price : 29990, color : ['white', 'silver']},
    {brand : 'OnePlus', model : 'Nord', price : 35990, color : ['Red', 'black']},
    {brand : 'Nokia', model : 'Lumia 345', price : 16999, color : ['white', 'blue']},
];

console.log(smartphones[0]);
console.log(smartphones[0].model);
console.log(smartphones[0].color);
console.log(smartphones[0].color[1]);

console.log(smartphones[2].price);  //changing price of oppo

smartphones[1].model = 'A15';  //updating model of Oppo
console.log(smartphones[1].model);

smartphones[3].color[1] = 'Maroon';
console.log(smartphones[3].color[1]);   //changing color of nokia 2nd model

smartphones[2].color.push('Brown');
console.log(smartphones[2].color);  //pushing color in oneplus model

const brands = smartphones.map( (sm) => {return sm.brand} );    //brand for every smartphones

console.log(brands);