import React from 'react'
import Swal from 'sweetalert2'
import MessagesBack from './MessagesBack'

export default async function Alert(icon,title) {
    let message = MessagesBack(title)
    const alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
    })

    await alert.fire({
        icon: icon,
        title: message
    })
}
