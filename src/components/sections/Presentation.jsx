import style from '../sections/Presentation.module.css'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Bem-vindo ao meu portfolio!', 'Sou estudante de programação no curso de Tecnologia da Escola DNC e graduando em Análise e Desenvolvimento de Sistemas pela Universidade do Vale do Paraíba. Estou em busca de migração para a área de desenvolvimento. Autodidata e curioso por hobby, sempre em busca de desafios que possam me desenvolver profissional e pessoalmente e que possibilitem deixar minha marca registrada no mundo, ou por onde eu passar.'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(50)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

     const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring (0, text.length+1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
     }


    return(
        <div id='Presentation' className={style.presentation}>
            <h1>
                Olá, eu sou o Mateus<br/>
                Desenvolvedor Front-End
            </h1>
            <p>
                {text}
            </p>
            <button name='currículo'><a href='https://www.linkedin.com/in/mateus-sim%C3%B5es-878674153/'>Meu LinkedIn</a></button>
        </div>
    )
}

export default Presentation