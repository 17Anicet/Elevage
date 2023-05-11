const div = document.querySelector('.accueil-title');
new Typewriter(div,{
    loop : true,
    deleteSpeed: 20
})

.changeDelay(50)
.typeString('Elevage ,')
.pauseFor(300)
.typeString(' Agriculture ,')
.pause(1000)
.deleteChars(8)
.typeString(' Education des enfants ,')
.pauseFor(300)
.deleteChars(21)
.typeString(' Encadrement des jeunes.')
.pauseFor(300)
.deleteChars(22)
.start();
