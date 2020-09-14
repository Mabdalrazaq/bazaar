export const tablesDB=[
    {
        id: 1,
        description: 'stuff',
        ownerId: 12345,
        ownerName: 'Mohammad',
        ownerImage: 'images/12345.jpg',
        items:[
            {
                id:1,
                name: 'Handmade Clock',
                price: 10,
                image: '/images/clock.jpg',
                description: 'A clock that was made before my father, it is hand made and unique',
                available: true
            },
            {
                id:2,
                name: 'Old Apple',
                price: 3,
                image: '/images/oldapple.jpg',
                description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
                available: true
            },
            {
                id:3,
                name: 'My Brother\'s Hand',
                price: 100,
                image: '/images/hand.jpg',
                description: 'I really hate that fucker',
                available: false

            },
            {
                id:4,
                name: 'A kidney',
                price: 76,
                image: '/images/kidney.jpg',
                description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
                available: true
            }
        ]
    },
    {
        id:2,
        description:'body parts',
        ownerId: 232,
        ownerName: 'Sobhi',
        ownerImage: 'images/232.jpg',
        items:[
            {
                id:1,
                name: 'Handmade Clock',
                price: 10,
                image: '/images/clock.jpg',
                description: 'A clock that was made before my father, it is hand made and unique',
                available: true

            },
            {
                id:2,
                name: 'Old Apple',
                price: 3,
                image: '/images/oldapple.jpg',
                description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
                available: false
            },
            {
                id:3,
                name: 'My Brother\'s Hand',
                price: 100,
                image: '/images/hand.jpg',
                description: 'I really hate that fucker',
                available: true


            },
            {
                id:4,
                name: 'A kidney',
                price: 76,
                image: '/images/kidney.jpg',
                description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
                available: true

            }
        ]
    },
    {
        id:3,
        description: 'animals',
        ownerId: 3,
        ownerName: 'Sara',
        ownerImage: 'images/3.jpg',
        items:[
            {
                id:1,
                name: 'Handmade Clock',
                price: 10,
                image: '/images/clock.jpg',
                description: 'A clock that was made before my father, it is hand made and unique',
                available: true

            },
            {
                id:2,
                name: 'Old Apple',
                price: 3,
                image: '/images/oldapple.jpg',
                description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
                available: true

            },
            {
                id:3,
                name: 'My Brother\'s Hand',
                price: 100,
                image: '/images/hand.jpg',
                description: 'I really hate that fucker',
                available: false

            },
            {
                id:4,
                name: 'A kidney',
                price: 76,
                image: '/images/kidney.jpg',
                description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
                available: true

            },
            {
                id:1,
                name: 'Handmade Clock',
                price: 10,
                image: '/images/clock.jpg',
                description: 'A clock that was made before my father, it is hand made and unique',
                available: false
            },
            {
                id:2,
                name: 'Old Apple',
                price: 3,
                image: '/images/oldapple.jpg',
                description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
                available: true

            },
            {
                id:3,
                name: 'My Brother\'s Hand',
                price: 100,
                image: '/images/hand.jpg',
                description: 'I really hate that fucker',
                available: true


            },
            {
                id:4,
                name: 'A kidney',
                price: 76,
                image: '/images/kidney.jpg',
                description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
                available: true

            },
            {
                id:1,
                name: 'Handmade Clock',
                price: 10,
                image: '/images/clock.jpg',
                description: 'A clock that was made before my father, it is hand made and unique',
                available: true

            },
            {
                id:2,
                name: 'Old Apple',
                price: 3,
                image: '/images/oldapple.jpg',
                description: 'This apple is just awesome, it talks to me sometimes in the night and assures me that everything will be alright',
                available: true

            },
            {
                id:3,
                name: 'My Brother\'s Hand',
                price: 100,
                image: '/images/hand.jpg',
                description: 'I really hate that fucker',
                available: false

            },
            {
                id:4,
                name: 'A kidney',
                price: 76,
                image: '/images/kidney.jpg',
                description: 'I stole it, and I want to sell it, do not judge me, this world is terrifying',
                available: true
            }


        ]
    },
]

export const usersDB=[
    {
        id:12345,
        name: 'Mohammad',
        image: 'images/12345.jpg',
        active: true,
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
        active: false,
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
        active: false,
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
