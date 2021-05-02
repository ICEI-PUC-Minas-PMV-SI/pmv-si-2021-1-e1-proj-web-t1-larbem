# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="04-Projeto de Interface.md"> Projeto de Interface</a></span>

A arquitetura da solução proposta para o site do Larbem conta com o servidor Web Heroku para atender às requisições do navegador utilizado pelo usuário e apresentar as páginas programadas nas linguaguens HTML5, CCS e JavaScript, além de arquivos de imagens. A página contará também com posts incorportados de redes sociais e vídeos incorporados do YouTube. O site disponibizará informações sobre a instituição e as formas de ajudá-la, além de formas de contato por telefone, endereço e-mail e redes sociais do LARBEM. 

O usuário acessará a home do LARBEM por meio da URL (*ainda a definir*). Através da página principal, terá acesso a outras cinco páginas apresentadas em um menu superior e em botões distribuídos ao longo da página. Cada uma dessas páginas também poderá ser acessada diretamente informando o caminho após o host na URL. 

**- Home do Larbem**: apresentará com destaque a missão da instituição, o trabalho realizado, sua equipe e suas redes sociais, além de informações básicas como endereço e contatos no pé da página. Terá links para todas as outras páginas por meio de um menu e botões.
  - **Doe**: Terá as informações de contas bancárias e chave pix do LARBEM, além de materiais que a instituição utiliza de forma recorrente e podem ser doados;
  - **Nossa História**: Contará a história do Larbem; 
  - **Voluntariado**: Apresentará as possibilidades de atuação como voluntário do Larbem bem como o compromisso necessário para tal, além de histórias de atuais voluntários;
  - **Contato**: exibirá telefones, e-mail, endereço e redes sociais do LARBEM de forma destacada;
  - **Transparência**: exibirá balanços de gastos do Larbem, certificações, documentações e expediente completo da instituição. 

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

![Exemplo de UserFlow](img/userflow.jpg)


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
