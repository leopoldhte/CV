let form = document.querySelector('#formulaire');

//contrôle modif sujet
form.sujet.addEventListener('change', function(){
    validSujet(this);
});

//contrôle modif mail
form.email.addEventListener('change', function(){
    validEmail(this);
});

//contrôle modif mail
form.Contenu.addEventListener('change', function(){
    validContenu(this);
});

//contrôle envoi formulaire
form.addEventListener('submit', function(e){
    e.preventDefault();
    if (validEmail(form.email) && validSujet(form.sujet) && validContenu(form.Contenu))
    {
        form.submit();
    }
});


// --------------- Validation Sujet -------------------------
const validSujet=function(inputSujet)
//Regex
{
    let SujetRegExp = new RegExp (/^[a-zA-Zéèàùîïâäêëüû0-9,.-_()'"^\/*-+:;=\[\]{}&#°@%¨$£¤§!²]+/);

    //Recuperation de la balise small
    let small = inputSujet.nextElementSibling;

    //test du regex
    if (SujetRegExp.test(inputSujet.value)) {
        small.innerHTML = 'Champ valide'; //Affichage du texte dans la balise small 
        small.classList.remove('text-danger'); //Suppression de l'affichage en rouge si jamais il était présent
        small.classList.add('text-success'); //Affichage en vert
        return true;
    }
    else {
        small.innerHTML = 'Champ non valide'; //Affichage du texte dans la balise small 
        small.classList.remove('text-success'); //Suppression de l'affichage en vert si jamais il était présent
        small.classList.add('text-danger'); //Affichage en rouge
        return false;
    }
};






// --------------- Validation Email -------------------------
const validEmail=function(inputEmail)
//Regex
{
    let EmailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,5}$');

    //Recuperation de la balise small
    let small = inputEmail.nextElementSibling;

    //test du regex
    if (EmailRegExp.test(inputEmail.value)) {
        small.innerHTML = 'Adresse valide'; //Affichage du texte dans la balise small 
        small.classList.remove('text-danger'); //Suppression de l'affichage en rouge si jamais il était présent
        small.classList.add('text-success'); //Affichage en vert
        return true;
    }
    else {
        small.innerHTML = 'Adresse non valide'; //Affichage du texte dans la balise small 
        small.classList.remove('text-success'); //Suppression de l'affichage en vert si jamais il était présent
        small.classList.add('text-danger'); //Affichage en rouge
        return false;
    }
};



// --------------- Validation Sujet -------------------------
const validContenu=function(inputContenu)
//Regex
{
    let ContenuRegExp = new RegExp (/^[a-zA-Zéèàùîïâäêëüû0-9,.-_()'"^\/*-+:;=\[\]{}&#°@%¨$£¤§!²]+/);

    //Recuperation de la balise small
    let small = inputContenu.nextElementSibling;

    //test du regex
    if (ContenuRegExp.test(inputContenu.value)) {
        small.innerHTML = 'Champ valide'; //Affichage du texte dans la balise small 
        small.classList.remove('text-danger'); //Suppression de l'affichage en rouge si jamais il était présent
        small.classList.add('text-success'); //Affichage en vert
        return true;
    }
    else {
        small.innerHTML = 'Champ non valide'; //Affichage du texte dans la balise small 
        small.classList.remove('text-success'); //Suppression de l'affichage en vert si jamais il était présent
        small.classList.add('text-danger'); //Affichage en rouge
        return false;
    }
};
