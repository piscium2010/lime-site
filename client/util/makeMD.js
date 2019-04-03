const fs = require('fs')
const path = require('path')

function makeMD(dirPath) {
    const files = fs.readdirSync(dirPath)
    const newDir = dirPath.replace('src', 'md')

    if (!fs.existsSync(newDir)) { fs.mkdirSync(newDir); }

    for (let i = 0; i < files.length; i++) {
        const filename = files[i]
        const filePath = path.join(dirPath, filename)

        if (fs.statSync(filePath).isFile()) {
            if (filename.indexOf('index') < 0) {
                const content = 'const md = `' + fs.readFileSync(filePath, 'utf8').replace(/`/g,'\\`') + '`\nexport default md\n'
                const newfile = filePath.replace('src', 'md').replace('.jsx','') + '.md.js'
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