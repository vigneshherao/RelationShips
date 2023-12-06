const { ChildProcess } = require('child_process');
const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(()=>{
    console.log("connection is sucessfull");
})
.catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/realtion');  
}



const orders = new mongoose.Schema({
    items:String,
    price:Number
})

const Order = mongoose.model("Order",orders);


const makeOrders = async()=>{
    let result = await Order.insertMany([{items:"maggi",price:40},{items:"chips",price:499}]);

}

// makeOrders();


const customerSchema = new mongoose.Schema({
    name:String,
    orders:[{
        type: Schema.Types.ObjectId,
        ref:"Order"
    }]
});

const Customer = new mongoose.model("Customer",customerSchema);



const addCustomer = async()=>{
    // let customer1 = new Customer({
    //     name:"vignesh h e"
    // })

    // let order1 = await Order.findOne({items:"maggi"});


    // customer1.orders.push(order1);

    // let result = await customer1.save();
    // console.log(result);

    let res =await Order.find({});
    console.log(res);
}

addCustomer();







