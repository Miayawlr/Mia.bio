const paragraphs = require('rehype-join-line')
const codeHighLight = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  // 	Array of rehype plugins to manipulate the MDXHAST
  options: {
    rehypePlugins: [paragraphs, codeHighLight],
  },
})

const nextConfig = {
  target: 'serverless',
  generateEtags: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], //文件扩展
}

module.exports = withMDX(nextConfig)
