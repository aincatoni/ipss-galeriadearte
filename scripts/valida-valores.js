// Validación para seleccionar automáticamente el tipo de solicitud según el texto del input correo
  document.addEventListener('DOMContentLoaded', function() {
    const correoInput = document.getElementById('correo-solicitud');
    const solicitudSelect = document.getElementById('solicitud-select');
    if (correoInput && solicitudSelect) {
      correoInput.addEventListener('input', function() {
        const valor = correoInput.value.toLowerCase();
        if (valor.includes('compra')) {
          solicitudSelect.value = 'compra';
        } else if (valor.includes('venta')) {
          solicitudSelect.value = 'venta';
        } else {
          solicitudSelect.value = '';
        }
      });
    }
  });
