const pdf = require('./index.js');

let file = 'sample.pdf'

let opts = {
    format: 'html',
    out_dir: './test-result',
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
