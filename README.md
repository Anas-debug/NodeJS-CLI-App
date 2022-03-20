# How to Use
Create a file called "Token.js" and enter in your Token.

in index.js comment out the <code>const Token = require('Token.js');</code> 

<code>
const Token = "Your actual Token";


module.exports = {
    Token
}
</code>

##App functionaly
Right now it only gets the projects ids but it does not iterate throught them, 
it only outputs the JSON project response as a whole.