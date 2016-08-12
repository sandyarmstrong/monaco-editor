/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(36e67863cf6a6f202f5a80acff4146a695c48357)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.zh-cn", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (已再次发生)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"使用正则表达式",
		"全字匹配",
		"区分大小写",
		"输入",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"错误: {0}",
		"警告: {0}",
		"信息: {0}",
	],
	"vs/base/common/errors": [
		"{0}。错误代码: {1}",
		"权限被拒绝 (HTTP {0})",
		"权限被拒绝",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"未知连接错误 ({0})",
		"出现未知连接错误。您的 Internet 连接已断开，或者您连接的服务器已脱机。",
		"{0}: {1}",
		"出现未知错误。有关详细信息，请参阅日志。",
		"发生了系统错误({0})",
		"出现未知错误。有关详细信息，请参阅日志。",
		"{0} 个(共 {1} 个错误)",
		"出现未知错误。有关详细信息，请参阅日志。",
		"未实施",
		"非法参数: {0}",
		"非法参数",
		"非法状态: {0}",
		"非法状态",
		"无法加载需要的文件。您的 Internet 连接已断开，或者您连接的服务器已脱机。请刷新浏览器并重试。",
		"未能加载所需文件。请重启应用程序重试。详细信息: {0}",
	],
	"vs/base/common/json": [
		"符号无效",
		"数字格式无效",
		"需要属性名",
		"需要值",
		"需要冒号",
		"需要逗号",
		"需要右大括号",
		"需要右括号",
		"预期的文件结尾",
	],
	"vs/base/common/keyCodes": [
		"Windows",
		"控件",
		"Shift",
		"Alt",
		"命令",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"命令",
		"Windows",
	],
	"vs/base/common/severity": [
		"错误",
		"警告",
		"信息",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}，选取器",
		"选取器",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"快速选取器。键入以缩小结果范围。",
		"快速选取器",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"折叠",
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
		"编辑器配置",
		"控制字体系列。",
		"控制字体大小。",
		"控制行高。",
		"控制行号的可见性",
		"控制字形边距的可见性",
		"显示垂直标尺的列",
		"执行文字相关的导航或操作时将用作文字分隔符的字符",
		"一个制表符等于的空格数。",
		"应为 \"number\"。注意，值\"auto\"已由 \"editor.detectIndentation\" 设置替换。",
		"按 \"Tab\" 时插入空格。",
		"应为 \"boolean\"。注意，值 \"auto\" 已由 \"editor.detectIndentation\" 设置替换。",
		"当打开文件时，将基于文件内容检测 \"editor.tabSize\" 和 \"editor.insertSpaces\"。",
		"控制选取范围是否有圆角",
		"控制编辑器是否可以滚动到最后一行之后",
		"控制在多少个字符后编辑器会自动换到下一行。将其设置为 0 则将打开视区宽度换行(自动换行)。将其设置为 -1 则将强制编辑器始终不换行。",
		"控制换行的行的缩进。可以是\"none\"、 \"same\" 或 \"indent\"。",
		"要对鼠标滚轮滚动事件的 \"deltaX\" 和 \"deltaY\" 使用的乘数 ",
		"控制键入时是否应显示快速建议",
		"控制延迟多少毫秒后将显示快速建议",
		"启用参数提示",
		"控制编辑器是否应该在左括号后自动插入右括号",
		"控制编辑器是否应在键入后自动设置行的格式",
		"控制键入触发器字符时是否应自动显示建议",
		"控制除了 \"Tab\" 以外，是否还应在 \"Enter\" 时接受建议。帮助避免“插入新行”或“接受建议”之间的歧义。",
		"Controls whether snippets are shown with other suggestions and how they are sorted.",
		"Enable word based suggestions.",
		"Insert snippets when their prefix matches. Works best when \'quickSuggestions\' aren\'t enabled.",
		"控制编辑器是否应突出显示选项的近似匹配",
		"控制可在概述标尺同一位置显示的效果数量",
		"控制光标动画样式，可能的值为 \"blink\"、\"smooth\"、\"phase\"、\"expand\" 和 \"solid\"",
		"通过使用鼠标滚轮同时按住 Ctrl 可缩放编辑器的字体",
		"控制光标样式，接受的值为 \"block\"、\"line\" 和 \"underline\"",
		"启用字体连字",
		"控制光标是否应隐藏在概述标尺中。",
		"控制编辑器是否应呈现空白字符",
		"Controls whether the editor should render control characters",
		"Controls whether the editor should render indent guides",
		"Controls if the editor shows code lenses",
		"控制编辑器是否启用代码折叠功能",
		"在制表位后插入和删除空格",
		"删除尾随自动插入的空格",
		"即使在双击编辑器内容或按 Esc 键时，也要保持速览编辑器的打开状态。",
		"控制 Diff 编辑器以并排或内联形式显示差异",
		"控制差异编辑器是否将对前导空格或尾随空格的更改显示为差异",
		"控制是否支持 Linux 主剪贴板。",
	],
	"vs/editor/common/config/defaultConfig": [
		"编辑器内容",
	],
	"vs/editor/common/controller/cursor": [
		"执行命令时出现意外异常。",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"标记输入时模式失败。",
	],
	"vs/editor/common/modes/modesRegistry": [
		"纯文本",
	],
	"vs/editor/common/services/bulkEdit": [
		"这些文件也已同时更改: {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"有助于语言声明。",
		"语言 ID。",
		"语言的别名。",
		"与语言关联的文件扩展名。",
		"与语言关联的文件名。",
		"与语言关联的文件名 glob 模式。",
		"与语言关联的 Mime 类型。",
		"与语言文件的第一行匹配的正则表达式。",
		"包含语言配置选项的文件的相对路径。",
		"“contributes.{0}”的值为空",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”可以省略，其类型必须是 \"string[]\"",
		"属性“{0}”可以省略，其类型必须是 \"string[]\"",
		"属性“{0}”可以省略，其类型必须是“字符串”",
		"属性“{0}”可以省略，其类型必须是“字符串”",
		"属性“{0}”可以省略，其类型必须是 \"string[]\"",
		"属性“{0}”可以省略，其类型必须是 \"string[]\"",
		"无效的“contributes.{0}”。应为数组。",
	],
	"vs/editor/common/services/modelServiceImpl": [
		"请更新设置: \"editor.detectIndentation\" 替换 \"editor.tabSize\": \"auto\" 或 \"editor.insertSpaces\": \"auto\"",
	],
	"vs/editor/contrib/accessibility/browser/accessibility": [
		"感谢试用 VS 代码的实验辅助功能选项。",
		"状态:",
		"在此编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。通过按 {0} 切换此行为。",
		"在此编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。当前无法通过键绑定触发命令 {0}。",
		"在此编辑器中按 Tab 将插入制表符。通过按 {0} 切换此行为。",
		"在此编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。当前无法通过键绑定触发命令 {0}。",
		"可以通过按 Esc 消除此工具提示并返回到编辑器。",
		"显示辅助功能帮助",
	],
	"vs/editor/contrib/carretOperations/common/carretOperations": [
		"左移 Carret",
		"右移 Carret",
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"剪切",
		"复制",
		"粘贴",
	],
	"vs/editor/contrib/comment/common/comment": [
		"切换行注释",
		"添加行注释",
		"删除行注释",
		"切换块注释",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"显示编辑器上下文菜单",
	],
	"vs/editor/contrib/defineKeybinding/browser/defineKeybinding": [
		"定义键绑定",
		"按所需组合键，然后按 ENTER",
		"对于当前键盘布局，按 ",
		"在当前键盘布局下无法生成此组合键。",
		"定义键绑定",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"查找",
		"查找",
		"上一个匹配",
		"下一个匹配",
		"在选定内容中查找",
		"关闭",
		"替换",
		"替换",
		"替换",
		"全部替换",
		"切换替换模式",
		"仅前 999 个结果突出显示，但所有查找操作均针对整个文本。",
		"第 {0} 个(共 {1} 个)",
		"无结果",
	],
	"vs/editor/contrib/find/common/findController": [
		"查找",
		"查找下一个",
		"查找上一个",
		"查找下一个选择",
		"查找上一个选择",
		"替换",
		"将选择添加到下一个查找匹配项",
		"将选择内容添加到上一查找匹配项",
		"将上次选择移动到下一个查找匹配项",
		"将上个选择内容移动到上一查找匹配项",
		"选择所有找到的查找匹配项",
		"更改所有匹配项",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"展开",
		"以递归方式展开",
		"折叠",
		"以递归方式折叠",
		"全部折叠",
		"全部展开",
		"折叠级别 1",
		"折叠级别 2",
		"折叠级别 3",
		"折叠级别 4",
		"折叠级别 5",
	],
	"vs/editor/contrib/format/common/formatActions": [
		"格式代码",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" – {0} 定义",
		"转到定义",
		"打开侧边的定义",
		"查看定义",
		"单击此处显示找到的 {0} 个定义。",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"建议的修正:",
		"建议的修正:",
		"({0}/{1}) [{2}]",
		"({0}/{1})",
		"转到下一个错误或警告",
		"转到上一个错误或警告",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"显示悬停",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"正在加载...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"替换为上一个值",
		"替换为下一个值",
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"将缩进转换为空格",
		"将缩进转换为制表符",
		"已配置制表符大小",
		"选择当前文件的制表符大小",
		"使用 \"Tab\" 缩进",
		"使用空格缩进",
		"检查内容中的缩进",
		"切换显示空格",
		"Toggle Control Characters",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"向上复制行",
		"向下复制行",
		"向上移动行",
		"向下移动行",
		"按升序排列行",
		"按降序排列行",
		"裁剪尾随空格",
		"删除行",
		"行缩进",
		"行减少缩进",
		"在上面插入行",
		"在下面插入行",
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + 单击以跟踪链接",
		"Ctrl + 单击以跟踪链接",
		"无效的 URI: 无法打开 {0}",
		"Sorry, failed to open this link because its target is missing.",
		"打开链接",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"在上面添加光标",
		"在下面添加光标",
		"从所选行创建多个光标",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"触发参数提示",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}，提示",
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"快速修复",
	],
	"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget": [
		"{0}，快速修复建议",
		"正在加载...",
		"无修复建议。",
		"快速修复",
		"{0}，已接受",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"转到行 {0} 和列 {1}",
		"转到行 {0}",
		"输入要导航到的介于 1 到 {0} 之间的行号",
		"输入要导航到的介于 1 到 {0} 之间的列",
		"Go to line {0}",
		"输入行号，后跟可选的冒号以及要导航到的列号",
		"转到行...",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"输入你想要执行的操作的名称",
		"命令面板",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"输入你想要导航到的标识符的名称",
		"转到符号...",
		"符号({0})",
		"模块({0})",
		"类({0})",
		"接口({0})",
		"方法({0})",
		"函数({0})",
		"属性({0})",
		"变量({0})",
		"变量({0})",
		"构造函数({0})",
		"调用({0})",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} 个引用",
		"查找所有引用",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"正在加载...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"解析文件失败。",
		"{0} 个引用",
		"{0} 个引用",
		"无可用预览",
		"引用",
		"无结果",
		"引用",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"Sorry, rename failed to execute.",
		"重命名符号",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"重命名输入。键入新名称并按 \"Enter\" 提交。",
	],
	"vs/editor/contrib/rename/common/rename": [
		"无结果。",
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"转到括号",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"扩大选择",
		"缩小选择",
	],
	"vs/editor/contrib/suggest/browser/suggest": [
		"触发建议",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"阅读更多...{0}",
		"{0}(建议)具有详细信息",
		"{0}，建议",
		"返回",
		"正在加载...",
		"无建议。",
		"{0}，已接受",
		"{0}(建议)具有详细信息",
		"{0}，建议",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"切换使用 Tab 键，设置焦点",
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"查看: 切换自动换行",
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"关闭",
	],
	"vs/languages/html/common/html.contribution": [
		"HTML 配置",
		"每行最大字符数(0 = 禁用)。",
		"以逗号分隔的标记列表不应重设格式。\"null\" 默认为所有列于 https://www.w3.org/TR/html5/dom.html#phrasing-content 的标记。",
		"缩进 <head> 和 <body> 部分。",
		"是否要保留元素前面的现有换行符。仅适用于元素前，不适用于标记内或文本。",
		"要保留在一个区块中的换行符的最大数量。对于无限制使用 \"null\"。",
		"格式和缩进 {{#foo}} 和 {{/foo}}。",
		"以新行结束。",
		"标记列表，以逗号分隔，其前应有额外新行。\"null\" 默认为“标头、正文、/html”。",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"用于配置字符串。",
		"设置摘要。此标签将在设置文件中用作分隔注释。",
		"配置属性的描述。",
		"如果进行设置，\"configuration.type\" 必须设置为对象",
		"configuration.title 必须是字符串",
		"configuration.properties 必须是对象",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"无法激活扩展”{1}“。原因：未知依赖关系”{0}“。",
		"无法激活扩展”{1}“。原因: 无法激活依赖关系”{0}“。",
		"无法激活扩展”{0}“。原因: 依赖关系多于 10 级(最可能是依赖关系循环)。",
		"激活扩展“{0}”失败: {1}。",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"已获得空扩展说明",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”为必需且其类型必须为 \"object\"",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”可以省略或其类型必须是 \"string[]\"",
		"属性“{0}”可以省略或其类型必须是 \"string[]\"",
		"必须同时指定或同时省略属性”{0}“和”{1}“",
		"属性“{0}”可以省略，或者其类型必须是“字符串”",
		"应在扩展文件夹({1})中包含 \"main\" ({0})。这可能会使扩展不可移植。",
		"必须同时指定或同时省略属性”{0}“和”{1}“",
		"VS Code 库中使用的扩展的显示名称。",
		"VS Code 库用于对扩展进行分类的类别。",
		"VS Code 商城使用的横幅。",
		"VS Code 商城页标题上的横幅颜色。",
		"横幅中使用的字体颜色主题。",
		"VS Code 扩展的发布服务器。",
		"VS Code 扩展的激活事件。",
		"其他扩展的依赖关系。扩展的标识符始终是 ${publisher}.${name}。例如: vscode.csharp。",
		"包作为 VS Code 扩展发布前执行的脚本。",
		"由此包表示的 VS Code 扩展的所有贡献。",
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"以下是其他可用命令:",
		"已按下({0})。正在等待同时按下第二个键...",
		"组合键({0}, {1})不是命令。",
	],
	"vs/platform/message/common/message": [
		"关闭",
		"Later",
		"取消",
	]
});