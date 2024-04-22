import Image from 'next/image'
import styles from './page.module.css'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image src="/images/logo-white.png" width={54} height={56} alt="" />
          <span>FindAFriend</span>
        </div>
        <div className={styles.content}>
          <p>Leve a felicidade para o seu lar</p>
          <div>
            <Image
              src="/images/home-pets.png"
              width={592}
              height={305}
              alt=""
            />
          </div>
        </div>
        <div className={styles.footer}>
          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
          <div className={styles.footerActions}>
            <p>Busque um amigo:</p>
            <select name="" id="">
              <option value="maceio">Maceió</option>
            </select>
            <button type="button">
              <MagnifyingGlass size={26} color="#0D3B66" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
