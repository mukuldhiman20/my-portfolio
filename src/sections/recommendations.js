import styles from "../styles/recommendations.module.css"
import Recomcards from "@/components/recomcards"

export default function recommendations() {
    return <div className={styles.main}>
        <p>RECOMMENDATIONS</p>
        <div className={styles.cards}>
            <Recomcards
            name= "Ayush Chauhan"
            companyLogo= ""
            position="CPO, Flabs"
            content= "Lorem ipsum dolor sit amet consectetur. Sed integer imperdiet sit metus. Rhoncus semper morbi pellentesque felis tortor libero non."
            />

            <Recomcards
            name= "Ayush Chauhan"
            companyLogo= ""
            position="CPO, Flabs"
            content= "Lorem ipsum dolor sit amet consectetur. Sed integer imperdiet sit metus. Rhoncus semper morbi pellentesque felis tortor libero non."
            />
        </div>
    </div>
}