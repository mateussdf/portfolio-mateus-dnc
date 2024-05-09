import styles from './Card.module.css'


function Card({img, title, skills, description, site, repo}){
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img}/>
            </a>

            <a href={repo}>
            <section>
                <h3>{title}</h3>
                <h4><strong>Habilidades utilizadas:</strong> {skills}</h4>
                <p>{description}</p>
            </section>
            </a>
        </div>
    )
}

export default Card