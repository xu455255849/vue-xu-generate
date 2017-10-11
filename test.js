/**
 * Created by xushaoping on 17/10/11.
 */

const fs = require('fs-extra')

const name = 'xu'
const pageFile = './src/page/' + name + '/' + name + '.vue'
const styleFile = './src/page/' + name + '/' + name + '.less'
fs.pathExists(pageFile, (err, exists) => {
    if (exists) {
        console.log('this file has created')
    } else {
        fs.copy('./src/template/page.vue', pageFile, err => {
            if (err) return console.error(err)
    
            console.log(pageFile + '  has created')
        })
        fs.copy('./src/template/page.less', styleFile, err => {
            if (err) return console.error(err)
        
            console.log(styleFile + '  has created')
        })
    }
})

