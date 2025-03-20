

const categoriesList = document.querySelector("#categories"); // Отримуємо ul#categories
const categoriesItems = categoriesList.querySelectorAll(".item"); // Отримуємо всі li.item

console.log(`Кількість категорій: ${categoriesItems.length}`); // Виводимо кількість категорій

categoriesItems.forEach((item) => {
    const title = item.querySelector("h2").textContent; // Отримуємо текст заголовка
    const elementsCount = item.querySelectorAll("ul li").length; // Рахуємо вкладені <li>

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${elementsCount}`);
});

