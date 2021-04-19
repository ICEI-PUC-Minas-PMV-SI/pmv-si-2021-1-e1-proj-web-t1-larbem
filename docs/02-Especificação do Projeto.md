# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

**Marília Amorim (Potencial doadora de ações e instituições sociais)** tem 41 anos, nasceu em Recife e concluiu o Ensino Médio. Ela trabalha como microempreendedora, vendendo doces e bolos, e tem uma renda que varia de R$ 2 mil a R$ 4 mil. Como interessada em conhecer ações e instituições, ela ouviu falar sobre o LARBEM em um grupo de fiéis de sua igreja no Whastapp, rede social que usa tanto para receber pedidos quanto se conectar com amigos e familiares. Ela também usa o Facebook e o Instagram para divulgar seu trabalho, com a ajuda da filha mais velha, que é mais familiarizada com as redes sociais. Em suas horas de lazer, gosta de visitar amigos e familiares, além de assistir TV e ir para a igreja.

**Carlos Alberto Silva (Doador do LARBEM)** tem 38 anos, nasceu e se formou em Recife. Ele trabalha como professor, e através de um amigo de profissão conheceu o projeto LARBEM. Interessa-se por ações sociais, principalmente quando envolvem crianças, o que levou a se tornar doador do LARBEM. Em suas aulas Carlos Alberto incentiva os alunos, seus pais e seus colegas de profissão a conhecerem, e ajudarem neste projeto. Em suas horas de lazer gosta de visitar seus Pais, familiares e prestar ajuda à comunidade que reside.

**Laura Cardoso (Interessada em ser voluntária)** tem 29 anos, é formada em economia pela UFPE e atualmente trabalha como analista financeira em uma empresa de engenharia civil no Recife. Em seu tempo livre Laura gosta de ler, viajar e utilizar suas redes sociais, como Instagram e Facebook, para interagir com seus amigos. Por meio do uso das redes sociais Laura conheceu o LARBEM, se interessou nos trabalhos de caridades realizados e procura como contribuir com a instituição através do trabalho voluntário.

**Marcela Santos (Administradora do Site do LARBEM)** tem 23 anos e está no último período do curso de Pedagogia em uma universidade particular de Recife. Ela é a filha mais velha de três irmãos e vive com os pais no bairro de Campo Grande, na capital pernambucana. Gosta de sair com os amigos e aproveitar a orla da cidade aos fins de semana, além de assistir a filmes no cinema e na TV. Marcela trabalha como voluntária do LARBEM há cinco anos, e, por ser a voluntária mais jovem e com maior afinidade com a internet, assumiu a administração do site. Apesar disso, ela tem conhecimentos básicos sobre o funcionamento da web.

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Interessada em conhecer/doar  |Encontrar informações sobre a missão e o histórico do LARBEM          | Checar se a missão é compatível com os seus interesses e decidir se deve ou não doar               |
|Doador do LARBEM  | Conferir balanços de gastos e doar pelo site          | Acompanhar as ações realizadas e o uso do dinheiro das doações              |
|Administrador do site do Larbem      | Publicar notícias, balanços de atividades e gastos e vagas de voluntiariado no site do LARBEM                 | Manter os doadores e voluntários informados e conseguir novos apoiadores para o Larbem |
|Interessada em ser voluntária | Encontrar informações sobre como se inscrever para voluntariado no LARBEM |Tornar-se voluntária para ajudar a instituição com suas habilidades |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
