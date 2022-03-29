// pega as informações sobre a reunião
function cortarConvite() {
    const convitePadrao = document.getElementById('colaConvite').value;
    let cortaLink, cortaID, cortaSenha, idioma;
    let link, id, senha;

    // corta a url
    cortaLink = convitePadrao.search('https');
    link = convitePadrao.slice(cortaLink, (cortaLink + 72));

    // identifica o idioma para cortar o ID e a senha
    idioma = convitePadrao;
    idioma = idioma.search('está convidando você');

    if (idioma != -1) { // português
        cortaID = convitePadrao.search('ID da reunião:');
        id = convitePadrao.slice((cortaID + 14), (cortaID + 28));
        cortaSenha = convitePadrao.search('Senha de acesso:');
        senha = convitePadrao.slice((cortaSenha + 16), (cortaSenha + 23));
    } else if (idioma = -1) { // inglês
        cortaID = convitePadrao.search('ID:');
        id = convitePadrao.slice((cortaID + 3), (cortaID + 17));
        cortaSenha = convitePadrao.search('Passcode:');
        senha = convitePadrao.slice((cortaSenha + 9), (cortaSenha + 16));
    }

    opcaoConvite(link, id, senha);
}

// passa as informações para o novo convite
function opcaoConvite(link, id, senha) {
    const select = document.getElementById('tipo_convite').value;

    const ver = `5.9.3`

    const recom = `Recomendações adicionais:
* Mantenha seu APP ZOOM sempre atualizado (versão atual: ${ver})
* Preferencialmente utilize Fone de Ouvido com Microfone
* Aceitem a opção: Permitir que o anfitrião ative e desative seu som
⚠️ Ao entrar na sala informe seu nome correto, isso ajudará na interação com outros irmãos e aos dirigentes e operadores no momento do seu comentário.
⚠️ Compartilhe apenas com estudantes que estão interessados em assistir a reunião e informe os Anciãos e Operadores. Não compartilhe estas informações em nenhuma rede social.`

    const num = `Números para conectar por telefone, usando mesmo ID e Senha: (11) 4632 2236 / (11) 4632 2237 / (11) 4680 6788 / (11) 4700 9668 / (21) 3958 7888`

    let convite = '';

    switch (select) {
        case '0':
            convite = ''
            break;
        case '1':
            convite = `Queridos irmãos(as), boa noite! Desejamos que todos estejam bem.

*Tópico: Reunião Nossa Vida e Ministério*
        
LINK PARA ACESSO DIRETO:
${link}
        
ou
        
ID: ${id} 
Senha: ${senha}
        
${num}

A sala estará aberta a partir das 19h30.
        
Esperamos todos em “nosso ponto de encontro” virtual!
        
Com amor cristão,
Cong. Lapa (São Paulo/SP)
        
${recom}`;
            break;
        case '2':
            convite = `Queridos irmãos(as), bom dia! Desejamos que todos estejam bem.

*Tópico: Discurso Público e Estudo de A Sentinela*
        
LINK PARA ACESSO DIRETO:
${link}
        
ou
        
ID: ${id} 
Senha: ${senha} 
        
${num} 

A sala estará aberta a partir das 09h00.
        
Esperamos todos em “nosso ponto de encontro” virtual !
        
Com amor cristão,
Cong. Lapa (São Paulo/SP)
        
${recom}`;
            break;
        case '3':
            convite = `Queridos irmãos(as), bom dia!

*Tópico: Serviço de Campo | Sábado | 9h30*
        
LINK PARA ACESSO DIRETO:
${link}
        
ou
        
ID: ${id} 
Senha: ${senha} 
        
A sala estará aberta a partir das 9h15.
        
Um bom trabalho à todos!`;
            break;
        case '4':
            convite = `Queridos irmãos(as), boa tarde!

*Tópico: Serviço de Campo | Sábado | 16h00*
        
LINK PARA ACESSO DIRETO:
${link}
        
ou
        
ID: ${id} 
Senha: ${senha} 
        
A sala estará aberta a partir das 15h30.
        
Fiquem todos à vontade para participar!`;
            break;
        case '5':
            convite = `Queridos irmãos(as), boa tarde!

*Tópico: Serviço de Campo | Domingo | 16h00*
        
LINK PARA ACESSO DIRETO:
${link}
        
ou
        
ID: ${id} 
Senha: ${senha} 
        
A sala estará aberta a partir das 15h30.
        
Fiquem todos à vontade para participar!`;
            break;
        case '6':
            convite = `Queridos irmãos(as), boa noite!

*Tópico: JW Broadcasting | Sexta-feira | 20h00*
        
LINK PARA ACESSO DIRETO:
${link}
        
ou
        
ID: ${id} 
Senha: ${senha} 
        
A sala estará aberta a partir das 19h30.

A transmissão terá aproximadamente uma hora de duração.
        
Todos estão convidados a assistir!`;
            break;
    }

    // exibe o convite na textarea
    document.getElementById('colaConvite').value = convite;

    // bloqueia a textarea 
    document.getElementById('colaConvite').readOnly = true;
}

function gerarConvite() {
    cortarConvite();
    copiar();
}
