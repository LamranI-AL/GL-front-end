# Étape 1 : Utiliser une image officielle Node.js comme image de base
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Utiliser une image minimale pour exécuter l'application
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires depuis l'étape de construction
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
