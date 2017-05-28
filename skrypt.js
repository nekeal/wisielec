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
        var lit="";
        var pojemnik = $('#litery');
        for (i = 0; i < 35; i++) {
            lit.append('<div class="litera">' + litery[i] + "</div>")
            if (i > 0 && (i + 1) % 7 == 0)
                pojemnik.append('<div class="row"</div>');
        }
    }

    function image(id) {
        $("#szubienica").html("<img class='img img-responsive' src=img/s" + id + ".jpg alt=''>");
    }
    String.prototype.replaceAt = function (a, b) {
        return this.substr(0, a) + b + this.substr(a + 1);
    };
    var litery = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];
    var haslo = "KOSZ NA ŚMIECI";
    var id = 0;
    var pomoc = naSpacje(haslo);
    wypiszHaslo(pomoc);
    wypiszLitery();
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
        if(haslo==pomoc)
        {
                $("#litery").html("<button id='retry' class='btn btn-lg btn-info' type='button'>Zagraj Ponownie!</button>");
                $("#litery").prepend("Gratulacje, wygrałeś</br>");
                $("#retry").on("click", function(){
                    location.reload();
                });
        }
        if (!$(this).hasClass("clicked-good")) {
            $(this).removeClass("litera");
            $(this).addClass("clicked-wrong");

            id++;
            if (id == 9) {
                $("#litery").html("<button id='retry' class='btn btn-lg btn-info' type='button'>Spróbuj jeszcze raz!</button>");
                $("#litery").prepend("Niestety nie udało się, zostałeś powieszony</br>");

                $("#retry").on("click", function(){
                    location.reload();
                });
            }
            image(id);

        }
    });







})