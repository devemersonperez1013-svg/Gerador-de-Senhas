export function generatedPassword(comprimento, letrasMaiusc, letrasMinusc, numeros, simbolos) {
    let chars = ''
    if (letrasMaiusc) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (letrasMinusc) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (numeros) chars += '0123456789'
    if (simbolos) chars += '!@#$%^&*()_+[]{}|;:,.<>?'
    
    // Verificando se há checkbox marcada
    if (chars === '') {
        alert("Marque uma das checkboxes primeiro")
        return ''
    }

    let password = ''
    for (let i = 0; i < comprimento; i++) {
        let index = Math.floor(Math.random() * chars.length)
        password += chars[index]
    }
    return password
}