import styles from "../styles/components/Footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          Development by Rocketseat at Next Level Week 4th Edition <br />
          <a href="https://rocketseat.com.br/" target="_blank">
            <strong>💜 Rocketseat</strong>
          </a>{" "}
          |{" "}
          <a href="https://github.com/davi1985" target="_blank">
            <strong>Davi Silva</strong>
          </a>
        </p>
      </footer>
    </>
  );
}
