# Gestor de Bolso - Personal Finance Manager

Um gerenciador de gastos pessoais moderno com autenticação via Supabase.

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no [Supabase](https://supabase.com)

### Instalação

1. **Clone o projeto**
```bash
cd gestor-de-bolso-webapp
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o Supabase**

   a. Crie um projeto em [supabase.com](https://supabase.com)

   b. Vá para **Settings → API** e copie:
      - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
      - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

   c. Cole em `.env`:
```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

4. **Teste a autenticação Google (opcional)**
   - Vá para **Authentication → Providers** no Supabase
   - Ative Google OAuth
   - Adicione as credenciais do Google Cloud Console

### Executar Localmente

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Páginas Disponíveis

- **`/`** - Home
- **`/auth/login`** - Login com email/senha e Google
- **`/auth/signup`** - Cadastro
- **`/dashboard`** - Dashboard (protegido)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── auth/               # Páginas de autenticação
│   │   ├── login/
│   │   ├── signup/
│   │   └── callback/       # Callback OAuth
│   ├── dashboard/          # Dashboard protegido
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             # Componentes React
├── lib/
│   └── supabase.ts        # Cliente Supabase
└── styles/
```

## 🔧 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **Supabase** - Backend e autenticação
- **React Hooks** - State management

## ✨ Funcionalidades Planejadas

- [ ] Dashboard de transações
- [ ] Gráficos de despesas
- [ ] Categorias de gastos
- [ ] Orçamento mensal
- [ ] Relatórios
- [ ] Suporte a múltiplas contas bancárias

## 📝 Notas de Desenvolvimento

### Portas Usadas
- **3000** - Desenvolvimento (padrão Next.js)
- **57372** - Será usado para callbacks OAuth (configurável)

### Variáveis de Ambiente
As variáveis de ambiente públicas (prefixo `NEXT_PUBLIC_`) são expostas ao navegador.

Variáveis privadas devem ser adicionadas apenas em `.env.local` ou `.env.server.local`.

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Deploy automático com `git push`
```

### Docker
```bash
docker build -t gestor-de-bolso .
docker run -p 3000:3000 gestor-de-bolso
```

## 📞 Suporte

Para dúvidas sobre Supabase, consulte a [documentação](https://supabase.com/docs)

## 📄 Licença

MIT
