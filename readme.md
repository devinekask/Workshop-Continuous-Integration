![Deploy](https://github.com/devinekask/techworkshoptest/workflows/Deploy/badge.svg)
![Test](https://github.com/devinekask/techworkshoptest/workflows/Test/badge.svg)

# Creative collaborative -pull request oriented- coding

Gebaseerd op het prachtige [Solving Sol](https://solvingsol.com/) met enkele collaborative coding en CI insteken.

We pretenderen niet dat we het werk van [Sol LeWitt](https://en.wikipedia.org/wiki/Sol_LeWitt) kunnen evenaren, maar zijn gefascineerd door het feit dat de instructies en de interpretatie hiervan tot verschillende resultaten kunnen leiden.

We moedigen jou aan om niet alleen een oplossing aan te maken, maar ook om een nieuwe instructie toe te voegen.

Laat niet na om een oplossing toe te voegen voor een instructie die al opgelost is: meerdere interpretaties zijn inherent aan dit concept.

## Hoe kan ik een oplossing toevoegen?

- Maak een fork van de repository
- Voeg jouw oplossing toe in de `solutions` map

  - Maak gebruik van de `template` die eveneens in de solutions map te vinden is.
  - Hanteer de volgende naamgeving voor de mappenstructuur:
    `/solutions/[nummer instructie]/[Github username]/`

    ```tree
    ├── solutions
    │   ├── 333
    │   │   └── JohnDoe
    │   │       ├── index.html
    │   │       └── solution.js
    ```

- Gebruik de solution.js om jouw oplossing in te maken.
- Pas de index.html aan met jouw naam en instructie nummer
- Start een [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (of dergelijke tool), ga naar jouw solution, zo kan je jouw resultaat zien.
- Zorg er voor dat de tests slagen (`yarn test`)
- Commit, push en doe een pull request op de originele repo.
- Indien jouw pull request goed gekeurd is, volgt er een merge met de master. Jouw oplossing wordt dan automatisch toe gevoegd aan de startpagina.

# Richtlijnen

- Maak zoveel mogelijk gebruik van het volledige vlak
- Tenzij anders vermeld heeft een vorm (rechthoek, cirkel...) geen fill color
- Een lijn is 1px breed
- Een `puntje` heeft een straal (radius) van 1 à 2
- Een `stip` heeft een straal (radius) van 4 à 5
- Een `bol` heeft een straal (radius) van >10
- Marges/spacers zijn meestal een veelvoud van 5

## Kleuren

![#00695c](https://placehold.it/15/00695c/000000?text=+) Groen

![#2196f3](https://placehold.it/15/2196f3/000000?text=+)
Blauw

![#0d47a1](https://placehold.it/15/0d47a1/000000?text=+)
Donkerblauw

![#ef6c00](https://placehold.it/15/ef6c00/000000?text=+)
Oranje

![#b71c1c](https://placehold.it/15/b71c1c/000000?text=+)
Rood

![#4fc3f7](https://placehold.it/15/4fc3f7/000000?text=+)
Lichtblauw

- Beperk je tot deze kleuren.
- Probeer de volgorde te behouden waar het kan.
- Je mag het lichtblauw ook vooraan extra toevoegen zodat je een reeks van 7 bekomt met hetzelfde start- en eindkleur.
