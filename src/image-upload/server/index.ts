import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

const port = 4000;

// Importing AWSPresigner
const {
    generateGetUrl,
    generatePutUrl
} = require('./AWSPresigner');

// GET URL
app.get('/generate-get-url', (req, res) => {
    // Both Key and ContentType are defined in the client side.
    // Key refers to the remote name of the file.
    const { Key } = req.query;
    generateGetUrl(Key)
        .then((getURL: any) => {
            res.send(getURL);
        })
        .catch((err: any) => {
            res.send(err);
        });
});

// PUT URL
app.get('/generate-put-url', (req,res)=>{
    // Both Key and ContentType are defined in the client side.
    // Key refers to the remote name of the file.
    // ContentType refers to the MIME content type, in this case image/jpeg
    const { Key, ContentType } =  req.query;
    generatePutUrl(Key, ContentType).then((putURL: any) => {
        res.send({putURL});
    })
        .catch((err: any) => {
            res.send(err);
        });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
