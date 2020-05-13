function notify(message, severity) {
  return {
    type: 'NOTIFY',
    message,
    severity
  }
}

export { notify };
