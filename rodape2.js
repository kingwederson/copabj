function rodapi(){
    var rodape = window.document.getElementById('rodape')
    var htmlrodape = `
    <nav class="main" id="rodapeinfo">
        <h1>Realização</h1>
        <img src="../img/pm.png" class="logo"><img src="../img/seltur.png" class="logo">
        <p class="lista">Competição oficial promovida pela Secretaria Municipal de Esporte, Lazer e Turismo da Prefeitura Municipal de Bom Jardim de Minas.</p>
        <p class="lista">Site produzido por Wederson Geovane de Paula (wederson.g.depual@gmail.com/contato@wederson.net.br/+55 32 999-185-541).</p>
    </nav>
    `;
   rodape.innerHTML = htmlrodape
}
rodapi()