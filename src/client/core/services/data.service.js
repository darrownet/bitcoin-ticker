let websocket = null;
if (typeof window !== 'undefined') {
  websocket = new WebSocket('wss://ws.blockchain.info/inv');
}
export default websocket;