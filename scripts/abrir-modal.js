//1) Mantiene referencia a la miniatura activa
let currentThumb = null;
let thumbs = [];

// 2) Actualiza el contenido del modal (imagen + metadatos)
function updateModalContent(imageEl) {
  const infoEl   = imageEl.nextElementSibling;
  document.getElementById('modalImage').src    = imageEl.src;
  document.getElementById('modalImage').alt    = imageEl.alt;
  document.getElementById('modalTitle').textContent  = infoEl.querySelector('h3').textContent;
  document.getElementById('modalAuthor').textContent = infoEl.querySelector('p').textContent;
  document.getElementById('modalYear').textContent   = infoEl.querySelectorAll('p')[1].textContent;
}


// 3) Crea el backdrop (overlay oscuro)
function createBackdrop() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop fade show';
  document.body.appendChild(backdrop);
  document.body.classList.add('modal-open');
  return backdrop;
}


// 4) Abre el modal:
function openModal(thumbEl) {
  currentThumb = thumbEl;
  updateModalContent(thumbEl);

  const modalEl = document.getElementById('galeriaModal');
  modalEl.style.display = 'block';
  modalEl.classList.add('show');

  // Elimina el backdrop anterior si existe
  if (modalEl._backdrop) {
    modalEl._backdrop.remove();
  }

  modalEl._backdrop = createBackdrop();
}

// 5) Boton para pasar a la imagen siguiente
function showNextImage() {
  if (!currentThumb) return;
  const idx = thumbs.indexOf(currentThumb);
  const nextIdx = (idx + 1) % thumbs.length;
  openModal(thumbs[nextIdx]);
}

// 6) Boton para pasar a la imagen anterior
function showPrevImage() {
  if (!currentThumb) return;
  const idx = thumbs.indexOf(currentThumb);
  const prevIdx = (idx - 1 + thumbs.length) % thumbs.length;
  openModal(thumbs[prevIdx]);
}

// 7) Inicializa todos los eventos de la galería
function initGallery() {

  // Obtiene todas las miniaturas y las guarda en un array
  thumbs = Array.from(document.querySelectorAll('.galeria-thumb'));
  
  thumbs.forEach(thumb => {
    thumb.style.cursor = 'pointer';
    thumb.addEventListener('click', () => openModal(thumb));
  });

  // botones de cerrar
  document.getElementById('modalCloseButton').addEventListener('click', closeModal);
  document.getElementById('modalCloseButtonFooter').addEventListener('click', closeModal);

  // botón eliminar
  document.getElementById('deleteImageButton').addEventListener('click', deleteImage);

  // Navegación
  document.getElementById('modalNextButton').addEventListener('click', showNextImage);
  document.getElementById('modalPrevButton').addEventListener('click', showPrevImage);
}

// 8) Arranca todo al cargar el DOM
document.addEventListener('DOMContentLoaded', initGallery);
