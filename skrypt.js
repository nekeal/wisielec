$(function () {

    function naSpacje(haslo) {
        var wynik = "";
        for (i = 0; i < haslo.length; i++) {
            if (haslo.charAt(i) != " ")
                wynik += "_";
            else wynik += " ";
        }
        console.log(wynik);
        return wynik;
    }

    function wypiszHaslo(pomoc) {
        $('#haslo').html(pomoc);
    }

    function wypiszLitery() {
        var lit = document.createDocumentFragment();
        var div = '<div class="row"></div>';
        var pojemnik = $('#litery');
        for (i = 0; i < 35; i++) {
            // $(lit).append('<div class="col-xs-1 litera">' + litery[i] + "</div>");
            $(lit).append('<div class="cl-1"><div class="litera">' + litery[i] + "</div></div>");
            // pojemnik.append('<div class="litera">' + litery[i] + "</div>");
            if (i > 0 && (i + 1) % 7 == 0) {
                //$(lit).append('<div class="col-xs-5 zero" </div>');              
                pojemnik.append(div);
                $(".row").last().append(lit);
                // lit.appendTo($(".row").last());
                lit = document.createDocumentFragment();
                // pojemnik.append('<div style="clear:both;"</div>')
            }
        }
    }

    function loadImage(ile) {
        for (i = 0; i <= ile; i++) {
            images[i] = new Image();
            images[i].src='img/s'+i+".jpg";
            images[i].alt="Something went wrong";
            images[i].className="img img-responsive";
            console.log(images[i]);

        }
    }

    function image(id) {
        // $("#szubienica").html("<img class='img img-responsive' src=img/s" + id + ".jpg alt=''>");
        $("#szubienica").html(images[id]);
    }
    String.prototype.replaceAt = function (a, b) {
        return this.substr(0, a) + b + this.substr(a + 1);
    };
    var images = [];
    var litery = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];
    var haslo = "KOSZ NA ŚMIECI";
    var id = 0;
    var pomoc = naSpacje(haslo);
    wypiszHaslo(pomoc);
    wypiszLitery();
    loadImage(9);
    image(id);

    $(".litera").on("click", function () {
        $(this).off("click");
        for (i = 0; i < haslo.length; i++) {
            if (haslo.charAt(i) == $(this).text()) {
                $(this).addClass("clicked-good");
                $(this).removeClass("litera");

                pomoc = pomoc.replaceAt(i, haslo.charAt(i));
                wypiszHaslo(pomoc);
            }

        }
        if (haslo == pomoc) {
            $("#litery").html("<button id='retry' class='btn btn-lg btn-info' type='button'>Zagraj Ponownie!</button>");
            $("#litery").prepend("Gratulacje, wygrałeś</br>");
            $("#retry").on("click", function () {
                location.reload();
            });
        }
        if (!$(this).hasClass("clicked-good")) {
            $(this).removeClass("litera");
            $(this).addClass("clicked-wrong");

            id++;
            image(id);
            if (id == 9) {
                $("#litery").html("<button id='retry' class='btn btn-lg btn-info' type='button'>Spróbuj jeszcze raz!</button>");
                $("#litery").prepend("Niestety nie udało się, zostałeś powieszony</br>");

                $("#retry").on("click", function () {
                    location.reload();
                });
            }

        }
    });







})