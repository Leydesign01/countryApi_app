import express from 'express'
import {Router} from 'express'
const router = express.Router();
import {countries} from '../sample.js'
console.log(countries);

router.get('/', (req, res) => {
    res.json(countries);
});

router.post('/', (req, res) => {
    const { country_name, countryImage, countryDescription} = req.body;
    if (country_name && countryImage && countryDescription) {
       const id =  countries.length + 1;
        const newCountry = {...req.body, id};
        res.json('saved');
    }else {
        res.send('Wrong request');
    }
});

export {router}
// module.exports = router;