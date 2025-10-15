import { createClient } from 'bedrock-protocol'

const client = createClient({
  host: 'vetalancraft.aternos.me', // ejemplo: vetalancraft.aternos.me
  port: 11885, // cambia si tu servidor usa otro puerto
  username: 'xirobotafk',
  offline: true
})

client.on('spawn', () => {
  console.log('✅ El bot ha entrado al mundo.')
})

client.on('disconnect', (packet) => {
  console.log('❌ Bot desconectado:', packet)
})

setInterval(() => {
  console.log('🕐 Bot sigue activo...')
}, 30000)
