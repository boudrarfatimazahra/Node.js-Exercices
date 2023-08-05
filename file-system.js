const fs = require('fs')

const content = 'Hello Node'

// Create "welcome.txt" with content "Hello Node"

fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    }
    else {
        console.log('File "welcome.txt" created with content:', content);
    }
})

// Develop a program that reads and console.logs data from "hello.txt". 
//However, it's important to note that this code will display an error because the "hello.txt" file does not exist.

fs.readFile('hello.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    }
    else {
        console.log('Contents of "hello.txt":' + data.toString());
    }
})