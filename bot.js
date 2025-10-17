import express from 'express';
import { createClient } from 'bedrock-protocol';

const app = express();

// Servidor web para UptimeRobot
app.get('/', (req, res) => res.send('Bot AFK activo!'));
app.listen(process.env.PORT || 3000);

// Bot de Minecraft Bedrock
const client = createClient({
  host: 'vetalancraft.aternos.me', // Cambia por tu host
  port: 11885,                      // Cambia por tu puerto
  username: 'AFKBot',
  offline: true
});

client.on('spawn', () => console.log('✅ El bot ha entrado al mundo.'));
client.on('disconnect', (packet) => console.log('❌ Bot desconectado:', packet));

setInterval(() => console.log('🕐 Bot sigue activo...'), 30000);
