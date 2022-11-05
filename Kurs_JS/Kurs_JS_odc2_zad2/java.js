


function wypisz2()
{
    
    var liczba = document.getElementById("pole").value;
    var liczba2 = document.getElementById("pole2").value;
    var napis = "";

    for (i=liczba; i>=liczba2; i--)
    {
    napis = napis + i + " "  
    }
    document.getElementById("wynik").innerHTML = napis;


    


}

function wypisz()
{
var liczba = document.getElementById("pole").value;
var liczba2 = document.getElementById("pole2").value;
var napis = "";


if (liczba > liczba2)
{
    wypisz2()
}

else if (liczba == liczba2)
document.getElementById("wynik").innerHTML="Liczby są sobie równe";

else if (liczba == 0)
{
    document.getElementById("wynik").innerHTML="Pierwsze pole jest puste";
}

else if (liczba < liczba2)
{
    for (i=liczba; i<=liczba2; i++)
    {
    napis = napis + i + " "  
    }
    document.getElementById("wynik").innerHTML = napis;
}

}













































































