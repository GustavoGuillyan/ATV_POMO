import styles from './Selector.module.css'
import utilStyles from './utilStyles.module.css'

type Props = {
  activeSelector: string
  setActiveSelector: (selector: string) => void
  font: string
  themeColor: string
}

function Selector({
  activeSelector,
  setActiveSelector,
  font,
  themeColor,
}: Props) {
  return (
    <ul className={`${styles.selector} ${utilStyles[font]}`}>
      <li
        className={
          activeSelector === 'pomodoro'
            ? `${styles.isActive} ${utilStyles[themeColor]}`
            : ''
        }
        onClick={() => setActiveSelector('pomodoro')}
      >
        Pomodoro
      </li>
      <li
        className={
          activeSelector === 'shortBreak'
            ? `${styles.isActive} ${utilStyles[themeColor]}`
            : ''
        }
        onClick={() => setActiveSelector('shortBreak')}
      >
        Pausa Curta
      </li>
      <li
        className={
          activeSelector === 'longBreak'
            ? `${styles.isActive} ${utilStyles[themeColor]}`
            : ''
        }
        onClick={() => setActiveSelector('longBreak')}
      >
        Pausa Longa
      </li>
    </ul>
  )
}

export default Selector
