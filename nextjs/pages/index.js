import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Cmr from './cmr'
import TodayButton from '@/components/TodayButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>CMR generator</h1>
     {/* <TodayButton/> */}
      {/* <TodayButton title={item.title} /> */}
      {/* <TodayButton title={item.title} /> */}
      <Cmr />
    </div>
  )
}
