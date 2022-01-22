var _X_GCURPREF = "$ ";
var _X_GCURTEXT = "[]";
var _X_GINPTB = "";
var _X_GMRSUB = "";
var _X_GOLDTEXT = "Before changing window size with Ctrl+ScrollWheel, make sure to temporarily disable text \nscrolling with either ScrollLock, or \n:_X_GSCROLLCONTROL=false; / :_X_GSCROLLCONTROL=true;\nType \"update-log\" to read what\'s changed in the newest updates. \n";
var _X_GTEXTBUFFER = "";
var _X_GTEXTCOLOUR = [0, 255, 45];
var _X_GTEXTSIZE = 16;
var _X_GBACKGRNDCOLOUR = [20, 20, 35];
var _X_GTEXTOFFSETX = 0;
var _X_GTEXTOFFSETY = 0;
var _X_GAUTORESZ = true;
var _X_GAKEYDOWN = false;
var _X_GMOUSEDOWN = false;
var _X_GPROGAUTH = "_X_MAIN";
var _X_GCONTROLKEY = false;
var _X_GCONTROLKEYDOWN = "";
var _X_GUSEDCTRLKEY = "`";
//var _X_GSHIFTDOWN = false;
var _X_GHELPTEXT = "Global Help Text -- Not Yet Fully Implemented\n";
var _X_GWIDTH = 640;
var _X_GHEIGHT = 480;
var _X_GTARGETFPS = 60;
var _X_GLOBALVARS = [["test",90132],["sys-info","Virtual Terminal (CXJSTERM) running in JavaScript with p5.js, \nOriginal screen start setting: " + _X_GWIDTH + "x" + _X_GHEIGHT + "@TargetFPS" + _X_GTARGETFPS],["update-log","What\'s new -- update 1-22-2022: \n  -Auto-resize window is enabled at start. \n  -Default Text and Background colors changed. \n  -Built-in aliases added: paste, paget, copymrh, copyold\n  -Fixed problems with command input. "]];
var _X_GALIASES = [["test", "var", ":alert(\"received \" + \"%var%\");"],["test2",":console.log(\"test\")"],["paste",":_X_GINPTB=prompt(\"Put in input line: \")"],["paget","url",":fetch('%url%') .then(response => response.text()) .then((data) => {_X_APIRUNCMD(data)})"],["copymrh",":_X_Fcstc(_X_GHISTORY[_X_GHISTORY.length-1]);"],["copyold",":_X_Fcstc(_X_GOLDTEXT);"]];
var _X_GSCROLLCONTROL = true;
var _X_GSCROLLDIR = [0,-1];
var _X_GSAVEDINPTAL = [];
var _X_GRESOFFSONCLR = true;
var _X_GHISTORY = [];
var _X_GHISTORYSCR = 0;

function setup() {
  // put setup code here
  createCanvas(_X_GWIDTH,_X_GHEIGHT);
  _X_FAUTOALIGN();
  frameRate(_X_GTARGETFPS);
}

function mouseWheel(event){
	console.log(_X_GSCROLLCONTROL);
	if(_X_GSCROLLCONTROL){
		_X_GTEXTOFFSETX += _X_GSCROLLDIR[0]*event.delta;
		_X_GTEXTOFFSETY += _X_GSCROLLDIR[1]*event.delta;
	}
}

function _X_FGS(_X_T){
	if(_X_T>0){
		return _X_T;
	}else{
		return 0;
	}
}

function keyPressed(){
	//_X_GINPTB += key;
	_X_GAKEYDOWN = true;
	if(key === "Enter"){
		_X_GINPTB += "\n";
		_X_GCONTROLKEY = true;
		_X_GCONTROLKEYDOWN = "^D";
	}else if(key === "Backspace"){
		_X_GCONTROLKEY = true;
		_X_GCONTROLKEYDOWN = "^b";
	}else if(key.length>1){
		_X_GCONTROLKEY = true;
		_X_GCONTROLKEYDOWN = key;
	}/*else if(keyIsDown(_X_GUSEDCTRLKEY)){
		
	}*/
	else{
		_X_GINPTB += key;
	}
	
	if(_X_GINPTB === ""){
		_X_GHISTORYSCR=0;
	}
}

function keyReleased(){
	_X_GAKEYDOWN = false;
	
}

function draw() {
  // put drawing code here
  var _X_TWINDCH = false;
  if(_X_GAUTORESZ){
	  if(_X_GHEIGHT != window.innerHeight || _X_GWIDTH != window.innerWidth){
		  _X_TWINDCH = true;
	  }
	  _X_GHEIGHT = _X_FGS(window.innerHeight-5);
	  _X_GWIDTH = _X_FGS(window.innerWidth-5);
  }
  if(_X_TWINDCH){
	  resizeCanvas(_X_GWIDTH,_X_GHEIGHT);
  }
  background(_X_GBACKGRNDCOLOUR);
  if(_X_GPROGAUTH === "_X_MAIN"){
	  
	  if(_X_GCONTROLKEY && _X_GCONTROLKEYDOWN === "^D"){
		  _X_GOLDTEXT = _X_GOLDTEXT + _X_GCURPREF + _X_GINPTB;
		  _X_GCONTROLKEY = false;
		  _X_GMRSUB = _X_GINPTB;
		  _X_GINPTB = "";
		  _X_GHISTORY.push(_X_GMRSUB.substr(0,_X_GMRSUB.length-1));
		  _X_GHISTORYSCR = 0;
		  _X_APIRUNCMD(_X_GMRSUB);
	  }
	  
	  if(_X_GCONTROLKEY && _X_GCONTROLKEYDOWN === "^b"){
		  _X_GCONTROLKEY = false;
		  _X_GINPTB = _X_GINPTB.substr(0,_X_GINPTB.length-1);
	  }
	  
	  if(_X_GCONTROLKEY && _X_GCONTROLKEYDOWN === "ScrollLock"){
		  _X_GCONTROLKEY = false;
		  _X_GSCROLLCONTROL = !_X_GSCROLLCONTROL;
	  }
	  
	  if(_X_GCONTROLKEY && _X_GCONTROLKEYDOWN === "ArrowUp"){
		  _X_GCONTROLKEY = false;

		  if(_X_GHISTORYSCR<_X_GHISTORY.length){
			  _X_GHISTORYSCR++;
		  }
		  if(_X_GHISTORY.length>0){
			  _X_GINPTB = _X_GHISTORY[_X_FGS(_X_GHISTORY.length-_X_GHISTORYSCR)];
		  }
	  }
	  
	  if(_X_GCONTROLKEY && _X_GCONTROLKEYDOWN === "ArrowDown"){
		  _X_GCONTROLKEY = false;

		  if(_X_GHISTORYSCR>0){
			  _X_GHISTORYSCR--;
		  }
		  if(_X_GHISTORYSCR>0){
			  _X_GINPTB = _X_GHISTORY[_X_FGS(_X_GHISTORY.length-_X_GHISTORYSCR)];
		  }else{
			  _X_GINPTB = "";
		  }
	  }
	  
	  _X_GTEXTBUFFER = _X_GOLDTEXT + _X_GCURPREF + _X_GINPTB + _X_GCURTEXT;
	  _X_APIRENDERTEXT();
  }else{
	  _X_APIRUNCMD(_X_GSAVEDINPTAL);
  }
}

//funcs
//_X_APIRENDERTEXT

function _X_APIRUNCMD(_X_TCMD){
	//console.log(_X_TCMD);
	var _X_TBCMD = _X_APItolist(_X_TCMD);
	if(_X_TBCMD[0] === "help-builtin"){
		_X_GOLDTEXT += "update-log: display what\'s new in the most recent updates\nhelp-builtin: show this message\nhelp: display a changeable list of commands, the text of which is stored in the \nJS variable _X_GHELPTEXT\nclear: clear the screen\'s text buffer\n(:): run a line of JavaScript code ex: :console.log(\"test\");\nalias [variables] [run]: create a command to be run by typing the name of the \nalias alongside any given variables\nsystem-info: display system info\nalias-list [-w] [num]: display a list of all aliases in use. adding -w [number] in places \nimmediatly following command will result in [num] spaces between names, \ninstead of new lines\nstore [varname] [newval]: store a value in [varname] in the _X_GLOBALVARS list. \nNOTE: Only strings may be saved with this command, for the saving of non-string values, \nuse :_X_APISTOREV()\nprint_val [varname]: display the contents of [varname] from \n_X_GLOBALVARS list. NOTE: Unstable at times\n";
	}else if(_X_TBCMD[0] === "help"){
		_X_GOLDTEXT += _X_GHELPTEXT;
	}else if(_X_TBCMD[0] === "clear"){
		_X_GOLDTEXT = "";
		if(_X_GRESOFFSONCLR){
			_X_GTEXTOFFSETX = 0;
			_X_GTEXTOFFSETY = 0;
		}
	}else if(_X_TCMD.charAt(0) === ":"){
		_X_APIRUNJSCMD(_X_TCMD.substr(1,_X_TCMD.length));
	}else if(_X_TBCMD[0] === "store"){
		if(_X_TBCMD.length>2){
			//console.log(_X_TBCMD);
			_X_APISTOREV(_X_TBCMD[1],_X_TBCMD[2]);
		}else{
			_X_GOLDTEXT += "Error: Insufficient arguments given. ";
		}
	}else if(_X_TBCMD[0] === "print_val"){
		if(_X_TBCMD.length>1){
			_X_GOLDTEXT += _X_APIGETV(_X_TBCMD[1]) + "\n";
		}else{
			_X_GOLDTEXT += "Error: Insufficient arguments given. ";
		}
	}else if(_X_TBCMD[0] === "alias"){
		var _X_TAL = _X_TBCMD;
		_X_TAL.shift();
		_X_APISETALIAS(_X_TAL);
	}else if(_X_TBCMD[0] === "system-info"){
		_X_GOLDTEXT += _X_APIGETV("sys-info") + "\n";
	}else if(_X_TBCMD[0] === "alias-list"){
		if(_X_TBCMD.length>2&&_X_TBCMD[1]==="-w"){
			var _X_Ts = "";
			for(var _X_T=0;_X_T<parseInt(_X_TBCMD[2]);_X_T++){
				_X_Ts += " ";
			}
			for(var _X_Ti=0;_X_Ti<_X_GALIASES.length;_X_Ti++){
				_X_GOLDTEXT += _X_GALIASES[_X_Ti][0] + _X_Ts;
			}
			_X_GOLDTEXT += "\n";
		}else{
			for(var _X_Ti=0;_X_Ti<_X_GALIASES.length;_X_Ti++){
				_X_GOLDTEXT += _X_GALIASES[_X_Ti][0] + "\n";
			}
		}
	}else if(_X_TBCMD[0] === "update-log"){
		_X_GOLDTEXT+=_X_APIGETV("update-log")+"\n";
	}else if(_X_TCMD.charAt(0) === "`"){
		//comment line
	}else if(_X_TCMD != "" && _X_TBCMD.length != 0){
		//console.log(_X_TBCMD);
		_X_FINALCMD(_X_TBCMD);
	}
	return 0;
}

function _X_FINALCMD(_X_TFCMD){
	var _X_TF = null;
	for(var _X_Ti=0;_X_Ti<_X_GALIASES.length;_X_Ti++){
		if(_X_TFCMD[0] === _X_GALIASES[_X_Ti][0]){
			_X_TF = _X_Ti;
			_X_Ti = _X_GALIASES.length;
		}
	}
	if(_X_TF!=null){
		var _X_TE = false;
		var _X_TSTART = 0;
		var _X_TEND = 0;
		var _X_TVAR = "";
		var _X_TVARR;
		var _X_TRUN = _X_GALIASES[_X_TF][_X_GALIASES[_X_TF].length-1];
		var _X_TRUNNING = true;
		//for(_X_Ti=0;_X_Ti<_X_TRUN.length;_X_Ti++){
		while(_X_TRUNNING){
			if(_X_TRUN.charAt(_X_Ti) === "%"){
				_X_TE = !_X_TE;
				//console.log("FLIP");
				if(_X_TE){
					_X_TSTART = _X_Ti;
					_X_TVAR = "";
				}else{
					_X_TEND = _X_Ti+1;
					_X_TVARR = null;
					//console.log(_X_GALIASES[_X_TF].length-2);
					for(var _X_Tj=1;_X_Tj<_X_GALIASES[_X_TF].length-1;_X_Tj++){
						//console.log(_X_Tj);
						if(_X_GALIASES[_X_TF][_X_Tj] === _X_TVAR){
							_X_TVARR = _X_Tj;
							_X_Tj = _X_GALIASES[_X_TF].length-2;
							//console.log("F");
						}
					}
					if(_X_TVARR!=null && _X_TFCMD.length >= _X_TVARR){
						_X_TVAR = _X_TFCMD[_X_TVARR];
						//console.log(_X_TVAR);
						//console.log(_X_Fr(_X_TRUN, _X_TSTART, _X_TEND, _X_TVAR));
						console.log(_X_TVAR);
						if(_X_TVAR!=undefined){
							_X_TRUN = _X_Fr(_X_TRUN, _X_TSTART, _X_TEND, _X_TVAR);
							_X_Ti=_X_TSTART+_X_TVAR.length-1;
						}
						//console.log(_X_TRUN.charAt(_X_Ti));
					}
				}
			}else{
				//_X_Ti++;
				if(_X_TE){
					_X_TVAR+=_X_TRUN.charAt(_X_Ti);
				}
			}
			_X_Ti++;
			if(!(_X_Ti<_X_TRUN.length)){
				_X_TRUNNING=false;
			}
		}
		_X_GSAVEDINPTAL = _X_TRUN;
		_X_APIRUNCMD(_X_TRUN);
	}else{
		//console.log(_X_TFCMD[0]);
		_X_GOLDTEXT += "\'" + _X_TFCMD[0] + "\' is not recognized as a valid command or alias, try using \'help\', \nor \'help-builtin\' to see a list of available commands. \n";
	}
}

function _X_Fr(_X_Ts, _X_Tstart, _X_Tend, _X_Tsubstitute) {
    return _X_Ts.substring(0, _X_Tstart) + _X_Tsubstitute + _X_Ts.substring(_X_Tend);
	//Will replace what falls at start, 
	//but at end will still remain. 
}

function _X_APISETALIAS(_X_TALIAS){
	var _X_Tn = null;
	for(var _X_Ti=0;_X_Ti<_X_GALIASES.length;_X_Ti++){
		if(_X_GALIASES[_X_Ti][0] === _X_TALIAS[0]){
			_X_Tn = _X_Ti;
			_X_Ti = _X_GALIASES.length;
		}
	}
	if(_X_Tn === null){
		_X_Tn = _X_GALIASES.length;
		_X_GALIASES.push(_X_TALIAS);
	}else{
		_X_GALIASES[_X_Tn] = _X_TALIAS;
	}
}

function _X_APISTOREV(_X_TNAME,_X_TVAL){
	var _X_Tn = null;
	for(var _X_Ti=0;_X_Ti<_X_GLOBALVARS.length;_X_Ti++){
		if(_X_GLOBALVARS[_X_Ti][0] === _X_TNAME){
			_X_Tn = _X_Ti;
			_X_Ti = _X_GLOBALVARS.length;
		}
	}
	if(_X_Tn === null){
		_X_Tn = _X_GLOBALVARS.length;
		_X_GLOBALVARS.push([_X_TNAME,_X_TVAL]);
	}else{
		_X_GLOBALVARS[_X_Tn][1] = _X_TVAL;
	}
}

function _X_APIGETV(_X_TNAME){
	for(var _X_Ti=0;_X_Ti<_X_GLOBALVARS.length;_X_Ti++){
		if(_X_GLOBALVARS[_X_Ti][0] === _X_TNAME){
			return _X_GLOBALVARS[_X_Ti][1];
		}
	}
	console.log("ERROR: " + _X_TNAME + " NOT FOUND IN _X_GLOBALVARS LIST");
	return null;
}

function _X_APIRUNJSCMD(_X_TSCR){
	//console.log(_X_TSCR);
	return eval(_X_TSCR);
}

function _X_APIRENDERTEXT(){
	textSize(_X_GTEXTSIZE);
	fill(_X_GTEXTCOLOUR);
	text(_X_GTEXTBUFFER,_X_GTEXTOFFSETX,_X_GTEXTOFFSETY);
}

function _X_FAUTOALIGN(){
	textAlign(LEFT,TOP);
}

function _X_APItolist(_X_Ts){
		var _X_Tc=true,_X_TESC=false,_X_Ttemp="",_X_ThitFWH=true,_X_Ti=0,_X_TNEW=[];
		while(_X_Tc){
			if(_X_Ti>=_X_Ts.length){
				if(_X_Ttemp != ""){
					_X_TNEW.push(_X_Ttemp);
				}
				_X_Tc=false;
			}else
			if(_X_Ts.charAt(_X_Ti) === " "){
				if(!_X_TESC){
					if(!_X_ThitFWH){
						_X_TNEW.push(_X_Ttemp);
						_X_Ttemp="";
						_X_Ti++;
						_X_ThitFWH = true;
					}else{
						_X_Ti++;
					}
				}else{
					_X_Ttemp+=" ";
					_X_Ti++;
				}
			}else if(_X_Ts.charAt(_X_Ti) === "\""){
				//console.log(hitFWH);
				if(_X_ThitFWH){
					_X_TESC = !_X_TESC;
					_X_Ti++;
				}else{
					_X_TESC = !_X_TESC;
					_X_Ti++;
					_X_Ttemp+="\"";
				}
			}else if(_X_Ts.charAt(_X_Ti) === "\n"){
				if(_X_Ttemp != ""){
					_X_TNEW.push(_X_Ttemp);
				}
				_X_Tc=false;
			}else{
				if(!_X_TESC){
					_X_ThitFWH=false;
					_X_Ttemp+=_X_Ts.charAt(_X_Ti);
					_X_Ti++;
				}else{
					_X_Ttemp+=_X_Ts.charAt(_X_Ti);
					_X_Ti++;
				}
				//console.log(hitFWH);
			}
		}
		return _X_TNEW;
	}
	
const _X_Fcstc = _X_Tstr => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(_X_Tstr);
  return Promise.reject('The Clipboard API is not available.');
};
