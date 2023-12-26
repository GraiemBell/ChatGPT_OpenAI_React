import styles from "./Input.module.css";

export default function Input({value , onChange , onClick}){
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.text}
                placeholder="Your prompt here..."
                value={value}
                onChange={onChange}></input>
            <button className={styles.btn} onClick={onClick}>Go</button>
        </div>
    )
}