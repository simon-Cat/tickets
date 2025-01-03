import styles from "@/components/Tickets/Tickets.module.css"
import Ticket from "@/components/Tickets/Ticket/Ticket"

export default function Tickets({ tickets, classModifier = '' }) {
  return (
    <ul className={`${styles.tickets} ${classModifier}`}>
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          info={ticket}
        />
      ))}
    </ul>
  )
}