const SEND_MESSAGE: string = 'social-network/dialogs/SEND_MESSAGE'


type DialogType = {
  id: number
  name: string
}

type MessagesType = {
  id: number
  message: string
  myMessage: boolean
}

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
  ] as Array<MessagesType>,
  dialogs: [
    { id: 1, name: 'Nastya' },
    { id: 2, name: 'Vladislav' },
    { id: 3, name: 'Yana' },
    { id: 4, name: 'Ira' },
    { id: 5, name: 'Alena' },
  ] as Array<DialogType>
}

export type InitialStateType = typeof initialState

function dialogsReducer(state = initialState, action: any): InitialStateType {
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

type sendMessageType = {
  type: typeof SEND_MESSAGE
  newMessage: string
}

export const sendMessage = (newMessage: string): sendMessageType => ({
  type: SEND_MESSAGE,
  newMessage,
})

export default dialogsReducer
