# Convites Zoom

>### Introdução

O site foi pensado e desenvolvido com o intuito de facilitar a edição da mensagem que era enviada junto com a URL de uma reunião congregacional por meio do **Zoom Meetings**. Para entregar aos participantes uma mensagem mais limpa e fácil de entender, sem perder o conteúdo necessário.

O desenvolvimento do site está em sua fase inicial, então erros são esperados e a estrutura do código pode ser alterada, assim também como seu design.

>### Descrição

O design foi baseado nos conceitos de **Usabilidade** e **Portabilidade**. Existem poucas informações na tela. Abaixo do título existe uma caixa de texto e logo em seguida os botões de ação.

**Modelo Desktop:**

![image](https://user-images.githubusercontent.com/79716932/160669365-3cd38974-e84b-4b67-9931-735f325fef00.png)

**Modelo Mobile:**

![image](https://user-images.githubusercontent.com/79716932/160660261-eebcb81e-8eb3-4a0e-ad31-52ac40afe534.png)

**_OBS_**: A exibição da página pode variar de acordo com o navegador. As simulações foram feitas no Microsoft Edge.

>### Funcionamento

Ao criar uma reunião no Zoom Meetings, um convite padrão será gerado automaticamente, te dando a opção de copiá-lo. 

1. Copie o convite padrão
2. Entre na página e cole o convite na área de texto indicada. 
3. Selecione o tipo de convite que vai ser gerado.
4. Então clique no botão "Criar Convite".

O convite personalizado será gerado na mesma caixa que o convite padrão foi colado.

Ele já é copiado automaticamente. Porém existe um botão para refazer essa ação, que também pode ser utilizado para haja algum problema.

Além disso há um botão que pode ser usado para abrir o WhatsApp, facilitando o envio do convite.

A construção do código foi feita apenas em **_HTML_** e **_CSS_**, sem o apoio de nenhum framework. Para as funções, utiliza-se a linguagem de programação **_Javascript_**. 

As funções para montar o convite são simples. Uma função para pegar os dados do convite padrão e armazená-los. Outra para usar os dados armazenados para construir o convite. A função que constrói o convite é a principal, que armazena todas as outras. Ela é chamada por meio de um atributo do botão no HTML, o `onclick`.

>## Acesso

No momento o site não está hospedado em lugar algum. Para a exibição da página, utiliza-se a hospedagem gratuita do [Netlify Drop](https://app.netlify.com/drop).

Para acessar o site **[clique aqui](https://conviteszoom.netlfy.app)** ou utilize a url: https://conviteszoom.netlify.app






