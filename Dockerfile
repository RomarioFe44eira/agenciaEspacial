# ESTÁGIO 1: Build da Aplicação
# Utiliza uma imagem Node.js para compilar o projeto Angular.
FROM node:lts-alpine as build

# Define o diretório de trabalho dentro do container.
WORKDIR /app

# Copia os arquivos de configuração de dependências.
COPY package.json package-lock.json ./

# Instala as dependências.
RUN npm install

# Copia o restante do código da aplicação.
COPY . .

# Constrói a aplicação para produção.
# 'my-angular-app' deve ser substituído pelo nome da pasta de output do seu build
# que é geralmente definido no 'angular.json' ou o nome do seu projeto.
RUN npm run build -- --output-path=./dist/my-angular-app --configuration=production

# ESTÁGIO 2: Servindo com Nginx
# Utiliza a imagem leve do Nginx para servir os arquivos estáticos.
FROM nginx:stable-alpine

# Remove a configuração padrão do Nginx.
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração customizado do Nginx (ver exemplo abaixo).
# Certifique-se de ter um arquivo 'nginx.conf' na pasta do seu projeto.
COPY nginx.conf /etc/nginx/conf.d/

# Copia os arquivos de build da aplicação do Estágio 1 para o diretório de serviço do Nginx.
# Certifique-se que o caminho '/app/dist/my-angular-app' corresponde ao caminho de saída do seu build.
COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html

# Expõe a porta que o Nginx está usando.
EXPOSE 80

# O comando padrão do Nginx já é rodar o servidor.
CMD ["nginx", "-g", "daemon off;"]
