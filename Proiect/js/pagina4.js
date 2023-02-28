function telefon()
{
    document.getElementById("telefon").innerHTML="+4 021 67 9 721 - fax"
}

const adresa =
{
    strada: "Strada Republicii",
    oras: "Rosiori de Vede",
    judet: "Teleorman",
    tara: "Romania"
}

document.getElementById("adresa").innerHTML = "<br>" + "<h3>" + adresa.strada + "</h3>" + "<br>" + "<h3>" + adresa.oras + "</h3>" + "<br>" +"<h3>" + adresa.judet + "</h3>" + "<br>" +"<h3>" + adresa.tara + "</h3>" + "<br>"