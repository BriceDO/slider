const imgs = document.querySelectorAll('.cont-slides img');
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
let index = 0;

// bouton nav droit
suivant.addEventListener('click', slideSuivante);

function slideSuivante(){

    if(index < 2) {

        imgs[index].classList.remove('active');
        index++;
        imgs[index].classList.add('active');

    } else if (index === 2) {

        imgs[index].classList.remove('active');
        index = 0;
        imgs[index].classList.add('active');

    }

    // Pour que les cercles bougent en même temps que fleche gauche
    for (i=0; i < cercles.length; i++) {

        if(cercles[i].getAttribute('data-click') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }
}

//bouton nav gauche
precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){

    if(index > 0) {

        imgs[index].classList.remove('active');
        index--;
        imgs[index].classList.add('active');

    } else if (index === 0) {

        imgs[index].classList.remove('active');
        index = 2;
        imgs[index].classList.add('active');

    }

    // Pour que les cercles bougent en même temps que fleche droite
    for (i=0; i < cercles.length; i++) {

        if(cercles[i].getAttribute('data-click') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }
}

// controle avec les fleches directionnelles
document.addEventListener('keydown', keyPressed)

function keyPressed(e) {
    if(e.keyCode === 37) {
        slidePrecedente();
    } else if (e.keyCode === 39) {
        slideSuivante();
    }
}

// changer d'image au clique sur un cercle
cercles.forEach(cercle => {

    cercle.addEventListener('click', function(){

        // on nettoie tous les cercles
        for(i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove('active-cercle');
        }

        // et on rajoute la classe active sur celui qu'on vient de cliquer
        this.classList.add('active-cercle');

        // on gère les images en fonction de ça
        imgs[index].classList.remove('active');
        index = this.getAttribute('data-click') - 1;
        imgs[index].classList.add('active');

    })
})