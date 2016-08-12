/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(36e67863cf6a6f202f5a80acff4146a695c48357)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/editor/editor.main.nls", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})"
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (occurred again)"
	],
	"vs/base/browser/ui/findinput/findInput": [
		"Use Regular Expression",
		"Match Whole Word",
		"Match Case",
		"input"
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}"
	],
	"vs/base/common/errors": [
		"{0}. Error code: {1}",
		"Permission Denied (HTTP {0})",
		"Permission Denied",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Unknown Connection Error ({0})",
		"An unknown connection error occurred. Either you are no longer connected to the internet or the server you are connected to is offline.",
		"{0}: {1}",
		"An unknown error occurred. Please consult the log for more details.",
		"A system error occured ({0})",
		"An unknown error occurred. Please consult the log for more details.",
		"{0} ({1} errors in total)",
		"An unknown error occurred. Please consult the log for more details.",
		"Not Implemented",
		"Illegal argument: {0}",
		"Illegal argument",
		"Illegal state: {0}",
		"Illegal state",
		"Failed to load a required file. Either you are no longer connected to the internet or the server you are connected to is offline. Please refresh the browser to try again.",
		"Failed to load a required file. Please restart the application to try again. Details: {0}"
	],
	"vs/base/common/json": [
		"Invalid symbol",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"End of file expected"
	],
	"vs/base/common/keyCodes": [
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"Command",
		"Windows"
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, picker",
		"picker"
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Quick picker. Type to narrow down results.",
		"Quick Picker"
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Collapse"
	],
	"vs/editor/browser/standalone/standaloneSchemas": [
		"JSON schema for ASP.NET project.json files",
		"Compilation options that are passed through to Roslyn",
		"The version of the dependency.",
		"The type of the dependency. 'build' dependencies only exist at build time",
		"The dependencies of the application. Each entry specifes the name and the version of a Nuget package.",
		"A command line script or scripts.\r\rAvailable variables:\r%project:Directory% - The project directory\r%project:Name% - The project name\r%project:Version% - The project version",
		"The author of the application",
		"List of files to exclude from publish output (kpm bundle).",
		"Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]",
		"Commands that are available for this application",
		"Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely 'Debug' and 'Release'.",
		"The description of the application",
		"Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).",
		"Target frameworks that will be built, and dependencies that are specific to the configuration.",
		"Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).",
		"Glob pattern to indicate all the files that need to be compiled as resources.",
		"Scripts to execute during the various stages.",
		"Glob pattern to specify the code files to share with dependent projects. Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]",
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
		"URL to learn more about the package. Falls back to GitHub project if not specified and it's a GitHub endpoint.",
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
		"This helps people discover your package, as it's listed in 'npm search'.",
		"The relative path to the icon of the package.",
		"This helps people discover your package as it's listed in 'npm search'.",
		"The url to the project homepage.",
		"The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.",
		"The url to your project's issue tracker.",
		"The email address to which issues should be reported.",
		"You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.",
		"You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.",
		"A list of people who contributed to this package.",
		"A list of people who maintains this package.",
		"The 'files' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.",
		"The main field is a module ID that is the primary entry point to your program.",
		"Specify either a single file or an array of filenames to put in place for the man program to find.",
		"If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash.",
		"Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.",
		"Put example scripts in here. Someday, it might be exposed in some clever way.",
		"Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.",
		"A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.",
		"Specify the place where your code lives. This is helpful for people who want to contribute.",
		"The 'scripts' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.",
		"A 'config' hash can be used to set configuration parameters used in package scripts that persist across upgrades.",
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
		"JSON schema for the TypeScript compiler's configuration file",
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
		"Specify module code generation: 'CommonJS', 'Amd', 'System', or 'UMD'.",
		"Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).)",
		"Do not emit output.",
		"Do not emit outputs if any type checking errors were reported.",
		"Do not generate custom helper functions like __extends in compiled output.",
		"Warn on expressions and declarations with an implied 'any' type.",
		"Do not include the default library file (lib.d.ts).",
		"Do not add triple-slash references or module import targets to the list of compiled files.",
		"Concatenate and emit output to single file.",
		"Redirect output structure to the directory.",
		"Do not erase const enum declarations in generated code.",
		"Do not emit comments to output.",
		"Specifies the root directory of input files. Use to control the output directory structure with --outDir.",
		"Generates corresponding '.map' file.",
		"Specifies the location where debugger should locate TypeScript files instead of source locations.",
		"Suppress noImplicitAny errors for indexing objects lacking index signatures.",
		"Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).",
		"Watch input files.",
		"Enable the JSX option (requires TypeScript 1.6):  'preserve', 'react'.",
		"Emits meta data.for ES7 decorators.",
		"Supports transpiling single TS files into JS files.",
		"Enables experimental support for ES7 decorators.",
		"Enables experimental support for async functions (requires TypeScript 1.6).",
		"If no 'files' property is present in a tsconfig.json, the compiler defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.",
		"JSON schema for the JavaScript configuration file",
		"Instructs the JavaScript language service how to validate .js files",
		"The character set of the input files",
		"Show diagnostic information.",
		"The locale to use to show error messages, e.g. en-us.",
		"Specifies the location where debugger should locate map files instead of generated locations",
		"Module code generation to resolve against: 'commonjs', 'amd', 'system', or 'umd'.",
		"Do not include the default library file (lib.d.ts).",
		"Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).",
		"Enables experimental support for ES7 decorators.",
		"If no 'files' property is present in a jsconfig.json, the language service defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.",
		"List files and folders that should not be included. This property is not honored when the 'files' property is present."
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor",
		"Controls the font family.",
		"Controls the font size.",
		"Controls the line height. Use 0 to compute the lineHeight from the fontSize.",
		"Controls visibility of line numbers",
		"Controls visibility of the glyph margin",
		"Columns at which to show vertical rulers",
		"Characters that will be used as word separators when doing word related navigations or operations",
		"The number of spaces a tab is equal to. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'number'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"Insert spaces when pressing Tab. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'boolean'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.",
		"Controls if selections have rounded corners",
		"Controls if the editor will scroll beyond the last line",
		"Controls after how many characters the editor will wrap to the next line. Setting this to 0 turns on viewport width wrapping (word wrapping). Setting this to -1 forces the editor to never wrap.",
		"Controls the indentation of wrapped lines. Can be one of 'none', 'same' or 'indent'.",
		"A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events",
		"Controls if quick suggestions should show up or not while typing",
		"Controls the delay in ms after which quick suggestions will show up",
		"Enables parameter hints",
		"Controls if the editor should automatically close brackets after opening them",
		"Controls if the editor should automatically format the line after typing",
		"Controls if suggestions should automatically show up when typing trigger characters",
		"Controls if suggestions should be accepted 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions.",
		"Controls whether snippets are shown with other suggestions and how they are sorted.",
		"Enable word based suggestions.",
		"Insert snippets when their prefix matches. Works best when 'quickSuggestions' aren't enabled.",
		"Controls whether the editor should highlight similar matches to the selection",
		"Controls the number of decorations that can show up at the same position in the overview ruler",
		"Control the cursor animation style, possible values are 'blink', 'smooth', 'phase', 'expand' and 'solid'",
		"Zoom the font of the editor when using mouse wheel and holding Ctrl",
		"Controls the cursor style, accepted values are 'block', 'line' and 'underline'",
		"Enables font ligatures",
		"Controls if the cursor should be hidden in the overview ruler.",
		"Controls whether the editor should render whitespace characters",
		"Controls whether the editor should render control characters",
		"Controls whether the editor should render indent guides",
		"Controls if the editor shows code lenses",
		"Controls whether the editor has code folding enabled",
		"Inserting and deleting whitespace follows tab stops",
		"Remove trailing auto inserted whitespace",
		"Keep peek editors open even when double clicking their content or when hitting Escape.",
		"Controls if the diff editor shows the diff side by side or inline",
		"Controls if the diff editor shows changes in leading or trailing whitespace as diffs",
		"Controls if the Linux primary clipboard should be supported."
	],
	"vs/editor/common/config/defaultConfig": [
		"Editor content"
	],
	"vs/editor/common/controller/cursor": [
		"Unexpected exception while executing command."
	],
	"vs/editor/common/model/textModelWithTokens": [
		"The mode has failed while tokenizing the input."
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/editor/common/services/bulkEdit": [
		"These files have changed in the meantime: {0}"
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Contributes language declarations.",
		"ID of the language.",
		"Name aliases for the language.",
		"File extensions associated to the language.",
		"File names associated to the language.",
		"File name glob patterns associated to the language.",
		"Mime types associated to the language.",
		"A regular expression matching the first line of a file of the language.",
		"A relative path to a file containing configuration options for the language.",
		"Empty value for `contributes.{0}`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"Invalid `contributes.{0}`. Expected an array."
	],
	"vs/editor/common/services/modelServiceImpl": [
		"Please update your settings: `editor.detectIndentation` replaces `editor.tabSize`: \"auto\" or `editor.insertSpaces`: \"auto\""
	],
	"vs/editor/contrib/accessibility/browser/accessibility": [
		"Thank you for trying out VS Code's experimental accessibility options.",
		"Status:",
		"Pressing Tab in this editor will move focus to the next focusable element. Toggle this behaviour by pressing {0}.",
		"Pressing Tab in this editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"Pressing Tab in this editor will insert the tab character. Toggle this behaviour by pressing {0}.",
		"Pressing Tab in this editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"You can dismiss this tooltip and return to the editor by pressing Escape.",
		"Show Accessibility Help"
	],
	"vs/editor/contrib/carretOperations/common/carretOperations": [
		"Move Carret Left",
		"Move Carret Right"
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Cut",
		"Copy",
		"Paste"
	],
	"vs/editor/contrib/comment/common/comment": [
		"Toggle Line Comment",
		"Add Line Comment",
		"Remove Line Comment",
		"Toggle Block Comment"
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Show Editor Context Menu"
	],
	"vs/editor/contrib/defineKeybinding/browser/defineKeybinding": [
		"Define Keybinding",
		"Press desired key combination and ENTER",
		"For your current keyboard layout press ",
		"You won't be able to produce this key combination under your current keyboard layout.",
		"Define Keybinding"
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Find in selection",
		"Close",
		"Replace",
		"Replace",
		"Replace",
		"Replace All",
		"Toggle Replace mode",
		"Only the first 999 results are highlighted, but all find operations work on the entire text.",
		"{0} of {1}",
		"No results"
	],
	"vs/editor/contrib/find/common/findController": [
		"Find",
		"Find Next",
		"Find Previous",
		"Find Next Selection",
		"Find Previous Selection",
		"Replace",
		"Add Selection To Next Find Match",
		"Add Selection To Previous Find Match",
		"Move Last Selection To Next Find Match",
		"Move Last Selection To Previous Find Match",
		"Select All Occurences of Find Match",
		"Change All Occurrences"
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Unfold",
		"Unfold Recursively",
		"Fold",
		"Fold Recursively",
		"Fold All",
		"Unfold All",
		"Fold Level 1",
		"Fold Level 2",
		"Fold Level 3",
		"Fold Level 4",
		"Fold Level 5"
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Format Code"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" – {0} definitions",
		"Go to Definition",
		"Open Definition to the Side",
		"Peek Definition",
		"Click to show the {0} definitions found."
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"Suggested fixes: ",
		"Suggested fix: ",
		"({0}/{1}) [{2}]",
		"({0}/{1})",
		"Go to Next Error or Warning",
		"Go to Previous Error or Warning"
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Show Hover"
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Loading..."
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Replace with Previous Value",
		"Replace with Next Value"
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Convert Indentation to Spaces",
		"Convert Indentation to Tabs",
		"Configured Tab Size",
		"Select Tab Size for Current File",
		"Indent Using Tabs",
		"Indent Using Spaces",
		"Detect Indentation from Content",
		"Toggle Render Whitespace",
		"Toggle Control Characters"
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Copy Line Up",
		"Copy Line Down",
		"Move Line Up",
		"Move Line Down",
		"Sort Lines Ascending",
		"Sort Lines Descending",
		"Trim Trailing Whitespace",
		"Delete Line",
		"Indent Line",
		"Outdent Line",
		"Insert Line Above",
		"Insert Line Below"
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + click to follow link",
		"Ctrl + click to follow link",
		"Sorry, failed to open this link because it is not well-formed: {0}",
		"Sorry, failed to open this link because its target is missing.",
		"Open Link"
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Add Cursor Above",
		"Add Cursor Below",
		"Create Multiple Cursors from Selected Lines"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Trigger Parameter Hints"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, hint"
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Quick Fix"
	],
	"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget": [
		"{0}, quick fix suggestion",
		"Loading...",
		"No fix suggestions.",
		"Quick Fix",
		"{0}, accepted"
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"Go to line {0} and column {1}",
		"Go to line {0}",
		"Type a line number between 1 and {0} to navigate to",
		"Type a column between 1 and {0} to navigate to",
		"Go to line {0}",
		"Type a line number, followed by an optional colon and a column number to navigate to",
		"Go to Line..."
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"Type the name of an action you want to execute",
		"Command Palette"
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"Type the name of an identifier you wish to navigate to",
		"Go to Symbol...",
		"symbols ({0})",
		"modules ({0})",
		"classes ({0})",
		"interfaces ({0})",
		"methods ({0})",
		"functions ({0})",
		"properties ({0})",
		"variables ({0})",
		"variables ({0})",
		"constructors ({0})",
		"calls ({0})"
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} references",
		"Find All References"
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Loading..."
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Failed to resolve file.",
		"{0} references",
		"{0} reference",
		"no preview available",
		"References",
		"No results",
		"References"
	],
	"vs/editor/contrib/rename/browser/rename": [
		"Sorry, rename failed to execute.",
		"Rename Symbol"
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Rename input. Type new name and press Enter to commit."
	],
	"vs/editor/contrib/rename/common/rename": [
		"No result."
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"Go to Bracket"
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Expand Select",
		"Shrink Select"
	],
	"vs/editor/contrib/suggest/browser/suggest": [
		"Trigger Suggest"
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Read More...{0}",
		"{0}, suggestion, has details",
		"{0}, suggestion",
		"Go back",
		"Loading...",
		"No suggestions.",
		"{0}, accepted",
		"{0}, suggestion, has details",
		"{0}, suggestion"
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Use of Tab Key for Setting Focus"
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"View: Toggle Word Wrap"
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Close"
	],
	"vs/languages/html/common/html.contribution": [
		"HTML",
		"Maximum amount of characters per line (0 = disable).",
		"List of tags, comma separated, that shouldn't be reformatted. 'null' defaults to all tags listed at https://www.w3.org/TR/html5/dom.html#phrasing-content.",
		"Indent <head> and <body> sections.",
		"Whether existing line breaks before elements should be preserved. Only works before elements, not inside tags or for text.",
		"Maximum number of line breaks to be preserved in one chunk. Use 'null' for unlimited.",
		"Format and indent {{#foo}} and {{/foo}}.",
		"End with a newline.",
		"List of tags, comma separated, that should have an extra newline before them. 'null' defaults to \"head, body, /html\"."
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Contributes configuration settings.",
		"A summary of the settings. This label will be used in the settings file as separating comment.",
		"Description of the configuration properties.",
		"if set, 'configuration.type' must be set to 'object",
		"'configuration.title' must be a string",
		"'configuration.properties' must be an object"
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Extension `{1}` failed to activate. Reason: unknown dependency `{0}`.",
		"Extension `{1}` failed to activate. Reason: dependency `{0}` failed to activate.",
		"Extension `{0}` failed to activate. Reason: more than 10 levels of dependencies (most likely a dependency loop).",
		"Activating extension `{0}` failed: {1}."
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Got empty extension description",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `object`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"property `{0}` can be omitted or must be of type `string`",
		"Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"The display name for the extension used in the VS Code gallery.",
		"The categories used by the VS Code gallery to categorize the extension.",
		"Banner used in the VS Code marketplace.",
		"The banner color on the VS Code marketplace page header.",
		"The color theme for the font used in the banner.",
		"The publisher of the VS Code extension.",
		"Activation events for the VS Code extension.",
		"Dependencies to other extensions. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.",
		"Script executed before the package is published as a VS Code extension.",
		"All contributions of the VS Code extension represented by this package."
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"Here are other available commands: ",
		"({0}) was pressed. Waiting for second key of chord...",
		"The key combination ({0}, {1}) is not a command."
	],
	"vs/platform/message/common/message": [
		"Close",
		"Later",
		"Cancel"
	]
});