let websocket = null;
if (typeof window !== 'undefined') {
  websocket = new WebSocket('wss://ws.blockchain.info/inv');
  // websocket.onopen = (evt) => {
  //   console.log('websocket connected...');
  // };
  // websocket.onclose = (evt) => {
  //   console.log('websocket close...');
  // };
  // websocket.onerror = (evt) => {
  //   console.log('websocket error...');
  // };
}
export default websocket;