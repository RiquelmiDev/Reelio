# Reelio

Reelio é uma plataforma para explorar, favoritar e comentar filmes, com interface moderna e responsiva.

## Descrição

Este projeto é um MVP (Produto Mínimo Viável) de uma aplicação web para catálogo de filmes, permitindo aos usuários visualizar detalhes, favoritar e comentar sobre filmes. Utiliza Next.js, React, TailwindCSS e integrações modernas para UI.

[Veja o projeto](https://reelio-rosy.vercel.app/)  

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/RiquelmiDev/Reelio.git
   cd Reelio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Obtenha sua API Key do TMDB:**
   - Acesse [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) e faça login ou crie uma conta.
   - Clique em "Create" para gerar uma nova API Key (v4 auth token).
   - Copie o token de autenticação v4 (Bearer Token).
   - Se precisar de um passo a passo, veja este tutorial: [Como obter sua API Key do TMDB](https://www.educative.io/courses/movie-database-api-python/set-up-the-credentials)

4. **Configure o arquivo `.env`:**
   - Renomeie o arquivo `.env.example` para `.env` na raiz do projeto.
   - Abra o `.env` e adicione a seguinte linha, substituindo `SUA_API_KEY_AQUI` pelo token copiado:
     ```
     NEXT_PUBLIC_TMDB_TOKEN=SUA_API_KEY_AQUI
     ```

## Execução

- **Modo desenvolvimento:**
  ```bash
  npm run dev
  # ou
  yarn dev
  ```

- **Build para produção:**
  ```bash
  npm run build
  npm start
  # ou
  yarn build
  yarn start
  ```

## Estrutura de Pastas

```
reelvault_mvp/
├── public/                # Arquivos estáticos (imagens, ícones, etc)
│   └── icons/
├── src/
│   ├── _components/       # Componentes reutilizáveis
│   │   └── ui/            # Componentes de UI (botão, input, etc)
│   ├── _lib/              # Funções utilitárias e helpers
│   ├── api/               # Integração com APIs externas
│   └── app/               # Páginas e layouts do Next.js
│       ├── movies/        # Páginas relacionadas a filmes
│       ├── favorites/     # Página de favoritos
│       └── ...
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---