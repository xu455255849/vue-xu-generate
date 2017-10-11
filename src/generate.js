/**
 * Created by xushaoping on 17/10/11.
 */

const fs = require('fs-extra')
const chalk = require('chalk')
exports.run = function(type, name) {
    switch (type) {
        case 'page':
            const pageFile = './src/page/' + name + '/' + name + '.vue'
            const styleFile = './src/page/' + name + '/' + name + '.less'
            fs.pathExists(pageFile, (err, exists) => {
                if (exists) {
                    console.log('this file has created')
                } else {
                    fs.copy('/usr/local/lib/node_modules/vue-xu-generate/src/template/page.vue', pageFile, err => {
                        if (err) return console.error(err)
                
                        console.log(pageFile + '  has created')
                    })
                    fs.copy('/usr/local/lib/node_modules/vue-xu-generate/src/template/page.less', styleFile, err => {
                        if (err) return console.error(err)
                
                        console.log(styleFile + '  has created')
                    })
                }
            })
            break;
        default:
            console.log(chalk.red(`ERROR: uncaught type , you should input like $ xu g page demo` ))
            console.log()
            console.log('  Examples:')
            console.log()
            console.log(chalk.gray('    # create a new page'))
            console.log('    $ xu g page product')
            console.log()
            console.log(chalk.gray('    # create a new component'))
            console.log('    $ xu g component  product')
            console.log()
            break;
    }
};




