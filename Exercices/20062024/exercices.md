1)  Stockez dans une variable, le résultat d'une saisie au clavier et affichez-la.

2)  À la place d'afficher simplement la variable, affichez son contenu précédé de la chaîne de caractères "Saisie clavier: ".

3)  Récupérez au clavier un nombre et stockez-le dans une variable.
    Ensuite, affichez cette variable.
    Rappelez-vous, la saisie clavier revient sous forme de chaîne de caractères.

4)  Si le nombre qui se trouve dans la variable number est plus grand que 10, affichez la chaîne de caractères “Ce nombre est plus grand que 10”.

5)  À la suite de la condition, si celle-ci n'est pas remplie, affichez le message suivant: “Le nombre est plus petit ou égal à 10.”

6)  Récupérez un nombre au clavier et stockez-le dans une variable.
    Si le nombre récupéré est plus grand ou égale à 10 affichez “Bravo!”.
    Sinon, si il est plus grand que 8 affichez “Pas mal.”
    Sinon, si le nombre est plus grand que 5 affichez “Mouais, bof”
    Et sinon dans les autres cas affichez “Pas terrible”

7)  Écrivez un script qui demande à l'utilisateur un nombre (entre 1 et 10).
    Tant qu'il ne rentre pas un chiffre entre 1 et 10, le programme demande à nouveau à l'utilisateur un nombre (entre 1 et 10).

8)  Écrivez un script qui demande à l'utilisateur un mot de passe.
    Si le mot de passe entré n'est pas "Pyth0n" le programme demande à nouveau le mot de passe.
    Quand le mot de passe est bon, le programme affiche "Mot de passe valide."
    Après 3 tentatives infructueuses, le programme affiche "Mot de passe incorrect."

9)  Écrivez un programme qui va générer trois nombres aléatoirement (entre 1 et 6).
    Ensuite le programme va afficher les trois nombres
    Si les trois nombres ne sont pas identiques, il recommence.

10) Demandez à l'utilisateur d'entrer des nombre jusqu'à ce qu'il donne la valeur 0.
    Ensuite, affichez le plus grand et le plus petit nombre que l'utilisateur a donné.

11) Générez deux nombres aléatoire (entre 0 et 100)
    Affichez ces deux nombres en demandant à l'utilisateur d'en donner la somme
    Continuez à lui demander tant que la réponse est mauvaise.
    A la fin du programme, affichez à l'utilisateur le nombre d'erreurs qu'il a commises.

12) Créez un programme qui va demander à l'utilisateur d'entrer des nombres.
    Le programme continuera à en demander tant que l'utilisateur n'aura pas donné deux nombres identiques d'affilée.
    En fin de programme, affichez la somme de tous les nombres entrés par l'utilisateur.

13) Mettre la valeur 10 dans une variable
    Utilisez une boucle while pour afficher les nombres de 10 à 1.
    Terminez en affichant "Décollage !"

14) Écrivez un script qui demande un mot à l'utilisateur.
    Tant que le mot n'est pas "end" le script redemandera un mot à l'utilisateur.
    A chaque fois que le mot commence par "t", affichez-le suivi de "!!!" (rappelez-vous que pour lire un seul caractère d'une chaîne de caractères, on doit lui donner son index (comme pour les listes)).
    A la fin du script, affichez le nombre de mots entrés par l'utilisateur.

15) Écrivez un script qui demande à l'utilisateur un nombre entier entre 1 et 100, redemandez tant que l'utilisateur ne donne pas un entier entre 1 et 100.
    Ensuite affichez la somme des chiffres de 1 à l'entier donné par l'utilisateur.
    Si l'utilisateur vous donne 10, la somme affichée sera 55 car 55 est la somme des entiers de 1 à 10.

16) Créez un script qui demande à l'utilisateur un mot.
    Ensuite donner à l'utilisateur le nombre de voyelle de ce mot.
    Indice: vous pouvez établir la liste des voyelles facilement ["a", "e", "i", "o", "u", "y"] et nous avons vu un moyen de vérifier qu'un élément se trouve dans un groupe.

17) A l'aide de 2 boucles, créez un script qui énumère toutes les cartes d'un jeu de cartes à jouer. Une des boucles concerne les symboles
    (cœur, carreau, pique, trèfle) et une autre les valeurs (as, deux, trois, …, dame, roi).

18) Écrivez une fonction qui prend un mot en argument et qui renvoie le mot inversé.
    Dans le programme principal, demandez à l'utilisateur de saisir un mot au clavier et affichez le mot inverse.
    Exemple : Si le mot entré au clavier est "hologramme", le mot affiché sera "emmargoloh"

19) Écrivez une fonction qui affiche l'addition de tous les éléments d'un tableau (une liste de liste) passé en paramètre.
    Dans votre programme principal, vous pouvez tester votre fonction avec un tableau 3x3 rempli des 9 premiers entiers, la fonction devrait afficher 45.

20) Écrivez une fonction affiche la table de multiplication de 7 (les 10 premiers multiples de 7) de la manière suivante : 1x7=7, 2x7=14, ...

21) Modifiez votre fonction pour qu'au lieu d'afficher la table de 7, la fonction affiche la table d'un nombre entier passé en paramètre.

22) Écrivez une fonction qui renvoie au programme appelant une liste de n entiers allant de 1 à 6 (déterminés aléatoirement). n étant passé en paramètre.
    Par exemple, si 3 est passé en paramètre, la fonction renvoie une liste de 3 entiers entre 1 et 6.

23) Écrivez une fonction qui a pour arguments un mot et une lettre. Cette fonction doit retourner le nombre de fois que la lettre apparaît dans le mot.
    Par exemple si le mot est "cacao" et la lettre est "c", la fonction retourne 2.
    Dans le programme principal, écrivez du code qui teste la fonction.

24) Écrivez une fonction qui prend un mot en paramètre et qui retourne ce même mot, mais sans les voyelles ("a", "e", "i", "o", "u", "y").
    Exemple: Si je passe "telegramme" comme paramètre, la fonction retournera "tlgrmm"
    Attention: on ne gère pas les caractères spéciaux !

25) Écrivez une fonction qui écrit un mot de 5 lettres avec les lettres suivantes: "a", "i", "l", "n", "o","r", "s", "t".
    Le mot sera ensuite retourné par la fonction.
    Attention, les lettres ne peuvent être utilisées qu'une seule fois chacune dans le mot.
    Par exemple: "tsoni" est un mot valide mais pas "liara"

26) Modifiez la fonction précédente en lui ajoutant un argument qui représente le nombre de lettres du mot.
    Faites en sorte que le nombre de lettres du mot généré ne soit plus 5, mais le nombre passé en paramètre.

27) Modifiez encore la fonction précédente en lui ajoutant un autre argument qui représentera cette fois une liste de lettres autorisées.
    Changez le code de la fonction pour que la liste passée en paramètre soit utilisée à la place de celle déclarée dans la fonction.

28) Écrivez une fonction qui prend une liste et un caractère comme arguments.
    La fonction va placer le caractère dans la dernière "case" (celle avec l'index le plus grand) de la liste qui est rempli par un ".".
    Après coup la fonction retournera la liste.
    Dans votre programme principal, utilisez la fonction pour remplir une liste remplie avec 6 ".".
    Faites donc en sorte d'exécuter la fonction tant que la liste n'est pas remplie.
    Après chaque exécution de la fonction, affichez la liste.

29) Écrivez une fonction qui ajoute la TVA à un prix donné en paramètre. La TVA sera toujours de 21%.
    Exemple: Si la fonction reçoit 2, elle renverra 2.42 car 2 + 2 * 0.21 = 2.42

30) Écrivez une autre fonction qui reçoit une liste de prix en paramètre et qui renvoie la somme des éléments de cette liste auxquels on ajoute la TVA.
    Pour calculer la TVA, utilisez la fonction précédemment créée.

31) Écrivez une fonction qui renvoie une carte au hasard.
    Cette fonction n'a pas d'argument et renvoie As, 2, 3, 4, 5, 6, 7, 8, 9, 10, Valet, Dame, Roi.
    En utilisant la fonction décrite ci-dessus, écrivez une fonction qui renvoie une liste de cartes. Le nombre de cartes sera déterminé par un argument de la fonction.

32) Ensuite, créez une fonction qui reçoit une liste de cartes en paramètre.
    Cette fonction renverra le mot “Poker” s' il y a 5 fois la même valeur dans la liste.
    Si il y a 4 fois la même valeur elle renverra “Carré”.
    Si il y a 3 fois la même valeur elle renverra “Brelan”.
    Enfin si il n'y a que 2 fois la même valeur elle renverra “Paire”.
    Dans les autres cas, elle renverra “Rien”.