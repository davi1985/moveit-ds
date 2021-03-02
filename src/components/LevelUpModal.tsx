import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const {
    level,
    closeLevelUpModal,
    currentExperience,
    challengesCompleted,
  } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div>
          <header>{level}</header>
          <strong>Congratulations</strong>
          <p>You level up</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div>

        <div className={styles.data}>
          <div>
            <div>
              <strong>Challenges</strong>
              <p>
                <span>{challengesCompleted}</span> completeds
              </p>
            </div>

            <div>
              <strong>Experience</strong>
              <p>
                <span>{currentExperience}</span> xp
              </p>
            </div>
          </div>

          <img src="/icons/logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
