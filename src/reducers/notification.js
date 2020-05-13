export default function notificationReducer(state = [], action) {
  switch (action.type) {
    case 'NOTIFY':
      return [...state, {
        message: action.message,
        severity: action.severity
      }]
    default:
      return state;
  }
}
