# 🎯 Guia de Tráfego Pago - BelCred Landing Page

## 1. Preparação Antes de Lançar Campanhas

### 1.1 Verificar Conformidade Legal
- [ ] Consulte um advogado especializado em crédito/financeiro
- [ ] Verifique regulamentações do Banco Central e ANPD
- [ ] Adicione termos de uso e política de privacidade (já inclusos na landing page)
- [ ] Certifique-se de que as taxas e condições são legais

### 1.2 Configurar Rastreamento
- [ ] Instale Google Analytics 4 (GA4)
- [ ] Configure conversão de formulário como meta
- [ ] Instale pixel do Facebook Ads
- [ ] Instale pixel do Google Ads
- [ ] Configure rastreamento de telefone (se aplicável)

### 1.3 Integrar Backend de Captura
**Opção A: Usar Zapier (Recomendado - Sem Código)**
1. Acesse https://zapier.com
2. Crie uma conta e faça login
3. Clique em **"Create Zap"**
4. Trigger: Selecione **"Webhooks by Zapier"** → **"Catch Raw Hook"**
5. Action: Selecione seu CRM ou email:
   - **Google Sheets**: Adicione dados em planilha
   - **Gmail**: Receba email com dados do lead
   - **RD Station**: Envie para seu CRM
   - **Pipedrive**: Crie contato automático
6. Copie o URL do webhook fornecido
7. No código da landing page, atualize o endpoint do formulário com este URL

**Opção B: Usar Make (Antigo Integromat)**
1. Acesse https://make.com
2. Crie um novo cenário
3. Configure gatilho: **Webhooks** → **Custom Webhook**
4. Configure ação: Enviar para seu CRM/email
5. Copie o URL do webhook e adicione ao formulário

**Opção C: Usar Serviço de Email Marketing**
- **Brevo (ex-Sendinblue)**: https://brevo.com
- **Mailchimp**: https://mailchimp.com
- **RD Station**: https://rdstation.com
- Cada um fornece um endpoint para capturar leads

---

## 2. Google Ads (Busca + Display)

### 2.1 Criar Campanha de Busca
1. Acesse https://ads.google.com
2. Clique em **"Criar Campanha"**
3. Objetivo: **"Leads"** ou **"Vendas"**
4. Tipo: **"Busca"**
5. Configurações:
   - **Orçamento diário**: Comece com R$ 50-100/dia
   - **Lances**: Automático ou CPC manual (R$ 2-5 por clique)
   - **Localização**: Brasil (ou estados específicos)
   - **Idioma**: Português

### 2.2 Palavras-chave Recomendadas
```
Empréstimo consignado
Empréstimo consignado CLT
Empréstimo para CLT
Empréstimo pensionista
Empréstimo INSS
Empréstimo concursado
Empréstimo servidor público
Empréstimo aposentado
Empréstimo com desconto em folha
Crédito consignado
Empréstimo rápido
Empréstimo fácil aprovação
Empréstimo taxa baixa
Empréstimo 2 dias
```

### 2.3 Criar Anúncios
**Título 1**: `Empréstimo Consignado Seguro`
**Título 2**: `Aprovação em 2 Dias`
**Título 3**: `Taxas Competitivas`

**Descrição 1**: `Empréstimo com desconto direto em folha. Até 96 parcelas. Solicite agora!`
**Descrição 2**: `Taxa competitiva, aprovação rápida, sem burocracia. Clique e simule.`

**URL Final**: `https://belcred-landing.manus.space`

### 2.4 Configurar Conversão
1. Em **"Ferramentas"** → **"Conversões"**
2. Clique em **"Nova Ação de Conversão"**
3. Tipo: **"Website"**
4. Nome: `Lead Empréstimo`
5. Valor: R$ 50 (valor médio estimado de um lead)
6. Copie o código de rastreamento
7. Adicione ao `<head>` da landing page

---

## 3. Facebook Ads

### 3.1 Criar Campanha
1. Acesse https://business.facebook.com
2. Clique em **"Criar Campanha"**
3. Objetivo: **"Leads"**
4. Configurações:
   - **Orçamento diário**: R$ 50-100/dia
   - **Público**: Homens e mulheres, 25-65 anos, Brasil
   - **Posicionamento**: Feed, Stories, Reels

### 3.2 Segmentação de Público
**Interesse Principal**:
- Empréstimos
- Finanças pessoais
- Bancos
- Crédito

**Comportamento**:
- Pessoas interessadas em serviços financeiros
- Pessoas que fizeram compras online

**Dados Demográficos**:
- Idade: 25-65 anos
- Localização: Brasil
- Renda: Média-alta (se disponível)

### 3.3 Criar Anúncios
**Formato**: Carrossel ou Imagem Única

**Imagem**: Use a imagem de fundo do hero (`hero-background.png`)

**Título**: `Empréstimo Consignado Rápido e Seguro`

**Texto do Anúncio**:
```
Taxas competitivas, aprovação em 2 dias e desconto direto em folha.
✓ CLT
✓ Pensionista
✓ Concursado
✓ Aposentado

Solicite agora e simule seu empréstimo!
```

**CTA**: `Solicitar Agora`

**URL**: `https://belcred-landing.manus.space`

### 3.4 Configurar Pixel de Conversão
1. Em **"Ferramentas"** → **"Pixel do Facebook"**
2. Crie um novo pixel (se não tiver)
3. Copie o código
4. Adicione ao `<head>` da landing page
5. Configure evento de conversão: `Lead`

---

## 4. TikTok Ads

### 4.1 Criar Campanha
1. Acesse https://ads.tiktok.com
2. Clique em **"Criar Campanha"**
3. Objetivo: **"Conversões"** ou **"Tráfego"**
4. Configurações:
   - **Orçamento**: R$ 30-50/dia
   - **Público**: 18-50 anos, Brasil
   - **Posicionamento**: Feed do TikTok

### 4.2 Criar Vídeo Anúncio
**Duração**: 15-30 segundos

**Conteúdo**:
- Mostra o problema (dificuldade em conseguir empréstimo)
- Apresenta a solução (BelCred)
- CTA claro (Clique no link)

**Exemplo de Script**:
```
[0-5s] "Precisa de dinheiro rápido?"
[5-10s] "BelCred oferece empréstimo consignado com aprovação em 2 dias"
[10-15s] "Taxas competitivas, desconto em folha, sem burocracia"
[15-20s] "CLT, Pensionista, Concursado, Aposentado"
[20-30s] "Clique no link e simule agora! ⬇️"
```

### 4.3 Configurar Rastreamento
1. Instale TikTok Pixel
2. Configure evento de conversão
3. Rastreie cliques e formulários preenchidos

---

## 5. LinkedIn Ads (B2B - Opcional)

Se quiser atingir servidores públicos e concursados:

### 5.1 Criar Campanha
1. Acesse https://www.linkedin.com/campaign-manager
2. Objetivo: **"Geração de Leads"**
3. Configurações:
   - **Orçamento**: R$ 100-200/dia
   - **Público**: Servidores públicos, concursados
   - **Cargo**: Qualquer

### 5.2 Segmentação
- **Título do cargo**: Servidor público, concursado, funcionário público
- **Setor**: Governo, Educação, Saúde
- **Localização**: Brasil

---

## 6. Estratégia de Lances e Orçamento

### 6.1 Estrutura de Orçamento Recomendada
```
Orçamento Diário Total: R$ 250-500

Google Ads (Busca): R$ 100-150/dia
- CPC esperado: R$ 2-5
- Conversão esperada: 5-10% de cliques

Facebook Ads: R$ 100-150/dia
- CPC esperado: R$ 1-3
- Conversão esperada: 3-8% de cliques

TikTok Ads: R$ 50-100/dia
- CPC esperado: R$ 0.50-1.50
- Conversão esperada: 2-5% de cliques

LinkedIn Ads: R$ 50-100/dia (opcional)
- CPC esperado: R$ 3-8
- Conversão esperada: 5-10% de cliques
```

### 6.2 Otimização de Lances
- **Semana 1-2**: Deixe no automático para aprender
- **Semana 3+**: Ajuste manualmente baseado em performance
- **Objetivo**: CPA (Custo por Aquisição) de R$ 20-50 por lead

---

## 7. Monitoramento e Otimização

### 7.1 Métricas Importantes
```
CTR (Click-Through Rate): % de cliques vs impressões
  Alvo: > 2%

CPC (Custo por Clique): Quanto você paga por clique
  Alvo: < R$ 3

CPL (Custo por Lead): Quanto você paga por lead
  Alvo: R$ 20-50

Taxa de Conversão: % de visitantes que preenchem formulário
  Alvo: > 5%

ROAS (Return on Ad Spend): Retorno por real gasto
  Alvo: > 3x (R$ 3 de retorno por R$ 1 gasto)
```

### 7.2 Otimizações Diárias
- [ ] Verifique performance a cada 24h
- [ ] Pause anúncios com CTR < 1%
- [ ] Aumente orçamento de anúncios com CTR > 3%
- [ ] Teste diferentes textos e imagens
- [ ] Refine público-alvo baseado em dados

### 7.3 A/B Testing
**Teste 1: Imagens**
- Imagem A: Hero background
- Imagem B: Ícones + texto
- Duração: 3-5 dias
- Vencedor: Mantenha, perdedor: Pause

**Teste 2: Headlines**
- Headline A: "Empréstimo Consignado Rápido"
- Headline B: "Aprovação em 2 Dias"
- Duração: 3-5 dias
- Vencedor: Escale orçamento

**Teste 3: Público-alvo**
- Público A: 25-45 anos
- Público B: 45-65 anos
- Duração: 1 semana
- Vencedor: Aumente investimento

---

## 8. Checklist Pré-Lançamento

- [ ] Landing page publicada e testada
- [ ] Formulário funciona e captura dados
- [ ] Backend de captura configurado (Zapier/Make/CRM)
- [ ] Google Analytics instalado
- [ ] Google Ads conversion tracking ativo
- [ ] Facebook Pixel instalado
- [ ] TikTok Pixel instalado
- [ ] Termos de uso e privacidade visíveis
- [ ] Telefone/email de contato correto
- [ ] Orçamento aprovado
- [ ] Equipe de vendas pronta para receber leads

---

## 9. Escalamento (Após 2-4 Semanas)

Se CPL < R$ 50 e conversão > 5%:

1. **Aumente orçamento diário** em 20-30%
2. **Expanda público-alvo** para estados vizinhos
3. **Teste novas plataformas** (Pinterest, YouTube)
4. **Crie landing pages específicas** por modalidade (CLT, Pensionista, etc.)
5. **Implemente retargeting** para quem visitou mas não converteu

---

## 10. Troubleshooting

### Baixa taxa de cliques (CTR < 1%)
- Teste imagens diferentes
- Revise headlines
- Refine público-alvo
- Aumente bid

### Baixa taxa de conversão (< 3%)
- Melhore copy do formulário
- Reduza campos obrigatórios
- Teste CTA diferente
- Verifique se formulário funciona

### CPA muito alto (> R$ 100)
- Pause anúncios com baixo performance
- Refine público-alvo
- Teste landing page diferente
- Reduza bid

### Sem conversões
- Verifique se rastreamento está ativo
- Teste formulário manualmente
- Verifique backend de captura
- Aumente volume de tráfego

---

## 📞 Suporte e Recursos

- **Google Ads Help**: https://support.google.com/google-ads
- **Facebook Ads Help**: https://www.facebook.com/business/help
- **TikTok Ads Help**: https://ads.tiktok.com/help
- **Google Analytics**: https://analytics.google.com
- **Zapier**: https://zapier.com/help

---

## ⚠️ Avisos Legais

- Consulte um advogado antes de lançar campanhas de crédito
- Respeite LGPD e regulamentações do Banco Central
- Não faça promessas enganosas sobre taxas ou aprovação
- Mantenha registros de consentimento de dados
- Cumpra com regulamentações de publicidade financeira

