<?php
// Template Name: adicionar lobinho
?>
<?php get_header(); ?>
    <main>
        <div class="containerCadastro">
            <div class="boxCadastro">
                <h3 class="cadastroTitle">Coloque um Lobinho para Adoção</h3>
                <div class="cadastroSection">
                    
                    <div class="cadastroSectionOne">
                        <div class="wolfName">
                            <p class="loboNome">Nome do Lobinho:</p>
                            <input class="nomeInpt" type="text" name="Nome Lobo">
                        </div>
                        <div class="wolfAge">
                            <p class="loboIdade">Anos:</p>
                            <input class="idadeInpt" type="text" name="Idade Lobo">
    
                        </div>
                    </div>
                    <div class="cadastroSectionTwo">
                        <div class="wolfPhoto">
                            <p class="loboFoto">Link da Foto:</p>
                            <input class="linkInpt" type="text" name="Link Foto">
                        </div>
                    </div>
                    <div class="cadastroSectionThree">
                        <div class="wolfAbout">
                            <p class="loboSobre">Descrição:</p>
                            <textarea class="loboSobreArea"></textarea>
                        </div>
                    </div>
                    <button class="sendCadastro" type="button">Salvar</button>
                </div>
            </div>
        </div>
    </main>
<?php get_footer(); ?>