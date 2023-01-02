<?php
// Template Name: adotar lobinho
?>
<?php get_header(); ?>
    <main>
        <div class="wolfToAdopt">
            <div class="wolfInfo">
                <img class="wolfToAdoptImg" src="images/loboExemplo1.png" alt="Lobo para Adotar">
                <div class="wolfInfoTxt">
                    <h2 class="wolfName">Adote o(a) NomeDoLobo</h2>
                    <p class="wolfID">ID:314159</p>
                </div>
            </div>
            <div class="personCadastro">
                <div class="personInfo">
                    <div class="personName">
                        <p class="personNameTxt">Seu nome:</p>
                        <textarea class="nameInpt"></textarea>
                    </div>
                    <div class="personAge">
                        <p class="personAgeTxt">Idade:</p>
                        <textarea class="ageInpt"></textarea>
                    </div>
                </div>
                <div class="personEmail">
                    <p class="personEmailTxt">E-mail:</p>
                    <textarea class="emailInpt"></textarea>
                </div>
                <button class="adoptWolf" type="button">Adotar</button>
            </div>
        </div>
    </main>
    <hr class="footerDivsor">
<?php get_footer(); ?>