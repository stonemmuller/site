var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath: 'http://vignette4.wikia.nocookie.net/thefutureofeuropes/images/d/db/Mkhkzj.png/revision/latest?cb=20151126195550',
    title: 'Пончик',
    description:'Buy it!!!!',
    price: 13
}),
    new Product({
        imagePath: 'http://vignette4.wikia.nocookie.net/thefutureofeuropes/images/d/db/Mkhkzj.png/revision/latest?cb=20151126195550',
        title: 'Пончик',
        description:'Buy it!!!!',
        price: 13
    }),
    new Product({
        imagePath: 'http://vignette4.wikia.nocookie.net/thefutureofeuropes/images/d/db/Mkhkzj.png/revision/latest?cb=20151126195550',
        title: 'Пончик',
        description:'Buy it!!!!',
        price: 13
    }),
    new Product({
        imagePath: 'http://vignette4.wikia.nocookie.net/thefutureofeuropes/images/d/db/Mkhkzj.png/revision/latest?cb=20151126195550',
        title: 'Пончик',
        description:'Buy it!!!!',
        price: 13
    }),
    new Product({
        imagePath: 'http://vignette4.wikia.nocookie.net/thefutureofeuropes/images/d/db/Mkhkzj.png/revision/latest?cb=20151126195550',
        title: 'Пончик',
        description:'Buy it!!!!',
        price: 13
    }),
    new Product({
        imagePath: 'http://vignette4.wikia.nocookie.net/thefutureofeuropes/images/d/db/Mkhkzj.png/revision/latest?cb=20151126195550',
        title: 'Пончик',
        description:'Buy it!!!!',
        price: 13
    })
];
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}