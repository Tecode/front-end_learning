const fs = require('fs')
const cheerio = require('cheerio')
const dayjs = require('dayjs')

// 读取 HTML 文件
const inputFile = '/Users/haoxuan/Desktop/单板报表_本地.html'
const outputFile = '/Users/haoxuan/Desktop/单板报表_修改后.html'

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('文件读取失败:', err)
    return
  }

  const $ = cheerio.load(data)

  // 遍历所有 <td> 元素，查找 "创建时间" 列的日期
  $('td').each((index, element) => {
    const text = $(element).text().trim()

    // 识别日期格式: "YYYY-MM-DD HH:mm:ss"
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(text)) {
      const newDate = dayjs(text).add(1, 'month').format('YYYY-MM-DD HH:mm:ss')
      $(element).text(newDate) // 更新日期
    }
  })

  // 输出修改后的 HTML 文件
  fs.writeFile(outputFile, $.html(), 'utf8', err => {
    if (err) {
      console.error('文件写入失败:', err)
    } else {
      console.log('创建时间已更新，文件已保存:', outputFile)
    }
  })
})
