/* // scripts/galeria-modal.js
document.addEventListener('DOMContentLoaded', () => {
  const galeriaModalEl = document.getElementById('galeriaModal');

  galeriaModalEl.addEventListener('show.bs.modal', event => {
    // `event.relatedTarget` es la miniatura que disparó el modal
    const thumb = event.relatedTarget;
    const modalImg = galeriaModalEl.querySelector('#modalImage');
    modalImg.src = thumb.src;
    modalImg.alt = thumb.alt;
  });
});

const  */



// gallery.js

// 1) Mantiene referencia a la miniatura activa
let currentThumb = null;

/**
 * 2) Actualiza el contenido del modal (imagen + metadatos)
 *    - imageEl: <img class="galeria-thumb">
 */
function updateModalContent(imageEl) {
  const infoEl   = imageEl.nextElementSibling;
  document.getElementById('modalImage').src    = imageEl.src;
  document.getElementById('modalImage').alt    = imageEl.alt;
  document.getElementById('modalTitle').textContent  = infoEl.querySelector('h3').textContent;
  document.getElementById('modalAuthor').textContent = infoEl.querySelector('p').textContent;
  document.getElementById('modalYear').textContent   = infoEl.querySelectorAll('p')[1].textContent;
}

/**
 * 3) Crea el backdrop (overlay oscuro)
 *    Devuelve el elemento creado para poder eliminarlo luego.
 */
function createBackdrop() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop fade show';
  document.body.appendChild(backdrop);
  document.body.classList.add('modal-open');
  return backdrop;
}

/**
 * 4) Abre el modal:
 *    - actualiza contenido
 *    - muestra modal + backdrop
 */
function openModal(thumbEl) {
  currentThumb = thumbEl;
  updateModalContent(thumbEl);

  const modalEl = document.getElementById('galeriaModal');
  modalEl.style.display = 'block';
  modalEl.classList.add('show');

  // guardar backdrop para quitarlo luego
  modalEl._backdrop = createBackdrop();
}

/**
 * 5) Cierra el modal:
 *    - oculta modal
 *    - elimina backdrop
 */
function closeModal() {
  const modalEl = document.getElementById('galeriaModal');
  modalEl.style.display = 'none';
  modalEl.classList.remove('show');

  // quitar backdrop
  if (modalEl._backdrop) {
    document.body.removeChild(modalEl._backdrop);
    document.body.classList.remove('modal-open');
    modalEl._backdrop = null;
  }
}

/**
 * 6) Borra la imagen de la galería y cierra el modal
 */
function deleteImage() {
  if (!currentThumb) return;
  const colDiv = currentThumb.closest('.col-6, .col-md-3, .col-lg-3, .col-xl-3');
  if (colDiv) colDiv.remove();
  closeModal();
}

/**
 * 7) Inicializa todos los eventos de la galería
 */
function initGallery() {
  // miniaturas
  document.querySelectorAll('.galeria-thumb').forEach(thumb => {
    thumb.style.cursor = 'pointer';
    thumb.addEventListener('click', () => openModal(thumb));
  });

  // botones de cerrar
  document.getElementById('modalCloseButton').addEventListener('click', closeModal);
  document.getElementById('modalCloseButtonFooter').addEventListener('click', closeModal);

  // botón eliminar
  document.getElementById('deleteImageButton').addEventListener('click', deleteImage);
}

// 8) Arranca todo al cargar el DOM
document.addEventListener('DOMContentLoaded', initGallery);
