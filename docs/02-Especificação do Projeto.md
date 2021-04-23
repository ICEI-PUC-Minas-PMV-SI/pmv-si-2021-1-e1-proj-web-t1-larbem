# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

**Marília Amorim (Interessada em conhecer/doar)** tem 41 anos, nasceu em Recife e concluiu o Ensino Médio. Ela trabalha como microempreendedora, vendendo doces e bolos, e tem uma renda que varia de R$ 2 mil a R$ 4 mil. Como interessada em conhecer ações e instituições, ela ouviu falar sobre o LARBEM em um grupo de fiéis de sua igreja no Whastapp, rede social que usa tanto para receber pedidos quanto se conectar com amigos e familiares. Ela também usa o Facebook e o Instagram para divulgar seu trabalho, com a ajuda da filha mais velha, que é mais familiarizada com as redes sociais. Em suas horas de lazer, gosta de visitar amigos e familiares, além de assistir TV e ir para a igreja.

**Carlos Alberto Silva (Doador do LARBEM)** tem 38 anos, nasceu e se formou em Recife. Ele trabalha como professor, e através de um amigo de profissão conheceu o projeto LARBEM. Interessa-se por ações sociais, principalmente quando envolvem crianças, o que levou a se tornar doador do LARBEM. Em suas aulas Carlos Alberto incentiva os alunos, seus pais e seus colegas de profissão a conhecerem, e ajudarem neste projeto. Em suas horas de lazer gosta de visitar seus Pais, familiares e prestar ajuda à comunidade que reside. Por ser doador do LARBEM, gostaria de acompanhar as ações realizadas e o uso do dinheiro das doações

**Laura Cardoso (Interessada em voluntariar)** tem 29 anos, é formada em economia pela UFPE e atualmente trabalha como analista financeira em uma empresa de engenharia civil no Recife. Em seu tempo livre Laura gosta de ler, viajar e utilizar suas redes sociais, como Instagram e Facebook, para interagir com seus amigos. Por meio do uso das redes sociais Laura conheceu o LARBEM e se interessou nos trabalhos de caridades realizados. Ela deseja contribuir com a instituição através do trabalho voluntário e saber quais são as necessidades do LARBEM.

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Interessada em conhecer/doar  |Encontrar informações sobre a missão e o histórico do LARBEM          | Checar se a missão é compatível com os seus interesses e decidir se deve ou não doar               |
|Doador  | Conferir balanços de gastos e doar pelo site          | Acompanhar as ações realizadas e o uso do dinheiro das doações              |
|Interessada em voluntariar | Encontrar informações sobre como se inscrever para voluntariado no LARBEM |Tornar-se voluntária para ajudar a instituição  |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-003| Atualizar quadro de vagas de voluntariado no LARBEM   | MÉDIA |
|RF-004| Atualizar dados em quadro ilustrativo de gastos do LARBEM   | BAIXA |
|RF-005| Publicar documentos digitalizados com prestação de contas do LARBEM   | ALTA |
|RF-006| Incorporar (embedar) publicações das redes sociais do LARBEM na home do site  | BAIXA |
|RF-007| Permitir o acesso direto à missão, ao histórico e a outras páginas por meio de menu, seções ou botões  | ALTA |
|RF-008| Permitir que o usuário se cadastre como voluntário | MÉDIA |
|RF-008| Consultar as necessidades do LARBEM no quesito voluntariado | ALTA |
|RF-009| Consultar quem são os atuais voluntários | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Site otimizado para celular (Mobile-First) | ALTA|
|RNF-002| Cores trabalhadas devem atender a identidade visual do LARBEM de acordo com a logomarca da instituição | ALTA |
|RNF-003| Site deve ser desenvolvido com estrutura que facilite a manutenção | ALTA |
|RNF-004| Utilização de html5 para desenvolvimento do mesmo | ALTA |
|RNF-005| Nas páginas em que houver o predomínio de informações, na forma de textos curtos ou longos, deve-se diagramar por um sistema duplo de cores (Título - Rosa e Corpo do Texto - Preto) e utilizar uma fonte de fácil leitura (Roboto - Tamanho 14 ou 16) | MÉDIA |
|RNF-006| A navegação do site deve ser otimizada para reduzir a necessidade de cliques e facilitar o acesso para quem não tem muita intimidade com sites da internet | MÉDIA |
|RNF-007| Apresentar um rodapé de página com a síntese dos links rápidos do site, as redes sociais e o endereço em conjunto com o CNPJ da instituição | ALTA |
|RNF-008| Seções ou botões devem se destacar com o movimento do cursor (hover) | BAIXA |

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
