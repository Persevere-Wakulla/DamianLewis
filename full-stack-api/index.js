import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json([
        {
            id: 1,
            name: "Adam Kimmel",
            type: "Perpetual",
            img: "/img/wrist-watches/pexels-adam kimmel-277319.jpg",
            price: 4955,
        },
        {
            id: 2,
            name: "Fernando Arcos",
            type: "Adam Kimmel",
            img: "/img/wrist-watches/pexels-adam-kimmel-277390.jpg",
            price: 455,
        },
        {
            id: 3,
            name: "Rider",
            type: "Anthoney Derosa",
            img: "/img/wrist-watches/pexels-anthony-derosa-rider236915.jpg",
            price: 342,
        },
        {
            id: 4,
            name: "Casio",
            type: "Jatin Anand",
            img: "/img/wrist-watches/pexels-casio-266666.jpg",
            price: 456,
        },
        {
            id: 5,
            name: "Armani",
            type: "Emporio",
            img: "/img/wrist-watches/pexels-emporio-armani-125779.jpg",
            price: 1789,
        },
        {
            id: 6,
            name: "Armani",
            type: "Emporio",
            img: "/img/wrist-watches/pexels-emporio-armani-128206.jpg",
            price: 1456
        },
        {
            id: 7,
            name: "Fernando",
            type: "Arcos",
            img: "/img/wrist-watches/pexels-fernando-arcos-190819.jpg",
            price: 768,
        },
        {
            id: 8,
            name: "Jess Bailey",
            type: "fossil",
            img: "/img/wrist-watches/pexels-fossil-1546333.jpg",
            price: 544,
        },
        {
            id: 9,
            name: "Hazel Marie",
            type: "Seiko Kinetic",
            img: "/img/wrist-watches/pexels-hazel-marie-seiko-kinetic-7617109.jpg",
            price: 455,
        },
        {
            id: 10,
            name: "Fossil",
            type: "Jay Johnson",
            img: "/img/wrist-watches/pexels-jay-johnson-fossil-6336019.jpg",
            price: 621,
        },
        {
            id: 11,
            name: "Fossil",
            type: "Jerin Mathew",
            img: "/img/wrist-watches/pexels-jerin-mathew-fossil-4801853.jpg",
            price: 487,
        },
        {
            id: 12,
            name: "Notes",
            type: "Jess Bailey",
            img: "/img/wrist-watches/pexels-jess-bailey-designs-1162519.jpg",
            price: 760,
        },
        {
            id: 13,
            name: "Rolex",
            type: " PearlPerpetual",
            img: "/img/wrist-watches/pexels-rolex-364822.jpg",
            price: 9889,
        },
    
        {
            id: 14,
            name: "Rotate",
            type: "Transform",
            img: "/img/wrist-watches/pexels-rotate-watches-5895646.jpg",
            price: 899,
        },
        {
            id: 15,
            name: "Rotate",
            type: "Degree",
            img: "/img/wrist-watches/drip-sauce.jpg",
            price: 150724
        },
        {
            id: 16,
            name: "Fossil",
            type: "Suherli Ferdy",
            img: "/img/wrist-watches/pexels-suherli-ferdy-fossil-5447382.jpg",
            price: 233,
        },
        {
            id: 17,
            name: "Fossil",
            type: "Scale",
            img: "/img/wrist-watches/pexels-torsten-dettlaff-437037.jpg",
            price: 155,
        },
        {
            id: 18,
            name: "Apple",
            type: "",
            img: "/img/wrist-watches/product-1.jpg",
            price: 245,
        },
        {
            id: 19,
            name: "Massive",
            type: "Steel",
            img: "/img/wrist-watches/steel.png",
            price: 995
        },
        {
            id: 20,
            name: "combo",
            type: "all men",
            img: "/img/wrist-watches/product-2.jpg",
            price: "450"
        }

    ]);
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Your server is up and running on port  ${PORT} http://localhost:${PORT}`);
})

