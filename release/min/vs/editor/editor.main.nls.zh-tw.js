/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(36e67863cf6a6f202f5a80acff4146a695c48357)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.zh-tw",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (再次出現)"],"vs/base/browser/ui/findinput/findInput":["使用規則運算式","全字拼寫須相符","大小寫須相符","輸入"],"vs/base/browser/ui/inputbox/inputBox":["錯誤: {0}","警告: {0}","資訊: {0}"],"vs/base/common/errors":["{0}。錯誤碼: {1}","權限被拒絕 (HTTP {0})","權限被拒絕","{0} (HTTP {1}: {2})","{0} (HTTP {1})","未知的連接錯誤 ({0})","發生未知的連接錯誤。可能是您已經沒有連線到網際網路，或是您連接的伺服器已離線。","{0}: {1}","發生未知的錯誤。如需詳細資訊，請參閱記錄檔。","發生系統錯誤 ({0})","發生未知的錯誤。如需詳細資訊，請參閱記錄檔。","{0} (總計 {1} 個錯誤)","發生未知的錯誤。如需詳細資訊，請參閱記錄檔。","未實作","不合法的狀態: {0}","不合法的引數","不合法的狀態: {0}","不合法的狀態","無法載入需要的檔案。可能是您已經沒有連線到網際網路，或是您連接的伺服器已離線。請重新整理瀏覽器，再試一次。","無法載入必要的檔案。請重新啟動該應用程式，然後再試一次。詳細資料: {0}"],"vs/base/common/json":["符號無效","數字格式無效","Property name expected","Value expected","Colon expected","Comma expected","Closing brace expected","Closing bracket expected","必須為檔案結尾"],"vs/base/common/keyCodes":["Windows","Control","Shift","Alt","Command","Windows","Ctrl","Shift","Alt","Command","Windows"],"vs/base/common/severity":["錯誤","警告","資訊"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}，選擇器","選擇器"],"vs/base/parts/quickopen/browser/quickOpenWidget":["快速選擇器。輸入以縮小結果範圍。","快速選擇器"],"vs/base/parts/tree/browser/treeDefaults":["摺疊"],"vs/editor/browser/standalone/standaloneSchemas":["JSON schema for ASP.NET project.json files","Compilation options that are passed through to Roslyn","The version of the dependency.","The type of the dependency. 'build' dependencies only exist at build time","The dependencies of the application. Each entry specifes the name and the version of a Nuget package.","A command line script or scripts.\r\rAvailable variables:\r%project:Directory% - The project directory\r%project:Name% - The project name\r%project:Version% - The project version","The author of the application","List of files to exclude from publish output (kpm bundle).","Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","Commands that are available for this application","Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely 'Debug' and 'Release'.","The description of the application","Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).","Target frameworks that will be built, and dependencies that are specific to the configuration.","Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).","Glob pattern to indicate all the files that need to be compiled as resources.","Scripts to execute during the various stages.","Glob pattern to specify the code files to share with dependent projects. Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","The version of the application. Example: 1.2.0.0","Specifying the webroot property in the project.json file specifies the web server root (aka public folder). In visual studio, this folder will be used to root IIS. Static files should be put in here.","JSON schema for Bower configuration files","Any property starting with _ is valid.","The name of your package.","Help users identify and search for your package with a brief description.","A semantic version number.","The primary acting files necessary to use your package.","SPDX license identifier or path/url to a license.","A list of files for Bower to ignore when installing your package.","Used for search by keyword. Helps make your package easier to discover without people needing to know its name.","A list of people that authored the contents of the package.","URL to learn more about the package. Falls back to GitHub project if not specified and it's a GitHub endpoint.","The repository in which the source code can be found.","Dependencies are specified with a simple hash of package name to a semver compatible identifier or URL.","Dependencies that are only needed for development of the package, e.g., test framework or building documentation.","Dependency versions to automatically resolve with if conflicts occur between packages.","If you set it to  true  it will refuse to publish it. This is a way to prevent accidental publication of private repositories.","Used by grunt-bower-task to specify custom install locations.","The types of modules this package exposes","NPM configuration for this package.","A person who has been involved in creating or maintaining this package","Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.","Any property starting with _ is valid.","The name of the package.","Version must be parseable by node-semver, which is bundled with npm as a dependency.","This helps people discover your package, as it's listed in 'npm search'.","The relative path to the icon of the package.","This helps people discover your package as it's listed in 'npm search'.","The url to the project homepage.","The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.","The url to your project's issue tracker.","The email address to which issues should be reported.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","A list of people who contributed to this package.","A list of people who maintains this package.","The 'files' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.","The main field is a module ID that is the primary entry point to your program.","Specify either a single file or an array of filenames to put in place for the man program to find.","If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash.","Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.","Put example scripts in here. Someday, it might be exposed in some clever way.","Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.","A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.","Specify the place where your code lives. This is helpful for people who want to contribute.","The 'scripts' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.","A 'config' hash can be used to set configuration parameters used in package scripts that persist across upgrades.","Array of package names that will be bundled when publishing the package.","Array of package names that will be bundled when publishing the package.","If your package is primarily a command-line application that should be installed globally, then set this value to true to provide a warning if it is installed locally.","If set to true, then npm will refuse to publish it.","JSON schema for the ASP.NET global configuration files","A list of project folders relative to this file.","A list of source folders relative to this file.","The runtime to use.","The runtime version to use.","The runtime to use, e.g. coreclr","The runtime architecture to use, e.g. x64.","JSON schema for the TypeScript compiler's configuration file","Instructs the TypeScript compiler how to compile .ts files","The character set of the input files","Generates corresponding d.ts files.","Show diagnostic information.","Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.","Emit a single file with source maps instead of having a separate file.","Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.","Print names of files part of the compilation.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Specify module code generation: 'CommonJS', 'Amd', 'System', or 'UMD'.","Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).)","Do not emit output.","Do not emit outputs if any type checking errors were reported.","Do not generate custom helper functions like __extends in compiled output.","Warn on expressions and declarations with an implied 'any' type.","Do not include the default library file (lib.d.ts).","Do not add triple-slash references or module import targets to the list of compiled files.","Concatenate and emit output to single file.","Redirect output structure to the directory.","Do not erase const enum declarations in generated code.","Do not emit comments to output.","Specifies the root directory of input files. Use to control the output directory structure with --outDir.","Generates corresponding '.map' file.","Specifies the location where debugger should locate TypeScript files instead of source locations.","Suppress noImplicitAny errors for indexing objects lacking index signatures.","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Watch input files.","Enable the JSX option (requires TypeScript 1.6):  'preserve', 'react'.","Emits meta data.for ES7 decorators.","Supports transpiling single TS files into JS files.","Enables experimental support for ES7 decorators.","Enables experimental support for async functions (requires TypeScript 1.6).","If no 'files' property is present in a tsconfig.json, the compiler defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","JSON schema for the JavaScript configuration file","Instructs the JavaScript language service how to validate .js files","The character set of the input files","Show diagnostic information.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Module code generation to resolve against: 'commonjs', 'amd', 'system', or 'umd'.","Do not include the default library file (lib.d.ts).","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Enables experimental support for ES7 decorators.","If no 'files' property is present in a jsconfig.json, the language service defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","List files and folders that should not be included. This property is not honored when the 'files' property is present."],"vs/editor/common/config/commonEditorConfig":["編輯器組態","控制字型家族。","控制字型大小。","控制行高。使用 0 會從 fontSize 計算 lineHeight。","控制是否顯示行號","控制是否顯示字符邊界","要在其中顯示垂直尺規的資料行","執行文字相關導覽或作業時將作為文字分隔符號的字元","與 Tab 相等的空格數量。","必須是 'number'。請注意，值 \"auto\" 已由 `editor.detectIndentation` 設定取代。","按 Tab 時插入空格。","必須是 'boolean'。請注意，值 \"auto\" 已由 `editor.detect Indentation` 設定取代。","開啟檔案時，會依據檔案內容來偵測 `editor.tabSize` 及 `editor.insertSpaces`。","控制選取範圍是否有圓角","控制編輯器是否會捲動到最後一行之後","控制編輯器換行到下一行的字元數。若將此項目設為 0，將會開啟檢視區寬度換行 (自動換行)。若將此項目設為 -1，將會強制編輯器永不換行。","控制換行的縮排。可以是 [無]、[相同] 或 [縮排]。","滑鼠滾輪捲動事件的 'deltaX' 與 'deltaY' 所使用的乘數","控制輸入時是否應顯示快速建議","控制延遲顯示快速建議的毫秒數","啟用參數提示","控制編輯器是否應在左括號後自動插入右括號","控制編輯器是否應在輸入一行後自動格式化","控制輸入觸發字元時，是否應自動顯示建議","控制除了 'Tab' 外，是否也藉由按下 'Enter' 接受建議。如此可避免混淆要插入新行或接受建議。","控制程式碼片段是否隨其他建議顯示，以及其排序方式。","啟用字組式建議。","在前置詞相符時插入程式碼片段。最適用於未啟用 'quickSuggestions' 時。","控制編輯器是否應反白顯示與選取範圍相似的符合項","控制可在概觀尺規中相同位置顯示的裝飾項目數","控制游標動畫樣式，可能的值為 'blink'、'smooth'、'phase'、'expand' 和 'solid'","使用滑鼠滾輪並按住 Ctrl 時，縮放編輯器的字型","控制游標樣式，接受的值為 'block'、'line' 和 'underline'","啟用連字字型","控制游標是否應隱藏在概觀尺規中。","控制編輯器是否應顯示空白字元","Controls whether the editor should render control characters","Controls whether the editor should render indent guides","Controls if the editor shows code lenses","控制編輯器是否已啟用程式碼摺疊功能","插入和刪除接在定位停駐點後的空白字元","移除尾端自動插入的空白字元","讓預覽編輯器在使用者按兩下其內容或點擊 Escape 時保持開啟。","控制 Diff 編輯器要並排或內嵌顯示差異","控制 Diff 編輯器是否將開頭或尾端空白字元的變更顯示為差異","控制是否應支援 Linux 主要剪貼簿。"],"vs/editor/common/config/defaultConfig":["編輯器內容"],"vs/editor/common/controller/cursor":["執行命令時發生未預期的例外狀況。"],"vs/editor/common/model/textModelWithTokens":["將輸入語彙基元化時，模式失敗。"],"vs/editor/common/modes/modesRegistry":["純文字"],"vs/editor/common/services/bulkEdit":["這些檔案已同時變更: {0}"],"vs/editor/common/services/modeServiceImpl":["提供語言宣告。","語言的識別碼。","語言的別名名稱。","與語言相關聯的副檔名。","與語言相關聯的檔案名稱。","與語言相關聯的檔案名稱 Glob 模式。","與語言相關聯的 MIME 類型。","規則運算式，符合語言檔案的第一行。","檔案的相對路徑，其中該檔案包含語言組態選項。","`contributes.{0}` 值為空值","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 '{0}' 可以省略且必須屬於 `string[]` 類型","屬性 '{0}' 可以省略且必須屬於 `string[]` 類型","屬性 '{0}' 可以省略且必須屬於 `string` 類型","屬性 '{0}' 可以省略且必須屬於 `string` 類型","屬性 '{0}' 可以省略且必須屬於 `string[]` 類型","屬性 '{0}' 可以省略且必須屬於 `string[]` 類型","`contributes.{0}` 無效。必須是陣列。"],"vs/editor/common/services/modelServiceImpl":['請更新您的設定: `editor.detect Indentation` 會取代 `editor.tabSize`: "auto" 或  `editor.insertSpaces`: "auto"'],"vs/editor/contrib/accessibility/browser/accessibility":["感謝您試用 VSCode 的實驗協助工具選項。","狀態:","在此編輯器中按 Tab 鍵會將焦點移至下一個可設定焦點的元素。按 {0} 可切換此行為。","在此編輯器中按 Tab 鍵會將焦點移至下一個可設定焦點的元素。目前無法透過按鍵繫結關係觸發命令 {0}。","在此編輯器中按 Tab 鍵會插入定位字元。按 {0} 可切換此行為。","在此編輯器中按 Tab 鍵會將焦點移至下一個可設定焦點的元素。目前無法透過按鍵繫結關係觸發命令 {0}。","您可以按 Esc 鍵來解除此工具提示並返回編輯器。","顯示協助工具說明"],"vs/editor/contrib/carretOperations/common/carretOperations":["將 Carret 往左移","將 Carret 往右移"],"vs/editor/contrib/clipboard/browser/clipboard":["剪下","複製","貼上"],"vs/editor/contrib/comment/common/comment":["切換行註解","加入行註解","移除行註解","切換區塊註解"],"vs/editor/contrib/contextmenu/browser/contextmenu":["顯示編輯器內容功能表"],"vs/editor/contrib/defineKeybinding/browser/defineKeybinding":["定義按鍵繫結關係","按下所需的按鍵組合，再按 ENTER 鍵","針對您目前的鍵盤配置，請按 ","您無法在目前的鍵盤配置下產生此按鍵組合。","定義按鍵繫結關係"],"vs/editor/contrib/find/browser/findWidget":["尋找","尋找","上一個符合項","下一個相符項","在選取範圍中尋找","關閉","取代","取代","取代","全部取代","切換取代模式","只會將前 999 筆結果醒目提示，但所有尋找作業會在完整文字上執行。","{0} / {1}","沒有結果"],"vs/editor/contrib/find/common/findController":["尋找","尋找下一個","尋找上一個","尋找下一個選取項目","尋找上一個選取項目","取代","將選取項目加入下一個找到的相符項","將選取項目加入前一個找到的相符項中","將最後一個選擇項目移至下一個找到的相符項","將最後一個選擇項目移至前一個找到的相符項","選取所有找到的相符項出現處","變更所有發生次數"],"vs/editor/contrib/folding/browser/folding":["展開","以遞迴方式展開","摺疊","以遞迴方式摺疊","全部摺疊","全部展開","摺疊層級 1","摺疊層級 2","摺疊層級 3","摺疊層級 4","摺疊層級 5"],"vs/editor/contrib/format/common/formatActions":["格式化程式碼"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" - {0} 個定義","移至定義","在一側開啟定義","預覽定義","按一下以顯示找到的 {0} 個定義。"],"vs/editor/contrib/gotoError/browser/gotoError":["建議的修正程式: ","建議的修正程式: ","({0}/{1}) [{2}]","({0}/{1})","移至下一個錯誤或警告","移至上一個錯誤或警告"],"vs/editor/contrib/hover/browser/hover":["動態顯示"],"vs/editor/contrib/hover/browser/modesContentHover":["正在載入..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["以上一個值取代","以下一個值取代"],"vs/editor/contrib/indentation/common/indentation":["將縮排轉換成空格","將縮排轉換成定位點","已設定的定位點大小","選取目前檔案的定位點大小","使用 Tab 進行縮排","使用空格鍵進行縮排","偵測內容中的縮排","切換轉譯空白字元","Toggle Control Characters"],"vs/editor/contrib/linesOperations/common/linesOperations":["將行向上複製","將行向下複製","上移一行","下移一行","遞增排序行","遞減排序行","修剪尾端空白","刪除行","縮排行","凸排行","在上方插入行","在下方插入行"],"vs/editor/contrib/links/browser/links":["按住 Cmd 並按一下按鍵以追蹤連結","按住 CTRL 並按一下按鍵以追蹤連結","抱歉，因為此連結的語式不正確，所以無法加以開啟: {0}","抱歉，因為此連結遺失目標，所以無法加以開啟。","開啟連結"],"vs/editor/contrib/multicursor/common/multicursor":["在上方加入游標","在下方加入游標","從選取的行建立多個游標"],"vs/editor/contrib/parameterHints/browser/parameterHints":["觸發參數提示"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}，提示"],"vs/editor/contrib/quickFix/browser/quickFix":["Quick Fix"],"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget":["{0}，快速檢修建議","正在載入...","沒有修正建議。","Quick Fix","{0}，接受"],"vs/editor/contrib/quickOpen/browser/gotoLine":["移至行 {0} 和資料行 {1}","移至第 {0} 行","輸入介於 1 到 {0} 之間要瀏覽至的行號","輸入介於 1 和 {0} 之間要瀏覽至的資料行","Go to line {0}","輸入行號，後接選擇性的冒號和資料行數字，以瀏覽至","移至行..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","輸入您想要執行的動作名稱","命令選擇區"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","請輸入您想要瀏覽至的識別項名稱","移至符號...","符號 ({0})","模組 ({0})","類別 ({0})","介面 ({0})","方法 ({0})","函式 ({0})","屬性 ({0})","變數 ({0})","變數 ({0})","建構函式 ({0})","呼叫 ({0})"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" - {0} 個參考","尋找所有參考"],"vs/editor/contrib/referenceSearch/browser/referencesController":["正在載入..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["無法解析檔案。","{0} 個參考","{0} 個參考","no preview available","參考","沒有結果","參考"],"vs/editor/contrib/rename/browser/rename":["抱歉，無法執行重新命名。","重新命名符號"],"vs/editor/contrib/rename/browser/renameInputField":["為輸入重新命名。請鍵入新名稱，然後按 Enter 以認可。"],"vs/editor/contrib/rename/common/rename":["沒有結果。"],"vs/editor/contrib/smartSelect/common/jumpToBracket":["移至方括弧"],"vs/editor/contrib/smartSelect/common/smartSelect":["展開選取","縮小選取"],"vs/editor/contrib/suggest/browser/suggest":["觸發建議"],"vs/editor/contrib/suggest/browser/suggestWidget":["進一步了解...{0}","{0}，建議，有詳細資料","{0}，建議","返回","正在載入...","無建議。","{0}，接受","{0}，建議，有詳細資料","{0}，建議"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["切換使用 TAB 鍵來設定焦點"],"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap":["檢視: 切換自動換行"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["關閉"],"vs/languages/html/common/html.contribution":["HTML 設定","每行的字元數上限 (0 = 停用)。","不應重新格式化的逗號分隔標記清單。'null' 預設為 https://www.w3.org/TR/html5/dom.html#phrasing-content 中列出的所有標記。","縮排 <head> 及 <body> 區段。","是否應保留項目前方現有的分行符號。僅適用於項目前方，而不適用於標記內或文字。","一個區塊要保留的最大分行符號數。使用 'null' 表示無限制。","格式化並縮排 {{#foo}} 及 {{/foo}}。","以新行字元結尾。","前方應有額外新行字元的標記清單，須以逗號分隔。'null' 的預設值為 \"head, body, /html\"。"],"vs/platform/configuration/common/configurationRegistry":["提供組態設定。","設定的摘要。此標籤將會在設定檔中作為分隔註解使用。","組態屬性的描述。","如果已設定，'configuration.type' 必須設定為物件","'configuration.title' 必須是字串","'configuration.properties' 必須是物件"],"vs/platform/extensions/common/abstractExtensionService":["擴充功能 `{1}` 無法啟動。原因: 未知的相依性 `{0}`。","擴充功能 `{1}` 無法啟動。原因: 相依性 `{0}` 無法啟動。","擴充功能 `{0}` 無法啟動。原因: 相依性超過 10 個層級 (很可能是相依性迴圈)。","啟動擴充功能 `{0}` 失敗: {1}。"],"vs/platform/extensions/common/extensionsRegistry":["得到空白擴充功能描述","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 '{0}' 為強制項目且必須屬於 `object` 類型","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 `{0}` 可以省略或必須屬於 `string[]` 類型","屬性 `{0}` 可以省略或必須屬於 `string[]` 類型","屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略","屬性 `{0}` 可以省略或必須屬於 `string` 類型","`main` ({0}) 必須包含在擴充功能的資料夾 ({1}) 中。這可能會使擴充功能無法移植。","屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略","VS Code 資源庫中使用的擴充功能顯示名稱。","VS Code 資源庫用來將擴充功能歸類的分類。","用於 VS Code Marketplace 的橫幅。","VS Code Marketplace 頁首的橫幅色彩。","橫幅中使用的字型色彩佈景主題。","VS Code 擴充功能的發行者。","VS Code 擴充功能的啟動事件。","其它擴充功能的相依性。擴充功能的識別碼一律為 ${publisher}.${name}。例如: vscode.csharp。","在封裝作為 VS Code 擴充功能發行前所執行的指令碼。","此封裝所代表的所有 VS Code 擴充功能比重。"],"vs/platform/keybinding/browser/keybindingServiceImpl":["其他可用命令如下: ","已按下 ({0})。請等待第二個套索鍵...","按鍵組合 ({0}, {1}) 不是命令。"],"vs/platform/message/common/message":["關閉","稍後","取消"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.zh-tw.js.map