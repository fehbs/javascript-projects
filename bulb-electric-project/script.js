let quebrada = false;
function mudaLampada(tipo) {
   
    if (!quebrada) {
        document.getElementById("luz").src = "IMG/" + tipo + ".jpg";
        if (tipo == 'lampada_quebrada') {
            quebrada = true;
        }
    }
}

