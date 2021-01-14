import React from 'react'
import cn from 'classnames'
import s from './ChatPage.module.css'
import Messages from './components/Messages/Messages'
import SendMessage from './components/SendMessage'

const ChatPage: React.FC = () => {
  const [wsChannel, setWsChannel] = React.useState<WebSocket | null>(null)

  React.useEffect(() => {
    let ws: WebSocket
    const closeHandler = () => setTimeout(createChannel, 3000)

    function createChannel() {
      ws?.removeEventListener('close', closeHandler)
      ws?.close()

      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
      ws.addEventListener('close', closeHandler)
      setWsChannel(ws)
    }
    createChannel()
    return () => {
      ws.removeEventListener('close', closeHandler)
      ws.close()
    }
  }, [])

  return (
    <div className={cn('card', s.container)}>
      <div className={s.messages_items}>
        <Messages wsChannel={wsChannel} />
        <div className={s.form_message}>
          <SendMessage wsChannel={wsChannel} />
        </div>
      </div>
    </div>
  )
}

export default ChatPage
