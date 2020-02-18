function walletPay(preferenceId) {
  // cria a tag <script>
  var script = document.createElement('script');
  // Passa como parâmetro o caminho do botão Wallet do MP
  script.setAttribute('src', 'https://www.mercadopago.com.br/integrations/v1/wallet.js');
  // Cria um atributo customizado para a tag <script> passando como parâmetro o PreferenceID
  var att = document.createAttribute('data-preference-id');
  // Recebe o PreferenceID e seta no conteúdo do atributo
  att.value = preferenceId;
  // Associa o atributo criado à tag <script>
  script.setAttributeNode(att);
// Insere o botão Wallet do MP na "div1"
  var div = document.getElementById("div1");
  div.appendChild(script);

}
