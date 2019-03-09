const fs = require('fs')
const path = require('path')

function makeMD(dirPath) {
    let files = fs.readdirSync(dirPath)
    let newDir = dirPath.replace('src', 'md')

    if (!fs.existsSync(newDir)) { fs.mkdirSync(newDir); }

    for (let i = 0; i < files.length; i++) {
        let filename = files[i]
        let filePath = path.join(dirPath, filename)

        if (fs.statSync(filePath).isFile()) {
            if (filename.indexOf('index') < 0) {
                let content = '```javascript\n' + fs.readFileSync(filePath, 'utf8') + '\n```'
                let newfile = filePath.replace('src', 'md') + '.md'
                fs.writeFileSync(newfile, content)
            }
        }
        else {
            makeMD(filePath)
        }
    }
}

function rmDir(dirPath, removeSelf = false) {
    let files = fs.readdirSync(dirPath)

    for (let i = 0; i < files.length; i++) {
        let filePath = path.join(dirPath, files[i])
        if (fs.statSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
        }
        else {
            rmDir(filePath, true)
        }
    }

    if (removeSelf) { fs.rmdirSync(dirPath) }
}

rmDir('../md')
makeMD('../src/components/')
makeMD('../src/examples/')