const SEND_MESSAGE = 'social-network/dialogs/SEND_MESSAGE'


const initialState = {
  messages: [
    { id: 1, message: 'Привет, хорошо', myMessage: false },
    { id: 2, message: 'Привет, как дела?', myMessage: true },
    { id: 3, message: 'Чем занимаешься?', myMessage: false },
    { id: 4, message: 'Ура!', myMessage: true },
    { id: 5, message: 'Хорошо!', myMessage: false },
    { id: 6, message: 'Привет, хорошо', myMessage: false },
    { id: 7, message: 'Привет, как дела?', myMessage: true },
    { id: 8, message: 'Чем занимаешься?', myMessage: false },
    { id: 9, message: 'Ура!', myMessage: true },
    { id: 10, message: 'Хорошо!', myMessage: false },
  ],
  dialogs: [
    { id: 1, name: 'Nastya' },
    { id: 2, name: 'Vladislav' },
    { id: 3, name: 'Yana' },
    { id: 4, name: 'Ira' },
    { id: 5, name: 'Alena' },
  ],
}

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1,
        message: action.newMessage,
        myMessage: true,
      }

      return {
        ...state,
        messages: [...state.messages, newMessage],
      }

    default:
      return state
  }
}

export const sendMessage = (newMessage) => ({
  type: SEND_MESSAGE,
  newMessage,
})

export default dialogsReducer
