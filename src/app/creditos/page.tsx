import Appbar from "../components/appbar";
import Link from "next/link";

export default function Creditos() {
    return (
        <main className="min-h-screen bg-[#0b0f0d] text-[#d6fff0] p-6">
            <Appbar />
          <section className="max-w-4xl mx-auto bg-black/60 p-6 rounded-2xl shadow-lg">
            <header className="mb-6">
              <h1 className="text-3xl font-bold text-[#15fc9e]">Créditos</h1>
              <p className="text-sm opacity-80 mt-1">CyberDefender — Protótipo (TCC) • Versão 0.1 • Setembro de 2025</p>
            </header>
    
            {/* Equipe */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Equipe</h2>
              <ul className="mt-3 space-y-2">
                <li><strong>Autor:</strong> VITOR HUGO DE OLIVEIRA ALMEIDA CUNHA</li>
                <li><strong>Orientador:</strong> Prof. ANTONIO PALMEIRA DE ARAÚJO NETO</li>
                <li><strong>Design/Ilustrações:</strong> Próprio autor </li>
              </ul>
            </div>
    
            {/* Ferramentas */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Ferramentas e tecnologias</h2>
              <ul className="mt-2 list-disc list-inside">
                <li>Front-End Site: Next.js, TypeScript, TailwindCSS</li>
                <li>Jogo: Apache Cordova </li>
                <li>Edição e criação das cartas: Photoshop</li>
                <li>Git / GitHub</li>
                <li>Hospedagem: Vercel </li>
              </ul>
            </div>
    
            {/* Assets */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Recursos e licenças</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><strong>Música do site:</strong> JNATHYN - Dioma [NCS Release]</li>
                <li><strong>Imagens/Ilustrações:</strong> Imagens Públicas da internet.</li>
                <li><strong>Fonte:</strong> 'Orbitron' — Google Fonts — licença OFL</li>
              </ul>
            </div>
    
            {/* Agradecimentos */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Agradecimentos</h2>
              <p className="mt-2">
                Agradeço a minha família, aos meus colegas que testaram o protótipo, e à instituição pelo apoio durante o desenvolvimento do TCC.
              </p>
            </div>
    
            {/* Contato e repositório */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Contato & Repositório</h2>
              <p className="mt-2">
                Repositório do projeto: <Link href="https://github.com/vitorh202/CyberDefender" className="text-[#15fc9e] underline">github.com/vitorh202/CyberDefender</Link>
              </p>
              <p className="mt-1">E-mail para contato: <a className="text-[#15fc9e] underline" href="mailto:vitorhugo201038@gmail.com">vitorhugo201038@gmail.com</a></p>
            </div>
    
            <footer className="mt-6 text-xs opacity-80">
              <p>Observação: consulte as licenças de cada ativo antes de reutilizar conteúdo deste projeto.</p>
            </footer>
          </section>
        </main>
      );
}