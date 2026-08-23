
  # Modern Portfolio Style

  This is a code bundle for Modern Portfolio Style. The original project is available at https://www.figma.com/design/rDRuw34Fw6zSAFW7G6aW7J/Modern-Portfolio-Style.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Déploiement Docker

  1. Construire l'image Docker :
     ```bash
     docker build -t portfolio-app .
     ```
  2. Lancer le conteneur :
     ```bash
     docker run -d -p 80:80 --name portfolio-app portfolio-app
     ```

  Le site sera accessible sur `http://localhost`.
  