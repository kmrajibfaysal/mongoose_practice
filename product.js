const mongoose = require('mongoose');

// const { Schema } = mongoose.Schema;
// const { model } = mongoose.model;
async function main() {
    await mongoose.connect('mongodb://localhost:27017/shopApp');
}
main().catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 399 });
bike.save()
    .then((data) => {
        console.log('IT WORKED!!');
        console.log(data);
    })
    .catch((err) => {
        // console.log('OH NO, ERROR!!');
        console.log(err);
    });
