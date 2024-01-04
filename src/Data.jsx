const AllData = [
    {
        title: "Чай листовой Tisun зеленый и черный",
        price: "142 389,00 SOM",
        skidka: "539 840,03 SOM",
        protsendskid: "-74%",
        image: ["https://ir.ozone.ru/s3/multimedia-u/wc1000/6850648218.jpg"]
    },
    {
        title: "Щетка для мытья окон",
        price: "34 806,20 SOM",
        skidka: "112 397,89 SOM",
        protsendskid: "-70%",
        image: ["https://ir.ozone.ru/s3/multimedia-v/wc1000/6652760323.jpg"]
    },
    {
        title: "Шоколадная матрешка с сюрпризом.",
        price: "116 937,82 SOM",
        skidka: "174 581,29 SOM",
        protsendskid: "-35%",
        image: ["https://ir.ozone.ru/s3/multimedia-s/wc1000/6813926344.jpg"]
    },
    {
        title: "Чехол на айфон 11",
        price: "20 085,79 SOM",
        skidka: "205 397,85 SOM",
        protsendskid: "-90%",
        image: ["https://ir.ozone.ru/s3/multimedia-i/wc1000/6479273994.jpg"]
    },
    {
        title: "Подарочный набор Carte Noire",
        price: "98 090,20 SOM",
        skidka: "106 344,63 SOM",
        protsendskid: "-90%",
        image: ["https://ir.ozone.ru/s3/multimedia-5/wc1000/6864652577.jpg"]
    },
    {
        title: "Чай листовой Tisun зеленый и черный",
        price: "142 389,00 SOM",
        skidka: "539 840,03 SOM",
        protsendskid: "-74%",
        image: ["https://ir.ozone.ru/s3/multimedia-u/wc1000/6850648218.jpg"]
    },
    {
        title: "Щетка для мытья окон",
        price: "34 806,20 SOM",
        skidka: "112 397,89 SOM",
        protsendskid: "-70%",
        image: ["https://ir.ozone.ru/s3/multimedia-v/wc1000/6652760323.jpg"]
    },
    {
        title: "Шоколадная матрешка с сюрпризом.",
        price: "116 937,82 SOM",
        skidka: "174 581,29 SOM",
        protsendskid: "-35%",
        image: ["https://ir.ozone.ru/s3/multimedia-s/wc1000/6813926344.jpg"]
    },
    {
        title: "Чехол на айфон 11",
        price: "20 085,79 SOM",
        skidka: "205 397,85 SOM",
        protsendskid: "-90%",
        image: ["https://ir.ozone.ru/s3/multimedia-i/wc1000/6479273994.jpg"]
    },
    {
        title: "Подарочный набор Carte Noire",
        price: "98 090,20 SOM",
        skidka: "106 344,63 SOM",
        protsendskid: "-90%",
        image: ["https://ir.ozone.ru/s3/multimedia-5/wc1000/6864652577.jpg"]
    },
    {
        title: "Чай листовой Tisun зеленый и черный",
        price: "142 389,00 SOM",
        skidka: "539 840,03 SOM",
        protsendskid: "-74%",
        image: ["https://ir.ozone.ru/s3/multimedia-u/wc1000/6850648218.jpg"]
    },
    {
        title: "Щетка для мытья окон",
        price: "34 806,20 SOM",
        skidka: "112 397,89 SOM",
        protsendskid: "-70%",
        image: ["https://ir.ozone.ru/s3/multimedia-v/wc1000/6652760323.jpg"]
    },
    {
        title: "Шоколадная матрешка с сюрпризом.",
        price: "116 937,82 SOM",
        skidka: "174 581,29 SOM",
        protsendskid: "-35%",
        image: ["https://ir.ozone.ru/s3/multimedia-s/wc1000/6813926344.jpg"]
    },
    {
        title: "Чехол на айфон 11",
        price: "20 085,79 SOM",
        skidka: "205 397,85 SOM",
        protsendskid: "-90%",
        image: ["https://ir.ozone.ru/s3/multimedia-i/wc1000/6479273994.jpg"]
    },
    {
        title: "Подарочный набор Carte Noire",
        price: "98 090,20 SOM",
        skidka: "106 344,63 SOM",
        protsendskid: "-90%",
        image: ["https://ir.ozone.ru/s3/multimedia-5/wc1000/6864652577.jpg"]
    },
    {
        title: "Чай листовой Tisun зеленый и черный",
        price: "142 389,00 SOM",
        skidka: "539 840,03 SOM",
        protsendskid: "-74%",
        image: ["https://ir.ozone.ru/s3/multimedia-u/wc1000/6850648218.jpg"]
    },
    {
        title: "Щетка для мытья окон",
        price: "34 806,20 SOM",
        skidka: "112 397,89 SOM",
        protsendskid: "-70%",
        image: ["https://ir.ozone.ru/s3/multimedia-v/wc1000/6652760323.jpg"]
    },
    {
        title: "Шоколадная матрешка с сюрпризом.",
        price: "116 937,82 SOM",
        skidka: "174 581,29 SOM",protsendskid: "-35%",
        image: ["https://ir.ozone.ru/s3/multimedia-s/wc1000/6813926344.jpg"]
    },
    {
        title: "Чехол на айфон 11",
        price: "20 085,79 SOM",
        skidka: "205 397,85 SOM",
        protsendskid: "-90%",
        image: ["https://ir.ozone.ru/s3/multimedia-i/wc1000/6479273994.jpg"]
    },
    {
        title: "Подарочный набор Carte Noire",
        price: "98 090,20 SOM",
        skidka: "106 344,63 SOM",
        protsendskid: "-90%",
        image: ["https://ir.ozone.ru/s3/multimedia-5/wc1000/6864652577.jpg"]
    }
]

function AddID(AllData) {
    return AllData.map((i, index) => i ? { ...i, id: index } : i)
}

let Data = AddID(AllData)


export default Dataw