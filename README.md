# La belle vie au kilo
Plugin Chrome permettant d'afficher les prix au kilo (ou au litre) des produits disponibles sur le site labellevie.com

**Attention il s'agit du premier plugin chrome que je réalise, je l'ai créé dans un but d'auto apprentissage. Il contient des bugs actuellement sur certains prix. Se référer à la section "Bugs" pour plus d'infos**

## Installation
Le plugin est en cours de dévellopement (elle n'est pas empaqueté), elle necessite de passer le naviguateur en mode développeur.
```bash
cd folder/to/save/plugin
git clone ...
```

Dans Chrome (ou naviguateur basé sur Chromium)
```
chrome://extensions/
```
Cliquez sur "Charger l'extension non empaquetée" et séléctionnez folder/to/save/plugin

## Usage
Automatique.

## Fonctionnement
Le plugin recupère l'information concernant le poids (g, kg, L, cl, ml) dans le nom de l'article et son prix. Un produit en croix permet de calculer le prix au kilo ou au litre.

Les produits à l'unité comme les oeufs sont aussi pris en compte.
Le resultat est injecté à côté du prix.

## Bugs
Quelques bugs connus :

### Descriptions non cohérentes
Sur le site les descriptions de produits ne sont pas toujours cohérentes, par exemple :
- Piccolinis lardons et crème, Buitoni (x 9, 270 g )
- Pizzetta 4 Formaggi, Buitoni (x 2, 185 g)

	*Dans le premier cas le poids total de l'article est 270g, dans le seconds il est de 370g (2 * 185).
Il a été choisi de considerer le premier cas comme étant valide, n'aillant pas pour le moment d'idée pour différencier le bon choix à faire.*

- Feuilletés au Leerdamer et jambon, La Compagnie Artique (4 x 80 g)

	*Ce cas de figure n'est pas pris en compte, ne pas se fier au résultat.*

### Lazy load
Quand de nouveaux articles sont chargés via requete ajax le plugin ne calcul pas les prix de ces nouveaux articles.

## Optimisations
Sur des pages avec énormément d'article (2000), l'affichage du prix au kilo est un peu long (cependant le traitement ne gène pas la naviguation).

**Il est cependant conseiller d'utiliser les sous catégories plutôt que les catégories générales**