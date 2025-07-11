/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}




showMenu('nav-toggle','nav-menu')

window.sr = ScrollReveal();
sr.reveal("nav", {
  duration: 1000,
  origin: "botton",
  distance: "-100px",
  origin: "left"
});


/* Botones*/

const btn_whatsapp = document.getElementById('btn-whatsapp-open');
const btn_whatsapp_mensajes = document.getElementById('btn-whatsapp-mensajes');
const btn_whatsapp_close = document.getElementById('btn-close-whatsapp');

btn_whatsapp.addEventListener('click', () =>{
  
  btn_whatsapp.classList.remove('show')
  btn_whatsapp_mensajes.classList.add('show')
});

btn_whatsapp_close.addEventListener('click', () =>{
  btn_whatsapp.classList.add('show')
  btn_whatsapp_mensajes.classList.remove('show')
})