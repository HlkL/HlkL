const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### [![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=13&pause=1000&color=626DF7&background=747AFF00&width=435&lines=%E5%8A%AA%E5%8A%9B%E6%98%AF%E4%BC%9A%E4%B8%8A%E7%98%BE%E7%9A%84%EF%BC%8C%E7%89%B9%E5%88%AB%E6%98%AF%E5%B0%9D%E5%88%B0%E7%94%9C%E5%A4%B4%E4%B9%8B%E5%90%8E)](https://git.io/typing-svg)
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
---
