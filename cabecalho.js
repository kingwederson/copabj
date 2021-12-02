
function cabi(){
    var cabecalho = window.document.getElementById('cabecalho')
    var htmlcab = `
    <nav class="main" id="cabecalhoinfo">
        <a href="http://copabj.wederson.net.br/">
            <img src="img/copabj4.png" class="logo">
            <nav class="titulo"><span id="hie1"></span><br><span id="hie2"></span></nav>
        </a>
        <nav id="menu">
            <ul class="menu">
                <a href="http://copabj.wederson.net.br/ft/"><li>Futebol</li></a>
                <a href="http://copabj.wederson.net.br/fs/"><li>Futsal</li></a>
                <a href="http://copabj.wederson.net.br/fv/"><li>Futevôlei</li></a>
                <a href="http://copabj.wederson.net.br/ma/"><li>Malha</li></a>
                <a href="http://copabj.wederson.net.br/vl/"><li>Voleibol</li></a>
                <a href="http://copabj.wederson.net.br/vp/"><li>Vôlei de Praia</li></a>
                <a href="http://copabj.wederson.net.br/xz/"><li>Xadrez</li></a>
            </ul>
        </nav>
    </nav>
    `;
   cabecalho.innerHTML = htmlcab
}
cabi()