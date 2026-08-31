# LSAC Iași Website
  Construit cu React, TypeScript și Vite. Include UI modern (Radix UI/shadcn), Tailwind CSS și componente reutilizabile.

## Tehnologii
- React + TypeScript
- Vite
- Tailwind CSS
- Radix UI (componente shadcn/ui)
- lucide-react (iconite)

## Structură directoare (esențial)
```
.
├─ App.tsx
├─ index.html
├─ main.tsx
├─ components/
│  ├─ ui/                # Componente reutilizabile (shadcn)
│  ├─ figma/ImageWithFallback.tsx
│  ├─ Header.tsx, HeroSection.tsx, ...
├─ styles/globals.css
├─ public/
│  └─ images/            # Toate imaginile servite public
├─ tsconfig.json
├─ tailwind.config.js
├─ vite.config.ts
├─ .gitignore
├─ .gitattributes        # Git LFS pentru imagini mari
└─ README.md
```

## Cerințe
- Node.js LTS (>= 18 recomandat)
- npm (sau pnpm/yarn)

## Setup local (dezvoltare)
1. Instalează dependențele:
   ```bash
   npm install
   ```
2. Pornește serverul de dev:
   ```bash
   npm run dev
   ```
3. Accesează adresa afișată (implicit `http://localhost:5173`).

## Build de producție
```bash
npm run build
```
Rezultatul se generează în folderul `dist/`.

Previzualizează build-ul local:
```bash
npm run preview
```

## Deploy pe hosting (cPanel / shared hosting)
1. Rulează `npm run build` local.
2. În cPanel (sau FTP), urcă DOAR conținutul din `dist/` în folderul public al domeniului tău (ex: `public_html/nou.lsaciasi.ro`).
3. (Recomandat) Activează SSL/HTTPS din cPanel (AutoSSL / Let’s Encrypt).

### Notă importantă despre imagini
- Toate imaginile statice trebuie puse în `public/images/...` și referite în cod cu path absolut de la rădăcină:
  ```tsx
  <img src="/images/team/directors/nume.jpg" alt="Director" />
  ```
- Alternativ, imaginile importate în cod sunt copiate automat de Vite:
  ```tsx
  import photo from "../assets/photo.jpg"
  <img src={photo} />
  ```

În acest proiect imaginile sunt deja în `public/images/...`.

## Scripturi NPM
- `npm run dev` – server de dezvoltare
- `npm run build` – build de producție (Vite)
- `npm run preview` – previzualizare build

## Bune practici Git și fișiere ignorate
- `node_modules/` și `dist/` NU trebuie urcate în repo (sunt deja în `.gitignore`).
- Fișiere `.env` (dacă vor exista) trebuie ignorate.
- Pentru fișiere media mari, este configurat Git LFS prin `.gitattributes` pentru `public/images/**`.
  - Asigură-te că ai Git LFS instalat local și inițializat:
    ```bash
    git lfs install
    ```

## Inițializare repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <url-repo>
git push -u origin main
```

## Troubleshooting
- Eroare MIME type „application/octet-stream” la încărcare în browser:
  - Ai urcat sursele în loc de build. Rulează `npm run build` și urcă doar conținutul `dist/`.
- TypeScript compilează `vite.config.ts` (TS6305):
  - Rezolvat în `tsconfig.json` prin `exclude: ["vite.config.ts", "node_modules", "dist"]`.
- Importuri cu versiune în path (ex: `"lucide-react@0.487.0"`):
  - Nu folosi versiuni în importuri. Corect: `import { Icon } from "lucide-react"`.
- Avertismente `is declared but its value is never read`:
  - Sunt doar warnings. Curăță importurile nefolosite sau setează `noUnusedLocals`/`noUnusedParameters` la `false` dacă vrei să nu blocheze build-ul.
- Imagini nu apar în build:
  - Mută-le în `public/images/...` și folosește path-uri absolute (`/images/...`).

## Stil și UI
- Tailwind CSS configurat în `tailwind.config.js` și `styles/globals.css`.
- Componente UI bazate pe Radix + shadcn (în `components/ui/`).

## Licență și atribuții
- Vezi `Attributions.md` și `README-Images.md` pentru surse/atribuirile imaginilor și resurselor.

---