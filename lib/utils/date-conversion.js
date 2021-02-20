import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export const timeConver = (time) => {
  const str = dayjs(time).fromNow(true)
  console.log(str)
  return (
    str

      .replace('fews', '')
      .replace('few', '')
      .replace('years', '年')
      .replace('year', '年')
      .replace('months', '个月')
      .replace('month', '个月')
      .replace('days', '天')
      .replace('day', '天')
      .replace('hours', '小时')
      .replace('hour', '小时')
      .replace('minutes', '分钟')
      .replace('minute', '分钟')
      .replace('seconds', '秒')
      .replace('second', '秒')
      .replace('an', 1)
      .replace('a', 1) + '之前'
  )
}
