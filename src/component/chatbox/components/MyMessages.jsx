import React from 'react';
import MessagesPane from './MessagesPane';
import ChatsPane from './ChatsPane';
import { chats } from '../data';

export default function MyProfile() {
  const [selectedChat, setSelectedChat] = React.useState(chats[0]);
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr minmax(min-content, min(30%, 400px)) 1fr',
        gap: '1rem',
        maxWidth: '100%',
        margin: 'auto',
        paddingTop: 'var(--Header-height)', // Adjust this value as needed
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '52px', // Adjust this value as needed
          width: '100%',
          zIndex: 100,
          transition: 'transform 0.4s, width 0.4s',
          transform: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))',
        }}
      >
        <ChatsPane
          chats={chats}
          selectedChatId={selectedChat.id}
          setSelectedChat={setSelectedChat}
        />
      </div>
      <div style={{ flex: 1 }}>
        <MessagesPane chat={selectedChat} />
      </div>
    </div>
  );
}
