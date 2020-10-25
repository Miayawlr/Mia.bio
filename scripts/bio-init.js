const fs = require('fs-extra')
const path = require('path')
const postsPath = path.join(__dirname, '../pages/posts')
const aboveMePath = path.join(__dirname, '../pages/aboveMe')
const dataPath = path.join(__dirname, '../lib/data/metaData.json')
const chalk = require('chalk')

const delteDirInBio = async (files, parent_filePath) => {
  return Promise.all(
    files.map(async (file) => {
      const full_path_name = path.join(parent_filePath, file)
      await fs.remove(full_path_name)
    })
  )
}
!(async () => {
  const postFiles = await fs.readdir(postsPath)
  const aboveMeFiles = await fs.readdir(aboveMePath)
  const dataJson = await fs.readdir(dataPath)
  await delteDirInBio(postFiles, postsPath)
  await delteDirInBio(aboveMeFiles, aboveMePath)
  await delteDirInBio(dataJson, dataPath)
  console.log(chalk.hex('#FF1B68')('init success~ have Enjoy it'))
})()
