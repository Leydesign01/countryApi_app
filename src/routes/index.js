import { Router } from 'express'
const router = Router();

router.get('/test', (req, res) => {

    const data = {
        "countryImageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTcXAhd7B0Tn5AtSEYQFLdtX72p07lMkznJVuCowOTFgQk9CR1PBq1vAZzMjeyjMSfcSFm4owNCyjS8PAWB5bypr-lqvg",
        "description": "Algeria is a country in North Africa with a coast on the Mediterranean and an interior in the Sahara Desert. Many empires left their legacy here, such as the ancient Roman ruins at Tipasa by the sea. In the capital, Algiers, iconic Ottoman sites such as the Ketchaoua Mosque, circa 1612, border the hillside Casba neighborhood, with its narrow passages and staircases. The city's Neo-Byzantine basilica, Our Lady of Africa, dates back to the French colonial regime."
    };
    res.json(data);
    //res.send({"title": "Hello Bitches"});
});

// module.exports = router;
export {router}