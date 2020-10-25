const fs = require('fs-extra')
const path = require('path')
const extractMdxdata = require('extract-mdx-metadata')
const pagePath = path.join(__dirname, '../pages')
const targetPath = path.join(__dirname, '../lib/data/metaData.json')
const getMetaData = async (files, parent_path) => {
  // return new Promise((resolve, reject) => {
  //   const filesDir = files.filter((name) => !name.includes('.'))
  //   resolve(filesDir)
  // }).then((res) => {
  //   return Promise.all(
  //     res.map(async (file) => {
  //       const filePath = path.join(pagePath, file)
  //       console.log(filePath)
  //       const isDir = fs.statSync(filePath).isDirectory()
  //       if (isDir) {
  //         const children = await fs.readdir(filePath)
  //         return Promise.all(
  //           children.map(async (file) => {
  //             const childrenMetaData = await path.join(filePath, file)
  //             const content = await fs.readFile(childrenMetaData, 'utf-8')
  //             // const meta = await extractMetadata(content)
  //             const url = childrenMetaData
  //               .replace(pagePath, '')
  //               .replace('.mdx', '')
  //             return { name: file, children: [{ url }] }
  //           })
  //         )
  //       }
  //     })
  //   )
  // })
  return Promise.all(
    files
      .filter((name) => name.endsWith('.mdx') || !name.includes('.'))
      .map(async (file) => {
        const filePath = path.join(parent_path, file)
        const isDir = fs.statSync(filePath).isDirectory()
        if (isDir) {
          const children = await fs.readdir(filePath)
          const childrenMetaData = await getMetaData(children, filePath)
          return { name: file, children: childrenMetaData }
        }
        const content = await fs.readFile(filePath, 'utf-8')
        const meta = await extractMdxdata(content)
        // console.log(meta)
        // console.log(content)
        const url = filePath.replace(pagePath, '').replace('.mdx', '')
        return { name: meta.title || file, url, meta }
      })
  )
}

const sortPosts = (data) => {
  const posts =
    (data.find((item) => item.name === 'posts') || {}).children || []
  const sorted = posts
    .map((post) => {
      if (!post.meta) {
        console.error(`[missing metadata]: ${post.url}`)
        return post
      }

      if (!post.meta.title) {
        console.error(
          `[metadata]: missing key "title" in (${post.name}) ${post.url}`
        )
        console.error('> Please make sure that each post has a [title].')
      }

      if (!post.meta.date) {
        console.error(
          `[metadata]: missing key "date" in (${post.name}) ${post.url}`
        )
        console.error(
          '> Try to run "new Date().toUTCString()" in console to get "date".'
        )
        const meta = { ...post.meta, date: new Date().toUTCString() }
        return { ...post, meta }
      }

      if (`${new Date(post.meta.date)}` === 'Invalid Date') {
        console.error(
          `[metadata]: format error "date" in (${post.name}) ${post.url}`
        )
        console.error(
          '> Try to run "new Date().toUTCString()" in console to get "date".'
        )
      }
      return post
    })
    .sort((pre, next) => +new Date(next.meta.date) - new Date(pre.meta.date))

  return data.map((v) => {
    if (v.name !== 'posts') return v
    return { ...v, children: sorted }
  })
}

!(async () => {
  try {
    // 读取文件目录
    const files = await fs.readdir(pagePath)
    const data = await getMetaData(files, pagePath)
    const sorted = sortPosts(data)
    await fs.ensureFile(targetPath)
    await fs.writeJson(targetPath, sorted)
  } catch (error) {
    console.log(error)
  }
})()
