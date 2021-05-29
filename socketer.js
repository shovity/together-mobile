import io from 'socket.io-client'

import config from './config'


const socket = io.connect(config.socket_url, {
    transports: ['websocket'],
    reconnectionAttempts: 15,
})
  
socket.emit('login', { username: 'react_native_app', href: '/', id: 'react_native_app' })


export default socket