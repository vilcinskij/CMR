import styles from '../styles/Cmr.module.css';

const Cmr = () => {
    return (
        <div className={styles.mainCmrBlank}>
            <div className={styles.f01t05logof16t18}>
                <div className={styles.f01t05}>
                    <div className={styles.f01t02}>
                        <div className={styles.c01}></div>
                        <div className={styles.c02}></div>
                    </div>
                    <div className={styles.f03t05}>
                        <div className={styles.c03}></div>
                        <div className={styles.c04}></div>
                        <div className={styles.c05}></div>
                    </div>

                </div>
                <div className={styles.logof16t18}>
                    <div className={styles.logo}></div>
                    <div className={styles.c16}></div>
                    <div className={styles.c17}></div>
                    <div className={styles.c18}></div>
                </div>
            </div>
        </div>
    )
}

export default Cmr;