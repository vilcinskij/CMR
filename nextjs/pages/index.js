import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Cmr from './cmr'
import TodayButton from '@/components/grafos/TodayButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>CMR generator</h1>
      <TodayButton/>
      <Cmr/>
    </div>
  )
}