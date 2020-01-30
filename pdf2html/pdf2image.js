const pdf = require('pdf-poppler');
 
let file = 'sample.pdf'
 
let opts = {
    format: 'jpeg',
    out_dir: './',
    out_prefix: 'image-',
    page: null
}
 
pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })
