
const pdf = require('pdf-poppler');
 
let file = 'sample.pdf'
 
let opts = {
    format: 'html',
    out_dir: './',
    out_prefix: 'html-',
    page: null
}
 
pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })
