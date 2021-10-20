
$(document).ready(function(){

    //Changement d'image après 15 secondes
    $('#carouselbanner').carousel({
        pause: false,
        interval: 15000


    });

    //Arrête les carousels afin de permetre un changement d'image avec les buttons

    $(['#carousel1','#carousel2','#carousel3','#carousel4']).carousel({
        pause: true,
        interval: false
    });
    
    
    $("#date",).val("Début de location");
    $("#date2",).val("Fin de location");

    //calendrier dans le moteur de recherche sur le champ date avec jQuery UI
    $("#date, #date2").datepicker();

     // Pour avoir le calendrier en fr
     $.datepicker.regional['fr'] = {
        clearText: 'Effacer', 
        closeText: 'Fermer', 
        prevText: '&lt; Préc', 
        nextText: 'Suiv &gt;', 
        currentText: 'Courant', 
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
        'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun',
        'Jul','Aoû','Sep','Oct','Nov','Déc'],
        weekHeader: 'Sm', 
        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
        dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
        dateFormat: 'dd/mm/yy',
        firstDay: 1, 
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['fr']);

});



