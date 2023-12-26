import styles from "./message.module.css";
import bot from "../icons/bot.png";
import user from "../icons/user.png";

export default function Message({role , content}){
    return (
        <div className={styles.wrapper}>
            <div>
                <img 
                    src={role === "assistant" ? bot : user}
                    className={styles.avatar}
                    alt="profile avatar">
                </img>
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}