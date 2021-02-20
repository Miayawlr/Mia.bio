import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export const timeConver = (time) => {
  const str = dayjs(time).fromNow(true)
  return (
    str
      .replace('a', 1)
      .replace('an', 1)
      .replace('few', '')
      .replace('year', '年')
      .replace('years', '年')
      .replace('day', '天')
      .replace('days', '天')
      .replace('hours', '小时')
      .replace('hour', '小时')
      .replace('minutes', '分钟')
      .replace('seconds', '秒')
      .replace('minute', '分钟') + '之前'
  )
}
