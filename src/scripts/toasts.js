export function toasts(message, color) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
      background: color,
    },
  }).showToast();
}
