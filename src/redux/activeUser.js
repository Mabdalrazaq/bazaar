import * as actionTypes from './actionTypes';

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


const id=12345
const users=(state=usersDB.find(user=>user.id===id),action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default users;