import React from 'react';
import avaliacao from './assets/avaliacao.png';
import consulta from './assets/consulta.png';
import grafico from './assets/grafico.png';
import styled from 'styled-components';


interface Props {
    imagem?: string;
    children?: React.ReactNode;
}

interface IImagens{
    avaliacao: string;
    grafico: string;
    consulta: string;
}

const SpanEstilizado = styled.span<Props>`
    background-repeat: no-repeat;
    background-size: cover;
    backgroud-position: center;
    width: 25px;
    height: 25px;
    backgound-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
`

const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`

const ContainerEstilizado = styled.div`
    display: flex;
    align-items: center;
`

function Titulo({imagem, children}: Props){

    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        consulta: consulta,
        grafico: grafico
    }

    return(
        <ContainerEstilizado>
            {imagem && <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} />}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default Titulo;