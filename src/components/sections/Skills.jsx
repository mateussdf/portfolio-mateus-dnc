import style from './Skills.module.css'
import html from '../images/html.svg'
import css from '../images/css.svg'
import javascript from '../images/javascript.svg'
import react from '../images/react.svg'



function Skills(){
    return(
        <div id='Skills' className={style.skills}>
            <h1>Minhas Habilidades</h1>
            <div>
                <img src={html}/>
                <img src={css}/>
                <img src={javascript}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills