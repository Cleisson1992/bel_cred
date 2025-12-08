# 📱 Guia de Publicação - BelCred Landing Page

## 1. Publicar a Landing Page no Manus

### Passo 1: Acessar o Painel de Controle
1. Acesse a plataforma Manus (seu dashboard)
2. Procure pelo projeto **"belcred-landing"** na lista de projetos
3. Clique em **"Visualizar"** ou **"Gerenciar"**

### Passo 2: Criar um Checkpoint (se ainda não fez)
1. No painel, clique em **"Salvar Checkpoint"**
2. Adicione uma descrição: `Landing page BelCred com logo oficial - Pronto para publicação`
3. Clique em **"Salvar"**

### Passo 3: Publicar
1. Após criar o checkpoint, clique no botão **"Publish"** (canto superior direito)
2. Escolha o tipo de publicação:
   - **Domínio Automático**: `belcred-landing.manus.space` (gratuito)
   - **Domínio Personalizado**: Compre um domínio como `belcred.com.br` diretamente no Manus
3. Clique em **"Publicar"**
4. Aguarde 2-5 minutos para a landing page ficar online

### Passo 4: Verificar se está ao vivo
1. Acesse o URL fornecido (ex: `https://belcred-landing.manus.space`)
2. Teste o formulário, botões e responsividade em mobile
3. Compartilhe o link com sua equipe

---

## 2. Configurar Domínio Personalizado (Opcional)

Se você já tem um domínio (ex: `belcred.com.br`):

### Opção A: Comprar Domínio no Manus
1. No painel de publicação, clique em **"Gerenciar Domínios"**
2. Clique em **"Comprar Novo Domínio"**
3. Procure por `belcred.com.br` ou variações
4. Siga o checkout e confirme a compra
5. O Manus configurará automaticamente

### Opção B: Usar Domínio Existente
1. No painel de publicação, clique em **"Gerenciar Domínios"**
2. Clique em **"Adicionar Domínio Existente"**
3. Siga as instruções para adicionar registros DNS:
   - Vá ao seu registrador (GoDaddy, Registro.br, etc.)
   - Adicione os registros CNAME fornecidos pelo Manus
   - Aguarde 24-48 horas para propagação

---

## 3. Configurações Pós-Publicação

### Adicionar Favicon
1. No painel, vá para **"Configurações"** → **"Geral"**
2. Clique em **"Fazer Upload do Favicon"**
3. Selecione um arquivo `.ico` ou `.png` (recomendado: 512x512px)
4. Salve as alterações

### Configurar Título e Descrição
1. Em **"Configurações"** → **"Geral"**
2. Título: `BelCred - Empréstimo Consignado Seguro e Rápido`
3. Descrição: `Empréstimo consignado com taxas competitivas, aprovação em 2 dias e desconto direto em folha. Solicite agora!`
4. Salve

### Ativar Analytics
1. Em **"Configurações"** → **"Analytics"**
2. Ative o rastreamento de visitantes
3. Você verá métricas de tráfego em tempo real no dashboard

---

## 4. Testar a Landing Page

Antes de enviar tráfego pago, teste:

- [ ] **Desktop**: Acesse em Chrome, Firefox, Safari
- [ ] **Mobile**: Teste em iPhone e Android
- [ ] **Formulário**: Preencha e envie para verificar se funciona
- [ ] **Botões**: Clique em todos os CTAs (Simular Agora, Saiba Mais, Solicitar Agora)
- [ ] **Links**: Verifique se todos os links internos funcionam
- [ ] **Imagens**: Confirme que todas as imagens carregam corretamente
- [ ] **Velocidade**: Use Google PageSpeed Insights para verificar performance

---

## 5. Monitorar Performance

Após publicar:

1. **Acesse o Dashboard**: Veja métricas em tempo real
2. **Monitore Visitantes Únicos (UV)**: Quantas pessoas visitaram
3. **Monitore Pageviews (PV)**: Quantas vezes a página foi carregada
4. **Verifique Taxa de Rejeição**: % de pessoas que saem sem interagir
5. **Analise Conversões**: Quantos formulários foram preenchidos

---

## 6. Troubleshooting

### A página não carrega
- Aguarde 5 minutos após publicação
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Tente em outro navegador

### Formulário não funciona
- Verifique se o backend de captura está configurado
- Consulte a seção "Integrar Backend de Captura" no guia de tráfego pago

### Imagens não aparecem
- Verifique se as imagens estão em `/client/public/images/`
- Limpe o cache e recarregue

### Domínio personalizado não funciona
- Verifique se os registros DNS foram adicionados corretamente
- Aguarde 24-48 horas para propagação completa
- Use `nslookup seu-dominio.com.br` para verificar

---

## 📞 Suporte

Se tiver dúvidas sobre publicação no Manus:
- Acesse: https://help.manus.im
- Envie um ticket com sua dúvida
- Equipe responde em até 24 horas

