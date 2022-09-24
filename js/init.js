AOS.init();
let helloOptions = {
    strings: document.location.hash.substring(1).length >=2 ? semanticCore.options[document.location.hash.substring(1)] : semanticCore.options['en'],
    // strings: ['Кіндрат Віктор', 'веб-розробник'],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    backDelay: 5000,
    typeSpeed: 75
};
let typed = new Typed('.detail__iam', helloOptions);