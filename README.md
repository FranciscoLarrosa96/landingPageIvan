# 💻 Reparaciones Iván - Landing Page

Landing page profesional y moderna para **Reparaciones Iván**, técnico especializado en PC.  
Hecha con **Angular 19**, **Tailwind CSS**, y **LightGallery**. Optimizada para performance, responsive, y galería de trabajos reales.


---

## 🚀 Tecnologías usadas

- ⚡ Angular 19
- 🎨 Tailwind CSS
- 🖼️ AVIF + LightGallery.js
- 📱 Responsive + animaciones suaves
- 🧠 Lazy loading y performance optimizada

---

## 🧩 Estructura del proyecto

```bash
/src
 ┣ assets/
 ┃ ┣ img/ → Imágenes optimizadas en AVIF
 ┃ ┗ videos/ → Video del header
 ┣ app/ → Componentes de la landing
 ┗ styles.css → Tailwind + estilos globales
```

---

## 📦 Instalación local

```bash
git clone https://github.com/TU_USUARIO/landingPageIvan.git
cd landingPageIvan
npm install
ng serve
```

Abrí tu navegador en `http://localhost:4200`

---

## 🛠️ Build y Deploy a GitHub Pages

```bash
# Instalar CLI para deploy en GitHub Pages (una sola vez por proyecto)
ng add angular-cli-ghpages

# Build para producción
ng build --configuration production --base-href "/landingPageIvan/"

# Con nuevo dominio 
ng build --configuration production --base-href "/"

# Hacer deploy
npx angular-cli-ghpages --dir=dist/ivan-page/browser/
```

Esto genera la build en `dist/ivan-page` y la sube al branch `gh-pages`.

> Tu landing estará online en:  
> `https://TU_USUARIO.github.io/landingPageIvan/`

---

## 📸 LightGallery

La galería de trabajos reales está implementada con [LightGallery](https://www.lightgalleryjs.com/), incluye:

- Vista previa
- Animaciones suaves
- Soporte mobile
- Lazy load para mejor rendimiento

---

## 🧪 Notas técnicas

- OutputPath personalizado: `"dist/ivan-page"`
- Imágenes convertidas y comprimidas con [Squoosh](https://squoosh.app)
- Soporte de video `.mp4` para el header
- Compatible con navegadores modernos

---

## 💬 Contacto

Proyecto creado para **Iván**, el mejor reparador de PCs de la zona.  
Frontend por Francisco Larrosa.

---

## 🧠 Scripts útiles

```json
// package.json
"scripts": {
  "start": "ng serve",
  "build": "ng build --configuration production --base-href "/landingPageIvan/"",
  "deploy": "npx angular-cli-ghpages --dir=dist/ivan-page"
}
```

> Con eso hacés deploy en 1 comando: `npm run deploy`

---

## 📢 Licencia

Este proyecto es de uso libre para mostrar trabajos freelance o ayudar a colegas técnicos.  
Si lo usás, ¡dame un shoutout y compartime el resultado! 😎