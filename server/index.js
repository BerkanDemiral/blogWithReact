import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config(); 

app.use(bodyParser.json({ limit: "30mb", extended: true })); // img dosyaları boyutu yüksek olabileceği için limit arttırdık ve gereksiz uyarı vermesin diye extendedi açtık
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // uzak sunucuya gönderilen http requestlerinde bir sorun yaşanmaması için cors paketini aktif hale getiriyoruz 

app.get("/", (req, res) => {
    res.json({
        author: "Berkan Demiral",
        message: "React Blog app :)",
    });
})

const PORT = process.env.PORT || 5000; // bağlantı için tanımlı bir port kullan eğer tanımlı bir port yoksa 5000 portunu kullan


mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { // mongoose'a bağlantı kurulursa bu kod bloğunu çalıştır
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch(error => { // bağlantı kurulamazsa hata mesajını fırlat 
        console.error(error.message);
    });