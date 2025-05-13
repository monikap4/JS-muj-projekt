import { Header } from './Header'
import { Pose } from './Pose'
import { Intro } from './Intro'
import jogaImg from '../../img/yoga-pose.jpg'

export const Jogini = (props) => {
    return (
        <>
            <Header title="Jogíni" />
            <Intro
                heading="Vítejte mezi Jogíny"
                text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
                něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
                Postupně se seznámíte se základními principy jógy, jak přístupovat k
                sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
                svoje tělo, pocity a emoce."
            />
            <Pose img={jogaImg}/>
        </>
    )
}
