
import Guble from './guble'

class Store {
  constructor () {
    this.messages = []
    let url = window.location.href.split("/")
    let domain_port = url[2].split(":")
    this.guble = new Guble(`ws://${domain_port[0]}:8080/stream`)
  }

  publish (topic, text) {
      this.guble.sendMessage(topic, text)
  }

  connect () {
    this.guble.onMessage((meta, header, body) => {
      console.log("[Store] adding message %", body)
      this.messages.push(body)
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
