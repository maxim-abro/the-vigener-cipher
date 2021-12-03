class Encripte {
    constructor(type= false) {
        this.type = type
    }

    _alphavite = ['A' ,'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    _alignmentKey(m, k) {
        let count = 2
        let kk = k
        do {
            kk = k.repeat(count)
            count++
        } while (kk.length < m.length)
        return kk.substr(0, m.length)
    }

    encrypt(message, key) {
        let result = ''
        let keya = ''

        if (key.length < message.length) {
            keya = this._alignmentKey(message, key)
        } else {
            keya = key
        }

        const arrm = message.split('')

        for (let i = 0; i < arrm.length; i++) {
            const indexMessage = this._alphavite.indexOf(message[i])
            const indexKey = this._alphavite.indexOf(keya[i])
            const db = this._alphavite.slice(indexMessage)
            db.push(...this._alphavite)

            db.forEach((i, idx) => {
                if (idx == indexKey) {
                    result += i
                }
            })
        }
        return result
    }

    decrypt(message, key) {
        let result = ''
        let keya = ''

        if (key.length < message.length) {
            keya = this._alignmentKey(message, key)
        } else {
            keya = key
        }

        const arrm = message.split('')

        for (let i = 0; i < arrm.length; i++) {
            const indexMessage = this._alphavite.indexOf(message[i].toUpperCase())
            const indexKey = this._alphavite.indexOf(keya[i].toUpperCase())
            const nowMessage = this._alphavite[i]
            let db = this._alphavite.slice(indexKey)
            db.push(...this._alphavite)
            db = db.slice(0, this._alphavite.length)
            db.forEach((i, idx) => {
                if (i.toUpperCase() == this._alphavite[indexMessage]) {
                    result += this._alphavite[idx]
                }
            })
        }
        return result
    }
}

const crypto = new CryptoMm()

console.log(crypto.encrypt('HELLOWORLD', 'B'))
console.log(crypto.decrypt('ulldqyaoqKM', 'maxim'))