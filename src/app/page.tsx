import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <iframe
        width="900"
        height="600"
        src="https://www.youtube.com/embed/I_w-RzVOHfw?autoplay=1&mute=1"
        style={{ border: 'none' }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </main>
  );
}
