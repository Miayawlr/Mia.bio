const path = require('path')
const fs = require('fs-extra')
const extractMdxMeta = require('extract-mdx-metadata')

!(async () => {
  const fils = path.join(__dirname, '../pages/posts/above-uniapp.mdx')
  const files = fs.readFileSync(fils, 'utf-8')
  const meta = await extractMdxMeta(files)
  // console.log(files)
  console.log(meta)
})()
