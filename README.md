<div align="center">
  <img src="./assets/Cover.png" alt="Profile Header" width="full">
</div>

<br></br>

# 💧 Olho D'água - Front-end

Este é o repositório front-end do projeto **Olho D'água**, uma aplicação focada no monitoramento inteligente da qualidade da água e temperatura de bebedouros utilizando sistemas embarcados.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as melhores e mais modernas tecnologias do ecossistema front-end:

* **[Next.js](https://nextjs.org)** - Framework React para renderização e rotas.
* **[React](https://react.dev/)** - Biblioteca de construção de interfaces.
* **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária e design responsivo (Mobile-First).
* **[Lucide React](https://lucide.dev/)** - Ícones limpos e consistentes.
* **[Jest](https://jestjs.io/pt-BR/) & React Testing Library** - Testes unitários para garantir a qualidade dos componentes.
* **[Docker](https://www.docker.com/) & Docker Compose** - Containerização para facilitar a execução em qualquer ambiente.

## ✨ Funcionalidades

* 🌡️ **Monitoramento de Temperatura:** Cards visuais e dinâmicos que mudam de cor (Azul, Amarelo, Laranja) conforme a temperatura atual da água.
* 🚰 **Status dos Filtros:** Acompanhamento em tempo real da vida útil dos filtros (Excelente, Bom, Atenção, Manutenção, Substituir).
* 🔍 **Busca e Filtros Dinâmicos:** Barra de pesquisa inteligente com seleção de múltiplos locais.
* ⚡ **Performance Otimizada:** Sistema de cache de 5 minutos (via `sessionStorage`) para requisições da API, economizando dados e garantindo carregamento instantâneo.
* 📱 **Design Responsivo:** Interface fluida que se adapta perfeitamente a celulares, tablets e desktops.

---

## 🛠️ Como executar o projeto

Você pode rodar este projeto de duas maneiras: a forma tradicional (via Node) ou utilizando o Docker.

### Pré-requisitos
* Node.js (v22 ou superior)
* Docker e Docker Desktop (Para a execução via containers)

### Opção 1: Rodando localmente com Node.js

1. Instale as dependências do projeto:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento::
``` bash
npm run dev
```

3. Abra http://localhost:3001 no seu navegador.

### Opção 2: Rodando com Docker Compose (Recomendado)

Se você não quiser instalar dependências localmente, pode subir a aplicação inteira com apenas um comando usando o Docker Compose.
1. Certifique-se de que o Docker está aberto e rodando no seu computador.
2. Na raiz do projeto, execute:
``` bash
docker compose up -d
```
3. Abra http://localhost:3001 no seu navegador.

---

## 🧪 Rodando os Testes Unitários

O projeto possui cobertura de testes para garantir que as lógicas de interface (como a mudança de temas baseada na temperatura) funcionem perfeitamente.

Para rodar a suíte de testes do Jest, utilize o comando:
``` bash
npm run test
```