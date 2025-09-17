        // Función para scroll suave y animaciones
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        }

        // Funciones para modales
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Cerrar modal al hacer clic fuera
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }

        // Cerrar modal con Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
                document.body.style.overflow = 'auto';
            }
        });

        // Efecto parallax suave en header
        // window.addEventListener('scroll', () => {
        //     const scrolled = window.pageYOffset;
        //     const header = document.querySelector('header');
        //     if (header) {
        //         header.style.transform = `translateY(${scrolled * 0.5}px)`;
        //     }
        // });

        // Animación de escritura para el título
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            element.style.opacity = '1';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Efecto hover mejorado para las cards
        function initCardEffects() {
            document.querySelectorAll('.project-card, .repo-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Inicializar todo cuando cargue la página
        document.addEventListener('DOMContentLoaded', function() {
            initScrollAnimations();
            initCardEffects();
            
            // Scroll suave para navegación interna
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Scroll to top al cargar
            window.scrollTo(0, 0);
        });

        // Preloader simple para mejorar la experiencia
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });