import express from "express";
import cors from "cors";

// Create our container for our sever
const app = express();

// Middleware
app.use(cors());

// get listening for GET request
// (route, (req,res))
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
app.get("/", (req, res) => {
  // API
  res.status(200).json([
    {
      id: 1,
      name: "Adam Kimmel",
      type: "Perpetual",
      img: "..//Server/images/pexels-adam kimmel-277319.jpg",
      quantity: 12,
      price: 29.99,

    },
    {
      id: 2,
      name: "Fernando Arcos",
      type: "Adam Kimmel",
      img: "..//Server/images/wrist-watches/pexels-adam-kimmel-277390.jpg",
      price: 12.99,
    },
    {
      id: 3,
      name: "Rider",
      type: "Anthoney Derosa",
      img: "..//Server/images/wrist-watches/pexels-anthony-derosa-rider236915.jpg",
      price: 42.99,
    },
    {
      id: 4,
      name: "Casio",
      type: "Jatin Anand",
      img: "..//Server/images/wrist-watches/pexels-casio-266666.jpg",
      price: 15.99,
    },
    {
      id: 5,
      name: "Armani",
      type: "Emporio",
      img: "..//Server/images/wrist-watches/pexels-emporio-armani-125779.jpg",
      price: 15.99,
    },
    {
      id: 6,
      name: "Armani",
      type: "Emporio",
      img: "..//Server/images/wrist-watches/pexels-emporio-armani-128206.jpg",
      price: 34.99,
    },
    {
      id: 7,
      name: "Fernando",
      type: "Arcos",
      img: "..//Server/images/wrist-watches/pexels-fernando-arcos-190819.jpg",
      price: 40.0,

    },
    {
      id: 8,
      name: "Jess Bailey",
      type: "fossil",
      img: "..//Server/images/wrist-watches/pexels-fossil-1546333.jpg",
      price: 3.99,
    },
    {
      id: 9,
      name: "Hazel Marie",
      type: "Seiko Kinetic",
      img: "..//Server/images/wrist-watches/pexels-hazel-marie-seiko-kinetic-7617109.jpg",
      price: 8.99,
    },
    {
      id: 10,
      name: "Fossil",
      type: "Jay Johnson",
      img: "..//Server/images/wrist-watches/pexels-jay-johnson-fossil-6336019.jpg",
      price: 14.99,
    },
    {
      id: 11,
      name: "Fossil",
      name: "Jerin Mathew",
      img: "..//Server/images/wrist-watches/pexels-jerin-mathew-fossil-4801853.jpg",
      price: 2.99,
    },
    {
      id: 12,
      nmae: "Notes",
      type: "Jess Bailey",
      img: "img/wrist-watches/pexels-jess-bailey-designs-1162519.jpg",
      price: 18.99,
    },
    {
      id: 13,
      name: "Rolex",
      type: " PearlPerpetual",
      img: "..//Server/images/wrist-watches/pexels-rolex-364822.jpg",
      price: 2.99,
    },
    {
      id: 14,
      name: "Rotate",
      type: "Matrix",
      img: "img/wrist-watches/pexels-rotate-watches-5895645.jpg",
      price: 15.99,
    },
    {
      id: 15,
      name: "Rotate",
      type: "Transform",
      img: "img/wrist-watches/pexels-rotate-watches-5895646.jpg",
      price: 18.99,
    },
    {
      id: 16,
      name: "Rotate",
      type: "Degree",
      img: "..//Server/images/wrist-watches/pexels-rotate-watches-5895646.jpg",
      price: 24.99,
    },
    {
      id: 17,
      name: "Fossil",
      type: "Suherli Ferdy",
      img: "..//Server/images/wrist-watches/pexels-suherli-ferdy-fossil-5447382.jpg",
      price: 1.99,
    },
    {
      id: 18,
      name: "Fossil",
      type: "Scale",
      img: "..//Server/images/wrist-watches/pexels-torsten-dettlaff-437037.jpg",
      price: 59.99,
    },
  ]);

  app.get("/blueberrycupcakes", (req, res) => {
    res.status(200).json({
      id: 1,
      name: "Adam Kimmel",
      type: "Perpetual",
      img: "..//Server/images/wrist-watches/pexels-adam kimmel-277319.jpg",
      quantity: 12,
      price: 29.99,
    });
  });

  app.get("/cherrypie", (req, res) => {
    res.status(200).json({
      id: 2,
      name: "Fernando Arcos",
      type: "Adam Kimmel",
      img: "img/wrist-watches/pexels-adam-kimmel-277390.jpg",
      price: 12.99,
    });
  });

  app.get("/chocolatecake", (req, res) => {
    res.status(200).json({
      id: 3,
      name: "Rider",
      type: "Anthoney Derosa",
      img: "img/wrist-watches/pexels-anthony-derosa-rider236915.jpg",
      price: 42.99,
    });
  });

  app.get("/chocolatechipcookies", (req, res) => {
    res.status(200).json({
      id: 4,
      name: "Casio",
      type: "Jatin Anand",
      img: "img/wrist-watches/pexels-casio-266666.jpg",
      price: 15.99,
    });
  });

  app.get("/chocolatecupcakes", (req, res) => {
    res.status(200).json({
      id: 5,
      name: "Armani",
      type: "Emporio",
      img: "img/wrist-watches/pexels-emporio-armani-125779.jpg",
      price: 15.99,
    });
  });

  app.get("/fruitcake", (req, res) => {
    res.status(200).json({
      id: 6,
      name: "Armani",
      type: "Emporio",
      img: "img/wrist-watches/pexels-emporio-armani-128206.jpg",
      price: 34.99,
    });
  });

  app.get("/germanchocolatecake", (req, res) => {
    res.status(200).json({
      id: 7,
      name: "Fernando",
      type: "Arcos",
      img: "img/wrist-watches/pexels-fernando-arcos-190819.jpg",
      price: 40.0,
    });
  });

  app.get("/lovebirdcookies", (req, res) => {
    res.status(200).json({
      id: 8,
      name: "Jess Bailey",
      type: "fossil",
      img: "img/wrist-watches/pexels-fossil-1546333.jpg",
      price: 3.99,
    });
  });

  app.get("/miniapplepies", (req, res) => {
    res.status(200).json({
      id: 9,
      name: "Hazel Marie",
      type: "Seiko Kinetic",
      img: "img/wrist-watches/pexels-hazel-marie-seiko-kinetic-7617109.jpg",
      price: 8.99,
    });
  });

  app.get("/oatmealcookies", (req, res) => {
    res.status(200).json({
      OatmealCookies: {
        id: 10,
        name: "Fossil",
        type: "Jay Johnson",
        img: "img/wrist-watches/pexels-jay-johnson-fossil-6336019.jpg",
        price: 14.99,
      },
    });
  });

  app.get("/chocolatechipbrownies", (req, res) => {
    res.status(200).json({
      id: 11,
      name: "Fossil",
      name: "Jerin Mathew",
      img: "img/wrist-watches/pexels-jerin-mathew-fossil-4801853.jpg",
      price: 2.99,
    });
  });

  app.get("/sprinkleddonuts", (req, res) => {
    res.status(200).json({
      id: 12,
      nmae: "Notes",
      type: "Jess Bailey",
      img: "img/wrist-watches/pexels-jess-bailey-designs-1162519.jpg",
      price: 18.99,
    });
  });

  app.get("/gingerbreadcoookies", (req, res) => {
    res.status(200).json({
      id: 13,
      name: "Rolex",
      type: " PearlPerpetual",
      img: "img/wrist-watches/pexels-rolex-364822.jpg",
      price: 2.99,
    });
  });

  app.get("/strawberrycupcakes", (req, res) => {
    res.status(200).json({
      id: 14,
      name: "Rotate",
      type: "Matrix",
      img: "img/wrist-watches/pexels-rotate-watches-5895645.jpg",
      price: 15.99,
    });
  });
  app.get("/strawberrycake", (req, res) => {
    res.status(200).json({
      StrawberryCake: {
        id: 15,
        name: "Rotate",
        type: "Transform",
        img: "img/wrist-watches/pexels-rotate-watches-5895646.jpg",
        price: 18.99,
      },
    });
  });

  app.get("/strawberryshortcake", (req, res) => {
    res.status(200).json({
      id: 16,
      name: "Rotate",
      type: "Degree",
      img: "img/wrist-watches/pexels-rotate-watches-5895646.jpg",
      price: 24.99,
    });
  });

  app.get("/walnutbrownies", (req, res) => {
    res.status(200).json({
      id: 17,
      name: "Fossil",
      type: "Suherli Ferdy",
      img: "img/wrist-watches/pexels-suherli-ferdy-fossil-5447382.jpg",
      price: 1.99,
    });
  });

  app.get("/weddingcake", (req, res) => {
    res.status(200).json({
      id: 18,
      name: "Fossil",
      type: "Scale",
      img: "img/wrist-watches/pexels-torsten-dettlaff-437037.jpg",
      price: 59.99,
    });
  });
});

const port = 3000;
// Start our server/listen
app.listen(port, () => {
  console.log(`your server is up on port ${port} http://localhost:${port}`);
});
