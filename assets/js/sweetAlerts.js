const { value: accept } =  Swal.fire({
  title: 'Terminos y condiciones',
  input: 'checkbox',
  inputValue: 1,
  inputPlaceholder:
    'Acepta terminos y condiciones',
  confirmButtonText:
    'Aceptar <i class="fa fa-arrow-right"></i>',
  inputValidator: (result) => {
    return !result && 'Necesitas aceptar terminos y condiciones para continuar'
  }
})


