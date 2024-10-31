import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our Website</h1>
      <p>Explore our pages:</p>

      <div className={styles.navLinks}>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/services">Our Services</Link>
      </div>
    </div>
  );
}
