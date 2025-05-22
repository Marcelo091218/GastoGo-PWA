document.querySelectorAll('.tabs li').forEach(tab => {
  tab.addEventListener('click', () => {
    // 1) Desactiva todas las pestañas y secciones
    document.querySelectorAll('.tabs li').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));

    // 2) Activa la pestaña pulsada
    tab.classList.add('active');
    // 3) Muestra la sección relacionada
    const selector = tab.getAttribute('data-tab');
    document.getElementById(selector).classList.add('active');
  });
});
