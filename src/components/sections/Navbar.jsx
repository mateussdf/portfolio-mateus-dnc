import style from '../sections/Navbar.module.css'
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={style.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Footer'>Contatos</Nav.Link></li>
            </ul>
        </div>
    )
}

export default Navbar