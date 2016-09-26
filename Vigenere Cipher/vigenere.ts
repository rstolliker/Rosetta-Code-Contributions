
class Vigenere {

    key: string

    /** Create new cipher based on key */
    constructor(key: string) {
        this.key = key.toUpperCase()
    }

    /** Enrypt a given text using key */
    encrypt(plainText: string): string {
        plainText = plainText.toUpperCase()
        let result: string = ""
        for(let i = 0; i < plainText.length; ++i) {
            let char = plainText.charCodeAt(i)
            if (char >= 65 && char <= 90) {
                result += String.fromCharCode((char + this.key.charCodeAt(i % this.key.length) - 130) % 26 + 65)
            } else {
                result += char
            }
        }
        return result
    }

    /** Decrypt ciphertext based on key */
    decrypt(cipherText: string): string {
        cipherText = cipherText.toUpperCase()
        let result: string = ""
        for(let i = 0; i < cipherText.length; ++i) {
            let char = cipherText.charCodeAt(i)
            if (char >= 65 && char <= 90) {
                result += String.fromCharCode((char - this.key.charCodeAt(i % this.key.length)) % 26 + 65)
            } else {
                result += char
            }
        }
        return result
    }

}

/** Example usage */
(( )=> {
    let original: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    let vig: Vigenere = new Vigenere("vigenere")

    let encoded: string = vig.encrypt(original)

    let back: string = vig.decrypt(encoded)

    console.log(`Original: ${original}`)
    console.log(`After encryption: ${encoded}`)
    console.log(`After decryption: ${back}`)
})()