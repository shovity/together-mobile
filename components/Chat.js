import React, { useState, useCallback, useEffect } from 'react'
import { Text, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import styled from 'styled-components/native'

const Container = styled.View`
  background-color: #ffffff;
  widht: 100%;
  height: 100%;
`;

export default () => {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    console.log('use ef')
    setTimeout(() => {
      onSend([
        {
          _id: Date.now(),
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://image.dichung.vn/5fec43e72faa08001b83934d-1311543877329900473359401152218289067114456n.jpg?w=100',
          },
        },
      ])
    }, 1000)
  }, [])
  
  const onSend = useCallback((messages = []) => {
    console.log(messages)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  
  return (
      <Container>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            name: 'Sho',
            avatar: 'https://image.dichung.vn/5fec43e72faa08001b83934d-1311543877329900473359401152218289067114456n.jpg?w=100',
          }}
        />
      </Container>
      
    )
  }