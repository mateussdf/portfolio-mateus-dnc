import styles from './Projects.module.css'
import Card from '../../elements/Cards.jsx'
import ccxp from '../images/ccxp.svg'
import dncw from '../images/dncw.svg'
import lparq from '../images/lparq.svg'

function Projects(){
    return(
        <div id='Projects' className={styles.projects}>
        <h1>Projetos</h1>
        <Card img={lparq}
        title="Landing Page - Arquitetura"
        skills="HTML e CSS"
        description="Desenvolvimento de uma Landing Page para captação de novos clientes para um escritório de arquitetura, projetado como estudo prático no uso de HTML e CSS."
        site="https://desafiobasico-arquitetura.netlify.app/"
        repo="https://github.com/mateussdf/desafiobasico-arquitetura?tab=readme-ov-file"
        />
        <Card img={dncw}
        title="DNC Weather"
        skills="HTML, CSS e Javascript"
        description="Desenvolvimento de uma página funcional com consumo de APIs para busca de CEP e temperatura, utilizando latitude e longitude."
        site="https://weatherdncmateus.netlify.app/"
        repo="https://github.com/mateussdf/weatherdncmateus"
        />
        <Card img={ccxp}
        title="CCXP"
        skills="HTML, CSS e Javascript"
        description="Desenvolvimento de página utilizando JS para funcionamento de uma countdown, a partir de uma data."
        site="https://ccxpmateus.netlify.app/"
        repo="https://github.com/mateussdf/CCXP"
        
        />
        </div>
    )
}
export default Projects