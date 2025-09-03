import Appbar from "../components/appbar";
import HighlightsCarousel from "../components/HighlightsCarousel";

export default function Sobre() {
    const images = [
        { src: '/highlight1.png', alt: 'Aprender jogando' },
        { src: '/highlight2.png', alt: 'Reconhecer ameaças' },
        { src: '/highlight3.png', alt: 'Se divertir' },
      ];
    return(
        <div>
        <Appbar />
        <div className="p-10">
            <h1 className="text-center text-4xl font-mono mt-4 text-[#15fc9e]">Sobre</h1>
            <p className="text-center text-[#15fc9e] p-8">
            O CyberDefender é um jogo educativo desenvolvido como parte de um Trabalho de Conclusão de Curso em Ciência da Computação. Seu objetivo é tornar o aprendizado sobre cibersegurança mais acessível, interativo e envolvente. A proposta surgiu da necessidade de buscar alternativas aos métodos tradicionais de ensino, que muitas vezes não conseguem despertar o interesse dos estudantes em temas essenciais como proteção de dados pessoais e identificação de ameaças digitais.
            Por meio de uma abordagem gamificada, o CyberDefender combina diversão e conhecimento, permitindo que jogadores desenvolvam competências importantes para o mundo digital enquanto se divertem em partidas dinâmicas de cartas.
            </p>
            <h1 className="text-center text-4xl font-mono mt-4 text-[#15fc9e]">Objetivos do projeto</h1>
            <div className="flex w-full mt-10 px-4 items-center justify-center">
            <HighlightsCarousel images={images} />
            </div>
        </div>

        </div>
    );
}