import Link from "next/link"
import styles from "./AllButton.module.css"

export default function AllButton() {
  return (
    <div className={styles.container}>
        <Link href="/cars">See All Cars</Link>
    </div>
  )
}
