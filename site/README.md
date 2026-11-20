# Portfolio de Melek Khlass

Site statique léger (HTML, CSS, un peu de JavaScript, aucune dépendance), bilingue FR/EN.
Hébergé sur Vercel : https://melek-khlass.vercel.app

- `index.html` : tout le contenu (chaque texte existe en `lang="fr"` et `lang="en"`)
- `styles.css`, `main.js` : style, bouton FR/EN, vidéos de démo
- `assets/og.png` : image d'aperçu affichée quand le lien est partagé sur LinkedIn
- `assets/demos/` : vidéos de démo des projets (voir le LISEZMOI du dossier)
- `Dockerfile`, `nginx.conf` : image Docker pour servir le site
- `.github/workflows/ci.yml` : CI GitHub Actions (validation HTML, build Docker, test du conteneur)

Lien direct en anglais : https://melek-khlass.vercel.app/?lang=en

## Lancer en local avec Docker

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
# puis ouvrir http://localhost:8080
```
