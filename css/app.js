const div = document.querySelector('.accueil-title');
new Typewriter(div,{
    loop : true,
    deleteSpeed: 20
})

.changeDelay(100)
.typeString('BAFARM Elevage,')
.pauseFor(1500)
.deleteChars(8)
.typeString(' Agriculture,')
.pauseFor(1500)
.deleteChars(12)
.typeString(' Education,')
.pauseFor(1500)
.deleteChars(10)
.typeString(' Encadrement.')
.pauseFor(1500)
.deleteChars(11)
.start();