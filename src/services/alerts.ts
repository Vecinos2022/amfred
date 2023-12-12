import Swal, { SweetAlertIcon } from 'sweetalert2'

interface ToastAlertInfo {
  title: string
  icon?: SweetAlertIcon
}

export const toastAlert = ({ title, icon = 'success' }: ToastAlertInfo) => {
  Swal.fire({
    position: 'top-end',
    title: title,
    icon: icon,
    toast: true,
    showConfirmButton: false,
    timer: 3500
  })
}

interface ConfirmationAlertProps {
  title?: string
  text?: string
  onConfirm: () => void
}

export const confirmationAlert = async ({
  title = '¿Estás seguro de eliminar?',
  text = '¡Esta acción no se podrá revertir!',
  onConfirm
}: ConfirmationAlertProps) => {
  const confirmResult = await Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Sí, eliminar'
  })

  if (confirmResult.isConfirmed) {
    onConfirm()
  }
}
