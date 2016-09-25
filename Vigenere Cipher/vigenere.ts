
class Vigenere {
    constructor(public key: string) {}

    encrypt(plainText: string): string {
        plainText = plainText.toUpperCase()
        let result: string = ""
        for(let i = 0; i < plainText.length; ++i) {
            let char = plainText.charAt(i)
            if (char >= 'A' && char <= 'Z') {
                result += String.fromCharCode((char.charCodeAt(0) + this.key.charCodeAt(i % this.key.length) - 130) % 26 + 65)
            } else {
                result += char
            }
        }
        return result
    }

    decrypt(cipherText: string): string {
        cipherText = cipherText.toUpperCase()
        let result: string = ""
        for(let i = 0; i < cipherText.length; ++i) {
            let char = cipherText.charAt(i)
            if (char >= 'A' && char <= 'Z') {
                result += String.fromCharCode((char.charCodeAt(0) - this.key.charCodeAt(i % this.key.length)) % 26 + 65)
            } else {
                result += char
            }
        }
        return result
    }

    private static charNum(char: string): number {}

}

