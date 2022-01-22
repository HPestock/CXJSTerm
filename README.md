# CXJSTerm
A p5.js based terminal enviornment tailored for JavaScript development on a basic level, with built-in commands to navigate the system. 

Global Variables: 
var _X_GCURPREF = "$ "; //Cursor prefix
var _X_GCURTEXT = "[]"; //Cursor text
var _X_GINPTB = ""; //Input buffer
var _X_GMRSUB = ""; //Submit buffer
var _X_GOLDTEXT = "Before changing window size with Ctrl+ScrollWheel, make sure to temporarily disable text \nscrolling with either ScrollLock, or \n:_X_GSCROLLCONTROL=false; / :_X_GSCROLLCONTROL=true;\nType \"update-log\" to read what\'s changed in the newest updates. \n"; //Old text
var _X_GTEXTBUFFER = ""; //Text buffer
var _X_GTEXTCOLOUR = [0, 255, 45]; //Text colour [R,G,B]
var _X_GTEXTSIZE = 16; //Text size
var _X_GBACKGRNDCOLOUR = [20, 20, 35]; //Background colour [R,G,B]
var _X_GTEXTOFFSETX = 0; //Text offset (x)
var _X_GTEXTOFFSETY = 0; //Text offset (y)
var _X_GAUTORESZ = true; //Automatically resize the enviornment? 
var _X_GAKEYDOWN = false; //KeyDown? 
var _X_GMOUSEDOWN = false; //MouseDown? 
var _X_GPROGAUTH = "_X_MAIN"; //Program Authourization Name
var _X_GCONTROLKEY = false; //Has a control-key been typed? 
var _X_GCONTROLKEYDOWN = ""; //Control-key down
var _X_GUSEDCTRLKEY = "`"; //Currently unused
var _X_GHELPTEXT = "Global Help Text -- Not Yet Fully Implemented\n"; //Help text
var _X_GWIDTH = 640; //Screen width
var _X_GHEIGHT = 480; //Screen height
var _X_GTARGETFPS = 60; //Target FPS
var _X_GLOBALVARS = [["test",90132],["sys-info","Virtual Terminal (CXJSTERM) running in JavaScript with p5.js, \nOriginal screen start setting: " + _X_GWIDTH + "x" + _X_GHEIGHT + "@TargetFPS" + _X_GTARGETFPS],["update-log","What\'s new -- update 1-22-2022: \n  -Auto-resize window is enabled at start. \n  -Default Text and Background colors changed. \n  -Built-in aliases added: paste, paget, copymrh, copyold\n  -Fixed problems with command input. "]]; //Global variables list for eval program continuence
var _X_GALIASES = [["test", "var", ":alert(\"received \" + \"%var%\");"],["test2",":console.log(\"test\")"],["paste",":_X_GINPTB=prompt(\"Put in input line: \")"],["paget","url",":fetch('%url%') .then(response => response.text()) .then((data) => {_X_APIRUNCMD(data)})"],["copymrh",":_X_Fcstc(_X_GHISTORY[_X_GHISTORY.length-1]);"],["copyold",":_X_Fcstc(_X_GOLDTEXT);"]]; //Aliases
var _X_GSCROLLCONTROL = true; //Use ScrollWheel to move text? 
var _X_GSCROLLDIR = [0,-1]; //Scroll direction
var _X_GSAVEDINPTAL = []; //Alias persistence variable
var _X_GRESOFFSONCLR = true; //Reset screen offset on clear? 
var _X_GHISTORY = []; //Input-submit history
var _X_GHISTORYSCR = 0; //History element

Functions:
_X_FGS(_X_T) //If _X_T>0 return _X_T else return 0
_X_APIRUNCMD(_X_TCMD) //Run _X_TCMD (string) as a command
_X_FINALCMD(_X_TFCMD)
_X_Fr(_X_Ts, _X_Tstart, _X_Tend, _X_Tsubstitute)
_X_APISETALIAS(_X_TALIAS) //Set an alias (array)
_X_APISTOREV(_X_TNAME,_X_TVAL) //Store a persistent between eval variable
_X_APIGETV(_X_TNAME) //Retreive a persistent between eval variable
_X_APIRUNJSCMD(_X_TSCR) //eval(_X_TSCR)
_X_APIRENDERTEXT() //Render _X_GTEXTBUFFER
_X_FAUTOALIGN()
_X_APItolist(_X_Ts) //Convert _X_Ts (string) to an array in the format needed for processing commands
_X_Fcstc(_X_Tstr) //Copy _X_Tstr (string) to the user's clipboard, may fail
