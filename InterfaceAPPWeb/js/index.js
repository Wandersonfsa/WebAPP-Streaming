//abrir video em modal
function PopupCenter(pageURL, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=650px' + w + ', height=450px' + h + ', top=100%' + ', left=' + left);
};


//abrir quadrinhos em modal
function abrirJanela(pagina, largura, altura) {
        // Definindo centro da tela
        var esquerda = (screen.width - largura)/2;
        var topo = (screen.height - altura)/2;
       
        // Abre a nova janela
        abrirJanela = window.open(pagina,'','height=' + altura + ', width=' + largura + ', top=' + topo + ', left=' + esquerda);
       }

