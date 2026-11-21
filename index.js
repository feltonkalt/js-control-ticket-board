const tickets = [
    { titles: 'Проектор не включается', room: '203', category: 'Оборудование', done: false, },
    { titles: 'Не закрывается окно', room: '105', category: 'Аудитория', done: false, },
    { titles: 'В коридоре не горит свет', room: 'Коридор, 2й этаж', category: 'Другое', done: true, },
];

const ticketsUl = document.getElementById('ticketsUl');

const inputTitle = document.getElementById('inputTitle');
const inputRoom = document.getElementById('inputTitle');

const titleError = document.getElementById('titleError');
const roomError = document.getElementById('roomError');

const selectCategory = document.getElementById('selectCategory');

const addTicketBtn = document.getElementById('addTicketBtn');

rendertickets();

function rendertickets() {
    ticketsUl.innerHTML = '';

    tickets.forEach((ticket, index) => {

        const item = document.createElement('li');
        item.className = 'itemTicket';

        const titleEl = document.createElement('p');
        titleEl.className = 'titles';
        titleEl.textContent = `Проблема: ${tickets[index].titles}`;

        const roomEl = document.createElement('p');
        roomEl.className = 'roomEl';
        roomEl.textContent = `Кабинет: ${tickets[index].room}`;

        const categoryEl = document.createElement('p');
        categoryEl.className = 'categoryEl';
        categoryEl.textContent = tickets[index].category;

        const doneEl = document.createElement('p');
        doneEl.className = 'doneEl';
        if (tickets[index].done == true) {
            doneEl.textContent = ` Статус: Решена`;
        }
        else {
            doneEl.textContent = ` Статус: Не решена`;

        }

        item.append(titleEl, roomEl, categoryEl, doneEl);
        ticketsUl.append(item);
    });
};