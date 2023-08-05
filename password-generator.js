const generator = require('generate-password')

const generateAndLogPasswors = () => {
    const passwordOptions = {
        length: 12,      //Length of the password
        numbers: true,   //Include numbers 
        symbols: true,   // Include symbols
        uppercase: true, // Include uppercase letters
    }
    const password = generator.generate(passwordOptions)
    console.log('Generated Password:', password);
}
generateAndLogPasswors();