import express from "express";
const app = express();

app.use(express.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );


app.get("/test", (req, res) => {
    res.status(200).json({ message: "I work" });
})

module.exports = {
    path: '/server-middleware',
    handler: app
}