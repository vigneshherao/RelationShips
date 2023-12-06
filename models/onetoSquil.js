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


const userSchema = mongoose.Schema({
    name:String,
    email:String
})

const User = mongoose.model("User",userSchema);

const postSchema = mongoose.Schema({
    title:String,
    likes:Number,
    user: [{
        type: Schema.Types.ObjectId,
        ref:"User",
    }],
})

const Post = mongoose.model("Post",postSchema);


const add = async ()=>{

    let user1 = new User({
        name:"vignesh",
        email:"vigneshfornavy@gmail.com"
    })


    let post1 = new Post({
        title:"Hello good morning",
        likes:29,
    });

    await user1.save()
    post1.user = user1;
    await post1.save()


}


add();