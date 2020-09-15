const tablesDB=[
    {
        id: 1,
        ownerId: 12345,
        ownerName: 'Mohammad',
        ownerImage: 'images/12345.jpg'
    },
    {
        id:2,
        ownerId: 232,
        ownerName: 'Sobhi',
        ownerImage: 'images/232.jpg',
    },
    {
        id:3,
        ownerId: 3,
        ownerName: 'Sara',
        ownerImage: 'images/3.jpg',
    }
]

const usersDB=[
    {
        id:12345,
        name: 'Mohammad',
        image: 'images/12345.jpg',
        tableId: 1,
        email: 'm.abdalrazaq314@gmai.com',
        phone: '+962 786726978',
        address:{
            street: 'azzoun',
            house: 2,
            area: 'marka',
            city: 'amman',
            description: 'مقابل مسجد عمر حسن هملان هملان في إسكان ماركا الشمالية'
        }
    },
    {
        id: 232,
        name: 'Sobhi',
        image: 'images/232.jpg',
        tableId: 2,
        email: 'm.abdalrazaq314@gmai.com',
        phone: '+962 786726978',
        address:{
            street: 'azzoun',
            house: 2,
            area: 'marka',
            city: 'amman',
            description: 'مقابل مسجد عمر حسن هملان هملان في إسكان ماركا الشمالية'
        }
    },
    {
        id: 3,
        name: 'Sara',
        image: 'images/3.jpg',
        tableId: 3,
        email: 'm.abdalrazaq314@gmai.com',
        phone: '+962 786726978',
        address:{
            street: 'azzoun',
            house: 2,
            area: 'marka',
            city: 'amman',
            description: 'مقابل مسجد عمر حسن هملان هملان في إسكان ماركا الشمالية'
        }
    }
]


const itemsDB=[
    {
        id:1,
        tableId:1,
        name: 'Handmade Clock',
        price: 10,
        image: '/images/clock.jpg',
        description: 'A clock that was made before my father, it is hand made and unique',
        available: true
    },
    {
        id:2,
        tableId:1,
        name: 'Old Apple',
        price: 3,
        image: '/images/oldapple.jpg',
        description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
        available: true
    },
    {
        id:3,
        tableId:1,
        name: 'My Brother\'s Hand',
        price: 100,
        image: '/images/hand.jpg',
        description: 'I really hate that fucker',
        available: false

    },
    {
        id:4,
        tableId:1,
        name: 'A kidney',
        price: 76,
        image: '/images/kidney.jpg',
        description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
        available: true
    },{
        id:5,
        tableId:2,
        name: 'Handmade Clock',
        price: 10,
        image: '/images/clock.jpg',
        description: 'A clock that was made before my father, it is hand made and unique',
        available: true
    },
    {
        id:6,
        tableId:2,
        name: 'Old Apple',
        price: 3,
        image: '/images/oldapple.jpg',
        description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
        available: true
    },
    {
        id:7,
        tableId:2,
        name: 'My Brother\'s Hand',
        price: 100,
        image: '/images/hand.jpg',
        description: 'I really hate that fucker',
        available: false

    },
    {
        id:8,
        tableId:2,
        name: 'A kidney',
        price: 76,
        image: '/images/kidney.jpg',
        description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
        available: true
    },{
        id:9,
        tableId:2,
        name: 'Handmade Clock',
        price: 10,
        image: '/images/clock.jpg',
        description: 'A clock that was made before my father, it is hand made and unique',
        available: true
    },
    {
        id:10,
        tableId:2,
        name: 'Old Apple',
        price: 3,
        image: '/images/oldapple.jpg',
        description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
        available: true
    },
    {
        id:11,
        tableId: 3,
        name: 'My Brother\'s Hand',
        price: 100,
        image: '/images/hand.jpg',
        description: 'I really hate that fucker',
        available: false

    },
    {
        id:12,
        tableId: 3,
        name: 'A kidney',
        price: 76,
        image: '/images/kidney.jpg',
        description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
        available: true
    },    {
        id:13,
        tableId: 3,
        name: 'Handmade Clock',
        price: 10,
        image: '/images/clock.jpg',
        description: 'A clock that was made before my father, it is hand made and unique',
        available: true
    },
    {
        id:14,
        tableId: 3,
        name: 'Old Apple',
        price: 3,
        image: '/images/oldapple.jpg',
        description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
        available: true
    },
    {
        id:15,
        tableId: 3,
        name: 'My Brother\'s Hand',
        price: 100,
        image: '/images/hand.jpg',
        description: 'I really hate that fucker',
        available: false

    },
    {
        id:16,
        tableId: 3,
        name: 'A kidney',
        price: 76,
        image: '/images/kidney.jpg',
        description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
        available: true
    },{
        id:17,
        tableId: 3,
        name: 'Handmade Clock',
        price: 10,
        image: '/images/clock.jpg',
        description: 'A clock that was made before my father, it is hand made and unique',
        available: true
    },
    {
        id:18,
        tableId: 3,
        name: 'Old Apple',
        price: 3,
        image: '/images/oldapple.jpg',
        description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
        available: true
    },
    {
        id:19,
        tableId: 3,
        name: 'My Brother\'s Hand',
        price: 100,
        image: '/images/hand.jpg',
        description: 'I really hate that fucker',
        available: false

    },
    {
        id:20,
        tableId: 3,
        name: 'A kidney',
        price: 76,
        image: '/images/kidney.jpg',
        description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
        available: true
    }
]

module.exports={
    usersDB,
    tablesDB,
    itemsDB
}