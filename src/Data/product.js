import {React} from 'react';



export let categories =["electronics", "mens", "kids" ]
export let products = [ 


    {
        id: 4,
        name: "Yellow Samsung Mobile",
        link: "Yellow-Samsung-Mobile",
        img: '/images/1.jpg',
        categories: "electronics",
        price:  10000 ,
        review: "******",
        rating: "high",
        description: "The Galaxy A series (meaning Alpha) is a line of mid-range Android smartphones manufactured by Samsung Electronics. The Galaxy A series is similar to the high-end Galaxy S series, but with lower specifications and features." 

    },
    {
        id: 7,
        name: "Red Samsung Mobile",
        link: "Red Samsung Mobile",
        img: '/images/6.jpg',
        categories: "electronics",
        price:  30000 ,
        review: "******",
        rating: "high",
        description: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities." 

    },
    {
        id: 8,
        name: "Headphone",
        link: "Headphone",
        img: '/images/phone.jpg',
        categories: "electronics",
        price:  2000 ,
        review: "******",
        rating: "high",
        description: "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound." 

    },
    {
        id: 9,
        name: "Mac Book",
        link: "Mac Book",
        img: '/images/macbook.jpg',
        categories: "electronics",
        price:  200000 ,
        review: "******",
        rating: "high",
        description: "A laptop or laptop computer, is a small, portable personal computer (PC) with a clamshell form factor, typically having a thin LCD or LED computer screen mounted on the inside of the upper lid of the clamshell and an alphanumeric keyboard on the inside of the lower lid."
    },
    {
        id: 10,
        name: "Nokia Mobile",
        link: "Nokia Mobile",
        img: '/images/nokia.jpg',
        categories: "electronics",
        price:  20000 ,
        review: "******",
        rating: "high",
        description: "Nokia 9 Pureview is an amazing device with waterproof capabilities. You can use this device underwater to take beautiful shots or can talk with your loved ones while it's raining. Nokia 9 Pureview comes with official IP67 waterproof ratings. "
    },


    {
        id: 5,
        name: "Black Samsung Mobile",
        link: "Black-Samsung-Mobile",
        img: '/images/2.png',
        categories: "electronics",
        price:  15000,
        review: "****",
        rating: "high",
        description: "The Samsung Galaxy A32 5G is powered by 2.0GHz MHz octa-core it comes with 4GB of RAM. The phone packs 64GB of internal storage that can be expanded up to 1000GB via a microSD card."

    },
    {
        id: 1,
        name: "Baba T-Shirt",
        link: "Baba-T-Shirt",
        img: '/images/10.jpg',
        categories: "mens",
        price:  1500,
        review: "***",
        rating: "high",
        description: "A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar."

    },
    {
        id: 11,
        name: "Causal Shirt",
        link: "Causal Shirt",
        img: '/images/kkkk.jpg',
        categories: "mens",
        price:  1500 ,
        review: "***",
        rating: "high",
        description: "A casual shirt is a perfect balance between too casual and too formal. It's formal than a tee and casual than a blazer or jacket. Plus you can wear it in many different ways. Such as you can pair it with chinos, jeans and trousers."
    },
    {
        id: 12,
        name: "Shoes",
        link: "Shoes",
        img: '/images/shoes.jpg',
        categories: "mens",
        price:  2000 ,
        review: "***",
        rating: "high",
        description: "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion."
    },
    {
        id: 13,
        name: "Causal Shirt",
        link: "Causal Shirt",
        img: '/images/ggg.jpg',
        categories: "mens",
        price:  2000,
        review: "***",
        rating: "high",
        description: "A casual shirt is a perfect balance between too casual and too formal. It's formal than a tee and casual than a blazer or jacket. Plus you can wear it in many different ways. Such as you can pair it with chinos, jeans and trousers."
    },

    {
        id: 2,
        name: "Red coat T-Shirt",
        link: "Red-T-Shirt",
        img: '/images/11.jpg',
        categories: "mens",
        price:  2000,
        review: "*****",
        rating: "average",
        description: "A good t-shirt will feel far smoother and lighter than most other t-shirts. A good t-shirt not only endures but gets better with age, the fabric actually begins to feel softer over time."


    },

    {
        id: 3,
        name: "Blue T-Shirt",
        link: "Blue-T-Shirt",
        img: '/images/13.jpg',
        categories: "mens",
        price:  2000,
        review: "*****",
        rating: "average",
        description: "The most common type of fabric used to make t-shirts is cotton, but it is important to mention that there are different types of cotton out there for use. ... Pima cotton is considered to be the highest quality cotton that you can get."

    },

  

    {
        id: 6,
        name: "Ball For Kids-Red",
        link: "Ball-For-Kids-Red",
        img: '/images/17.jpg',
        categories: "kids",
        price:  800,
        review: "*****",
        rating: "high",
        description: "Playing with balls improves kids' motor skills, hand-eye coordination, and timing, which are important parts of the developmental progression of toddlers. "

    },
    {
        id: 14,
        name: "Kids T-Shirt",
        link: "Kids T-Shirt",
        img: '/images/kids.jpg',
        categories: "kids",
        price:  600,
        review: "*****",
        rating: "high",
        description: "Good t-shirt designs are those that people want to wear. Make sure your t-shirt doesn’t get stuffed in the back of the closet with a custom kids' t-shirt designed just for you by a professional designer. "

    },
    {
        id: 15,
        name: "Name T-Shirt",
        link: "Name T-Shirt",
        img: '/images/design.jpg',
        categories: "kids",
        price:  900,
        review: "*****",
        rating: "high",
        description: "Good t-shirt designs are those that people want to wear. Make sure your t-shirt doesn’t get stuffed in the back of the closet with a custom kids' t-shirt designed just for you by a professional designer. "

    },
    {
        id: 16,
        name: "Tablet for Kids",
        link: "Tablet for Kids",
        img: '/images/tablet.jpg',
        categories: "kids",
        price:  15000,
        review: "*****",
        rating: "high",
        description: " A tablet, or tablet PC, is a portable computer that uses a touchscreen as its primary input device. Most tablets are slightly smaller and weigh less than the average laptop. "

    },
    {
        id: 17,
        name: "Game Vedio for Kids",
        link: "Game Vedio for Kids",
        img: '/images/game.jpg',
        categories: "kids",
        price:  300,
        review: "*****",
        rating: "high",
        description: " A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool. ... Often, part of the entertainment for children playing a game is deciding who is part of their audience and who is a player. "

    },
    {
        id: 18,
        name: "Clock for Kids",
        link: "Clock for Kids",
        img: '/images/clock.jpg',
        categories: "kids",
        price:  400,
        review: "*****",
        rating: "high",
        description: " A clock is a device used to measure, keep, and indicate time. The clock is one of the oldest human inventions, meeting the need to measure intervals of time shorter than the natural units: the day, the lunar month, and the year."
    },
]

export default products;