function wypisz()
{
var liczba = document.getElementById("pole").value;
var liczba2 = document.getElementById("pole2").value;
var napis = "";


if (liczba > liczba2)
{
    document.getElementById("wynik").innerHTML="Podaj w pierwszym polu liczbę mniejszą niż w drugim";
}

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












































































