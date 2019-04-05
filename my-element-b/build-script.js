const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files =[
        './dist/my-element-b/runtime.js',
        './dist/my-element-b/polyfills.js',
        './dist/my-element-b/main.js'
    ]
    await concat(files, './dist/my-element-b.js')
})()