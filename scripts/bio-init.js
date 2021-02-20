const fs = require('fs-extra')
const path = require('path')
const pagePath = path.resolve(__dirname, '../pages')
const pageFileRoot = path.resolve(__dirname, '../pages')
const dataPath = path.resolve(__dirname, '../lib/data')
const chalk = require('chalk')

const delDirOrFile = async (files, filePath) => {
  try {
    files.map(async (file) => {
      const _splitPath = path.join(filePath, file)
      await fs.remove(_splitPath)
    })
  } catch (error) {
    console.log(error)
  }
}

!(async () => {
  try {
    const pages = await fs.readdir(pagePath)
    const dataFile = pages.filter((file) => !file.endsWith('.jsx'))
    const dataBase = await fs.existsSync(dataPath)
    if (dataBase) return fs.remove(dataPath)
    if (dataFile.length !== 0) {
      delDirOrFile(dataFile, pageFileRoot)
    }
    console.log(chalk.hex('#FF1B68')('init the bio success~ have Enjoy it'))
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
})()
