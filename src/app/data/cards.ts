export interface Card {
    id: number;
    name: string;
    type: "Ataque" | "Defesa" | "Recurso";
    effect: string;
    img: string;
  }
  
  export const cards: Card[] = [
    {
      id: 1,
      name: "Análise de logs",
      type: "Recurso",
      effect: "A análise de logs age como um diário digital, registrando cada acontecimento em um sistema. Isso permite detectar atividades suspeitas antes que causem danos e, em caso de ataque, serve como evidência para entender como a invasão ocorreu.",
      img: "/cards/Análise de logs.png",
    },
    {
      id: 2,
      name: "Antivírus",
      type: "Recurso",
      effect: "O antivírus é como um porteiro para seu computador. Ele fica na entrada do sistema, inspecionando cada arquivo que tenta entrar para garantir que não seja uma ameaça.",
      img: "/cards/Antivírus.png",
    },
    {
        id: 3,
        name: "Ataque DDoS",
        type: "Ataque",
        effect: "Um ataque DDoS é como um congestionamento de trânsito em uma única rua, mas na internet. O invasor usa vários computadores para enviar uma grande quantidade de informações a um site, sobrecarregando-o. Isso faz com que o site fique inacessível para os usuários de verdade.",
        img: "/cards/Ataque DDoS.png",
    },
    {
        id: 4,
        name: "Ataque de Malware",
        type: "Ataque",
        effect: "Malware é qualquer programa feito para prejudicar seu computador, como um vírus ou espião digital. Ele entra no seu sistema através de links e arquivos suspeitos e, uma vez instalado, pode roubar suas informações ou danificar seus arquivos.",
        img: "/cards/Ataque de Malware.png",
    },
    {
        id: 5,
        name: "Ataque de phishing",
        type: "Ataque",
        effect: "Phishing é um golpe digital onde os criminosos se passam por outra pessoa, como bancos, lojas ou até conhecidos. Eles enviam e-mails ou mensagens falsas com links que pedem seus dados pessoais, como senhas e números de cartão de crédito. Se você clicar, você pode entregar suas informações de forma voluntária, sem perceber que está sendo enganado.",
        img: "/cards/Ataque de phishing.png",
    },
    {
        id: 6,
        name: "Atualizar",
        type: "Defesa",
        effect: "Atualizações são correções e melhorias que tornam seus programas e sistemas mais seguros. Elas agem como um escudo digital que conserta falhas de segurança que criminosos poderiam explorar para invadir seu aparelho.",
        img: "/cards/Atualizar.png",
    },
    {
        id: 7,
        name: "autenticação de dois fatores",
        type: "Defesa",
        effect: "A autenticação de dois fatores é como ter uma fechadura extra em sua conta, exigindo duas chaves para abri-la. Além da sua senha (a primeira chave), você precisa de um segundo item, como um código enviado para seu celular. Isso torna muito mais difícil para um criminoso entrar na sua conta, mesmo que ele descubra sua senha.",
        img: "/cards/autentucação de dois fatores.png",
    },
    {
        id: 8,
        name: "Backup",
        type: "Defesa",
        effect: "Backup é fazer uma cópia de segurança de seus arquivos importantes, como fotos e documentos. É como ter um seguro digital, guardando essa cópia em um lugar diferente, como um pendrive ou na nuvem.",
        img: "/cards/Backup.png",
    },
    {
        id: 9,
        name: "Dia zero",
        type: "Ataque",
        effect: "Vírus de Dia Zero é um tipo de ataque que explora uma falha de segurança desconhecida até mesmo pelos criadores do software. É como um ladrão que encontra uma porta destrancada em uma casa, antes que o dono saiba que ela está lá. Por isso, a única proteção real contra ele é uma atualização de segurança feita após a descoberta do problema.",
        img: "/cards/Dia zero.png",
    },
    {
        id: 10,
        name: "Firewall",
        type: "Defesa",
        effect: "O firewall funciona como um porteiro digital para o seu computador ou rede. Ele inspeciona todo o tráfego que tenta entrar e sair, decidindo o que é seguro e o que deve ser barrado.",
        img: "/cards/Firewall.png",
    },
    {
        id: 11,
        name: "Injeção SQL",
        type: "Ataque",
        effect: "Ataque de Injeção SQL é uma técnica onde um criminoso insere um comando malicioso em um campo de um site, como uma barra de busca ou login. Esse código engana o banco de dados do site, fazendo com que ele execute ações não autorizadas.",
        img: "/cards/Injeção SQL.png",
    },
    {
        id: 12,
        name: "Overclock",
        type: "Recurso",
        effect: "Overclock é a prática de aumentar a velocidade de um componente do computador, como o processador, para que ele trabalhe mais rápido do que foi projetado. O objetivo é ganhar um desempenho extra e rodar jogos ou programas pesados no entanto, essa prática gera mais calor e pode danificar permanentemente o componente.",
        img: "/cards/Overclock.png",
    },
    {
        id: 13,
        name: "Scan de rede",
        type: "Ataque",
        effect: "Scan de rede é uma técnica usada para descobrir quais dispositivos e serviços estão ativos em uma rede de computadores. Ajudando a mapear e identificar vulnerabilidades.",
        img: "/cards/Scan de rede.png",
    },

  ];