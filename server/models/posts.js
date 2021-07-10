import mongoose from "mongoose";
// Modaller bizim mongodb veritabanındaki tablolar olarak düşünülebilir. 
// Veritabanında sileceğimiz kayededeceğimiz, kısacası iletişime geçeceğimiz her şey birer post olduğu için postu oluşturduk ve kaydettik.

const postSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    tag: String,
    image: String,
    createdAd{
        type:Date,
        dafault: new Date(),
    },
});

const Post = mongoose.model("Post", postSchema); 
export default Post;