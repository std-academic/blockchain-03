import express from "express";
import api from "./api.js";
import { countRecord, insertRecord, lastRecord } from "./db.js";
const port = process.env.PORT || 80;
const app = express();
app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    try {
        const btc = await api.BTC();
        if (btc) {
            const count = countRecord();
            const last_rec = lastRecord();
            const ins = insertRecord(btc);
            res.render('index', {
                btc,
                last_rec,
                count,
                'statusBadge': ins ? '#006400' : '#B58B00',
                'statusText': ins ? 'Record added' : 'Record existing'
            });
        }
        else
            res.send("Error: failed to fetch BTC info");
    }
    catch (error) {
        res.send("Error: failed to fetch BTC info: " + error);
    }
});
app.listen(port);
console.log('Server started at http://localhost:' + port);
