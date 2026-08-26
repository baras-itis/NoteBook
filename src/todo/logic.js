const date = document.getElementById("date");
let today = Temporal.Now.plainDateISO()
date.textContent = today;

const list = document.getElementById("list");

const array = ['1', '2'];

for(let i = 0; i < array.length; i++){
    let listItem = list.appendChild("li");
    listItem.textContent(array[i])
}

/* 
    есть список
    через инпут вставляем пушим в массив новое значение
    через чекбокс проверяем сделан ли он
    удаляем при нажатии на кнопку рядом

    создать массив тодо
    после получать значение инпута
    создать слушатель на энетер, после пушить в массив

    создать две колонки: первая с список, вторая с погодой, поработать с фетч
    рекомендвции для чтение и тд, встроить ииы
*/