// INFO BEAUTY — conteúdo e comportamento reunidos em um único JavaScript.
const PAGINAS = {"index": "<section class=\"home-hero\">\n <div class=\"home-inner\">\n  <div class=\"home-copy\">\n   <p class=\"script\">escolha sua beleza</p>\n   <h1><span>INFO</span><br>BEAUTY</h1>\n   <p class=\"home-lead\">Beleza descomplicada, do seu jeito.</p>\n   <p class=\"home-sub\">Inspiração, produtos acessíveis e tutoriais para a sua rotina.</p>\n   <div class=\"home-actions\">\n    <a class=\"btn fill\" href=\"?page=produtos\">Explorar produtos <svg viewBox=\"0 0 24 24\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg></a>\n    <a class=\"btn line\" href=\"?page=tutoriais\">Ver tutoriais</a>\n   </div>\n   <a class=\"home-about\" href=\"?page=feedback\"> <span>♡</span> Um espaço feito para você</a>\n  </div>\n  <div class=\"home-art\" aria-label=\"Ilustração delicada de maquiagem\">\n   <div class=\"art-circle\"></div>\n   <div class=\"art-card art-card-one\"><span class=\"art-lipstick\"></span></div>\n   <div class=\"art-card art-card-two\"><span class=\"art-compact\"></span></div>\n   <div class=\"art-caption\"><span>BELEZA</span><b>em cada detalhe</b></div>\n  </div>\n </div>\n</section>", "produtos": "<div class=\"ph-p pagehead\"><div class=\"wrap\">\n  <a class=\"back\" href=\"?page=inicio\"><svg viewBox=\"0 0 24 24\"><path d=\"M19 12H5M11 6l-6 6 6 6\"/></svg> Voltar para o início</a>\n  <p class=\"script\">escolha seus favoritos</p><h1>PRODUTOS</h1>\n  <p>17 cosméticos de marcas conhecidas. Consulte preços e avaliações de compradores quando houver fontes verificadas para o produto exato.</p>\n </div></div>\n <div class=\"wrap\">\n  <label class=\"search\"><svg viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-4-4\"/></svg><input id=\"qP\" placeholder=\"Busque por produto ou marca\"></label>\n  <div class=\"chips\" id=\"chipsP\"></div>\n  <p class=\"count\"><b id=\"cntP\">0</b> produtos encontrados</p>\n  <div class=\"sort\">Ordenar por <select id=\"sortP\" aria-label=\"Ordenar por\"><option value=\"top\">Mais indicados</option><option value=\"asc\">Menor preço</option><option value=\"desc\">Maior preço</option></select> Preço <select id=\"maxP\" aria-label=\"Preço máximo\"><option value=\"0\">Todos</option><option value=\"20\">Até R$ 20</option><option value=\"30\">Até R$ 30</option><option value=\"50\">Até R$ 50</option></select></div>\n  <p class=\"note\">Preços médios aproximados, pesquisados em sites de beleza e lojas (2025–2026). Eles variam por loja e promoção: confira o valor antes de comprar. O botão “Ver produto” abre uma busca de compra pelo nome do produto.</p>\n  <div class=\"grid c\" id=\"listP\" style=\"padding-bottom:80px\"></div>\n </div>", "tutoriais": "<div class=\"ph-t pagehead\"><div class=\"wrap\">\n  <a class=\"back\" href=\"?page=inicio\"><svg viewBox=\"0 0 24 24\"><path d=\"M19 12H5M11 6l-6 6 6 6\"/></svg> Voltar para o início</a>\n  <p class=\"script\">sua melhor versão</p><h1>TUTORIAIS</h1>\n  <p>Uma seleção de vídeos reais do YouTube, de canais que explicam maquiagem do zero. Dá para assistir aqui dentro do site, quantas vezes quiser.</p>\n </div></div>\n <div class=\"wrap\">\n  <label class=\"search\"><svg viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-4-4\"/></svg><input id=\"qT\" placeholder=\"O que você procura?\"></label>\n  <div class=\"chips t\" id=\"chipsT\"></div>\n  <p class=\"count\"><b id=\"cntT\">0</b> vídeos disponíveis</p>\n  <p class=\"note\">Vídeos públicos do YouTube. Os direitos pertencem aos criadores de cada canal, e o vídeo toca aqui mesmo no site.</p>\n  <div class=\"grid c tut\" id=\"listT\" style=\"padding-bottom:80px\"></div>\n </div>", "cadastro": "<div class=\"ph-f pagehead\"><div class=\"wrap\">\n  <a class=\"back\" href=\"?page=inicio\"><svg viewBox=\"0 0 24 24\"><path d=\"M19 12H5M11 6l-6 6 6 6\"/></svg> Voltar para o início</a>\n  <p class=\"script\">seu espaço</p><h1 style=\"font-size:5rem\">Criar cadastro</h1>\n  <p>Conte seu tipo de pele e seu nível para deixar as indicações com a sua cara. É grátis e fica salvo só neste aparelho.</p>\n </div></div>\n <div class=\"wrap\">\n  <form class=\"form\" id=\"cadForm\" style=\"margin-bottom:80px\">\n   <label for=\"cN\">Nome</label><input class=\"f\" id=\"cN\" required>\n   <label for=\"cE\">E-mail</label><input class=\"f\" id=\"cE\" type=\"email\" autocomplete=\"email\" required>\n   <label for=\"cS\">Senha (mínimo 6 caracteres)</label><input class=\"f\" id=\"cS\" type=\"password\" minlength=\"6\" autocomplete=\"new-password\" required>\n   <label for=\"cP\">Tipo de pele</label><select class=\"f\" id=\"cP\"><option>Normal</option><option>Seca</option><option>Oleosa</option><option>Mista</option></select>\n   <label for=\"cL\">Seu nível</label><select class=\"f\" id=\"cL\"><option>Estou começando</option><option>Já sei o básico</option><option>Intermediário</option></select>\n   <button class=\"btn fill\" style=\"margin-top:28px\">Criar cadastro</button>\n   <p class=\"ok\" id=\"cadOk\"></p><p class=\"err\" id=\"cadErr\"></p>\n   <p style=\"margin-top:22px;font-size:1.2rem;color:var(--muted)\">Já tem conta? <a class=\"link\" href=\"?page=entrar\">Entrar</a></p>\n  </form>\n </div>", "entrar": "<div class=\"ph-f pagehead\"><div class=\"wrap\">\n  <a class=\"back\" href=\"?page=inicio\"><svg viewBox=\"0 0 24 24\"><path d=\"M19 12H5M11 6l-6 6 6 6\"/></svg> Voltar</a>\n  <p class=\"script\">bem-vinda de volta</p><h1 style=\"font-size:5rem\">Entrar</h1>\n  <p>Use o e-mail e a senha que você cadastrou neste aparelho.</p>\n </div></div>\n <div class=\"wrap\">\n  <form class=\"form\" id=\"loginForm\" style=\"margin-bottom:80px\">\n   <label for=\"lE\">E-mail</label><input class=\"f\" id=\"lE\" type=\"email\" autocomplete=\"email\" required>\n   <label for=\"lS\">Senha</label><input class=\"f\" id=\"lS\" type=\"password\" autocomplete=\"current-password\" required>\n   <button class=\"btn fill\" style=\"margin-top:28px\">Entrar</button>\n   <p class=\"err\" id=\"loginErr\"></p>\n   <p style=\"margin-top:22px;font-size:1.2rem;color:var(--muted)\">Ainda não tem conta? <a class=\"link\" href=\"?page=cadastro\">Criar cadastro</a></p>\n  </form>\n </div>", "perfil": "<div class=\"ph-f pagehead\"><div class=\"wrap\">\n  <a class=\"back\" href=\"?page=inicio\"><svg viewBox=\"0 0 24 24\"><path d=\"M19 12H5M11 6l-6 6 6 6\"/></svg> Voltar</a>\n  <p class=\"script\">seu espaço</p><h1 style=\"font-size:5rem\" id=\"pfName\">Olá</h1>\n  <p>Cadastro salvo neste aparelho.</p>\n </div></div>\n <div class=\"wrap\">\n  <div class=\"form\" style=\"margin-bottom:30px\"><h2>Seu perfil</h2>\n   <div class=\"opt\"><i><svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c0-4 4-6 8-6s8 2 8 6\"/></svg></i><div><b id=\"pfEmail\"></b><span>E-mail do cadastro</span></div></div>\n   <div class=\"opt\"><i><svg viewBox=\"0 0 24 24\"><path d=\"M12 3c4 5 6 8 6 11a6 6 0 01-12 0c0-3 2-6 6-11z\"/></svg></i><div><b id=\"pfPele\"></b><span>Tipo de pele</span></div></div>\n   <div class=\"opt\"><i><svg viewBox=\"0 0 24 24\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z\"/></svg></i><div><b id=\"pfNivel\"></b><span>Seu nível</span></div></div>\n   <div class=\"opt\"><i><svg viewBox=\"0 0 24 24\"><path d=\"M12 21s-8-5-8-11a4.500 4.500 0 018-2.800A4.500 4.500 0 0120 10c0 6-8 11-8 11z\"/></svg></i><div><b id=\"pfFav\"></b><span>Produtos favoritados</span></div></div>\n  </div>\n  <a class=\"btn fill\" href=\"?page=produtos\" style=\"margin-bottom:18px\">Ver produtos <svg viewBox=\"0 0 24 24\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg></a>\n  <button class=\"btn line\" id=\"logout\" style=\"margin-bottom:80px\">Sair</button>\n </div>", "feedback": "<div class=\"ph-f pagehead\"><div class=\"wrap\">\n  <a class=\"back\" href=\"?page=inicio\"><svg viewBox=\"0 0 24 24\"><path d=\"M19 12H5M11 6l-6 6 6 6\"/></svg> Voltar para o início</a>\n  <p class=\"script\">sua opinião importa</p><h1 style=\"font-size:5rem\">Compartilhe seu feedback</h1>\n  <p>Sua opinião ajuda a escolher os próximos tutoriais e produtos. Escreva com suas palavras — não existe resposta errada.</p>\n </div></div>\n <div class=\"wrap\">\n  <div class=\"form\"><h2>O que você pode contar</h2>\n   <div class=\"opt\"><i><svg viewBox=\"0 0 24 24\"><path d=\"M12 3l2.800 5.700 6.200.9-4.500 4.400 1 6.200L12 17.200 6.500 20.200l1-6.200L3 9.600l6.200-.9z\"/></svg></i><div><b>O que você achou do site</b><span>O que ajudou, o que ficou confuso, o que você gostaria de ver diferente.</span></div></div>\n   <div class=\"opt\"><i><svg viewBox=\"0 0 24 24\"><path d=\"M5 8h14l-1 12H6zM9 8a3 3 0 016 0\"/></svg></i><div><b>Produtos para indicar</b><span>Se você usa algo barato e bom, conta o nome e a marca que a gente pesquisa.</span></div></div>\n   <div class=\"opt\"><i><svg viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"5\" width=\"16\" height=\"14\" rx=\"2\"/><path d=\"M10 9l5 3-5 3z\"/></svg></i><div><b>Temas de tutorial</b><span>Olho fundo, pele oleosa, maquiagem para festa: peça o tema que você precisa.</span></div></div>\n  </div>\n  <form class=\"form\" id=\"fbForm\" style=\"margin-top:0\">\n   <h2>Envie sua mensagem</h2>\n   <label for=\"fbN\">Seu nome (opcional)</label><input class=\"f\" id=\"fbN\" autocomplete=\"name\">\n   <label for=\"fbT\">Assunto</label>\n   <select class=\"f\" id=\"fbT\"><option>O que achei do site</option><option>Sugerir um produto</option><option>Pedir um tema de tutorial</option></select>\n   <label for=\"fbS\">Sua nota para o site</label>\n   <select class=\"f\" id=\"fbS\"><option value=\"5\">5 · Muito bom</option><option value=\"4\">4 · Bom</option><option value=\"3\">3 · Regular</option><option value=\"2\">2 · Ruim</option><option value=\"1\">1 · Muito ruim</option></select>\n   <label for=\"fbM\">Mensagem</label><textarea class=\"f\" id=\"fbM\" required></textarea>\n   <button class=\"btn fill\" style=\"margin-top:28px\">Enviar feedback</button>\n   <p class=\"ok\" id=\"fbOk\">Obrigado! Seu feedback foi salvo neste aparelho.</p>\n  </form>\n  <div class=\"form\" style=\"margin-bottom:80px\"><h2>Seus feedbacks enviados</h2><div id=\"fbList\"></div></div>\n </div>"};
PAGINAS.inicio = PAGINAS.index;
const paginaAtual = new URLSearchParams(location.search).get("page") || "inicio";
const nomes = {inicio:"INFO BEAUTY — maquiagem simples e acessível",produtos:"Produtos bons e baratos — INFO BEAUTY",tutoriais:"Tutoriais em vídeo — INFO BEAUTY",cadastro:"Criar cadastro — INFO BEAUTY",entrar:"Entrar — INFO BEAUTY",perfil:"Meu perfil — INFO BEAUTY",feedback:"Feedback — INFO BEAUTY"};
document.title = nomes[paginaAtual] || nomes.inicio;
document.body.dataset.page = paginaAtual;
document.getElementById("main").innerHTML = PAGINAS[paginaAtual] || PAGINAS.inicio;
// Links internos mantêm cada seção como uma página independente, sem rolagem única.
document.querySelectorAll('a[href$=".html"]').forEach(a=>{const p=a.getAttribute('href').replace('.html','');a.href='?page='+(p==='index'?'inicio':p)});
/* ===== DADOS DO SITE =====
   Preços: valores médios aproximados de referência (pesquisa em sites de beleza e lojas, 2025-2026).
   Variam por loja e promoção. Para colocar foto, preencha "img" com o endereço da imagem. */
const FOTOS_PRODUTOS={
 "Base Líquida Melu Tória":"https://www.rubyrose.com.co/cdn/shop/products/2_ac018715-03a5-4a1e-8e11-7a650a9438af.png?v=1692892464",
 "Máscara de Cílios Vult Extreme Super Lashes":"https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/kit-maquiagem-vult-com-base-mascara-para-cilios-blush-e-gloss/supervaidosacosmeticos/mlb3775838973d/3185261958ef27545ff3c0b5a04f7d36.jpeg",
 "Dailus Blush em Bastão":"https://cdn.awsli.com.br/2500x2500/2752/2752602/produto/369419968/653574-2-lztoy43fgy.jpg",
 "Batom BT Velvet Bruna Tavares":"https://cdn.awsli.com.br/2500x2500/1382/1382542/produto/61663742/fc1292722e.jpg",
 "Base Matte Vult":"https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/kit-maquiagem-vult-com-base-mascara-para-cilios-blush-e-gloss/supervaidosacosmeticos/mlb3775838973d/3185261958ef27545ff3c0b5a04f7d36.jpeg",
 "Base Fit Me":"https://www.kroger.com/product/images/large/front/0004155453869",
 "Base Líquida Vizzela":"https://images.tcdn.com.br/img/img_prod/894912/base_liquida_fix_vizzela_30ml_cor_04_790851762_1_4695891c4036d216ce5a76df79367a17.jpg",
 "Corretivo Aquarela":"https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/kit-maquiagem-vult-com-base-mascara-para-cilios-blush-e-gloss/supervaidosacosmeticos/mlb3775838973d/3185261958ef27545ff3c0b5a04f7d36.jpeg",
 "Pó Compacto":"https://product-data.raiadrogasil.io/images/8910872.webp",
 "Máscara de Cílios HB-501":"https://down-br.img.susercontent.com/file/br-11134207-81z1k-mh3fo3cd1csg1a",
 "Máscara de Cílios Boom Volume":"https://product-data.raiadrogasil.io/images/5366861.webp",
 "Paleta de Sombras":"https://product-data.raiadrogasil.io/images/5366861.webp",
 "Delineador Quickliner":"https://down-br.img.susercontent.com/file/br-11134207-81z1k-mh3fo3cd1csg1a",
 "Blush Rose Glow":"https://cdn.awsli.com.br/2500x2500/2752/2752602/produto/369419968/653574-2-lztoy43fgy.jpg",
 "Blush Compacto":"https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/kit-maquiagem-vult-com-base-mascara-para-cilios-blush-e-gloss/supervaidosacosmeticos/mlb3775838973d/3185261958ef27545ff3c0b5a04f7d36.jpeg",
 "Batom Color Sensation":"https://cdn.awsli.com.br/2500x2500/1382/1382542/produto/61663742/fc1292722e.jpg",
 "Gloss Bigmouth":"https://cdn.awsli.com.br/2500x2500/2603/2603033/produto/261184564/d91bac82-9184-4039-afd5-b87327e0868a-5qrityqk0b.jpg"
};
const P=(nome,cat,marca,desc,preco)=>({nome,cat,marca,desc,preco,img:FOTOS_PRODUTOS[nome]||""});
const PRODUTOS=[
 P("Base Líquida Melu Tória","Pele","Melu (Ruby Rose)","Base soft matte de textura fina, com cobertura média construível e efeito segunda pele.",29.90),
 P("Máscara de Cílios Vult Extreme Super Lashes","Olhos","Vult","Volume e alongamento com escova curvada, sem empelotar no primeiro uso.",42.90),
 P("Dailus Blush em Bastão","Bochechas","Dailus","Blush cremoso em bastão, com cor intensa e efeito de sol na pele.",39.90),
 P("Batom BT Velvet Bruna Tavares","Lábios","Bruna Tavares","Batom cremoso de alta pigmentação com acabamento aveludado confortável.",44.90),
 P("Base Matte Vult","Pele","Vult","Base matte lembrada por boa durabilidade, indicada para pele oleosa.",25.00),
 P("Base Fit Me","Pele","Maybelline","Referência de custo-benefício entre as bases de farmácia e marketplace.",35.00),
 P("Base Líquida Vizzela","Pele","Vizzela","Base vegana com acabamento natural e aveludado, boa para o uso diário.",45.00),
 P("Corretivo Aquarela","Pele","Vult","Corretivo para olheiras e manchinhas, opção de preço baixo para o kit básico.",25.00),
 P("Pó Compacto","Pele","Vult","Pó compacto para selar a make e controlar o brilho da zona T.",20.00),
 P("Máscara de Cílios HB-501","Olhos","Ruby Rose","Volume e alongamento com fórmula que não pesa nos cílios.",20.00),
 P("Máscara de Cílios Boom Volume","Olhos","Melu (Ruby Rose)","Cílios volumosos e definidos com uma única aplicação.",40.00),
 P("Paleta de Sombras","Olhos","Ruby Rose","Paleta com muitas cores e boa pigmentação para o preço, boa para treinar esfumado.",35.00),
 P("Delineador Quickliner","Olhos","tbmake","Delineador de aplicação rápida, encontrado a partir de cerca de R$ 15.",15.00),
 P("Blush Rose Glow","Bochechas","UNI","Boa pigmentação, textura sedosa e acabamento cintilante em tons que combinam com vários tons de pele.",17.00),
 P("Blush Compacto","Bochechas","L.A. Colors","Blush de preço baixo para completar o kit básico.",25.00),
 P("Batom Color Sensation","Lábios","Vult","Batom de marca conhecida pela cor e hidratação boas para o preço.",20.00),
 P("Gloss Bigmouth","Lábios","Phallebeauty","Gloss que pode ser usado sozinho ou por cima do batom.",14.00)
];

// Avaliações públicas verificadas em páginas de produto/marketplaces.
// Mantemos trechos curtos e identificamos a loja de origem; não criamos depoimentos.
const AVALIACOES={
 "Máscara de Cílios Vult Extreme Super Lashes":{
  nota:"4,7/5",total:"7 avaliações",fonte:"Vult",url:"https://www.vult.com.br/produto/mascara-de-cilios-vult-extreme-super-lashes-10g",
  itens:[
   {autor:"Daphne O.",nota:5,data:"08/01/2026",texto:"Deixa meus cílios curvados e bem levantados."},
   {autor:"Tania N.",nota:5,data:"27/12/2025",texto:"Maravilhoso!! Chegou no prazo e super bem embalado."},
   {autor:"Zeemei B.",nota:3,data:"14/09/2025",texto:"A escovinha é muito grossa, atrapalha na hora de passar."}
  ]
 },
 "Dailus Blush em Bastão":{
  nota:"4,4/5",total:"129 opiniões",fonte:"Mercado Livre",url:"https://www.mercadolivre.com.br/blush-stick-dailus-cremoso-pessego-tom-rosa-claro/p/MLB38697946",
  itens:[
   {autor:"Comprador(a) verificado(a)",nota:5,data:"Há 1 ano",texto:"Cor linda e de boa qualidade."},
   {autor:"Comprador(a) verificado(a)",nota:5,data:"Há 1 ano",texto:"A cor não me favoreceu muito."},
   {autor:"Comprador(a) verificado(a)",nota:4,data:"Há 1 ano",texto:"Pigmentação fraca."}
  ]
 },
 "Base Líquida Vizzela":{
  nota:"4,7/5",total:"18 avaliações",fonte:"Beleza na Web",url:"https://www.belezanaweb.com.br/produto/vizzela-cosmeticos-05-base-liquida-30g/",
  itens:[
   {autor:"Dayra T.",nota:5,data:"27/05/2026",texto:"Produto chegou certinho, no prazo determinado."},
   {autor:"Janaina A.",nota:3,data:"13/01/2026",texto:"Essa base é maravilhosa mas transferi muito."},
   {autor:"Jamila S.",nota:5,data:"25/11/2025",texto:"Melhor base."}
  ]
 },
 "Pó Compacto":{
  nota:"4,6/5",total:"114 avaliações",fonte:"Beleza na Web",url:"https://www.belezanaweb.com.br/produto/vult-make-up-06-marrom-po-compacto-matte-9g",
  itens:[
   {autor:"Wisdete L.",nota:5,data:"04/11/2026",texto:"Bom. Macio. Cheiro bom."},
   {autor:"Luciane S.",nota:5,data:"10/10/2026",texto:"Adoro a textura dele. Custo benefício!"},
   {autor:"Keyce B.",nota:3,data:"17/08/2026",texto:"Sela bem a pele, tem textura fina; senti um pouco de transferência."}
  ]
 },
 "Gloss Bigmouth":{
  nota:"4,6/5",total:"45 opiniões",fonte:"Mercado Livre",url:"https://www.mercadolivre.com.br/gloss-labial-aumenta-volume-phallebeauty-big-mouth--brinde/up/MLBU4304444885",
  itens:[
   {autor:"Comprador(a)",nota:4,data:"Há 2 meses",texto:"Lindo e cresce a boca msm."},
   {autor:"Comprador(a)",nota:5,data:"Há 3 meses",texto:"Chegou muito bem embalado, e muito rápido."},
   {autor:"Comprador(a)",nota:4,data:"Há 3 meses",texto:"Faz o que promete, tem ardência leve e não tem cor."}
  ]
 }
};

const V=(yt,titulo,cat,autor,desc)=>({yt,titulo,cat,autor,desc});
const L="Laura Kuczynski";
const TUTORIAIS=[
 V("ATZDEbpq3jA","Automaquiagem básica para iniciantes","Iniciantes",L,"Guia prático com preparo da pele, produtos essenciais e técnicas simples para um resultado natural."),
 V("ox1XkYNcu2o","Como fazer make de iniciante: tutorial completo com passo a passo","Iniciantes","Thassya Miranda","Tutorial atualizado em 2026 que mostra a ordem certa de cada produto, da hidratação ao blush."),
 V("5EPNAGfiT80","Se você não sabe se maquiar, assista esse vídeo","Iniciantes","Bia Amaral","Passo a passo e dicas com linguagem simples, ideal para quem tem vergonha de começar."),
 V("19D-JbINOYk","Automaquiagem para iniciantes: para qualquer ocasião","Iniciantes",L,"Passo a passo mais longo e detalhado para quem não sabe por onde começar."),
 V("p-EDtChXZeI","Automaquiagem para quem não sabe se maquiar","Iniciantes",L,"Passo a passo para acompanhar junto com o vídeo, feito para quem ainda está aprendendo."),
 V("JIyA9ljysaU","Automaquiagem fácil para trabalhar","Iniciantes",L,"Tutorial da maquiagem básica para o dia a dia no trabalho."),
 V("o_kgOaP_Zh0","Automaquiagem para iniciantes: olhos","Olhos",L,"Como saber a quantidade de produto, como esfumar e quais cores escolher."),
 V("LimOmkKER0I","Automaquiagem rápida: olhos (Ep. 3)","Olhos",L,"Passo a passo detalhado da maquiagem dos olhos, da série de automaquiagem rápida."),
 V("dFlMrAMSchs","Automaquiagem dos olhos para iniciantes: para o dia","Olhos",L,"Olhos para o dia a dia, com dicas de esfumado e escolha de cores."),
 V("O6KE8PYRJmY","Maquiagem para harmonizar: dica para olhos juntos","Olhos",L,"Mini tutorial para quem quer equilibrar a distância entre os olhos."),
 V("UR7E4QSb0IU","Automaquiagem com produtos que tratam a pele","Pele",L,"Maquiagem feita com produtos que prometem ativos para cuidar da pele."),
 V("jPguE07DLyI","Automaquiagem com produtos cremosos","Pele",L,"Automaquiagem para pele madura, para quem ainda não sabe se maquiar sozinha."),
 V("akJYmT5Oo6I","Maquiagem de pele madura para iniciantes","Pele",L,"Automaquiagem pensada para pele madura e para quem está começando."),
 V("qR_0jpz_VKs","Como passar batom vermelho sem erro: 3 dicas","Lábios","Canal no YouTube","Três dicas simples para passar o batom do jeito certo e fazer durar mais."),
 V("g6x1UFvdqWE","Método para passar batom sem erro","Lábios","Canal no YouTube","Um método fácil para aplicar batom sem errar o contorno.")
];

const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const PG=new URLSearchParams(location.search).get("page")||"inicio";
document.body.dataset.page=PG;
const brl=n=>"R$ "+n.toFixed(2).replace(".",",");
const esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const store={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}};
const SV={heart:'<svg viewBox="0 0 24 24"><path d="M12 21s-8-5-8-11a4.500 4.500 0 018-2.800A4.500 4.500 0 0120 10c0 6-8 11-8 11z"/></svg>',arrow:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',play:'<svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z"/></svg>',vid:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/></svg>',circ:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M10 8.500l5 3.500-5 3.500z"/></svg>'};
let favs=store.get("ib_favs",[]);if(!Array.isArray(favs))favs=[];
const PH={Pele:"ph1",Olhos:"ph2",Bochechas:"ph3","Lábios":"ph4"};

/* ---------- cards ---------- */
function cardP(p){const on=favs.includes(p.nome),url="https://www.google.com/search?tbm=shop&q="+encodeURIComponent(p.nome+" "+p.marca);
 return `<article class="card"><div class="img ${PH[p.cat]||"ph1"}">${p.img?`<img class="product-photo" src="${esc(p.img)}" alt="Foto real do produto ${esc(p.nome)}" loading="lazy" onerror="this.onerror=null;this.src='https://product-data.raiadrogasil.io/images/5366861.webp'">`:""}<span class="tag">BOM E BARATO</span><button class="heart ${on?"on":""}" data-fav="${esc(p.nome)}" aria-pressed="${on}" aria-label="Favoritar ${esc(p.nome)}">${SV.heart}</button></div>
 <div class="body"><div class="cat">${esc(p.cat)} · ${esc(p.marca)}</div><h3>${esc(p.nome)}</h3><p>${esc(p.desc)}</p>
 ${blocoAvaliacoes(p.nome)}
 <div class="row"><div class="price">${brl(p.preco)} <small>preço médio</small></div><a class="pill" href="${url}" target="_blank" rel="noopener">Ver produto ${SV.arrow}</a></div></div></article>`}
function blocoAvaliacoes(nome){const a=AVALIACOES[nome];if(!a)return `<section class="reviews reviews-empty"><b>Avaliações ainda não verificadas</b><p>Não encontramos comentários públicos que correspondam com segurança a este produto exato. Preferimos não atribuir opiniões de outro item.</p></section>`;
 return `<section class="reviews"><div class="reviews-head"><div><b>Opiniões de compradores</b><strong>★ ${a.nota}</strong><small>${a.total}</small></div><a href="${a.url}" target="_blank" rel="noopener">Ver na ${esc(a.fonte)} ↗</a></div><div class="review-list">${a.itens.slice(0,3).map(r=>`<blockquote class="review"><div class="review-meta"><b>${esc(r.autor)}</b><span>★ ${r.nota}/5</span></div><p>“${esc(r.texto)}”</p><small>${esc(r.data)}</small></blockquote>`).join("")}</div><small class="review-source">Trechos de avaliações publicadas em ${esc(a.fonte)}. Nota e quantidade conforme a página consultada.</small></section>`}
function cardT(t,i){const ph=["phA","phB","phC"][i%3];
 return `<article class="card video-card"><div class="img v ${ph}" style="background-image:url(https://i.ytimg.com/vi/${t.yt}/hqdefault.jpg)"><button class="play" data-yt="${t.yt}" aria-label="Assistir ${esc(t.titulo)}">${SV.play}</button><span class="watch">${SV.vid} assistir aqui</span><span class="video-duration-label">AULA EM VÍDEO</span></div>
 <div class="body"><div class="cat">${String(i+1).padStart(2,"0")} · ${esc(t.cat)}</div><h3>${esc(t.titulo)}</h3><p>${esc(t.desc)}</p>
 <div class="row"><span class="author">${SV.user} ${esc(t.autor)}</span><button class="pill olive" data-yt="${t.yt}">Assistir ${SV.circ}</button></div></div></article>`}

/* ---------- páginas ---------- */
function chips(id,arr,fn){const el=$(id);el.innerHTML=arr.map((c,i)=>`<button class="chip ${i?"":"on"}" data-c="${c}">${c=="Meus favoritos"?SV.heart+" ":""}${c}</button>`).join("");
 el.onclick=e=>{const b=e.target.closest(".chip");if(!b)return;el.querySelectorAll(".chip").forEach(x=>x.classList.remove("on"));b.classList.add("on");fn()}}
function renderP(){const cat=$("#chipsP .on").dataset.c,q=$("#qP").value.toLowerCase(),s=$("#sortP").value,mx=+$("#maxP").value;
 const l=PRODUTOS.filter(p=>(cat=="Todos"||(cat=="Meus favoritos"?favs.includes(p.nome):p.cat==cat))&&(!mx||p.preco<=mx)&&(p.nome+p.marca).toLowerCase().includes(q));
 if(s=="asc")l.sort((a,b)=>a.preco-b.preco);if(s=="desc")l.sort((a,b)=>b.preco-a.preco);
 $("#cntP").textContent=l.length;$("#listP").innerHTML=l.length?l.map(cardP).join(""):'<p class="empty">Nenhum produto encontrado. Tente outro filtro.</p>'}
function renderT(){const cat=$("#chipsT .on").dataset.c,q=$("#qT").value.toLowerCase();
 const l=TUTORIAIS.filter(t=>(cat=="Todos"||t.cat==cat)&&(t.titulo+t.autor+t.desc).toLowerCase().includes(q));
 $("#cntT").textContent=l.length;$("#listT").innerHTML=l.length?l.map(cardT).join(""):'<p class="empty">Nenhum vídeo encontrado. Tente outro filtro.</p>'}

if(PG=="produtos"){chips("#chipsP",["Todos","Pele","Olhos","Lábios","Bochechas","Meus favoritos"],renderP);$("#qP").oninput=renderP;$("#sortP").onchange=renderP;$("#maxP").onchange=renderP;renderP();if(new URLSearchParams(location.search).get('favorito')==='salvo'){const aviso=document.createElement('p');aviso.className='favorite-saved-note';aviso.textContent='Cadastro concluído! O produto foi adicionado aos seus favoritos.';$('#listP').before(aviso);}}
if(PG=="tutoriais"){chips("#chipsT",["Todos","Iniciantes","Olhos","Pele","Lábios"],renderT);$("#qT").oninput=renderT;renderT()}

document.addEventListener("click",e=>{
 const h=e.target.closest("[data-fav]");
 if(h){
  const n=h.dataset.fav;
  // Primeiro favorito: solicitar cadastro somente se ainda não existir uma conta neste aparelho.
  // Quem já tem cadastro continua favoritando normalmente, sem redirecionamento.
  if(!rawUser()&&!favs.includes(n)){
   store.set("ib_pending_fav",n);
   location.href="?page=cadastro&origem=favoritos";
   return;
  }
  favs=favs.includes(n)?favs.filter(x=>x!==n):[...favs,n];
  store.set("ib_favs",favs);
  $$('[data-fav]').forEach(x=>{if(x.dataset.fav===n){const ativo=favs.includes(n);x.classList.toggle('on',ativo);x.setAttribute('aria-pressed',String(ativo));}});
  if(PG==="produtos"&&$("#chipsP .on")?.dataset.c==="Meus favoritos")renderP();
  return;
 }
 const y=e.target.closest("[data-yt]");
 if(y){y.closest(".card").querySelector(".img").innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${y.dataset.yt}?autoplay=1&rel=0" title="Vídeo de tutorial" allow="autoplay;encrypted-media;picture-in-picture" allowfullscreen></iframe>`}
});

/* ---------- menu ---------- */
const closeMenu=()=>{$("#menu").classList.remove("open");$("#bi").innerHTML='<path d="M4 6h16M4 12h16M4 18h16"/>'};
$("#burger").setAttribute("aria-expanded","false");
$("#burger").onclick=()=>{const o=$("#menu").classList.toggle("open");$("#burger").setAttribute("aria-expanded",String(o));$("#burger").setAttribute("aria-label",o?"Fechar menu":"Abrir menu");$("#bi").innerHTML=o?'<path d="M6 6l12 12M18 6L6 18"/>':'<path d="M4 6h16M4 12h16M4 18h16"/>'};
$("#menu").addEventListener("click",e=>{if(e.target.closest("a")){closeMenu();$("#burger").setAttribute("aria-expanded","false")}});
$$(".menu a.l").forEach(a=>a.classList.toggle("on",a.dataset.p==PG));

/* ---------- conta (salva só neste aparelho; senha guardada como hash) ---------- */
const rawUser=()=>store.get("ib_user",null);
const getUser=()=>store.get("ib_sess",false)?rawUser():null;
const hash=async t=>{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")};
const user=getUser();
if(PG=="perfil"&&!user)location.replace("?page=entrar");
if((PG=="entrar"||PG=="cadastro")&&user)location.replace("?page=perfil");
$("#mIn").style.display=user?"none":"block";
$("#mAuth").textContent=user?"Meu perfil":"Criar cadastro";$("#mAuth").setAttribute("href",user?"?page=perfil":"?page=cadastro");
if(user&&$("#heroHi"))$("#heroHi").textContent="bem-vinda de volta, "+user.nome.split(" ")[0];
if(PG=="perfil"&&user){$("#pfName").textContent="Olá, "+user.nome.split(" ")[0];$("#pfEmail").textContent=user.email;$("#pfPele").textContent=user.pele;$("#pfNivel").textContent=user.nivel;$("#pfFav").textContent=favs.length+(favs.length==1?" produto":" produtos");
 $("#logout").onclick=()=>{store.set("ib_sess",false);location.href="?page=inicio"}}
if(PG==="cadastro"){
 const pendente=store.get("ib_pending_fav",null);
 if(pendente){const aviso=document.createElement('p');aviso.className='favorite-signup-note';aviso.textContent='Crie seu cadastro gratuito para guardar este produto nos seus favoritos.';$("#cadForm").prepend(aviso);}
 $("#cadForm").onsubmit=async e=>{e.preventDefault();const err=$("#cadErr");err.textContent='';
  if($("#cN").value.trim().length<2){err.textContent="Informe seu nome.";return}
  if($("#cS").value.length<6){err.textContent="A senha precisa ter pelo menos 6 caracteres.";return}
  const email=$("#cE").value.trim().toLowerCase();
  const existente=rawUser();
  if(existente&&existente.email===email){err.textContent="Este e-mail já possui cadastro neste aparelho. Entre na sua conta para continuar.";return}
  const u={nome:$("#cN").value.trim(),email,pele:$("#cP").value,nivel:$("#cL").value,senha:await hash($("#cS").value)};
  if(!store.set("ib_user",u)){err.textContent="Não foi possível salvar o cadastro neste aparelho.";return}
  if(pendente){favs=store.get('ib_favs',[]);if(!Array.isArray(favs))favs=[];if(!favs.includes(pendente))favs.push(pendente);store.set('ib_favs',favs);store.set('ib_pending_fav',null);}
  store.set("ib_sess",true);
  location.href=pendente?"?page=produtos&favorito=salvo":"?page=perfil";
 };
}
if(PG=="entrar")$("#loginForm").onsubmit=async e=>{e.preventDefault();const u=rawUser();
 if(!u||u.email!==$("#lE").value.trim().toLowerCase()||u.senha!==await hash($("#lS").value)){$("#loginErr").textContent="E-mail ou senha incorretos. Confira os dados ou crie um cadastro.";return}
 store.set("ib_sess",true);location.href="?page=perfil"};

/* ---------- feedback (salvo neste aparelho) ---------- */
if(PG=="feedback"){
 const tipo=new URLSearchParams(location.search).get("tipo");if(tipo=="produto")$("#fbT").value="Sugerir um produto";
 if(user)$("#fbN").value=user.nome;
 const draw=()=>{const l=store.get("ib_fb",[]);$("#fbList").innerHTML=l.length?l.map((f,i)=>`<div class="fb"><b>${esc(f.t)} · ${"★".repeat(f.nota)}${"☆".repeat(5-f.nota)}</b><p>${esc(f.msg)}</p><small>${esc(f.nome||"Anônimo")} · ${esc(f.data)}</small> <button data-del="${i}">Apagar</button></div>`).join(""):'<p class="empty" style="padding:10px 0">Você ainda não enviou nenhum feedback.</p>'};
 $("#fbForm").onsubmit=e=>{e.preventDefault();const l=store.get("ib_fb",[]);
  l.unshift({t:$("#fbT").value,nota:+$("#fbS").value,nome:$("#fbN").value.trim(),msg:$("#fbM").value.trim(),data:new Date().toLocaleDateString("pt-BR")});
  store.set("ib_fb",l);e.target.reset();if(user)$("#fbN").value=user.nome;$("#fbOk").style.display="block";draw()};
 $("#fbList").onclick=e=>{const d=e.target.closest("[data-del]");if(!d)return;const l=store.get("ib_fb",[]);l.splice(+d.dataset.del,1);store.set("ib_fb",l);draw()};
 draw()}
