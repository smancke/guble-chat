
import Guble from './guble'

class Store {
  constructor () {
    this.messages = []
    this.guble = new Guble('ws://127.0.0.1:8080/stream')
  }

  publish (topic, text) {
      this.guble.sendMessage(topic, text)
  }

  connect () {
    this.guble.onMessage((meta, header, body) => {
      console.log("[Store] adding message %", body)
      self.messages.push(body)
    })
    this.guble.connect('smancke')
    this.guble.onOpen(() => {
      this.guble.sendRaw('+ /foo -5')
    })
  }
}

var store = new Store()
store.connect()

export {store as default}
