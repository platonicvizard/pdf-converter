const pdf2html = require('pdf2html')
var fs = require("fs");

pdf2html.html('sample.pdf', (err, html) => {
    if (err) {
        console.error('Conversion error: ' + err)
    } else {
        console.log(html);
        fs.writeFile("test.html",html, () => {console.log("Done")});

    }
})




