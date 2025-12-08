# 📦 Como Acessar o Projeto BelCred

## 📍 Localização do Projeto

O projeto está armazenado em:
```
/home/ubuntu/belcred-landing
```

---

## 🌐 Acessar Online (Dev Server)

O projeto está rodando em tempo real em:
```
https://3000-if3j839px7h67b41xew8t-505af3e3.manus-asia.computer
```

**Status**: ✅ Servidor rodando  
**Porta**: 3000  
**Ambiente**: Desenvolvimento (com hot reload)

---

## 💾 Baixar o Projeto Completo

### Opção 1: Via Checkpoint (Recomendado)
O projeto foi salvo em um checkpoint que pode ser restaurado:

**Checkpoint ID**: `manus-webdev://9b3a4219`

Para restaurar em outro ambiente:
1. Acesse o painel Manus
2. Clique em "Restaurar Checkpoint"
3. Selecione o checkpoint `9b3a4219`

### Opção 2: Via Git
Se você tem acesso ao repositório Git:

```bash
cd /home/ubuntu/belcred-landing
git clone <url-do-repositorio>
cd belcred-landing
pnpm install
pnpm dev
```

### Opção 3: Download Manual
Você pode fazer download dos arquivos principais:

**Arquivos Essenciais:**
```
belcred-landing/
├── client/
│   ├── public/images/
│   │   ├── belcred-logo.png
│   │   ├── hero-background.png
│   │   ├── loan-types-illustration.png
│   │   └── trust-badge-background.png
│   ├── src/
│   │   ├── pages/Home.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── [outros arquivos de configuração]
```

---

## 🚀 Executar Localmente

### Pré-requisitos
- **Node.js 18+** - https://nodejs.org
- **pnpm** - `npm install -g pnpm`

### Passos

```bash
# 1. Navegue para o diretório
cd /home/ubuntu/belcred-landing

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev

# 4. Abra no navegador
# http://localhost:3000
```

### Comandos Disponíveis

```bash
# Desenvolvimento (com hot reload)
pnpm dev

# Build para produção
pnpm build

# Visualizar build localmente
pnpm preview

# Iniciar servidor de produção
pnpm start

# Verificar tipos TypeScript
pnpm check

# Formatar código
pnpm format
```

---

## 📁 Estrutura de Arquivos

```
belcred-landing/
│
├── 📄 Documentação
│   ├── ESTRUTURA_PROJETO.md      ← Explicação técnica completa
│   ├── GUIA_PUBLICACAO.md        ← Como publicar no Manus
│   ├── GUIA_TRAFEGO_PAGO.md      ← Estratégia de Google Ads, Facebook, etc
│   ├── ideas.md                  ← Brainstorm de design
│   └── COMO_ACESSAR_PROJETO.md   ← Este arquivo
│
├── 📦 Código Frontend (React)
│   └── client/
│       ├── public/
│       │   └── images/           ← Imagens estáticas
│       │       ├── belcred-logo.png
│       │       ├── hero-background.png
│       │       ├── loan-types-illustration.png
│       │       └── trust-badge-background.png
│       ├── src/
│       │   ├── pages/
│       │   │   ├── Home.tsx      ← Landing page principal
│       │   │   └── NotFound.tsx
│       │   ├── components/       ← Componentes reutilizáveis
│       │   ├── contexts/         ← React Contexts
│       │   ├── hooks/            ← Custom Hooks
│       │   ├── lib/              ← Utilitários
│       │   ├── App.tsx           ← Router principal
│       │   ├── main.tsx          ← Entry point
│       │   └── index.css         ← Estilos globais
│       └── index.html            ← HTML principal
│
├── 📦 Código Backend (Node.js)
│   └── server/
│       └── index.ts              ← Servidor Express
│
├── 🔧 Configurações
│   ├── package.json              ← Dependências npm
│   ├── pnpm-lock.yaml            ← Lock file (não editar)
│   ├── vite.config.ts            ← Configuração Vite
│   ├── tsconfig.json             ← Configuração TypeScript
│   ├── tsconfig.node.json        ← TypeScript para Node
│   ├── components.json           ← Configuração shadcn/ui
│   ├── .prettierrc                ← Configuração Prettier
│   └── .gitignore                ← Git ignore
│
└── 📁 Outros
    ├── shared/                   ← Código compartilhado
    ├── patches/                  ← Patches de dependências
    ├── dist/                     ← Build de produção (gerado)
    └── node_modules/             ← Dependências (gerado)
```

---

## 🎯 Arquivos Principais

### Landing Page (`client/src/pages/Home.tsx`)
- **Tamanho**: ~400 linhas
- **Contém**: Hero, Modalidades, Depoimentos, Formulário, Footer
- **Componentes**: Button, Card, Input, Textarea, Select
- **Ícones**: Lucide React

### Estilos Globais (`client/src/index.css`)
- **Framework**: TailwindCSS 4
- **Cores**: Variáveis CSS customizadas
- **Tipografia**: Playfair Display + Inter

### Configuração Vite (`vite.config.ts`)
- **Plugins**: React, TailwindCSS, JSX Loc
- **Alias**: `@` aponta para `client/src`
- **Port**: 3000

---

## 🔍 Verificar Status

### Verificar se está rodando
```bash
# Verifique se a porta 3000 está em uso
lsof -i :3000

# Ou acesse
curl http://localhost:3000
```

### Verificar dependências
```bash
# Listar dependências instaladas
pnpm list

# Verificar versões
pnpm list --depth=0
```

### Verificar tipos TypeScript
```bash
pnpm check
```

---

## 🐛 Troubleshooting

### Porta 3000 já está em uso
```bash
# Encontrar processo usando porta 3000
lsof -i :3000

# Matar processo
kill -9 <PID>

# Ou usar porta diferente
pnpm dev -- --port 3001
```

### Erro ao instalar dependências
```bash
# Limpar cache pnpm
pnpm store prune

# Reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build falha
```bash
# Verificar tipos
pnpm check

# Limpar cache Vite
rm -rf dist

# Rebuild
pnpm build
```

### Hot reload não funciona
```bash
# Reiniciar servidor
pnpm dev

# Ou limpar cache do navegador (Ctrl+Shift+Delete)
```

---

## 📊 Informações do Projeto

| Aspecto | Valor |
|---------|-------|
| **Nome** | belcred-landing |
| **Versão** | 1.0.0 |
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Linguagem** | TypeScript 5.6 |
| **Estilos** | TailwindCSS 4 |
| **Runtime** | Node.js 18+ |
| **Package Manager** | pnpm 10.4 |
| **Licença** | MIT |

---

## 📞 Suporte

### Documentação Técnica
- 📄 `ESTRUTURA_PROJETO.md` - Arquitetura e configuração
- 📄 `GUIA_PUBLICACAO.md` - Como publicar
- 📄 `GUIA_TRAFEGO_PAGO.md` - Campanhas pagas

### Links Úteis
- **Vite**: https://vitejs.dev
- **React**: https://react.dev
- **TailwindCSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org

### Contato
Para dúvidas sobre o projeto:
- Acesse: https://help.manus.im
- Ou consulte a documentação incluída

---

## ✅ Checklist Rápido

- [ ] Node.js 18+ instalado
- [ ] pnpm instalado
- [ ] Projeto clonado/baixado
- [ ] `pnpm install` executado
- [ ] `pnpm dev` rodando
- [ ] Navegador abrindo http://localhost:3000
- [ ] Formulário testado
- [ ] Imagens carregando
- [ ] Responsivo em mobile

---

**Última atualização**: 08/12/2024  
**Versão do Checkpoint**: 9b3a4219

