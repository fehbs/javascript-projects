let quebrada = false;
function mudaLampada(tipo) {
    if (tipo == 1) {
        arquivo = "IMG/lampada_acesa.jpg";
    }
    if (tipo == 2) {
        arquivo = "IMG/lampada_apagada.jpg";
    }
    if (tipo == 3) {
        arquivo = "IMG/lampada_quebrada.jpg";
    }
    if (!quebrada) {
        document.getElementById("luz").src = arquivo;
        if (tipo == 3) {
            quebrada = true;
        }
    }
}

