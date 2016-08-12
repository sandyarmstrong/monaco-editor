/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(36e67863cf6a6f202f5a80acff4146a695c48357)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.fr", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (s\'est reproduit)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"Utiliser une expression régulière",
		"Mot entier",
		"Respecter la casse",
		"entrée",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Erreur : {0}",
		"Avertissement : {0}",
		"Information : {0}",
	],
	"vs/base/common/errors": [
		"{0}. Code d\'erreur : {1}",
		"Permission refusée (HTTP {0})",
		"Permission refusée",
		"{0} (HTTP {1} : {2})",
		"{0} (HTTP {1})",
		"Erreur de connexion inconnue ({0})",
		"Une erreur de connexion inconnue s\'est produite. Soit vous n\'êtes plus connecté à Internet, soit le serveur auquel vous êtes connecté est hors connexion.",
		"{0} : {1}",
		"Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.",
		"Une erreur système s\'est produite ({0})",
		"Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.",
		"{0} ({1} erreurs au total)",
		"Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.",
		"Non implémenté",
		"Argument incorrect : {0}",
		"Argument incorrect",
		"État incorrect : {0}",
		"État incorrect",
		"Échec du chargement d\'un fichier requis. Soit vous n\'êtes plus connecté à Internet, soit le serveur auquel vous êtes connecté est hors connexion. Actualisez le navigateur pour réessayer.",
		"Échec du chargement d\'un fichier obligatoire. Redémarrez l\'application pour réessayer. Détails : {0}",
	],
	"vs/base/common/json": [
		"Symbole non valide",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"Fin de fichier attendue",
	],
	"vs/base/common/keyCodes": [
		"Windows",
		"Contrôle",
		"Maj",
		"Alt",
		"Commande",
		"Windows",
		"Ctrl",
		"Maj",
		"Alt",
		"Commande",
		"Windows",
	],
	"vs/base/common/severity": [
		"Erreur",
		"Avertissement",
		"Informations",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, sélecteur",
		"sélecteur",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Sélecteur rapide. Tapez pour réduire les résultats.",
		"Sélecteur rapide",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Réduire",
	],
	"vs/editor/browser/standalone/standaloneSchemas": [
		"JSON schema for ASP.NET project.json files",
		"Compilation options that are passed through to Roslyn",
		"The version of the dependency.",
		"The type of the dependency. \'build\' dependencies only exist at build time",
		"The dependencies of the application. Each entry specifes the name and the version of a Nuget package.",
		"A command line script or scripts.\r\rAvailable variables:\r%project:Directory% - The project directory\r%project:Name% - The project name\r%project:Version% - The project version",
		"The author of the application",
		"List of files to exclude from publish output (kpm bundle).",
		"Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ \'Folder1\\*.cs\', \'Folder2\\*.cs\' ]",
		"Commands that are available for this application",
		"Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely \'Debug\' and \'Release\'.",
		"The description of the application",
		"Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).",
		"Target frameworks that will be built, and dependencies that are specific to the configuration.",
		"Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).",
		"Glob pattern to indicate all the files that need to be compiled as resources.",
		"Scripts to execute during the various stages.",
		"Glob pattern to specify the code files to share with dependent projects. Example: [ \'Folder1\\*.cs\', \'Folder2\\*.cs\' ]",
		"The version of the application. Example: 1.2.0.0",
		"Specifying the webroot property in the project.json file specifies the web server root (aka public folder). In visual studio, this folder will be used to root IIS. Static files should be put in here.",
		"JSON schema for Bower configuration files",
		"Any property starting with _ is valid.",
		"The name of your package.",
		"Help users identify and search for your package with a brief description.",
		"A semantic version number.",
		"The primary acting files necessary to use your package.",
		"SPDX license identifier or path/url to a license.",
		"A list of files for Bower to ignore when installing your package.",
		"Used for search by keyword. Helps make your package easier to discover without people needing to know its name.",
		"A list of people that authored the contents of the package.",
		"URL to learn more about the package. Falls back to GitHub project if not specified and it\'s a GitHub endpoint.",
		"The repository in which the source code can be found.",
		"Dependencies are specified with a simple hash of package name to a semver compatible identifier or URL.",
		"Dependencies that are only needed for development of the package, e.g., test framework or building documentation.",
		"Dependency versions to automatically resolve with if conflicts occur between packages.",
		"If you set it to  true  it will refuse to publish it. This is a way to prevent accidental publication of private repositories.",
		"Used by grunt-bower-task to specify custom install locations.",
		"The types of modules this package exposes",
		"NPM configuration for this package.",
		"A person who has been involved in creating or maintaining this package",
		"Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.",
		"Any property starting with _ is valid.",
		"The name of the package.",
		"Version must be parseable by node-semver, which is bundled with npm as a dependency.",
		"This helps people discover your package, as it\'s listed in \'npm search\'.",
		"The relative path to the icon of the package.",
		"This helps people discover your package as it\'s listed in \'npm search\'.",
		"The url to the project homepage.",
		"The url to your project\'s issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.",
		"The url to your project\'s issue tracker.",
		"The email address to which issues should be reported.",
		"You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you\'re placing on it.",
		"You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you\'re placing on it.",
		"A list of people who contributed to this package.",
		"A list of people who maintains this package.",
		"The \'files\' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.",
		"The main field is a module ID that is the primary entry point to your program.",
		"Specify either a single file or an array of filenames to put in place for the man program to find.",
		"If you specify a \'bin\' directory, then all the files in that folder will be used as the \'bin\' hash.",
		"Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.",
		"Put example scripts in here. Someday, it might be exposed in some clever way.",
		"Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it\'s useful meta info.",
		"A folder that is full of man pages. Sugar to generate a \'man\' array by walking the folder.",
		"Specify the place where your code lives. This is helpful for people who want to contribute.",
		"The \'scripts\' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.",
		"A \'config\' hash can be used to set configuration parameters used in package scripts that persist across upgrades.",
		"Array of package names that will be bundled when publishing the package.",
		"Array of package names that will be bundled when publishing the package.",
		"If your package is primarily a command-line application that should be installed globally, then set this value to true to provide a warning if it is installed locally.",
		"If set to true, then npm will refuse to publish it.",
		"JSON schema for the ASP.NET global configuration files",
		"A list of project folders relative to this file.",
		"A list of source folders relative to this file.",
		"The runtime to use.",
		"The runtime version to use.",
		"The runtime to use, e.g. coreclr",
		"The runtime architecture to use, e.g. x64.",
		"JSON schema for the TypeScript compiler\'s configuration file",
		"Instructs the TypeScript compiler how to compile .ts files",
		"The character set of the input files",
		"Generates corresponding d.ts files.",
		"Show diagnostic information.",
		"Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.",
		"Emit a single file with source maps instead of having a separate file.",
		"Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.",
		"Print names of files part of the compilation.",
		"The locale to use to show error messages, e.g. en-us.",
		"Specifies the location where debugger should locate map files instead of generated locations",
		"Specify module code generation: \'CommonJS\', \'Amd\', \'System\', or \'UMD\'.",
		"Specifies the end of line sequence to be used when emitting files: \'CRLF\' (dos) or \'LF\' (unix).)",
		"Do not emit output.",
		"Do not emit outputs if any type checking errors were reported.",
		"Do not generate custom helper functions like __extends in compiled output.",
		"Warn on expressions and declarations with an implied \'any\' type.",
		"Do not include the default library file (lib.d.ts).",
		"Do not add triple-slash references or module import targets to the list of compiled files.",
		"Concatenate and emit output to single file.",
		"Redirect output structure to the directory.",
		"Do not erase const enum declarations in generated code.",
		"Do not emit comments to output.",
		"Specifies the root directory of input files. Use to control the output directory structure with --outDir.",
		"Generates corresponding \'.map\' file.",
		"Specifies the location where debugger should locate TypeScript files instead of source locations.",
		"Suppress noImplicitAny errors for indexing objects lacking index signatures.",
		"Specify ECMAScript target version:  \'ES3\' (default), \'ES5\', or \'ES6\' (experimental).",
		"Watch input files.",
		"Enable the JSX option (requires TypeScript 1.6):  \'preserve\', \'react\'.",
		"Emits meta data.for ES7 decorators.",
		"Supports transpiling single TS files into JS files.",
		"Enables experimental support for ES7 decorators.",
		"Enables experimental support for async functions (requires TypeScript 1.6).",
		"If no \'files\' property is present in a tsconfig.json, the compiler defaults to including all files the containing directory and subdirectories. When a \'files\' property is specified, only those files are included.",
		"JSON schema for the JavaScript configuration file",
		"Instructs the JavaScript language service how to validate .js files",
		"The character set of the input files",
		"Show diagnostic information.",
		"The locale to use to show error messages, e.g. en-us.",
		"Specifies the location where debugger should locate map files instead of generated locations",
		"Module code generation to resolve against: \'commonjs\', \'amd\', \'system\', or \'umd\'.",
		"Do not include the default library file (lib.d.ts).",
		"Specify ECMAScript target version:  \'ES3\' (default), \'ES5\', or \'ES6\' (experimental).",
		"Enables experimental support for ES7 decorators.",
		"If no \'files\' property is present in a jsconfig.json, the language service defaults to including all files the containing directory and subdirectories. When a \'files\' property is specified, only those files are included.",
		"List files and folders that should not be included. This property is not honored when the \'files\' property is present.",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Configuration de l\'éditeur",
		"Contrôle la famille de polices.",
		"Contrôle la taille de police.",
		"Contrôle la hauteur de ligne. Utilisez 0 pour calculer lineHeight à partir de fontSize.",
		"Contrôle la visibilité des numéros de ligne",
		"Contrôle la visibilité de la marge des glyphes",
		"Colonnes où afficher les règles verticales",
		"Caractères utilisés comme séparateurs de mots durant la navigation ou les opérations basées sur les mots",
		"Nombre d\'espaces correspondant à une tabulation.",
		"\'number\' attendu. Notez que la valeur \"auto\" a été remplacée par le paramètre \'editor.detectIndentation\'.",
		"Insérer des espaces en appuyant sur Tab.",
		"\'boolean\' attendu. Notez que la valeur \"auto\" a été remplacée par le paramètre \'editor.detectIndentation\'.",
		"Quand vous ouvrez un fichier, \'editor.tabSize\' et \'editor.insertSpaces\' sont détectés en fonction du contenu du fichier.",
		"Contrôle si les sélections ont des angles arrondis",
		"Contrôle si l\'éditeur défile au-delà de la dernière ligne",
		"Contrôle le nombre de caractères après lesquels l\'éditeur effectue un retour automatique à la ligne suivante. Si vous affectez la valeur 0, le retour automatique à la ligne s\'effectue en fonction de la largeur de la fenêtre d\'affichage (retour automatique à la ligne). Si vous affectez la valeur -1, l\'éditeur n\'effectue jamais de retour automatique à la ligne.",
		"Contrôle le retrait des lignes renvoyées. La valeur peut être \'none\', \'same\' ou \'indent\'.",
		"Multiplicateur à utiliser pour le \'deltaX\' et le \'deltaY\' des événements de défilement de la roulette de la souris",
		"Contrôle si les suggestions rapides doivent s\'afficher ou non pendant la saisie",
		"Contrôle le délai en ms au bout duquel les suggestions rapides s\'affichent",
		"Active les indicateurs de paramètres",
		"Contrôle si l\'éditeur doit automatiquement fermer les crochets après les avoir ouverts",
		"Contrôle si l\'éditeur doit automatiquement mettre en forme la ligne après la saisie",
		"Contrôle si les suggestions doivent s\'afficher automatiquement durant la saisie de caractères de déclenchement",
		"Contrôle si les suggestions peuvent être acceptées avec Entrée (en plus de Tab). Cela permet d\'éviter toute ambiguïté entre l\'insertion de nouvelles lignes et l\'acceptation de suggestions.",
		"Contrôle si les extraits de code s\'affichent en même temps que d\'autres suggestions, ainsi que leur mode de tri.",
		"Activez les suggestions basées sur les mots.",
		"Insérez les extraits de code quand leurs préfixes correspondent. Fonctionne mieux quand la fonctionnalité \'quickSuggestions\' n\'est pas activée.",
		"Détermine si l\'éditeur doit surligner les correspondances similaires à la sélection",
		"Contrôle le nombre d\'ornements pouvant s\'afficher à la même position dans la règle d\'aperçu",
		"Contrôle le style d\'animation du curseur. Valeurs possibles : \'blink\', \'smooth\', \'phase\', \'expand\' et \'solid\'",
		"Agrandir ou réduire la police de l\'éditeur quand l\'utilisateur fait tourner la roulette de la souris tout en maintenant la touche Ctrl enfoncée",
		"Contrôle le style du curseur. Valeurs acceptées : \'block\', \'line\' et \'underline\'",
		"Active les ligatures de police",
		"Contrôle si le curseur doit être masqué dans la règle d\'aperçu.",
		"Contrôle si l\'éditeur doit restituer des espaces",
		"Controls whether the editor should render control characters",
		"Controls whether the editor should render indent guides",
		"Controls if the editor shows code lenses",
		"Contrôle si le pliage de code est activé dans l\'éditeur",
		"Inserting and deleting whitespace follows tab stops",
		"Remove trailing auto inserted whitespace",
		"Garder les éditeurs d\'aperçu ouverts même si l\'utilisateur double-clique sur son contenu ou appuie sur la touche Échap.",
		"Contrôle si l\'éditeur de différences affiche les différences en mode côte à côte ou inline",
		"Contrôle si l\'éditeur de différences affiche les changements liés aux espaces blancs de début ou de fin comme des différences",
		"Contrôle si le presse-papiers primaire Linux doit être pris en charge.",
	],
	"vs/editor/common/config/defaultConfig": [
		"Contenu d\'éditeur",
	],
	"vs/editor/common/controller/cursor": [
		"Exception inattendue pendant l\'exécution de la commande.",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"Le mode a échoué lors de la création de jetons de l’entrée.",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Texte brut",
	],
	"vs/editor/common/services/bulkEdit": [
		"Ces fichiers ont changé pendant ce temps : {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Ajoute des déclarations de langage.",
		"ID du langage.",
		"Alias de nom du langage.",
		"Extensions de fichier associées au langage.",
		"Noms de fichiers associés au langage.",
		"Modèles Glob de noms de fichiers associés au langage.",
		"Types MIME associés au langue.",
		"Expression régulière correspondant à la première ligne d\'un fichier du langage.",
		"Chemin relatif d\'un fichier contenant les options de configuration du langage.",
		"Valeur vide pour \'contributes.{0}\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string[]\'",
		"\'contributes.{0}\' non valide. Tableau attendu.",
	],
	"vs/editor/common/services/modelServiceImpl": [
		"Mettez à jour vos paramètres : \'editor.detectIndentation\' remplace \'editor.tabSize\': \"auto\" ou \'editor.insertSpaces\': \"auto\"",
	],
	"vs/editor/contrib/accessibility/browser/accessibility": [
		"Merci de tester les options d\'accessibilité expérimentales de VS Code.",
		"État :",
		"Appuyez sur Tab dans cet éditeur pour déplacer le focus vers le prochain élément pouvant être désigné comme élément actif. Activez ou désactivez ce comportement en appuyant sur {0}.",
		"Appuyez sur Tab dans cet éditeur pour déplacer le focus vers le prochain élément pouvant être désigné comme élément actif. Actuellement, la commande {0} ne peut pas être déclenchée par une combinaison de touches.",
		"Appuyez sur Tab dans cet éditeur pour insérer le caractère de tabulation. Activez ou désactivez ce comportement en appuyant sur {0}.",
		"Appuyez sur Tab dans cet éditeur pour déplacer le focus vers le prochain élément pouvant être désigné comme élément actif. Actuellement, la commande {0} ne peut pas être déclenchée par une combinaison de touches.",
		"Vous pouvez masquer cette info-bulle et revenir à l\'éditeur en appuyant sur Échap.",
		"Afficher l\'aide sur l\'accessibilité",
	],
	"vs/editor/contrib/carretOperations/common/carretOperations": [
		"Déplacer le point d\'insertion vers la gauche",
		"Déplacer le point d\'insertion vers la droite",
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Couper",
		"Copier",
		"Coller",
	],
	"vs/editor/contrib/comment/common/comment": [
		"Activer/désactiver le commentaire de ligne",
		"Ajouter le commentaire de ligne",
		"Supprimer le commentaire de ligne",
		"Activer/désactiver le commentaire de bloc",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Afficher le menu contextuel de l\'éditeur",
	],
	"vs/editor/contrib/defineKeybinding/browser/defineKeybinding": [
		"Définir une combinaison de touches",
		"Appuyez sur la combinaison de touches souhaitée, puis sur Entrée",
		"Pour votre disposition actuelle du clavier, appuyez sur ",
		"Vous ne pouvez pas produire cette combinaison de touches avec la disposition actuelle du clavier.",
		"Définir une combinaison de touches",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Rechercher",
		"Rechercher",
		"Correspondance précédente",
		"Correspondance suivante",
		"Rechercher dans la sélection",
		"Fermer",
		"Remplacer",
		"Remplacer",
		"Remplacer",
		"Remplacer tout",
		"Changer le mode de remplacement",
		"Seuls les 999 premiers résultats sont mis en surbrillance. Cependant, toutes les opérations de recherche sont appliquées à l\'ensemble du texte.",
		"{0} sur {1}",
		"Aucun résultat",
	],
	"vs/editor/contrib/find/common/findController": [
		"Rechercher",
		"Rechercher suivant",
		"Rechercher précédent",
		"Sélection suivante",
		"Sélection précédente",
		"Remplacer",
		"Ajouter la sélection à la correspondance de recherche suivante",
		"Ajouter la sélection à la correspondance de recherche précédente",
		"Déplacer la dernière sélection vers la correspondance de recherche suivante",
		"Déplacer la dernière sélection à la correspondance de recherche précédente",
		"Sélectionner toutes les occurrences des correspondances de la recherche",
		"Modifier toutes les occurrences",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Déplier",
		"Déplier de manière récursive",
		"Plier",
		"Plier de manière récursive",
		"Plier tout",
		"Déplier tout",
		"Niveau de pli 1",
		"Niveau de pli 2",
		"Niveau de pli 3",
		"Niveau de pli 4",
		"Niveau de pli 5",
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Code de format",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" – {0} définitions",
		"Atteindre la définition",
		"Ouvrir la définition sur le côté",
		"Apercu de définition",
		"Cliquez pour afficher les {0} définitions trouvées.",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"Corrections suggérées : ",
		"Correction suggérée : ",
		"({0}/{1}) [{2}]",
		"({0}/{1})",
		"Accéder à l\'erreur ou l\'avertissement suivant",
		"Accéder à l\'erreur ou l\'avertissement précédent",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Afficher par pointage",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Chargement...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Remplacer par la valeur précédente",
		"Remplacer par la valeur suivante",
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Convertir les retraits en espaces",
		"Convertir les retraits en tabulations",
		"Taille des tabulations configurée",
		"Sélectionner la taille des tabulations pour le fichier actuel",
		"Mettre en retrait avec des tabulations",
		"Mettre en retrait avec des espaces",
		"Détecter la mise en retrait à partir du contenu",
		"Activer/désactiver Restituer l\'espace",
		"Toggle Control Characters",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Copier la ligne en haut",
		"Copier la ligne en bas",
		"Déplacer la ligne vers le haut",
		"Déplacer la ligne vers le bas",
		"Trier les lignes dans l\'ordre croissant",
		"Trier les lignes dans l\'ordre décroissant",
		"Découper l\'espace blanc de fin",
		"Supprimer la ligne",
		"Mettre en retrait la ligne",
		"Ajouter un retrait négatif à la ligne",
		"Insérer une ligne au-dessus",
		"Insérer une ligne sous",
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + clic pour suivre le lien",
		"Ctrl + clic pour suivre le lien",
		"Échec de l\'ouverture de ce lien, car il n\'est pas bien formé : {0}",
		"Échec de l\'ouverture de ce lien, car sa cible est manquante.",
		"Ouvrir le lien",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Ajouter un curseur au-dessus",
		"Ajouter un curseur en dessous",
		"Créer plusieurs curseurs à partir des lignes sélectionnées",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Indicateurs des paramètres Trigger",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, conseil",
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Correctif rapide",
	],
	"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget": [
		"{0}, suggestion de correction rapide",
		"Chargement en cours...",
		"Pas de suggestions de correctif.",
		"Correctif rapide",
		"{0}, accepté",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"Atteindre la ligne {0} et la colonne {1}",
		"Atteindre la ligne {0}",
		"Tapez un numéro de ligne à atteindre entre 1 et {0}",
		"Tapez un numéro de colonne à atteindre entre 1 et {0}",
		"Go to line {0}",
		"Tapez un numéro de ligne, suivi par un signe deux-points facultatif et un numéro de colonne à atteindre",
		"Atteindre la ligne...",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"Tapez le nom de l\'action que vous voulez exécuter",
		"Palette de commandes",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"Tapez le nom de l\'identificateur auquel vous voulez accéder",
		"Atteindre le symbole...",
		"symboles ({0})",
		"modules ({0})",
		"classes ({0})",
		"interfaces ({0})",
		"méthodes ({0})",
		"fonctions ({0})",
		"propriétés ({0})",
		"variables ({0})",
		"variables ({0})",
		"constructeurs ({0})",
		"appels ({0})",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} références",
		"Rechercher toutes les références",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Chargement en cours...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Échec de la résolution du fichier.",
		"{0} références",
		"{0} référence",
		"no preview available",
		"Références",
		"Aucun résultat",
		"Références",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"Échec de l\'exécution du renommage.",
		"Symbole Renommer",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Renommez l\'entrée. Tapez le nouveau nom et appuyez sur Entrée pour valider.",
	],
	"vs/editor/contrib/rename/common/rename": [
		"Aucun résultat.",
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"Atteindre le crochet",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Développer la sélection",
		"Réduire la sélection",
	],
	"vs/editor/contrib/suggest/browser/suggest": [
		"Suggestions pour Trigger",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"En savoir plus...{0}",
		"{0}, suggestion, avec détails",
		"{0}, suggestion",
		"Précédent",
		"Chargement en cours...",
		"Pas de suggestions.",
		"{0}, accepté",
		"{0}, suggestion, avec détails",
		"{0}, suggestion",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Activer/désactiver l\'utilisation de la touche Tab pour définir le focus",
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"Afficher : activer/désactiver le retour automatique à la ligne",
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Fermer",
	],
	"vs/languages/html/common/html.contribution": [
		"Configuration HTML",
		"Nombre maximal de caractères par ligne (0 = désactiver).",
		"Liste des balises, séparées par des virgules, qui ne doivent pas être remises en forme. \'null\' correspond par défaut à toutes les balises répertoriées à l\'adresse https://www.w3.org/TR/html5/dom.html#phrasing-content.",
		"Mettez en retrait les sections <head> et <body>.",
		"Spécifie si les sauts de ligne existants qui précèdent les éléments doivent être conservés. Fonctionne uniquement devant les éléments, pas dans les balises, ni pour du texte.",
		"Nombre maximal de sauts de ligne à conserver dans un bloc. Utilisez \'null\' pour indiquer une valeur illimitée.",
		"Mettez en forme et en retrait {{#foo}}, ainsi que {{/foo}}.",
		"Finissez par un caractère de nouvelle ligne.",
		"Liste de balises, séparées par une virgule, qui doivent être précédées d\'une nouvelle ligne. \'null\' prend par défaut la valeur \"head, body, /html\".",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Ajoute des paramètres de configuration.",
		"Résumé des paramètres. Cette étiquette va être utilisée dans le fichier de paramètres en tant que commentaire de séparation.",
		"Description des propriétés de configuration.",
		"s\'il est défini, \'configuration.type\' doit avoir la valeur \'object",
		"\'configuration.title\' doit être une chaîne",
		"\'configuration.properties\' doit être un objet",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Échec de l\'activation de l\'extension \'{1}\'. Raison : dépendance \'{0}\' inconnue.",
		"Échec de l\'activation de l\'extension \'{1}\'. Raison : échec de l\'activation de la dépendance \'{0}\'.",
		"Échec de l\'activation de l\'extension \'{0}\'. Raison : plus de 10 niveaux de dépendances (probablement une boucle de dépendance).",
		"Échec de l\'activation de l\'extension \'{0}\' : {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Description d\'extension vide obtenue",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'object\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise ou doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise ou doit être de type \'string[]\'",
		"les propriétés \'{0}\' et \'{1}\' doivent être toutes les deux spécifiées ou toutes les deux omises",
		"La propriété \'{0}\' peut être omise ou doit être de type \'string\'",
		"\'main\' ({0}) est censé être inclus dans le dossier ({1}) de l\'extension. Cela risque de rendre l\'extension non portable.",
		"les propriétés \'{0}\' et \'{1}\' doivent être toutes les deux spécifiées ou toutes les deux omises",
		"Nom d\'affichage de l\'extension utilisée dans la galerie VS Code.",
		"Catégories utilisées par la galerie VS Code pour catégoriser l\'extension.",
		"Bannière utilisée dans le marketplace VS Code.",
		"Couleur de la bannière de l\'en-tête de page du marketplace VS Code.",
		"Thème de couleur de la police utilisée dans la bannière.",
		"Éditeur de l\'extension VS Code.",
		"Événements d\'activation pour l\'extension VS Code.",
		"Dépendances à d\'autres extensions. L\'ID d\'une extension est toujours ${publisher}.${name}. Par exemple : vscode.csharp.",
		"Le script exécuté avant le package est publié en tant qu\'extension VS Code.",
		"Toutes les contributions de l\'extension VS Code représentées par ce package.",
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"Voici d\'autres commandes disponibles : ",
		"Touche ({0}) utilisée. En attente de la seconde touche pour la pression simultanée...",
		"La combinaison de touches ({0}, {1}) n\'est pas une commande.",
	],
	"vs/platform/message/common/message": [
		"Fermer",
		"Plus tard",
		"Annuler",
	]
});