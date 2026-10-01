

## Problema

O GTM está capturando o evento `click_url`, mas a variável **Click URL** do dataLayer está vazia (`""`). Isso acontece porque `Click URL` é uma variável built-in do GTM que captura o atributo `href` de links (`<a>`), e os botões usam `window.open()` em vez de `<a href>`. A variável customizada `click_url` (minúscula) está sendo enviada, mas o campo **Click URL** built-in do GTM não a reconhece.

## Solução

Duas mudanças para garantir o rastreamento:

1. **Renomear a variável no dataLayer** para um nome mais claro e sem conflito, como `whatsapp_url`, e adicionar também `click_text` para facilitar a criação de triggers no GTM.

2. **Nos botões, usar `<a>` com `href` apontando para o WhatsApp** em vez de `<button>` com `window.open()`. Isso faz o GTM preencher automaticamente as variáveis built-in (Click URL, Click Text, etc.).

### Alteração no código (`src/pages/Index.tsx`):

- Manter o `dataLayer.push` com variáveis customizadas (`whatsapp_url`, `whatsapp_click_text`)
- Nos componentes `BtnPrimary` e `BtnOutline`, renderizar como `<a href={WHATSAPP_URL} target="_blank">` em vez de `<button onClick>`, para que o GTM capture o `href` na variável Click URL automaticamente.

Isso resolve o problema: o GTM vai preencher **Click URL** com o link do WhatsApp e o **Event** continuará como `click_url`.

