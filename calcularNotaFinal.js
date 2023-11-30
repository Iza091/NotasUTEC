function calcularNotaFinal() {
    const ev1 = parseFloat(document.getElementById("EV1").value);
    const ev2 = parseFloat(document.getElementById("EV2").value);
    const ev3 = parseFloat(document.getElementById("EV3").value);
    const ev4 = parseFloat(document.getElementById("EV4").value);
    const ev5 = parseFloat(document.getElementById("EV5").value);

    if (isNaN(ev1) || isNaN(ev2) || isNaN(ev3) || isNaN(ev4) || isNaN(ev5)) {
        alert("Ingrese valores numéricos válidos para todas las notas.");
        return;
    }

    const notaFinal = (ev1 + ev2 + ev3 + ev4 + ev5) * 0.2;

    document.getElementById("notaEV1").textContent = ev1.toFixed(2);
    document.getElementById("notaEV2").textContent = ev2.toFixed(2);
    document.getElementById("notaEV3").textContent = ev3.toFixed(2);
    document.getElementById("notaEV4").textContent = ev4.toFixed(2);
    document.getElementById("notaEV5").textContent = ev5.toFixed(2);
    document.getElementById("notaFinal").textContent = notaFinal.toFixed(2);

    document.getElementById("filaResultados").style.display = "table-row";
}
