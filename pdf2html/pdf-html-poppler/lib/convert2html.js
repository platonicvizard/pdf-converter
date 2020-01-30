const path = require('path');
const {execFile} = require('child_process');


const EXEC_OPTS = require('../index').exec_options;

let popplerPath = require('../index').path;


// module.exports = function (file, out_file, page_start, page_end) {
module.exports = function (file, opts) {
    return new Promise((resolve, reject) => {
        opts.format = 'html';
//        opts.scale = opts.scale || defaultOptions.scale;
        opts.out_dir = opts.out_dir || null;
        opts.out_prefix = opts.out_prefix || path.dirname(file);
        opts.out_prefix = opts.out_prefix || path.basename(file, path.extname(file));
        opts.page = opts.page || null;

        let args = [];


        args.push(['-s']);


        if (opts.page) {
            args.push(['-f']);
            args.push([parseInt(opts.page)]);
            args.push(['-l']);
            args.push([parseInt(opts.page)]);
        }
        if (opts.scale) {
            args.push(['-scale-to']);
            args.push([parseInt(opts.scale)]);
        }
        args.push(`${file}`);
        args.push(`${path.join(opts.out_dir, opts.out_prefix)}`);

        execFile(path.join(popplerPath, 'pdftohtml'), args, EXEC_OPTS, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(stdout);
            }
        });
    });
};
