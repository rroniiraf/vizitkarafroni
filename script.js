// ===== Кнопка «Тема»: включает и выключает тёмный режим =====
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function () {
    // БАГ №6: кнопка нажимается, но ничего не меняется.
    // Этот класс не описан в style.css — посмотри, как там называется тёмная тема.
    // Исправила, убрав часть слова -mode
    document.body.classList.toggle('dark');
});
// ===== Кнопка «Показать контакт»: показывает и прячет почту =====
// (Здесь спрятан БАГ №3 из index.html: id кнопки не совпадает.
//  Открой консоль браузера — F12 → Console — и прочитай ошибку.)
// Исправила на contact-btn
const contactBtn = document.getElementById('contact-btn');
const contact = document.getElementById('contact');

contactBtn.addEventListener('click', function () {
    contact.classList.toggle('hidden');
});

const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

let liked = false;
let count = 0;

likeBtn.addEventListener('click', function () {
    liked = !liked;
    count += liked ? 1 : -1;

    likeCount.textContent = count;
    likeBtn.classList.toggle('liked', liked);
    likeBtn.firstChild.textContent = liked ? '❤️ ' : '🤍 ';
});
