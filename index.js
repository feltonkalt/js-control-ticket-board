const tickets = [
    { titles: 'Проектор не включается', room: '203', category: 'Оборудование', done: false, },
    { titles: 'Не закрывается окно', room: '105', category: 'Аудитория', done: false, },
    { titles: 'В коридоре не горит свет', room: 'Коридор, 2й этаж', category: 'Другое', done: true, },
];

const ticketsUl = document.getElementById('ticketsUl');

const inputTitle = document.getElementById('inputTitle');
const inputRoom = document.getElementById('inputRoom');

const titleError = document.getElementById('titleError');
const roomError = document.getElementById('roomError');

const selectCategory = document.getElementById('selectCategory');

const addTicketBtn = document.getElementById('AddTicketBtn');

const freeTicket = document.getElementById('freeTicket');


rendertickets();


addTicketBtn.addEventListener('click', () => {
    NewTicket();
});

freeTicket.addEventListener('change', () => {
    rendertickets();
});

function rendertickets() {
    ticketsUl.innerHTML = '';

    if (freeTicket.checked) {

        tickets.forEach((Freeticket, index) => {
            if (Freeticket.done === true) {
                return;
            }

            const item = document.createElement('li');
            item.className = 'itemTicket';

            const divTicket = document.createElement('div');
            divTicket.className = 'divTicket';

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


            const completeBtn = document.createElement('button');
            completeBtn.className = 'completeBtn';
            completeBtn.id = 'completeBtn';
            completeBtn.textContent = 'Выполнить';
            completeBtn.addEventListener('click', () => {
                completeticket(index);
            });

            const deleteTicketBtn = document.createElement('button');
            deleteTicketBtn.className = 'deleteTicketBtn';
            deleteTicketBtn.textContent = 'Удалить';
            deleteTicketBtn.addEventListener('click', () => {
                deleteTicket(index, item);
            });



            if (tickets[index].done == true) {
                divTicket.append(titleEl, roomEl, categoryEl, doneEl)
                item.append(divTicket, deleteTicketBtn);
                ticketsUl.append(item);
            }
            else {
                divTicket.append(titleEl, roomEl, categoryEl, doneEl)
                item.append(divTicket, completeBtn, deleteTicketBtn);
                ticketsUl.append(item);
            }



        });
    }
    else {

        tickets.forEach((ticket, index) => {

            const item = document.createElement('li');
            item.className = 'itemTicket';

            const divTicket = document.createElement('div');
            divTicket.className = 'divTicket';

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


            const completeBtn = document.createElement('button');
            completeBtn.className = 'completeBtn';
            completeBtn.id = 'completeBtn';
            completeBtn.textContent = 'Выполнить';
            completeBtn.addEventListener('click', () => {
                completeticket(index);
            });

            const deleteTicketBtn = document.createElement('button');
            deleteTicketBtn.className = 'deleteTicketBtn';
            deleteTicketBtn.textContent = 'Удалить';
            deleteTicketBtn.addEventListener('click', () => {
                deleteTicket(index, item);
            });



            if (tickets[index].done == true) {
                divTicket.append(titleEl, roomEl, categoryEl, doneEl)
                item.append(divTicket, deleteTicketBtn);
                ticketsUl.append(item);
            }
            else {
                divTicket.append(titleEl, roomEl, categoryEl, doneEl)
                item.append(divTicket, completeBtn, deleteTicketBtn);
                ticketsUl.append(item);
            }



        });
    };
};

function NewTicket() {
    const inputTitleVal = inputTitle.value.trim();
    const inputRoomVal = inputRoom.value.trim();
    const selectCategoryVal = +selectCategory.value;

    if (inputTitleVal == '') {
        titleError.innerHTML = 'Поле ввода проблемы не должно быть пустым';
        return;
    }
    if (inputRoomVal == '') {
        roomError.innerHTML = 'Поле ввода комнаты не должно быть пустым';
        return;
    }
    if (selectCategoryVal == 0) {
        alert('Выберите категорию');
        return;
    }

    tickets.push({
        titles: inputTitleVal,
        room: inputRoomVal,
        category: selectCategoryVal,
        done: false,
    });

    rendertickets();

    inputRoom.value = '';
    inputTitle.value = '';
    selectCategory.value = 0;

};

function deleteTicket(index, item) {
    tickets[index] = tickets.splice();
    rendertickets();
}

function completeticket(index) {
    tickets[index].done = true;
    rendertickets();
}
