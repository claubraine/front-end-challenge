# Desafio - Front-end Developer
Este desafio tem como objetivo te avaliar como desenvolvedor Front-end: JavaScript, HTML, CSS e lógica de programação.

## O Desafio
Queremos montar uma versão do blog da Apiki apenas para Devs, e queremos que essa seja uma solução headless, esta nova versão terá as seguintes páginas: 

- Página inicial: Listará as últimas postagens do blog com a categoria **Desenvolvimento**; 
- Interna: Exibirá o conteúdo da postagem;


## Requesitos
- Utilizar os dados da API do nosso blog: https://blog.apiki.com/wp-json/wp/v2/;

## Diferencial
- Utilizar alguma metodologia para a organização de seu CSS (BEMCSS, OOCSS, SMACSS... o que preferir :D);
- Escolha uma lib para criação de interfaces de usuário (React ou Angular); 

### Página inicial
Para montar esta página você precisará consumir do seguinte endpoint: `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`, ele já te retornará as últimas 10 postagens cadastradas, cada item do array deve representar uma card contendo:

- Imagem destacada: Você encontrará um atributo chamado `_embedded`, dentro deste atributo você encontrará o `wp:featuredmedia`;
- Título;
- Link para a postagem: O link deverá conter o atributo `slug`;

Ao final da listagem deve haver um botão nomeado **Carregar mais...**, Quando o usuário clicar neste botão você deverá fazer uma nova requisição para o mesmo endpoint informando o parâmetro `page`, este parâmetro deve receber o número da próxima página, exemplo: `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2`. Você deve estar se perguntando, "como sei se haverá uma próxima página?", isso é simples, no **Header** de resposta desta requisição virá 2 atributos necessários para essa façanha `X-WP-Total` que diz a quantidade total de postagens que essa categoria possui, e o parâmetro `X-WP-TotalPages` que te informará qual o total de páginas de postagens que essa categoria possui.

### Interna
Para montar esta página você precisará consumir do seguinte endpoint: `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=wordpress-escolha-site-pequenas-empresas`, lembre-se de substituir o `slug` dado como exemplo pelo slug definido no **Link para a postagem** da **Página inicial**, o layout deve conter os seguintes elementos:

- Imagem destacada;
- Título;
- Conteúdo;

Seja criativo, construa um layout pensando no usuário final, e sinta-se a vontade para incrementar o layout com outros atributos disponíveis no JSON retornado. 

## Critérios de avaliação

- Organização do código;
- Responsividade;
- Reaproveitamento de código;
- SEO;

## Como submeter seu projeto

1. Efetue o fork deste repositório e crie um branch com o seu nome e sobrenome. (exemplo: fulano-dasilva);
1. Após finalizar o desafio, crie um Pull Request;
1. Aguarde algum contribuidor realizar o code review;

# Início challenge

> Este Projeto foi desenvolvido em react.js

> Foi utilizado a biblioteca mdbootstrap -> https://mdbootstrap.com/docs/react/getting-started/installation/

> Versão node.js v16.13.1

> Download updated version - https://nodejs.org

> Dependências:

```bash
        "axios": "^0.24.0",
        "html-react-parser": "^1.4.5",
        "mdbreact": "4.21.1",
        "react": "^16.9.0",
        "react-dom": "^16.9.0",
        "react-router-dom": "^5.0.1",
        "react-scripts": "3.0.1"
```

> Clone o projeto:

```bash
$ git clone https://github.com/claubraine/front-end-challenge.git
```

## Instações dependenvias do projeto
> Depois de clonar o projeto, entre na pasta do mesmo, e digite:
```bash
$ yarn
```

## Executando o Projeto
> Dentro da pásta do projeto digite:
```bash
$ yarn start
```

## Codebase Structure

```bash
     public/
     |-- index.html
     |
     src/
     |-- assets/
     |    |-- img/ 
     |         |-- 404.jpg
     |         |-- logo.jpg
     | 
     |-- componentes/   
     |    |-- docsLink.js                               
     |    |-- menuLink.js                               
     |    |-- post.js                               
     |    |-- postCarousel.js                               
     |    |-- postCategorias.js                               
     |    |-- postList.js                               
     |    |-- sectionContainer.js                               
     |                           
     |-- pages/
     |    |-- HomePage.js 
     |    |-- BlogNavPage.js 
     |    |-- PostNavPage.js 
     |    |-- SobreNavPage.js 
     |    |-- SobreNavPage.js
     |
     |-- services/ 
     |    |-- wordpressApi.js 
     |                              
     |-- App.js                                  
     |-- App.test.js                                  
     |-- index.css                                  
     |-- index.js                                  
     |-- registerServiceWorker.js                                  
     |-- Routes.js                                  
     |-- style.css
     |    
     .gitignore
     package.json
     README.md
     |
     |-- ************************************************************************
```

<br />

# Layout

## Home
![alt text](https://github.com/claubraine/front-end-challenge/blob/master/files/01.png)
<br />

## Blog
![alt text](https://github.com/claubraine/front-end-challenge/blob/master/files/02.png)
<br />

## Post
![alt text](https://github.com/claubraine/front-end-challenge/blob/master/files/03.png)
<br />

## Sobre
![alt text](https://github.com/claubraine/front-end-challenge/blob/master/files/04.png)
<br />

# Entrega

> OK - Página inicial

> OK - Página Interna

> OK - Uso API  - https://blog.apiki.com/wp-json/wp/v2/

> OK - Utilização metodologias para orgazinização

> OK - Lib para criação de interfaces - React

# Não Entregue
> Botão nomeado Carregar mais
Não foi possivel fazer a entrega desta funcionalide por sua complexidade e por estar perto da entrega do projeto.

Estamos retornando os valores de X-WP-TotalPages, que pode ser utilizado para desenvolvimentos futuros
> Arquivo src/services/wordpressApi.js 
```bash
        json => ({
          totalPages: response.headers.get("x-wp-totalpages"),
          totalPosts: response.headers.get("x-wp-total"),
          allHeaders: response.headers,
          json
        })
```
> Podemos usar para Desenvolvimentos futuros as blibiotecas abaixo:
> https://www.npmjs.com/package/react-paginate
> https://reactjsexample.com/tag/pagination/

# Observações

## Utilizaçao endopoint
Em vez de utilizar o endopoint -> https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518 
</br>
Utilizamos -> https://blog.apiki.com/wp-json/wp/v2/posts?categories=518
</br>
Esta escolha se deve por não consguirmos retornar informações diferentes quando se alterava o código da categoria

## Imagem destacada
Para mostrar a imagem destacada do post especifico foi utilizado o atributo -> ['_embedded']['wp:featuredmedia'][0].source_url
<br />
Ja para mostrar a imagem destacada na lista de notícias/slide, foi utilizado o atributo -> yoast_head_json.twitter_image
<br />
Esta escolha se deve por não conseguirmos retornar informações necessarias utilizabo o endopoint
<br />
https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518  ou
<br />
https://blog.apiki.com/wp-json/wp/v2/posts?categories=518

# A mais
> Mostra as 3 ultimas postagens no formato Slides na pagina Home e Blog

> Mostra a lista das Categorias no rodopé

> Poder filtrar as notícias por Categorias, clicando em uma de suas opções da Listagem no rodapé

## Considerações finais
Gostei muito de programar este desafio, não tinha feito algo parecido, aprendi muito, e vejo que tenho muito para aprender.








