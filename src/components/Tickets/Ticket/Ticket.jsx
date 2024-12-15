import styles from "@/components/Tickets/Ticket/Ticket.module.css"
import { calculateDeclination } from "@/utils/utils"
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

const Ticket = ({ info, classModifier = "" }) => {
  return (
    <div
      className={`${styles.ticket} ${classModifier}`}
    >
      <div className={styles.leftSection}>
        <img
          className={styles.leftSectionImage}
          src='./logo_airplane.svg'
          alt="logo"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.departureInfo}>
          <div className={`${styles.infoTime} ${openSans.className}`}>{info.departure.time}</div>
          <div className={styles.infoPlace}>{info.departure.place}</div>
          <div className={styles.infoDate}>{info.departure.date}</div>
        </div>
        <div className={styles.transferNumberInfo}>
          {info.numberOfTransfers ? info.numberOfTransfers : 'Без пересадок'}
          {' '}
          {info.numberOfTransfers !== 0 && calculateDeclination(info.numberOfTransfers)}
        </div>
        <div className={styles.arrivalInfo}>
          <div className={`${styles.infoTime} ${openSans.className}`}>{info.arrival.time}</div>
          <div className={styles.infoPlace}>{info.arrival.place}</div>
          <div className={styles.infoDate}>{info.arrival.date}</div>
        </div>
      </div>
      <button className={`${styles.buyButton}`}>Купить <br/> за {info.price} ₽</button>
    </div>
  )
}

export default Ticket
