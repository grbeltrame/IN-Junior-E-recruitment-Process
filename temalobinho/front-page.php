<?php
// Template Name: pagina inicial
?>
<?php get_header(); ?>
    <main>
        <div class="pageName">
            <img class="wolfBackground" scr="<?php echo get_stylesheet_directory_uri() ?>/images/loboHeader.png">
            <div class="pgNameTxt">
                <h1 class="titlePgName"><?php the_field('titulo_pagina_inicial'); ?></h1> 
                <hr class="pgNameDivsor">
                <p class="pgNameDescription"><?php the_field('descricao_inicial'); ?></p>
            </div>
        </div>
        <div class="about">
            <h3 class="titleAbout"><?php the_field('titulo_sobre'); ?></h3>
            <p class="aboutTxt"><?php the_field('descricao_sobre'); ?></p>
        </div>
        <div class="values">
            <h3 class="valuesTitle"><?php the_field('valores_titulo_valores'); ?></h3>
            <div class="valuesEX">
                <div class="valuesOne">
                    <div class="circulo">
                        <img class="protectionImg" src="<?php echo get_stylesheet_directory_uri() ?>/images/protection.png" alt="Imagem Proteção">
                    </div>
                    <h5 class="protectionTitle"><?php the_field('valores_titulo_valor_1'); ?></h5>
                    <p class="protectionTxt"><?php the_field('valores_descricao_valor_1'); ?></p>    
                </div>
                <div class="valuesTwo">
                    <div class="circulo">
                        <img class="careImg" src="<?php echo get_stylesheet_directory_uri() ?>/images/carinho.png" alt="Imagem Carinho">
                    </div>
                
                    <h5 class="careTitle"><?php the_field('valores_titulo_valor_2'); ?></h5>
                    <p class="careTxt"><?php the_field('valores_descricao_valor_2'); ?></p>
                </div>
                <div class="valuesThree">
                    <div class="circulo">
                        <img class="compImg" src="<?php echo get_stylesheet_directory_uri() ?>/images/companheirismo.png" alt="Imagem Companheirismo">
                    </div>                 
                    <h5 class="compTitle"><?php the_field('valores_titulo_valor_3'); ?></h5>
                    <p class="compTxt"><?php the_field('valores_descricao_valor_3'); ?></p>
                </div>
                <div class="valuesFour">
                    <div class="circulo">
                        <img class="rescueImg" src="<?php echo get_stylesheet_directory_uri() ?>/images/resgate.png" alt="Imagem Resgate">
                    </div>                  
                    <h5 class="rescueTitle"><?php the_field('valores_titulo_valor_4'); ?></h5>
                    <p class="rescueTxt"><?php the_field('valores_descricao_valor_4'); ?></p>
                </div>

            </div>
        </div>
        <div class="sampleSection">
            <h3 class="sampleTitle"><?php the_field('titulo_lobo_exemplo'); ?></h3>
            <!-- Tudo comentado a partir daqui ate o final da main deve ser adquirido por API -->
            <!-- Deixei o codigo sem estar comentado para poder estilizar, depois de estilizado deixem comentado para guiar no arquivo JS -->
            <div class="samplesContainer">

                <?php
                    // Define our WP Query Parameters
                    $the_query = new WP_Query(array('posts_per_page'=>2));
                ?>

                <?php $numero = 0 ?>

                    <?php
                            // Start our WP Query
                            while ($the_query -> have_posts()): $the_query -> the_post();
                            // Display the Post Title with Hyperlink
                    ?>

                    <?php if($numero % 2 == 0){ ?>

                    <div class="wolfOne">
                        <?php if(get_field('lobo_foto')): ?>
                            <img class="wolfOneImg" src="<?php the_field('lobo_foto'); ?>" alt="Lobo Exemplo 1">
                        <?php endif; ?>
                        <div class="wolfOneInfo">
                            <h4 class="wolfOneTitle"><?php the_field('lobo_titulo'); ?></h4>
                            <p class="wolfOneAge">Idade: <?php the_field('lobo_idade'); ?> anos</p>
                            <p class="wolfOneTxt"><?php the_field('lobo_descricao'); ?></p>   
                        </div>
                    </div>
                    <?php }
                    else{ ?>
                <div class="wolfTwo">
                    <?php if(get_field('lobo_foto')): ?>
                        <img class="wolfTwoImg" src="<?php the_field('lobo_foto'); ?>" alt="Lobo Exemplo 2">
                    <?php endif; ?>
                    <div class="wolfTwoInfo">
                        <h4 class="wolfTwoTitle"><?php the_field('lobo_titulo'); ?></h4>
                        <p class="wolfTwoAge">Idade: <?php the_field('lobo_idade'); ?> anos</p>   
                        <p class="wolfTwoTxt"><?php the_field('lobo_descricao'); ?></p>
                    </div>
                </div>
                <?php }
                $numero++; ?>

                <?php
     // Repeat de process and reset once it hits the limit
     endwhile;
     wp_reset_postdata();
                ?>
            </div> 
        </div>
    </main>
<?php get_footer(); ?>