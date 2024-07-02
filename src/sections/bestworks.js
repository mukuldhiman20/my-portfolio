import styles from "../styles/bestworks.module.css"
import Workcards from "@/components/workcards"

export default function approch(){
    return <div className={styles.main}>
        <p>Best Works</p>
        <div className={styles.cards}>
            <Workcards
                thumbnail= "https://cdn.flabs.in/webassets/83474bd35a2837c9138f.png"
                title= "Flabs"
                type= "Internship - Flabs"
            />

            <Workcards
                thumbnail= "https://cdn.flabs.in/webassets/24d6dbe517698a1f4589.png"
                title= "Zepto - Heuristic Evaluation"
                type= "Case Study"
            />
        </div>
    </div>
}