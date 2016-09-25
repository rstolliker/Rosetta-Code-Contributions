
class Vigenere {
    constructor(public key: string) {}

    encrypt(plainText: string): string {
        plainText = plainText.toUpperCase()
        let result: string = ""
        for(let i = 0; i < plainText.length; ++i) {
            let char = plainText.charAt(i)
            if (char >= 'A' && char <= 'Z') {
                result += () % 26
            }
        }
    }

    decrypt(cipherText: string): string {}

    private static charNum(char: string): number {}

}