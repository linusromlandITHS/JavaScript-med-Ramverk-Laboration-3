# Utvecklingsguide

## Navigation

Först måste du se till att du är i rätt mapp. <br />

För att se vart du står i terminalen just nu, kör följande kommando i **en terminal**

```
pwd
```

**Observera:** Om texten du får tillbaka **_INTE_** slutar på `/JavaScript-med-Ramverk-Laboration-3` navigera till rätt mapp först.

## Installera dependencies

För att installera nödvändiga dependecies, kör följande kommando i **en terminal**

```
npm install
```

**Observera:** Detta behöver göras första gången du clonar projektet (`git clone`) och kan även behöva göras efter en `git pull`.

## Köra projektet i utvecklingsläge

För att starta projektet så den syns i webbläsaren, kör följande kommando i **en terminal**

```
npm run dev
```

Sedan kan du i din webbläsare navigera till [localhost:3000](http://localhost:3000/)

## Köra ESLint

För att kolla om projektet följer ESLint's Regler, kör följande kommando i **en terminal**

```
npm run lint
```

Sedan ser du i terminalen om du får några eventuella errors.

## Lägga till nya produkter i databasen

För att lägga till nya produkter i projektets databas, kör följande kommando i **en terminal**

```
npm run add
```

Följ sedan instruktionerna i terminalen.
