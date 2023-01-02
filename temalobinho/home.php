<?php
// Template Name: lista de lobinhos
?>
<?php get_header(); ?>
    <main>
        <div class="search">
            <div class="searchBar">
                <input class="searchInpt" type="text" name="Pesquisa">
                <button class="plusLobo" type="button">+ Lobo</button>
            </div>
            <div class="checkboxInfo">
                <input type="checkbox" class="checkbox-Wolfs" name="Lobos">
                <label for="Lobos">Ver lobinhos adotados</label>
              </div>
        </div>
        <!-- Tudo a partir daqui deve ser criado por API -->

        <div class="wolfsContainer">
            
            
            <div class="forAdoption">
                <div class="adoptionContainer">
                    
                <?php
                    // Define our WP Query Parameters
                    $the_query = new WP_Query(array('posts_per_page'=>4 ));
                ?>

                <?php $numero = 0 ?>

                    <?php
                            // Start our WP Query
                            while ($the_query -> have_posts()): $the_query -> the_post();
                            // Display the Post Title with Hyperlink
                    ?>

                    <?php if($numero % 2 == 0){ ?>

                    <div class="wolfAdoption">
                        <?php if(get_field('lobo_foto')): ?>
                            <img class="wolfImg" src="<?php the_field('lobo_foto'); ?>" alt="Lobo Exemplo 1">
                        <?php endif; ?>
                        <div class="wolfAdoptionInfo">
                            <div class="wolfHeader">
                                <div class="titleButtonContainer">
                                    <h4 class="wolfTitle"><?php the_field('lobo_titulo'); ?></h4>
                                    <button class="btnWolf" type="button">Adotar</button>
                                </div>
                                <p class="wolfAge">Idade: <?php the_field('lobo_idade'); ?>anos</p>
                            </div>
                            <p class="wolfTxt"><?php the_field('lobo_descricao'); ?></p>   
                        </div>
                    </div>
                    <?php }
                    else{ ?>
                    <div class="wolfAdoption">
                        <?php if(get_field('lobo_foto')): ?>
                                <img class="wolfImg" src="<?php the_field('lobo_foto'); ?>"  alt="Lobo Exemplo 2">
                            <?php endif; ?>
                        <div class="wolfAdoptionInfo">
                            <div class="wolfHeader">
                                <div class="titleButtonContainer">
                                    <h4 class="wolfTitle"><?php the_field('lobo_titulo'); ?></h4>
                                    <button class="btnWolf" type="button">Adotar</button>
                                </div>
                                <p class="wolfAge">Idade: <?php the_field('lobo_idade'); ?>anos</p>
                            </div>
                            <p class="wolfTxt"><?php the_field('lobo_descricao'); ?></p>     
                        </div>
                    </div>
                    <?php }
                    $numero++; ?>

                    <?php
        // Repeat de process and reset once it hits the limit
        endwhile;
        my_pagination();
        wp_reset_postdata();
                    ?>
                </div>
            </div>
            <!-- <div class="Adopted">
                <div class="adoptedContainer" hidden>
                    <div class="wolfAdopted">
                        <?php if(get_field('lobo_foto')): ?>
                            <img class="wolfImg" src="<?php the_field('lobo_foto'); ?>" alt="Lobo Exemplo 1">
                        <?php endif; ?>
                        <div class="wolfAdoptedInfo">
                            <div class="wolfHeader">
                                <div class="titleButtonContainer">
                                    <h4 class="wolfTitle"><?php the_field('lobo_titulo'); ?></h4>
                                    <button class="btnWolfAdopted" type="button">Adotado</button>
                                </div>
                                <p class="wolfAge">Idade: <?php the_field('lobo_idade'); ?>anos</p>
                            </div>
                            <p class="wolfTxt"><?php the_field('lobo_descricao'); ?></p>   
                        </div>
                    </div>
                    <div class="wolfAdopted">
                        <?php if(get_field('lobo_foto')): ?>
                            <img class="wolfImg" src="<?php the_field('lobo_foto'); ?>" alt="Lobo Exemplo 1">
                        <?php endif; ?>
                        <div class="wolfAdoptedInfo">
                            <div class="wolfHeader">
                                <div class="titleButtonContainer">
                                    <h4 class="wolfTitle"><?php the_field('lobo_titulo'); ?></h4>
                                    <button class="btnWolfAdopted" type="button">Adotado</button>
                                </div>
                                <p class="wolfAge">Idade: <?php the_field('lobo_idade'); ?>anos</p>
                            </div>
                            <p class="wolfTxt"><?php the_field('lobo_descricao'); ?></p>   
                        </div>
                    </div>
                </div>
            </div> -->
            
        </div>
    
        <!-- <div class="paginacao">
            <nav aria-label="Navegação de página exemplo">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Anterior">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only"></span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Próximo">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only"></span>
                    </a>
                  </li>
                </ul>
              </nav>
        </div> -->
        

    </main>
<?php get_footer(); ?>