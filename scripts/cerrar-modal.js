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