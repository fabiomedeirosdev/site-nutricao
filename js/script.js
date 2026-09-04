/* =====================================================
   SITE NUTRIÇÃO
   JavaScript principal
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       HEADER AO ROLAR
    ================================================= */

    const header = document.querySelector(".header");

    if (header) {

        const atualizarHeader = () => {

            if (window.scrollY > 30) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }

        };

        window.addEventListener("scroll", atualizarHeader);

        atualizarHeader();
    }


    /* =================================================
       ANIMAÇÃO DAS SEÇÕES
    ================================================= */

    const elementosAnimados = document.querySelectorAll(
        ".about-content, " +
        ".about-item, " +
        ".service-card, " +
        ".step, " +
        ".testimonial-card, " +
        ".cta, " +
        ".contact-box"
    );

    if (elementosAnimados.length > 0) {

        const observer = new IntersectionObserver(
            (elementos) => {

                elementos.forEach((elemento) => {

                    if (elemento.isIntersecting) {

                        elemento.target.classList.add("show");

                        observer.unobserve(elemento.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        elementosAnimados.forEach((elemento) => {

            elemento.classList.add("animate");

            observer.observe(elemento);

        });
    }


    /* =================================================
       LINKS INTERNOS
    ================================================= */

    const linksInternos = document.querySelectorAll(
        'a[href^="#"]'
    );

    linksInternos.forEach((link) => {

        link.addEventListener("click", (event) => {

            const destino = link.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const elemento = document.querySelector(destino);

            if (!elemento) {
                return;
            }

            event.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =================================================
       ANO AUTOMÁTICO DO COPYRIGHT
    ================================================= */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const anoAtual = new Date().getFullYear();

        copyright.textContent =
            `© ${anoAtual} • Todos os direitos reservados - Desenvolvido por Fabio Medeiros`;

    }

});