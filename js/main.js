let lang = '';

if (window.location.hash.length <= 2) {
    lang = 'en';
}

let semanticCore = {
    'change-lang-h': {
        en: 'Language:',
        ua: 'Мова:',
        pol: 'Język:'
    },
    'english': {
        en: 'en',
        ua: 'англ',
        pol: 'ang'
    },
    'ukrainian': {
        en: 'ua',
        ua: 'укр',
        pol: 'ukr'
    },
    'polish': {
        en: 'pol',
        ua: 'пол',
        pol: 'pol'
    },
    'description': {
        en: `
        <p class="details__text" data-languageElement="description">
        I am a web developer located in Ukraine 🇺🇦. I started my career in web
        development by studying at the Creator IT Academy. I started my way in IT only in 2021, but I
        already have a number of projects that are worth noting. These are both HTML / CSS-only web design
        projects and JS-based projects. If you need a developer to create a landing page or other web pages,
        then you will definitely need my help.
        <br>
        <b class="details__detail">💡 Why me? <br></b>
        - More than 10 completed projects that show my experience in web development <br>
        - During the implementation of the project, I will always keep in touch with you <br>
        <b class="details__detail"> 🔥 Main hard skils: <br> </b>
        <span class="details__skilsRow">
        <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/bootstrap.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
            src="./images/skills/clipboardjs.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/css.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/figma.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
            src="./images/skills/html.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/javaScript.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/jqpopupoverlay.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
            src="./images/skills/jquery.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/photoshop.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
            src="./images/skills/ui.svg" alt="skill" class="details__skill">
            </span>

        🧡 I will be grateful for any order!
        </p>
        `,
        ua: `
        <p class="details__text" data-languageElement="description">
        Я веб-розробник з України 🇺🇦. Свою кар’єру у веб-розробці розпочав із навчання в Creator IT Academy. Почав творити у сфері IT лише у 2021 році, проте навіть зараз маю низку проектів, які варті уваги. У мене є як і роботи на чистому HTML/CSS, так і з використанням JS. Якщо вам потрібен розробник для створення цільової лендінг сторінки або інших веб-сторінок, то вам точно знадобиться моя допомога.
        <br>
        <b class="details__detail">💡 Чому вам потрібно обрати саме мене? <br></b>
        - Більше десяти виконаних проектів, які показують мій досвід у веб розробці<br>
        - Під час розробки буду завжди на зв'язку із вами<br>
        <b class="details__detail"> 🔥 Основні технічні вміння: <br> </b>
        <span class="details__skilsRow">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/bootstrap.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/clipboardjs.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/css.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/figma.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/html.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/javaScript.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/jqpopupoverlay.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/jquery.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/photoshop.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/ui.svg" alt="skill" class="details__skill">
        </span>

        🧡 Буду вдячний за будь-яке замовлення!
        </p>
        `,
        pol: `
        <p class="details__text" data-languageElement="description">
        Jestem web developerem z Ukrainy 🇺🇦. Karierę w tworzeniu stron internetowych rozpoczął od studiów w Creator IT Academy. Zacząłem tworzyć w obszarze IT dopiero w 2021 roku, ale już teraz mam szereg projektów, na które warto zwrócić uwagę. Mam zarówno prace na czystym HTML/CSS, jak i przy użyciu JS. Jeśli potrzebujesz programisty do stworzenia strony docelowej lub innych stron internetowych, na pewno będziesz potrzebować mojej pomocy.        <br>
        <b class="details__detail">💡 Dlaczego powinieneś wybrać mnie? <br></b>
        - Kilkanaście zrealizowanych projektów, które pokazują moje doświadczenie w tworzeniu stron internetowych<br>
        - Zawsze będę z Tobą w kontakcie podczas rozwoju<br>
        <b class="details__detail"> 🔥 Podstawowe umiejętności techniczne: <br> </b>
        <span class="details__skilsRow">
        <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/bootstrap.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/clipboardjs.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
            src="./images/skills/css.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
            src="./images/skills/figma.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
            src="./images/skills/html.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/javaScript.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/jqpopupoverlay.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/jquery.svg" alt="skill" class="details__skill">
                <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/photoshop.svg" alt="skill" class="details__skill">
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-sine"
                src="./images/skills/ui.svg" alt="skill" class="details__skill">
        </span>

        🧡 Będę wdzięczna za każde zamówienie!
        </p>
        `
    },
    'last-projects-btn': {
        en: 'My last projects &dArr;',
        ua: 'Мої останні роботи &dArr;',
        pol: 'Moje najnowsze projekty &dArr;'
    },
    'hello': {
        en: 'Hello 👋🏻 <br> I am <span class="detail__iam"></span>',
        ua: 'Привіт 👋🏻 <br> Я <span class="detail__iam"></span>',
        pol: 'Cześć👋🏻 <br> Jestem <span class="detail__iam"></span>'
    },
    'options': {
        en: ['Victor Kindrat', 'web-developer'],
        ua: ['Кіндрат Віктор', 'веб-розробник'],
        pol: ['Wiktor Kindrat', 'web-developer']
    },
    'loader': {
        en: 'MAKEING THINGS',
        ua: 'СТВОРЕННЯ СТОРІНКИ',
        pol: 'TWORZENIE STRONY'
    },
    'last-projects': {
        en: 'Last projects',
        ua: 'Останні роботи',
        pol: 'Najnowsze projekty'
    },
    'more': {
        en: '<img src="./images/github.svg" alt="github href" class="toGithubBtn__img"> More projects on my GitHub',
        ua: '<img src="./images/github.svg" alt="github href" class="toGithubBtn__img"> Більше y моєму GitHub',
        pol: '<img src="./images/github.svg" alt="github href" class="toGithubBtn__img"> Więcej na moim GitHubie'
    },
    'open-btn': {
        en: 'Open',
        ua: 'Відкрити',
        pol: 'Otwórz'
    }
}

$('#lang__en, #lang__ua, #lang__pol').click(function(){
    lang = $(this).attr('id').substring(6)
    changeURL();
})

function changeURL() {
    location.href = window.location.pathname + '#' + lang;
    location.reload()
}

function changeLanguage() {
    let hash = (window.location.hash).substring(1);
    for (let key in semanticCore) {
        $(`*[data-languageElement="${key}"]`).html(semanticCore[key][hash])
    }
}
changeLanguage()

document.body.onload = function () {
    $('.loader').fadeOut(400)
}