document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. MENÚ MÓVIL RESPONSIVE
       ========================================================================== */
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const navigationMenu = document.getElementById('navigation-menu');

    if (menuToggleBtn && navigationMenu) {
        menuToggleBtn.addEventListener('click', () => {
            navigationMenu.classList.toggle('active');
            menuToggleBtn.classList.toggle('active');
            
            // Animación del botón hamburguesa
            const bars = menuToggleBtn.querySelectorAll('.bar');
            if (navigationMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = navigationMenu.querySelectorAll('.nav-link, .nav-btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navigationMenu.classList.remove('active');
                const bars = menuToggleBtn.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }


    /* ==========================================================================
       2. DIAGNÓSTICO OPERATIVO EXPRESS (QUIZ WIZARD)
       ========================================================================== */
    let currentStep = 1;
    const totalSteps = 4;
    const slides = document.querySelectorAll('.quiz-question-slide');
    const progressBarFill = document.getElementById('quiz-progress-fill');
    const btnPrev = document.getElementById('quiz-btn-prev');
    const btnNext = document.getElementById('quiz-btn-next');
    const quizQuestionsWrapper = document.querySelector('.quiz-questions-wrapper');
    const quizResultsView = document.getElementById('quiz-results-view');
    const btnRestart = document.getElementById('quiz-btn-restart');
    
    // Cambiar de diapositiva
    function showStep(step) {
        slides.forEach(slide => slide.classList.remove('active'));
        const activeSlide = document.querySelector(`.quiz-question-slide[data-step="${step}"]`);
        if (activeSlide) {
            activeSlide.classList.add('active');
        }

        // Actualizar barra de progreso
        const progressPercent = (step / totalSteps) * 100;
        progressBarFill.style.width = `${progressPercent}%`;

        // Actualizar estado de botones
        btnPrev.disabled = step === 1;
        if (step === totalSteps) {
            btnNext.textContent = 'Finalizar Diagnóstico';
        } else {
            btnNext.textContent = 'Siguiente';
        }
    }

    // Validar si la pregunta actual tiene respuesta
    function isCurrentStepAnswered() {
        const activeSlide = document.querySelector(`.quiz-question-slide[data-step="${currentStep}"]`);
        const checkedOption = activeSlide.querySelector('input[type="radio"]:checked');
        return checkedOption !== null;
    }

    // Evento botón Siguiente
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (!isCurrentStepAnswered()) {
                alert('Por favor, selecciona una opción para continuar.');
                return;
            }

            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            } else {
                calculateResults();
            }
        });
    }

    // Evento botón Atrás
    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
            }
        });
    }

    // Reiniciar Quiz
    if (btnRestart) {
        btnRestart.addEventListener('click', () => {
            // Desmarcar todas las opciones
            document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
            
            // Mostrar preguntas
            quizResultsView.style.display = 'none';
            quizQuestionsWrapper.style.display = 'block';
            btnPrev.style.display = 'block';
            btnNext.style.display = 'block';
            progressBarFill.parentElement.style.display = 'block';
            
            currentStep = 1;
            showStep(currentStep);
        });
    }

    // Calcular Resultados y Mostrar
    function calculateResults() {
        const answers = [
            parseInt(document.querySelector('input[name="q1"]:checked').value),
            parseInt(document.querySelector('input[name="q2"]:checked').value),
            parseInt(document.querySelector('input[name="q3"]:checked').value),
            parseInt(document.querySelector('input[name="q4"]:checked').value)
        ];

        const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

        // Ocultar sección de preguntas y navegación
        quizQuestionsWrapper.style.display = 'none';
        btnPrev.style.display = 'none';
        btnNext.style.display = 'none';
        progressBarFill.parentElement.style.display = 'none';

        // Mostrar sección de resultados
        quizResultsView.style.display = 'block';

        const resultBadge = document.getElementById('result-badge-text');
        const resultTitle = document.getElementById('result-title');
        const resultDesc = document.getElementById('result-description');
        const resultRecommendation = document.getElementById('result-recommendation');
        const recBox = document.querySelector('.result-recommendation-box');

        // Resetear clases de estilo
        resultBadge.className = 'result-badge';
        recBox.className = 'result-recommendation-box';

        if (totalScore <= 6) {
            // Nivel Crítico: Requiere orden operativo básico
            resultBadge.textContent = 'Prioridad: Orden Operativo';
            resultBadge.classList.add('critical');
            resultTitle.textContent = 'Estructurar Procesos Físicos y Digitales';
            resultDesc.innerHTML = 'Tu negocio tiene servicios valiosos, pero el papeleo manual o la confirmación diaria de citas te están quitando tiempo clave. <strong>Antes de automatizar con IA, el camino correcto es ordenar la casa.</strong> Si automatizas un proceso desordenado, solo obtendrás desorden de forma más rápida.';
            resultRecommendation.textContent = 'Te recomendamos comenzar documentando de forma simple cómo entran tus clientes, cómo se almacena su información y definir una agenda digital estándar. IAenProceso puede guiarte en esta fase inicial de capacitación en gestión de procesos.';
            recBox.classList.add('critical');
        } else if (totalScore <= 9) {
            // Nivel Intermedio: Listo para Automatizaciones de Corto Plazo
            resultBadge.textContent = 'Prioridad: Automatización de Flujos';
            resultTitle.textContent = 'Conectar tus Herramientas de Trabajo';
            resultDesc.innerHTML = '¡Vas por excelente camino! Ya cuentas con herramientas digitales básicas, pero tu equipo o tú siguen perdiendo horas valiosas traspasando información a mano o enviando recordatorios uno a uno. <strong>Estás en el punto ideal para simplificar tus flujos de trabajo.</strong>';
            resultRecommendation.textContent = 'La prioridad para tu negocio es integrar tus sistemas actuales. Por ejemplo, conectar tus formularios web y agendas con WhatsApp y planillas automáticas usando Make o Zapier. Esto te ahorrará hasta 10 horas semanales de trabajo repetitivo.';
        } else {
            // Nivel Óptimo: Listo para Inteligencia Artificial y Chatbots
            resultBadge.textContent = 'Prioridad: IA & Asistentes Virtuales';
            resultBadge.classList.add('ready');
            resultTitle.textContent = 'Listo para dar el Salto Tecnológico';
            resultDesc.innerHTML = '¡Felicitaciones! Tu negocio cuenta con orden y tus procesos básicos ya están digitalizados. <strong>Estás en la posición ideal para implementar Inteligencia Artificial real</strong> y diferenciarte completamente de tu competencia.';
            resultRecommendation.textContent = 'Te recomendamos implementar un asistente virtual inteligente (chatbot) en tu WhatsApp o sitio web, conectado a ChatGPT o Voiceflow. Podrá responder dudas complejas de pacientes, validar horas de tu agenda y calificar nuevos clientes las 24 horas del día.';
            recBox.classList.add('ready');
        }
    }


    /* ==========================================================================
       3. CHATBOT DE DEMOSTRACIÓN FLOTANTE (SIMULADOR INTERACTIVO)
       ========================================================================== */
    const chatbotLauncherBtn = document.getElementById('chatbot-launcher-btn');
    const chatbotWindowPanel = document.getElementById('chatbot-window-panel');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotMessageList = document.getElementById('chatbot-message-list');
    const chatbotOptionsContainer = document.getElementById('chatbot-options-container');

    // Abrir/Cerrar Chatbot
    if (chatbotLauncherBtn && chatbotWindowPanel) {
        chatbotLauncherBtn.addEventListener('click', () => {
            chatbotWindowPanel.classList.toggle('active');
        });
    }

    if (chatbotCloseBtn && chatbotWindowPanel) {
        chatbotCloseBtn.addEventListener('click', () => {
            chatbotWindowPanel.classList.remove('active');
        });
    }

    // Agregar mensaje al cuerpo del chat
    function appendChatMessage(text, sender = 'bot') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatbotMessageList.appendChild(messageDiv);
        
        // Scroll automático al final
        chatbotMessageList.scrollTop = chatbotMessageList.scrollHeight;
    }

    // Mostrar estado de escribiendo (simulado)
    function simulateBotResponse(text, delay = 1000, options = null) {
        // Deshabilitar botones de opción temporalmente
        const buttons = chatbotOptionsContainer.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true);

        setTimeout(() => {
            appendChatMessage(text, 'bot');
            
            // Restaurar/actualizar opciones
            if (options) {
                renderChatOptions(options);
            } else {
                buttons.forEach(btn => btn.disabled = false);
            }
        }, delay);
    }

    // Renderizar nuevas opciones del chat
    function renderChatOptions(optionsList) {
        chatbotOptionsContainer.innerHTML = '';
        optionsList.forEach(opt => {
            const btn = document.createElement('button');
            btn.classList.add('chat-opt-btn');
            btn.textContent = opt.text;
            btn.addEventListener('click', () => {
                handleOptionClick(opt.text, opt.action);
            });
            chatbotOptionsContainer.appendChild(btn);
        });
    }

    // Manejar clics de opción en el chatbot
    function handleOptionClick(text, action) {
        // 1. Mostrar mensaje del usuario
        appendChatMessage(text, 'user');
        
        // 2. Evaluar acción
        switch (action) {
            case 'agenda':
                simulateBotResponse('¡Excelente! Vamos a simular que un cliente quiere agendar una cita en tu consulta un domingo por la noche.', 800);
                setTimeout(() => {
                    appendChatMessage('🤖 Bot de Ejemplo:<br>"¡Hola! Soy el asistente virtual de la clínica. Veo que deseas agendar una evaluación estética. Tengo disponibles las siguientes horas para mañana lunes:<br>• 10:00 AM<br>• 4:30 PM<br>¿Cuál prefieres?"', 'bot');
                    renderChatOptions([
                        { text: 'Elegir 10:00 AM', action: 'agenda_hora_1' },
                        { text: 'Elegir 4:30 PM', action: 'agenda_hora_2' }
                    ]);
                }, 1600);
                break;
                
            case 'agenda_hora_1':
            case 'agenda_hora_2':
                const horaText = action === 'agenda_hora_1' ? '10:00 AM' : '4:30 PM';
                simulateBotResponse(`¡Excelente elección! La hora del lunes a las ${horaText} ha sido pre-agendada automáticamente en el sistema.`, 800);
                setTimeout(() => {
                    appendChatMessage('💡 <strong>Explicación de IAenProceso:</strong><br>¿Viste lo sencillo que fue? El cliente agendó solo, fuera de tu horario laboral, y la cita ya está guardada en tu Google Calendar sin que tú ni tu asistente hayan movido un dedo.', 'bot');
                    renderChatOptions([
                        { text: 'Probar dudas frecuentes', action: 'dudas' },
                        { text: 'Volver al inicio', action: 'reset_chat' }
                    ]);
                }, 1800);
                break;

            case 'dudas':
                simulateBotResponse('Perfecto. Un asistente inteligente puede responder dudas repetitivas que quitan tiempo a tu secretaria.', 800);
                setTimeout(() => {
                    appendChatMessage('🤖 Bot de Ejemplo:<br>"¿Dónde estamos ubicados? Nuestra oficina se encuentra en Providencia, cerca del Metro Los Leones. Contamos con estacionamiento de clientes gratuito en el subterráneo."', 'bot');
                    setTimeout(() => {
                        appendChatMessage('💡 <strong>Explicación de IAenProceso:</strong><br>El bot puede responder dudas sobre precios de evaluación, coberturas, preparación para tratamientos o direcciones las 24 horas.', 'bot');
                        renderChatOptions([
                            { text: '¿Cómo funciona en WhatsApp?', action: 'contacto' },
                            { text: 'Volver al inicio', action: 'reset_chat' }
                        ]);
                    }, 1200);
                }, 1600);
                break;

            case 'contacto':
                simulateBotResponse('Es más sencillo de lo que parece. Conectamos tu número de WhatsApp comercial actual a una plataforma inteligente.', 800);
                setTimeout(() => {
                    appendChatMessage('Los mensajes de tus clientes pasan primero por el asistente virtual. Si el bot detecta una consulta compleja o el cliente pide hablar con un humano, el sistema te notifica a ti o a tu asistente de inmediato.', 'bot');
                    setTimeout(() => {
                        appendChatMessage('Así mantienes la eficiencia de la tecnología sin perder la calidez y cercanía humana en casos importantes.', 'bot');
                        renderChatOptions([
                            { text: 'Me interesa conversar con Patricio', action: 'hablar_patricio' },
                            { text: 'Volver al inicio', action: 'reset_chat' }
                        ]);
                    }, 1400);
                }, 1800);
                break;

            case 'hablar_patricio':
                simulateBotResponse('¡Será un placer conversar! Puedes agendar directamente en el formulario de la página de contacto o escribiendo a ferrer.patricio@gmail.com.', 800);
                setTimeout(() => {
                    appendChatMessage('También puedes llamarlo o enviarle un WhatsApp al <strong>+56 9 9002 5264</strong> para coordinar una reunión corta de 15 minutos en Providencia o por videollamada.', 'bot');
                    renderChatOptions([
                        { text: 'Volver al inicio', action: 'reset_chat' }
                    ]);
                }, 1600);
                break;

            case 'reset_chat':
                chatbotMessageList.innerHTML = '';
                appendChatMessage('¡Hola! Soy un asistente virtual inteligente similar al que podemos configurar para tu consulta o negocio.', 'bot');
                appendChatMessage('Imagina que soy el recepcionista de tu consulta o el asistente de tu estudio. ¿Qué te gustaría que simulemos hoy?', 'bot');
                renderChatOptions([
                    { text: 'Simular agendamiento de cita', action: 'agenda' },
                    { text: 'Ver respuestas a dudas frecuentes', action: 'dudas' },
                    { text: 'Saber cómo se conecta a WhatsApp', action: 'contacto' }
                ]);
                break;
        }
    }

    // Inicializar los listeners de la primera tanda de opciones del chat
    const initialButtons = chatbotOptionsContainer.querySelectorAll('.chat-opt-btn');
    initialButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            handleOptionClick(btn.textContent, action);
        });
    });


    /* ==========================================================================
       4. FORMULARIO DE CONTACTO INTERACTIVO
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const contactSuccessMsg = document.getElementById('contact-success-msg');

    if (contactForm && contactSuccessMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular carga del botón de envío
            const submitBtn = document.getElementById('form-submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            setTimeout(() => {
                // Simulación exitosa
                contactForm.style.display = 'none';
                contactSuccessMsg.style.display = 'block';
                
                // Mostrar datos en consola para validación y testing
                const formData = new FormData(contactForm);
                console.log('Contacto Recibido:', {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    business: formData.get('business'),
                    message: formData.get('message')
                });
            }, 1200);
        });
    }

});
