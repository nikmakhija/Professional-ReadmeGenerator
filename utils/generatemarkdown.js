function generate(data){
    var profile = ("https://github.com/" + data.github)
    return `
    ## github username 
    ${data.github}
    ## ${data.title}
    ## project's description 
    ${data.description}
    ## installation 
    ${data.installation}
    ## project's information 
    ${data.information}
    ## project's guidelines
     ${data.guidelines}
    ## project's test instructions
     ${data.instructions}
    ## license 
    ${data.license === "Apache" ? "Apache" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
    ## Questions
    For questions regarding this application please contact me at:
            - E-mail ${data.email}
            - github:
            [click here](${profile})
    ## contributions 
    ${data.contributions}
    `;
}
module.exports = generate