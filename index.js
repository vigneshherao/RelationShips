const mongoose = require('mongoose');


main().then(()=>{
    console.log("connection is sucessfull");
})
.catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/realtion');  
}


const userSchema =new mongoose.Schema({
    username:String,
    address:[{
        _id:false,
        location:String,
        city:String
    }]
});

const User = mongoose.model("User",userSchema);



const addUser = async()=>{
    let user1 = new User({
        username:"Vignesh",
        address:[
            {
                location:"manglore",
                city:"manglore",
            }
        ]
    })


    user1.address.push({location:"Puttur",city:"Banglore"});
    let result = await user1.save();
    console.log(result);
}


addUser();