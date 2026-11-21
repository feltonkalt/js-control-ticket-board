const tickets = [
    { titles: 'Проектор не включается', room: '203', category: 'Оборудование', done: false, },
    { titles: 'Не закрывается окно', room: '105', category: 'Аудитория', done: false, },
    { titles: 'В коридоре не горит свет', room: 'Коридор, 2й этаж', category: 'Другое', done: true, },
];


const inputTitle = document.getElementById('inputTitle');
const inputRoom = document.getElementById('inputTitle');

const titleError = document.getElementById('titleError');
const roomError = document.getElementById('roomError');

const selectCategory = document.getElementById('selectCategory');

const addTicketBtn = document.getElementById('addTicketBtn');

function rendertickets(){

};