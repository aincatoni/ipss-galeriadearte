/**
 * 6) Borra la imagen de la galería y cierra el modal
 */
function deleteImage() {
  if (!currentThumb) return;
  const colDiv = currentThumb.closest('.col-6, .col-md-3, .col-lg-3, .col-xl-3');
  if (colDiv) colDiv.remove();
  closeModal();
}