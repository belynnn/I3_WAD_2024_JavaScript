1. Afin de bien commencer un projet, nous allons créer un nouveau dossier ayant pour nom :
    exo_01

2. Dans le dossier exo_01 nous allons créer le fichier :
    index.html

3. À l'intérieur du fichier index.html, nous allons écrire le caractère :
    !
   Et sélectionner la première selection.
   Cela va générer un bout de code automatiquement.
   Cela est géré par l'IDE (Visual Studio Code), via les abréviations "Emmet".

4. Une fois ce bout de code généré dans le fichier index.html, nous allons changer la valeur de l'attribut " lang ", de la balise " <html> ", en ligne 2 :
        <html lang="en">
   par
        <html lang="fr-be">
   Cela permettra au navigateur d'enclencher une traduction automatique si cette option est validée par l'utilisateur, dans le cas où nous inscrivons des textes en anglais.

5. En ligne 6, nous allons donner un nouveau titre à notre document HTML en corrélation avec l'exercice, par exemple :
        <title>JavaScript, les prémices</title>

6. Nous allons cliquer à la fin de la ligne 6, appuyer sur la touche [Enter] de notre clavier, et allons écrire :
        script
   Et sélectionner la sélection :
        script:src
   Ou simplement réécrire la phrase :
        <script src=""></script>

7. À l'intérieur de la balise script, nous allons introduire une valeur dans l'attribut src, il s'agit du chemin dans lequel nous allons créer le fichier contenant notre code JavaScript, par exemple :
        <script src="./assets/js/main.js"></script>

8. Une fois cette ligne de code inscrite dans notre fichier index.html, nous allons rester appuyé sur la touche [CTRL] + [Clique_Gauche], directement sur le bout de code :
        ./assets/js/main.js
   Cliquez sur le bouton [Create File] une fois sur le CTRL+CliqueGauche effectué
   Cela va permettre d'automatiquement créer, le dossier :
        /assets
   Et le sous-dossier 
        /js
   Et le fichier
        /main.js
   Et vous ouvrira automatiquement le fichier main.js dans votre IDE (Visual Studio Code)

9. Nous allons revenir sur l'onglet du fichier index.html et aller à la fin de la ligne 7, contenant le code relatif au fichier main.js, et allez à la ligne en appuyant sur la touche [Enter]