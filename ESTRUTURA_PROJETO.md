# 📁 Estrutura Completa do Projeto BelCred - React + Vite

## Visão Geral da Arquitetura

Este é um projeto **React 19 + Vite + TypeScript + TailwindCSS** otimizado para landing pages com tráfego pago.

```
belcred-landing/
├── client/                    # Frontend React
│   ├── public/               # Assets estáticos
│   │   └── images/          # Imagens (hero, logo, etc)
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   └── ui/         # Componentes shadcn/ui
│   │   ├── pages/          # Páginas (Home, NotFound)
│   │   ├── contexts/       # React Contexts
│   │   ├── hooks/          # Custom Hooks
│   │   ├── lib/            # Funções utilitárias
│   │   ├── App.tsx         # Router principal
│   │   ├── main.tsx        # Entry point React
│   │   └── index.css       # Estilos globais + Tailwind
│   └── index.html          # HTML principal
├── server/                   # Backend (Express)
│   └── index.ts            # Servidor Express
├── shared/                   # Código compartilhado
│   └── const.ts            # Constantes
├── package.json            # Dependências npm
├── vite.config.ts          # Configuração Vite
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.ts      # Configuração TailwindCSS
├── postcss.config.js       # Configuração PostCSS
└── .prettierrc             # Configuração Prettier

```

---

## 📦 Dependências Principais

### Runtime Dependencies
```json
{
  "react": "^19.0.0",              // Framework UI
  "react-dom": "^19.0.0",          // Renderização DOM
  "wouter": "^3.3.5",              // Roteamento leve
  "lucide-react": "^0.453.0",      // Ícones
  "framer-motion": "^12.23.22",    // Animações
  "react-hook-form": "^7.64.0",    // Gerenciamento de formulários
  "zod": "^4.1.12",                // Validação de schemas
  "sonner": "^2.0.7",              // Notificações (toasts)
  "tailwind-merge": "^3.3.1",      // Merge de classes Tailwind
  "axios": "^1.12.0"               // HTTP client
}
```

### Dev Dependencies
```json
{
  "vite": "^7.1.7",                // Build tool
  "@vitejs/plugin-react": "^5.0.4", // Plugin React para Vite
  "@tailwindcss/vite": "^4.1.3",   // Plugin TailwindCSS
  "tailwindcss": "^4.1.14",        // Framework CSS
  "typescript": "5.6.3",           // Tipagem estática
  "esbuild": "^0.25.0",            // Bundler
  "vitest": "^2.1.4"               // Test runner
}
```

---

## ⚙️ Arquivos de Configuração

### 1. `vite.config.ts` - Configuração do Vite

```typescript
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
  },
  server: {
    port: 3000,
    host: true,
  },
});
```

**O que faz:**
- Define React como plugin principal
- Configura TailwindCSS
- Define alias `@` para importações
- Define porta 3000 para dev server
- Configura output de build em `dist/public`

### 2. `tsconfig.json` - Configuração TypeScript

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "lib": ["esnext", "dom", "dom.iterable"],
    "jsx": "preserve",
    "strict": true,
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"]
    }
  },
  "include": ["client/src/**/*", "shared/**/*", "server/**/*"]
}
```

**O que faz:**
- Ativa modo strict (mais seguro)
- Define JSX como "preserve" (Vite cuida)
- Configura path aliases
- Inclui tipagem do DOM

### 3. `tailwind.config.ts` - Configuração TailwindCSS

```typescript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores customizadas
      },
    },
  },
  plugins: [],
} satisfies Config;
```

**O que faz:**
- Define arquivos a processar
- Configura tema e cores
- Purga CSS não utilizado

### 4. `package.json` - Dependências e Scripts

```json
{
  "name": "belcred-landing",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build && esbuild server/index.ts --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "preview": "vite preview --host",
    "check": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

**Scripts disponíveis:**
- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Inicia servidor em produção
- `npm run check` - Verifica tipos TypeScript
- `npm run format` - Formata código com Prettier

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)

### Passos

```bash
# 1. Clonar ou acessar o diretório
cd /home/ubuntu/belcred-landing

# 2. Instalar dependências
pnpm install

# 3. Iniciar servidor de desenvolvimento
pnpm dev

# 4. Acessar em http://localhost:3000
```

### Build para Produção

```bash
# Build
pnpm build

# Verificar build localmente
pnpm preview

# Ou iniciar servidor de produção
pnpm start
```

---

## 📝 Estrutura de Pastas Detalhada

### `client/src/pages/`
Componentes de página (cada rota tem um arquivo):
- `Home.tsx` - Landing page principal
- `NotFound.tsx` - Página 404

### `client/src/components/`
Componentes reutilizáveis:
- `ui/` - Componentes shadcn/ui (Button, Card, Input, etc)
- `ErrorBoundary.tsx` - Tratamento de erros

### `client/src/contexts/`
React Contexts para estado global:
- `ThemeContext.tsx` - Gerencia tema (light/dark)

### `client/src/hooks/`
Custom Hooks reutilizáveis

### `client/src/lib/`
Funções utilitárias e helpers

### `client/public/images/`
Imagens estáticas:
- `belcred-logo.png` - Logo oficial
- `hero-background.png` - Fundo hero
- `loan-types-illustration.png` - Ilustração modalidades
- `trust-badge-background.png` - Fundo confiança

---

## 🎨 Sistema de Cores (CSS Variables)

Definido em `client/src/index.css`:

```css
:root {
  /* BelCred Brand Colors */
  --belcred-primary: #1e40af;      /* Azul profundo */
  --belcred-secondary: #f59e0b;    /* Amarelo ouro */
  --belcred-success: #10b981;      /* Verde sucesso */
  --belcred-light-bg: #f8fafc;     /* Fundo claro */
  --belcred-dark-text: #1e293b;    /* Texto escuro */
}
```

Usados em componentes:
```tsx
<button className="bg-blue-700 hover:bg-blue-800">
  Solicitar Agora
</button>
```

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
pnpm dev              # Inicia dev server com hot reload

# Build
pnpm build            # Build otimizado para produção
pnpm preview          # Visualiza build localmente

# Qualidade
pnpm check            # Verifica tipos TypeScript
pnpm format           # Formata código com Prettier

# Dependências
pnpm add <package>    # Adiciona nova dependência
pnpm update           # Atualiza dependências
pnpm remove <package> # Remove dependência
```

---

## 📊 Performance

### Otimizações Implementadas
- ✅ Code splitting automático com Vite
- ✅ Tree-shaking de código não utilizado
- ✅ Lazy loading de componentes
- ✅ Minificação com esbuild
- ✅ CSS purging com Tailwind
- ✅ Image optimization (imagens em `/public`)

### Métricas Esperadas
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

---

## 🔐 Segurança

### Práticas Implementadas
- ✅ TypeScript strict mode ativado
- ✅ Validação com Zod
- ✅ Sanitização de inputs em formulários
- ✅ CORS configurado no servidor
- ✅ Helmet.js para headers de segurança (no server)

---

## 📱 Responsividade

Breakpoints Tailwind utilizados:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Exemplo:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsivo: 1 coluna mobile, 2 tablet, 3 desktop */}
</div>
```

---

## 🧪 Testes (Vitest)

Configuração pronta para testes unitários:

```bash
# Executar testes
pnpm test

# Watch mode
pnpm test --watch

# Coverage
pnpm test --coverage
```

---

## 📚 Recursos Adicionais

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **TailwindCSS Docs**: https://tailwindcss.com
- **TypeScript Docs**: https://www.typescriptlang.org
- **shadcn/ui**: https://ui.shadcn.com

---

## ✅ Checklist de Deploy

- [ ] `pnpm check` sem erros
- [ ] `pnpm build` sem erros
- [ ] `pnpm preview` funciona
- [ ] Imagens carregam corretamente
- [ ] Formulário funciona
- [ ] Links internos funcionam
- [ ] Responsivo em mobile
- [ ] Performance OK (PageSpeed > 80)
- [ ] Sem console errors
- [ ] Sem console warnings

