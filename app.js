$(document).ready(function(){
    $('#item-collapse').on('click', function(){
        // Alterna a classe 'rotated' somente na seta clicada
        $(this).toggleClass('img-rotate');
    });

    $('tr').click(function(){
        // Seleciona a seta filha do faq pai clicado
        $(this).find('i').toggleClass('rotated');
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.radius').fadeIn(1000);
            $('.radius').style.display = 'block'
        } else {
            $('.radius').fadeOut(1000);
        }
    });

    window.addEventListener('scroll', function() {

        const divHeader = document.getElementById('header')
    

        const fixedDiv = document.getElementById('teste');
        if (window.scrollY > 0) {
            fixedDiv.style.display = 'flex';
            divHeader.slideDown()
        } else {
            fixedDiv.style.display = 'none';
        }
    });

    window.addEventListener()
});






function verificarTamanhoDaJanela() {
    const header = document.getElementById('cabecalho');

    if (window.innerWidth < 1170) {
        header.innerHTML = `
        <nav class='navbar navbar-expand-xl navbar-light bg-warning'>
            <div class='container'>
                <!-- Logo -->
                <a class='navbar-brand' href='index.html'>
                    <img src='fotos/logo_sf.png' width='50'>
                </a>
                <!-- Botão toggler -->
                <button class='navbar-toggler' data-toggle='collapse' data-target='#nav-principal'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <!-- Links -->
                <div class='collapse navbar-collapse' id='nav-principal'>
                    <ul class='navbar-nav ml-auto mr-2'>
                        <li class='nav-item'>
                            <a class='nav-link' href='#about'>Quem somos</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#how-help'>Como Ajudar</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='voluntario.html'>Lar temporário</a>
                        </li>
                        <li class='nav-item dropdown'>
                            <a class='nav-link dropdown-toggle' href='#' id='categoriasDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                Categorias
                            </a>
                            <div class='dropdown-menu' aria-labelledby='categoriasDropdown'>
                                <a class='dropdown-item' href='#'>Adoção</a>
                                <a class='dropdown-item' href='#'>Comportamento</a>
                                <a class='dropdown-item' href='#'>Food</a>
                                <a class='dropdown-item' href='#'>Indicação</a>
                                <a class='dropdown-item' href='#'>Parceria</a>
                                <a class='dropdown-item' href='#'>Resgate</a>
                                <a class='dropdown-item' href='#'>Trabalho</a>
                            </div>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href=''>Blog</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='faq.html'>Perguntas Frequentes</a>
                        </li>
                    </ul>
                    <!-- Botão Entrar -->
                    <a href="form.html">
                        <button class="btn btn-outline-dark">
                            Seja voluntário <i class="fa-solid fa-cat"></i>
                        </button>
                    </a>
                </div>
            </div>
        </nav>`;
    } else {
        header.innerHTML = `
        <div class="container-header container-f">
            <div class=" header sticky-top">
                <nav class="" id="menu-navegacao">
                    <div class="container-f">
                        <a id="header-img" href="index.html">
                            <img class="d-none d-lg-flex align-items-center" src="./fotos/logo_sf.png" alt="">
                        </a>
                        <ul class="container-f nav d-block d-md-flex">
                            <li class=" fw-bold" >
                                <a class="nav-link " href="#about">
                                    Quem Somos
                                </a>
                                <span id="span1"></span>
                            </li>
                            <li class=" fw-bold" >
                                <a class="nav-link " href="#how-help">
                                    Como ajudar
                                </a>
                                <span id="span2"></span>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link " href="voluntario.html">
                                    Lar Temporário
                                </a>
                                <span></span>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link dropdown-toggle" href="#" id="categoriasDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categorias
                                </a>
                                <span></span>
                                <div class="dropdown-menu" aria-labelledby="categoriasDropdown">
                                    <a class="dropdown-item" href="#">Adoção</a>
                                    <a class="dropdown-item" href="#">Comportamento</a>
                                    <a class="dropdown-item" href="#">Food</a>
                                    <a class="dropdown-item" href="#">Indicação</a>
                                    <a class="dropdown-item" href="#">Parceria</a>
                                    <a class="dropdown-item" href="#">Resgate</a>
                                    <a class="dropdown-item" href="#">Trabalho</a>
                                </div>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link " href="#">
                                    Blog
                                </a>
                                <span></span>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link " href="faq.html">
                                    Perguntas Frequêntes
                                </a>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <a href="form.html">
                    <button class="fw-bold botao" id="voluntario">
                        Seja Voluntário <i class="fa-solid fa-cat"></i>
                    </button>
                </a>
            </div>
        </div>
        `
    }
}

// Adiciona o event listener para o evento de resize
window.addEventListener('resize', verificarTamanhoDaJanela);

// Chama a função uma vez para garantir que o header está correto no carregamento inicial
verificarTamanhoDaJanela();



function subir(){
    $(window).scrollTop(0);
}