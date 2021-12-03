
function cabi(){
    var cabecalho = window.document.getElementById('cabecalho')
    var htmlcab = `
    <nav class="main" id="cabecalhoinfo">
        <a href="http://copabj.wederson.net.br/">
            <img src="../img/copabj4.png" class="logo">
            <nav class="titulo"><span id="hie1"></span><br><span id="hie2"></span></nav>
        </a>
        <nav id="menu">
            <ul class="menu">
                <a href="http://copabj.wederson.net.br/futebol/"><li>Futebol<br>&nbsp;</li></a>
                <a href="http://copabj.wederson.net.br/futsalf/"><li>Futsal<br>Feminino</li></a>
                <a href="http://copabj.wederson.net.br/futsalm/"><li>Futsal<br>Masculino</li></a>
                <a href="http://copabj.wederson.net.br/futevolei/"><li>Futevôlei<br>&nbsp;</li></a>
                <a href="http://copabj.wederson.net.br/malha/"><li>Malha<br>&nbsp;</li></a>
                <a href="http://copabj.wederson.net.br/voleif/"><li>Vôlei de Praia<br>Feminino</li></a>
                <a href="http://copabj.wederson.net.br/voleim/"><li>Vôlei de Praia<br>Masculino</li></a>
                <a href="http://copabj.wederson.net.br/xadrez/"><li>Xadrez<br>&nbsp;</li></a>
            </ul>
        </nav>
    </nav>
    `;
   cabecalho.innerHTML = htmlcab
}
cabi()