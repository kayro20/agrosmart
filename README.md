# README

Segue algumas conclusões, interpretações e observações sobre o projeto de teste para a empresa AGROSMART:

  - A página da dashboard inicial foi inteiramente refeita utilizando JS, SASS, HTML e REACT principalmente, isso permite um código mais limpo, legível, organizado e separado em componentes reutilizaveis e dinâmicos.

# Melhorias!

  - Uma melhoria visual no menu (sidebar) foi adicionada: Efeito slider e de opacidade.
  - Alguns componentes foram (re)feitos sobre componentes do bootstrap (fácil de usar e responsivo!)
  - Outra mudança foi feita na modal, para melhorar o uso mobile, utilizando componentes nativos de data e hora do bootstrap ele provê uma interface mais fácil e amigável ao usuário.

<br>

![N|Solid](https://raw.githubusercontent.com/kayro20/agrosmart/master/19894466_10214213659283774_515394885_n.jpg)
![N|Solid](https://raw.githubusercontent.com/kayro20/agrosmart/master/19874016_10214213677164221_1133201002_n.jpg)

# Sobre a nova feature
  - Como a feature foi adicionada ao dashboard principal a ideia é adicionar um componente que seja simples, claro e objetivo mas que ao mesmo tempo dê informações relevantes. Seguindo os padrões da identidade visual (tons de cores, fontes, icones, etc) foi adicionado um novo componente próprio para a Previsão do Tempo adicionado à um gráfico simples para acompanhamento horário de temperatura. A bilbioteca escolhida para o gráfico foi a Chartist.js, pois gera gráficos limpos, simples e responsivos.
  - O gráfico é uma opção "plus", está além do que foi pedido, porém por ser um componente pode ser facilmente removido caso deseje.

# Observações
  - Existe uma melhoria muito importante a ser feita no sidebar (em ambos os htmls - o reproduzido e o que me foi enviado), porém não foi possivel finaliza-la dentro do tempo previsto. A melhoria em questão é em relação ao tamanho da sidebar quando expandida (por exemplo no link de Fazendas), ela acaba ficando tão longa quanto a Dashboard e seus links se tornam inalcançáveis (isso ocorre inclusive em resoluções maiores que as mobiles). A ideia é que o sidebar pudesse ser "scrollavel" ou que a altura da Dashboard acompanhasse à da sidebar.
![N|Solid](https://raw.githubusercontent.com/kayro20/agrosmart/master/screenshot.png)
  - Todos os dados são apenas "mocks"
