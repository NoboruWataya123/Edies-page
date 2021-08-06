import { HeaderProps } from "./Header.props";
import styles from "./Head.module.css";

export default function Header({children, ...props}: HeaderProps): JSX.Element {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogo}>Edie</div>
            <div className={styles.headerBlock}>
                <ul className={styles.headerList}>
                    {items.map(item =>
                        <li className={styles.headerItem} key={Date.now()}><a href={item.href}>{item.value}</a></li>
                        )}
                </ul>
            </div>
        </div>
    )
}
