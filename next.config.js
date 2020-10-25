const paragraphs = require('rehype-join-line')
const rehypePrism = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  // 	Array of rehype plugins to manipulate the MDXHAST
  options: {
    rehypePlugins: [rehypePrism, paragraphs],
  },
})

const nextConfig = {
  target: 'serverless',
  generateEtags: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], //文件扩展
}

module.exports = withMDX(nextConfig)
