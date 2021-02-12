const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const prompt = require('prompt-sync')()
// 写入模块文件
const postsPath = path.join(__dirname, '../pages/posts')
console.log(postsPath)
// 模板路径
const templatePath = path.join(__dirname, 'template.mdx')

const create = async () => {
  const hasPosts = await fs.pathExists(postsPath)
  if (!hasPosts) {
    // console.log(chalk.red("Aborted. Can't found  dir 'page/posts'.\n"))
    // process.exit(1)
    console.log(
      chalk.green(
        "Cant't found dir 'page/posts'. Will be created 'page/posts'.\n"
      )
    )
    fs.mkdir(postsPath)
  }

  const tips = `> You need named the post ${chalk.blue(
    'FileName'
  )} required(True):`
  const answer = prompt(chalk.hex('#FF1B68')(tips))

  if (!answer) {
    console.log(chalk.yellow('Aborted. Noting has changed.\n'))
    process.exit(1)
  }

  if (!/^[a-zA-z0-9_-]+$/.test(answer)) {
    console.log(chalk.red('Cancelled. cant use this name.\n'))
    process.exit(1)
  }
  const filePath = path.join(postsPath, `${answer}.mdx`)

  const hasFile = await fs.pathExists(filePath)
  if (hasFile) {
    console.log(chalk.red(`Aborted. File ${answer}.mdx is  exists.\n`))
    process.exit(1)
  }

  const template = await fs.readFile(templatePath)
  const content = template
    .toString()
    .replace(/TEMPLATE_TITLE/, answer)
    .replace(/TEMPLATE_DATA/, new Date().toISOString())
  console.log(templatePath)
  await fs.writeFile(filePath, content)
  console.log(chalk.green('Successful Created! Enjoy it. \n'))
  process.exit(0)
}

create().catch((error) => console.log(error))
