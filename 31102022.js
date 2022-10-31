(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"31102022_atlas_1", frames: [[0,0,2000,2000]]},
		{name:"31102022_atlas_2", frames: [[0,0,1360,2000]]},
		{name:"31102022_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"31102022_atlas_4", frames: [[0,0,1920,1080]]},
		{name:"31102022_atlas_5", frames: [[0,0,848,1200],[850,0,848,1177]]},
		{name:"31102022_atlas_6", frames: [[0,1082,840,163],[748,1389,105,135],[394,1487,105,135],[0,1531,105,135],[107,1531,98,135],[0,1247,392,140],[207,1531,98,135],[0,1389,392,140],[501,1487,98,135],[394,1247,392,140],[1286,1072,170,96],[1286,1170,170,96],[394,1389,175,96],[571,1389,175,96],[880,0,800,1070],[0,0,878,1080],[880,1072,404,353]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_17 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["31102022_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._31 = function() {
	this.initialize(ss["31102022_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["31102022_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._62 = function() {
	this.initialize(img._62);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1487,2154);


(lib._7 = function() {
	this.initialize(ss["31102022_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.adah = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["31102022_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.headline = function() {
	this.initialize(ss["31102022_atlas_6"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.turnoff = function() {
	this.initialize(ss["31102022_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yakinmaukeluar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yakinmaukeluar, rect = new cjs.Rectangle(0,0,420,81.5), [rect]);


(lib.ya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(71.85,2.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(71.85,2.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_16();
	this.instance_4.setTransform(71.85,2.75,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_15();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,196,70.3);
p.frameBounds = [rect, rect, rect];


(lib.tutupan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhYXAWIMAAAgsPMCwvAAAMAAAAsPg");
	this.shape.setTransform(565.55,141.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,1131.1,283.2)];


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._62();
	this.instance.setTransform(0,0,0.6174,0.6174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, rect = new cjs.Rectangle(0,0,918.1,1329.8), [rect]);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._7();
	this.instance.setTransform(0,0,0.8087,0.8087);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, rect = new cjs.Rectangle(0,0,1099.8,1617.3), [rect]);


(lib.no = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(71.85,2.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(71.85,2.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_10();
	this.instance_4.setTransform(71.85,2.75,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_15();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,196,70.3);
p.frameBounds = [rect, rect, rect];


(lib.menuanyarrr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.headline();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menuanyarrr, rect = new cjs.Rectangle(0,0,370.5,323.7), [rect]);


(lib.login_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.expand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ao7BxIAAjhIR2AAIAADhg");
	this.shape.setTransform(197.65,98.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(140.5,87.5,114.3,22.6)];


(lib.exit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.turnoff();
	this.instance.setTransform(0,0,0.0318,0.0318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,63.7,63.7);
p.frameBounds = [rect];


(lib.collapse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ApRBxIAAjhISjAAIAADhg");
	this.shape.setTransform(59.375,-11.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,-22.9,118.8,22.7)];


(lib.chara5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._31();
	this.instance.setTransform(0,0,1.0613,1.0613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chara5, rect = new cjs.Rectangle(0,0,900,1249.1), [rect]);


(lib.chara4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1();
	this.instance.setTransform(0,0,1.8034,1.8034);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chara4, rect = new cjs.Rectangle(0,0,1529.3,2164.1), [rect]);


(lib.chara = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chara, rect = new cjs.Rectangle(0,0,800,1070), [rect]);


(lib.bt3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bt3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AtmVHQjHAAiNiMQiMiNAAjHIAA7NQAAjHCMiNQCNiMDHAAIbNAAQDHAACNCMQCMCNAADHIAAbNQAADHiMCNQiNCMjHAAg");
	this.shape.setTransform(136.8302,135.125,1.0126,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,273.7,270.3)];


(lib.bt2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bt2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AtmVHQjHAAiNiMQiMiNAAjHIAA7NQAAjHCMiNQCNiMDHAAIbNAAQDHAACNCMQCMCNAADHIAAbNQAADHiMCNQiNCMjHAAg");
	this.shape.setTransform(136.8302,135.125,1.0126,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,273.7,270.3)];


(lib.bt1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AtmVHQjHAAiNiMQiMiNAAjHIAA7NQAAjHCMiNQCNiMDHAAIbNAAQDHAACNCMQCMCNAADHIAAbNQAADHiMCNQiNCMjHAAg");
	this.shape.setTransform(136.8302,135.125,1.0126,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,273.7,270.3)];


(lib.bghitammase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.388)").s().p("EifoBhoMAAYgm5MAAVhzfIAR13IAHzAME+MAAAMgAYAmeMgAVBzcIgSWVIgHTAg");
	this.shape.setTransform(1021.725,624.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bghitammase, rect = new cjs.Rectangle(0,0,2043.5,1249.7), [rect]);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, rect = new cjs.Rectangle(0,0,1920,1080), [rect]);


(lib.akal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhW4Ab1QjIAAAAjIMAAAgxZQAAjIDIAAMCtxAAAQDIAAAADIMAAAAxZQAADIjIAAg");
	this.shape.setTransform(560.575,199.75);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-15.5,21.7,1152.2,356.2)];


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.exit.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			this.gotoAndPlay(2);
		}
		
		
		this.jajal.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			// Start your custom code
			// This example code displays the words "Moused over" in the Output panel.
			alert("Moused over");
			// End your custom code
		}
	}
	this.frame_43 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		this.yaexitbtn.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			window.close();
		}
		
		this.noexitbtn.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			this.play();
		}
	}
	this.frame_61 = function() {
		this.tombolexit.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(18).call(this.frame_61).wait(1));

	// Layer_1
	this.exit = new lib.exit();
	this.exit.name = "exit";
	this.exit.setTransform(31.8,31.8,1,1,0,0,0,31.8,31.8);
	new cjs.ButtonHelper(this.exit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.exit).wait(8).to({y:-108.2,alpha:0},6,cjs.Ease.circIn).wait(39).to({y:31.8,alpha:1},6,cjs.Ease.circOut).wait(3));

	// text
	this.instance = new lib.yakinmaukeluar();
	this.instance.setTransform(879.3,444.9,1,1,0,0,0,209.9,40.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({y:435,alpha:1},14,cjs.Ease.quintOut).wait(11).to({regX:210,x:879.4,y:436.85},0).wait(1).to({y:439.4},0).wait(1).to({y:442.9},0).wait(1).to({y:447.7},0).wait(1).to({y:454.2},0).wait(1).to({y:463.15},0).wait(1).to({y:475.85},0).wait(1).to({y:494.6},0).wait(1).to({y:524},0).wait(1).to({y:574.9},0).wait(1).to({y:671},0).wait(1).to({y:818.6},0).wait(1).to({regX:209.9,x:879.3,y:964.2},0).to({y:1146.8},1).wait(4));

	// yaexitbtn_copy
	this.noexitbtn = new lib.no();
	this.noexitbtn.name = "noexitbtn";
	this.noexitbtn.setTransform(982.9,553.1,1,1,0,0,0,97.9,35.1);
	this.noexitbtn.alpha = 0;
	this.noexitbtn._off = true;
	new cjs.ButtonHelper(this.noexitbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.noexitbtn).wait(29).to({_off:false},0).to({y:541.5,alpha:1},14,cjs.Ease.quintOut).wait(2).to({regX:98,x:983,y:543.35},0).wait(1).to({y:545.9},0).wait(1).to({y:549.4},0).wait(1).to({y:554.2},0).wait(1).to({y:560.7},0).wait(1).to({y:569.65},0).wait(1).to({y:582.35},0).wait(1).to({y:601.1},0).wait(1).to({y:630.5},0).wait(1).to({y:681.4},0).wait(1).to({y:777.5},0).wait(1).to({y:925.1},0).wait(1).to({regX:97.9,x:982.9,y:1070.7},0).to({y:1253.3},1).wait(4));

	// yaexitbtn
	this.yaexitbtn = new lib.ya();
	this.yaexitbtn.name = "yaexitbtn";
	this.yaexitbtn.setTransform(740.5,553.1,1,1,0,0,0,97.9,35.1);
	this.yaexitbtn.alpha = 0;
	this.yaexitbtn._off = true;
	new cjs.ButtonHelper(this.yaexitbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.yaexitbtn).wait(29).to({_off:false},0).to({y:541.5,alpha:1},14,cjs.Ease.quintOut).wait(2).to({regX:98,x:740.6,y:543.35},0).wait(1).to({y:545.9},0).wait(1).to({y:549.4},0).wait(1).to({y:554.2},0).wait(1).to({y:560.7},0).wait(1).to({y:569.65},0).wait(1).to({y:582.35},0).wait(1).to({y:601.1},0).wait(1).to({y:630.5},0).wait(1).to({y:681.4},0).wait(1).to({y:777.5},0).wait(1).to({y:925.1},0).wait(1).to({regX:97.9,x:740.5,y:1070.7},0).to({y:1253.3},1).wait(4));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgqZAXNQimAAh1h2Qh1h1AAilMAAAgh5QAAilB1h2QB1h1CmAAMBUzAAAQCmAAB0B1QB2B2AAClMAAAAh5QAAClh2B1Qh0B2imAAg");
	this.shape.setTransform(853.5358,1234.5567,1.2226,1.2226);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egz1AcXQjKAAiQiQQiPiPAAjKMAAAgpbQAAjLCPiPQCQiPDKAAMBnrAAAQDLAACPCPQCPCPAADLMAAAApbQAADKiPCPQiPCQjLAAg");
	this.shape_1.setTransform(853.525,1225.525);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{y:1234.5567}}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{y:500.3567}}]},1).to({state:[{t:this.shape,p:{y:500.3567}}]},21).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{y:1236.5067}}]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(1).to({y:1212.625},0).wait(1).to({y:1194.475},0).wait(1).to({y:1168.775},0).wait(1).to({y:1131.075},0).wait(1).to({y:1070.375},0).wait(1).to({y:941.275},0).wait(1).to({y:667.425},0).wait(1).to({y:567.725},0).wait(1).to({y:529.325},0).wait(1).to({y:517.325},0).wait(1).to({y:513.325},0).wait(1).to({y:512.125},0).wait(1).to({y:511.325},0).wait(1).to({y:509.625},0).wait(1).to({y:506.175},0).to({_off:true},1).wait(22).to({_off:false,y:502.175},0).wait(1).to({y:504.575},0).wait(1).to({y:507.775},0).wait(1).to({y:512.075},0).wait(1).to({y:517.825},0).wait(1).to({y:525.525},0).wait(1).to({y:536.075},0).wait(1).to({y:550.925},0).wait(1).to({y:572.725},0).wait(1).to({y:607.025},0).wait(1).to({y:666.275},0).wait(1).to({y:773.125},0).wait(1).to({y:919.875},0).wait(1).to({y:1058.975},0).to({_off:true},1).wait(4));

	// dummyakalan
	this.pengakalan = new lib.akal();
	this.pengakalan.name = "pengakalan";
	this.pengakalan.setTransform(901.35,788.25,1,1,0,0,0,576.1,178.1);
	this.pengakalan._off = true;
	new cjs.ButtonHelper(this.pengakalan, 0, 1, 2, false, new lib.akal(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pengakalan).wait(5).to({_off:false},0).to({_off:true},54).wait(3));

	// bg
	this.instance_1 = new lib.bghitammase();
	this.instance_1.setTransform(898.25,516.3,1,1,0,0,0,1021.7,624.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},7).wait(44).to({alpha:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,63.7,63.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-123.4,-108.5,2043.5,1249.7), rect, rect, rect, new cjs.Rectangle(-123.4,-108.5,2043.5,1524.6), new cjs.Rectangle(-123.4,-108.5,2043.5,1515.6), new cjs.Rectangle(-123.4,-108.5,2043.5,1502.7), new cjs.Rectangle(-123.4,-108.5,2043.5,1484.5), new cjs.Rectangle(-123.4,-108.5,2043.5,1458.8), new cjs.Rectangle(-123.4,-108.5,2043.5,1421.1), new cjs.Rectangle(-123.4,-108.5,2043.5,1360.4), rect=new cjs.Rectangle(-123.4,-108.5,2043.5,1249.7), rect, rect=new cjs.Rectangle(-123.4,-140,2043.5,1281.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-123.4,-108.5,2043.5,1249.7), rect, rect, new cjs.Rectangle(-123.4,-108.5,2043.5,1349), rect=new cjs.Rectangle(-123.4,-108.5,2043.5,1526.6), rect, rect, rect];


(lib.menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
		
		this.bt1.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler() {
			this.gotoAndPlay(5);
			this.play();
		}
		
		
		this.bt1.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOutHandler() {
			this.gotoAndPlay(15);
			this.play();
		}
		
		//BUTTON 2
		
		this.bt2.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2() {
			this.gotoAndPlay(21);
			this.play();
		}
		
		
		this.bt2.addEventListener("mouseout", fl_MouseOutHandler_2.bind(this));
		
		function fl_MouseOutHandler_2() {
			this.gotoAndPlay(31);
			this.play();
		}
		
		//BUTTON 3
		
		this.bt3.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3() {
			this.gotoAndPlay(41);
			this.play();
		}
		
		
		this.bt3.addEventListener("mouseout", fl_MouseOutHandler_3.bind(this));
		
		function fl_MouseOutHandler_3() {
			this.gotoAndPlay(51);
			this.play();
		}
		
		//BUTTON 4
		this.bt4.addEventListener("mouseover", fl_MouseOverHandler_4.bind(this));
		
		function fl_MouseOverHandler_4() {
			this.gotoAndPlay(61);
			this.play();
		}
		
		
		this.bt4.addEventListener("mouseout", fl_MouseOutHandler_4.bind(this));
		
		function fl_MouseOutHandler_4() {
			this.gotoAndPlay(71);
			this.play();
		}
	}
	this.frame_13 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_18 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_34 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_49 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_54 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_69 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_74 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(10).call(this.frame_13).wait(5).call(this.frame_18).wait(11).call(this.frame_29).wait(5).call(this.frame_34).wait(15).call(this.frame_49).wait(5).call(this.frame_54).wait(15).call(this.frame_69).wait(5).call(this.frame_74).wait(26));

	// bt3_copy
	this.bt4 = new lib.bt3();
	this.bt4.name = "bt4";
	this.bt4.setTransform(974.7,153.75,1,1,0,0,0,136.8,135.1);
	new cjs.ButtonHelper(this.bt4, 0, 1, 2, false, new lib.bt3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt4).wait(100));

	// bt3
	this.bt3 = new lib.bt3();
	this.bt3.name = "bt3";
	this.bt3.setTransform(702.1,153.75,1,1,0,0,0,136.8,135.1);
	new cjs.ButtonHelper(this.bt3, 0, 1, 2, false, new lib.bt3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt3).wait(100));

	// bt2
	this.bt2 = new lib.bt2();
	this.bt2.name = "bt2";
	this.bt2.setTransform(428.45,153.75,1,1,0,0,0,136.8,135.1);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.bt2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt2).wait(100));

	// bt1
	this.bt1 = new lib.bt1();
	this.bt1.name = "bt1";
	this.bt1.setTransform(154.8,153.75,1,1,0,0,0,136.8,135.1);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.bt1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt1).wait(100));

	// bt4_c
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#147FDD","#00ABFE"],[0,1],-10.8,140.7,292.6,140.7).s().p("AhLBOQgggfAAgtIAAgDQAAgtAggfQAfggAsAAQAtAAAgAgQAfAfAAAtIAAADQAAAtgfAfQggAggtAAQgsAAgfggg");
	this.shape.setTransform(968.7369,231.4733,0.0464,0.0455);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#147FDD","#00ABFE"],[0,1],-63.7,3.8,71.4,3.8).s().p("An3JkQgogOgfggQg7g5gBhRIgBlvIgBm5IAAgsQAAhSA7g5QA7g6BTAAIElgCII/AAQBUAAA7A5QA7A6AABSIABElIABG5IAABJIAAAsQAABSg7A5Qg6A6hUABIjcABIqIAAQgmAAghgMg");
	this.shape_1.setTransform(971.425,198.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#147FDD","#00ABFE"],[0,1],-104.2,2.1,108.5,2.1).s().p("As8PpQhAgXg0gzQhghfAAiFIgBpZIgBrSIAAhIQAAiGBhhfQBgheCJAAIHhgBIOuAAQCJAABgBeQBhBeAACGIABHhIAALSIAAB4IAABIQAACGhgBfQhgBeiJABIlpAAIwnAAQg+AAg3gUg");
	this.shape_2.setTransform(973.15,177.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#147FDD","#00ABFE"],[0,1],-128.9,1.1,131.1,1.1).s().p("AtvTvQhOAAhDgZQhPgdhBg/Qh3h1AAimIgBrnIAAt8IAAhZQAAimB4h1QB3h1CpAAIJTAAISNgBQCqAAB3B1QB3B1AACmIABJTIAAN8IAACVIAABZQAAClh3B1Qh3B1iqAAIm+ABI0iAAg");
	this.shape_3.setTransform(974.175,165.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#147FDD","#00ABFE"],[0,1],-142.8,0.5,143.8,0.5).s().p("AHiV3I2xAAQhWAAhKgbQhYgghIhGQiEiCAAi3IAAs5IAAvcIAAhjQAAi4CEiBQCEiCC8AAIKTAAIUMAAQC8AACDCBQCFCCAAC4IAAKTIAAPcIAACmIAABiQAAC4iECBQiECCi8AAInuAAg");
	this.shape_4.setTransform(974.775,157.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#147FDD","#00ABFE"],[0,1],-150,0.2,150.4,0.2).s().p("AH7W+I37AAQhaAAhOgdQhdgihLhKQiKiIAAjAIgBtiIAAwPIAAhnQAAjBCLiIQCLiIDFAAIK0gBIVNAAQDGABCKCIQCLCIAADBIAAK1IAAQNIAACuIAABoQAADAiLCIQiKCJjGAAIoGAAg");
	this.shape_5.setTransform(975.05,154.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#147FDD","#00ABFE"],[0,1],-153.2,0.1,153.4,0.1).s().p("AIFXdI4bAAQhcAAhQgdQhfgihMhMQiPiLABjFIAAt0IAAwlIAAhqQgBjFCPiLQCNiLDKAAILDAAIVqAAQDKAACOCLQCNCLAADFIAALEIAAQkIAACxIAABqQAADFiNCLQiOCLjKAAIoSAAg");
	this.shape_6.setTransform(975.2,152.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.4,0,154.5,0).s().p("AIJXpI4oAAQhdAAhQgdQhfgjhNhMQiPiMgBjHIAAt7IAAwuIAAhqQABjHCPiMQCPiMDKAAILKAAIV1AAQDLAACOCMQCPCMAADHIAALJIAAQtIAACyIAABrQAADHiPCMQiOCMjLAAIoXAAg");
	this.shape_7.setTransform(975.25,151.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.7,0,154.8,0).s().p("AIKXtI4rAAQhdAAhQgeQhggjhNhMQiQiMAAjIIAAt9IAAwvIAAhrQAAjICQiMQCPiNDLABILLAAIV4AAQDLgBCPCNQCQCMAADIIAALKIAAQvIAACzIAABrQAADIiQCMQiPCNjLAAIoYAAg");
	this.shape_8.setTransform(975.275,151.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.8,0,154.8,0).s().p("AIKXtI4rAAQhdAAhRgeQhfgjhOhMQiPiMAAjHIAAt+IAAwwIAAhrQAAjHCPiMQCQiNDLAAILLAAIV4AAQDMAACPCNQCPCMAADHIAALLIAAQwIAACzIAABrQAADHiPCMQiPCNjMAAIoYAAg");
	this.shape_9.setTransform(975.275,151.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#147FDD","#00ABFE"],[0,1],-151.6,0,151.7,0).s().p("AwMXtQjHAAiMiNQiNiMAAjHMAAAggZQAAjHCNiMQCMiNDHAAMAgZAAAQDHAACMCNQCNCMAADHMAAAAgZQAADHiNCMQiMCNjHAAg");
	this.shape_10.setTransform(975.2862,151.675,1.0208,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.6,0,154.7,0).s().p("AgNXrIwTAAQi9AAiJh6IgUgSQiQiNAAjGIAAwvIAAvoQAAjHCQiMQCPiMDLAAILKAAIV3AAQDLAACPCMQCQCMAADHIAAQvIAAPoQAAC8iBCIIgPAPQiPCMjLAAIwuAAg");
	this.shape_11.setTransform(975.275,151.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#147FDD","#00ABFE"],[0,1],-150,0.1,150.3,0.1).s().p("A09VHIgTgSQiLiIAAjAIAAwPIAAvJQAAjBCLiIQCLiIDFAAIK0AAIVNgBQDFAACLCJQCLCIAADBIAAQOIAAPJQAAC3h9CEIgOAOQiLCIjFAAIwOAAIvzABQi4AAiFh3g");
	this.shape_12.setTransform(975.15,154.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#147FDD","#00ABFE"],[0,1],-118.2,1,120.3,1).s().p("AwfQpIgPgOQhuhsAAiXIgBsxIAAr8IAAgBQAAiYBuhrQBthsCaABIIjAAIQsgBQCcAABsBrQBuBrAACYIAAMxIABL8QAACRhiBnIgMALQhsBsicAAIsxAAIsdABQiQAAhphdg");
	this.shape_13.setTransform(974.2,173.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#147FDD","#00ABFE"],[0,1],-15.2,136.2,288.2,136.2).s().p("AAACbQg+AAgtgtQgsgsAAg/IAAgFQAAg/AsgtQAtgsA+AAIAAAAQA/AAAsAsQAtAtAAA/IAAAFQAAA/gtAsQgsAtg/AAg");
	this.shape_14.setTransform(970.7219,244.4531,0.033,0.0323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(25));

	// bt3_c
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#147FDD","#00ABFE"],[0,1],-15.2,136.2,288.2,136.2).s().p("AAACbQg+AAgtgtQgsgsAAg/IAAgFQAAg/AsgtQAtgsA+AAIAAAAQA/AAAsAsQAtAtAAA/IAAAFQAAA/gtAsQgsAtg/AAg");
	this.shape_15.setTransform(695.1219,249.4531,0.033,0.0323);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#147FDD","#00ABFE"],[0,1],-63.7,2.6,69,2.6).s().p("Ao2I+IgIgIQg7g5gBhRIgBm3IgBmdQAAhRA7g6QA7g6BTAAIElgBII/gBQBUAAA7A5QA7A6AABSIABG3IABGbQAABOg1A3IgGAHQg6A6hUAAIm2ABImtABQhOAAg5gyg");
	this.shape_16.setTransform(696.975,209.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#147FDD","#00ABFE"],[0,1],-104.2,1.4,107.2,1.4).s().p("AuiOrIgNgMQhhhfAAiFIgBrRIgBqiQAAiGBhhfQBgheCJAAIHhgBIOuAAQCJAABhBeQBgBeABCGIAALRIABKiQAAB+hXBcIgKAKQhgBfiJAAIrQABIq/AAQh/AAhdhSg");
	this.shape_17.setTransform(698.175,183.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#147FDD","#00ABFE"],[0,1],-128.8,0.8,130.4,0.8).s().p("AtvTvQieAAhyhmIgRgPQh3h1AAimIAAt7IgBtCQAAilB3h1QB4h1CpAAIJTgBISOAAQCpAAB3B1QB3B1AACmIABN7IAANBQAACehrBwIgNANQh3B1ipAAIt7ABItlAAg");
	this.shape_18.setTransform(698.9,168.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#147FDD","#00ABFE"],[0,1],-142.8,0.3,143.5,0.3).s().p("AvPV3QiuAAh/hwIgTgRQiEiCAAi3IAAvdIAAubQAAi4CEiBQCEiCC8AAIKTAAIUMAAQC8AACECBQCECCAAC4IAAPcIAAObQAACuh2B9IgOAOQiECCi8AAIvcAAIvDAAg");
	this.shape_19.setTransform(699.325,159.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#147FDD","#00ABFE"],[0,1],-150,0.1,150.3,0.1).s().p("AwBW9Qi2AAiGh2IgTgSQiLiIAAjAIAAwPIAAvKQAAjACLiIQCLiIDEAAIK1AAIVNAAQDFAACKCIQCMCIAADAIAAQPIAAPJQAAC3h9CDIgOAPQiLCIjFAAIwOAAIv0AAg");
	this.shape_20.setTransform(699.55,154.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#147FDD","#00ABFE"],[0,1],-153.2,0,153.3,0).s().p("AgNXdIwJAAQi7AAiJh4IgTgTQiOiLAAjFIAAwkIAAvfQAAjFCOiLQCOiLDJAAILDAAIVqAAQDKAACNCLQCOCLAADFIAAQkIAAPfQAAC7h/CGIgPAPQiNCLjKAAIwkAAg");
	this.shape_21.setTransform(699.625,152.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.4,0,154.5,0).s().p("AgNXpIwSAAQi8AAiJh5IgUgTQiPiMAAjHIAAwtIAAvmQAAjGCPiNQCPiMDKAAILJAAIV2AAQDLAACOCMQCQCNgBDGIAAQtIAAPmQAAC9h/CHIgQAPQiOCMjLAAIwtAAg");
	this.shape_22.setTransform(699.65,151.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.7,0,154.8,0).s().p("AgNXsIwUAAQi9AAiJh6IgUgSQiQiNAAjHIAAwvIAAvpQAAjHCQiMQCPiMDLAAILLAAIV4AAQDLAACPCMQCQCMAADHIAAQwIAAPoQAAC9iBCIIgPAPQiPCMjLAAIwvAAg");
	this.shape_23.setTransform(699.675,151.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.8,0,154.8,0).s().p("AgNXtIwUAAQi9AAiKh6IgUgTQiPiMAAjHIAAwwIAAvpQAAjHCPiMQCQiNDLAAILLAAIV4AAQDMAACPCNQCPCMAADHIAAQwIAAPpQAAC8iACIIgPAPQiPCNjMAAIwvAAg");
	this.shape_24.setTransform(699.675,151.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#147FDD","#00ABFE"],[0,1],-151.6,0,151.7,0).s().p("AwMXtQjHAAiMiNQiNiMAAjHMAAAggZQAAjHCNiMQCMiNDHAAMAgZAAAQDHAACMCNQCNCMAADHMAAAAgZQAADHiNCMQiMCNjHAAg");
	this.shape_25.setTransform(699.6862,151.675,1.0208,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.6,0,154.7,0).s().p("AIKXrI4qAAQhdAAhRgdQhfgjhNhMQiQiNAAjGIAAt9IAAwvIAAhrQAAjHCQiMQCPiMDLAAILKAAIV3AAQDLAACPCMQCQCMAADHIAALKIAAQvIAACzIAABrQAADGiQCNQiPCMjLAAIoXAAg");
	this.shape_26.setTransform(699.675,151.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#147FDD","#00ABFE"],[0,1],-150,0.2,150.4,0.2).s().p("AH6W9I36AAQhaAAhOgcQhcgihMhKQiKiIAAjAIgBtiIAAwPIAAhnQAAjBCLiIQCLiJDFABIK0AAIVNAAQDGAACKCHQCLCJAADBIAAK1IAAQOIAACtIAABoQAADAiLCIQiKCIjGAAIoHAAg");
	this.shape_27.setTransform(699.45,154.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#147FDD","#00ABFE"],[0,1],-118.2,1.5,121.3,1.5).s().p("AsmSGQhHAAg9gXQhJgag7g6QhuhrAAiYIgBqqIAAsyIAAhSQAAiXBthsQBuhrCbAAIIhgBIQtAAQCbAABuBrQBtBsAACXIABIiIAAMyIAACJIAABRQAACYhtBsQhtBricAAImZAAIy1AAg");
	this.shape_28.setTransform(698.125,173.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#147FDD","#00ABFE"],[0,1],-10.8,140.7,292.6,140.7).s().p("AhLBOQgggfAAgtIAAgDQAAgtAggfQAfggAsAAQAtAAAgAgQAfAfAAAtIAAADQAAAtgfAfQggAggtAAQgsAAgfggg");
	this.shape_29.setTransform(693.1369,242.4733,0.0464,0.0455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},39).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(45));

	// bt2_c_copy
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#147FDD","#00ABFE"],[0,1],-45.2,244.2,533.2,244.2).s().p("Ak+FJQiFiFAAi7IAAgRQAAi7CFiFQCEiEC6AAQC7AACECEQCFCFAAC7IAAARQAAC7iFCFQiECEi7AAQi6AAiEiEg");
	this.shape_30.setTransform(144.9698,231.7876,0.0111,0.0108,0,180,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#147FDD","#00ABFE"],[0,1],-63.6,-1.6,66.9,-1.6).s().p("Ao2I+IgJgHQg6g6AAhSIgCm3IgBmcQAAhSA7g5QA6g6BUAAIElgCII/AAQBUAAA7A6QA7A5ABBRIAAG4IABGcQAABRg7A6Qg6A6hTAAIkmABIo/ABQhNAAg5gyg");
	this.shape_31.setTransform(149,199);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#147FDD","#00ABFE"],[0,1],-104.3,-0.8,106,-0.8).s().p("AuiOrIgOgMQhghegBiGIAArRIgBqiQAAiGBhhfQBgheCJAAIHhgBIOuAAQCJAABhBeQBgBfABCGIAALQIABKiQAACGhhBfQhgBeiJAAInhABIuvAAQh/AAhchSg");
	this.shape_32.setTransform(151.625,177.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#147FDD","#00ABFE"],[0,1],-128.9,-0.5,129.7,-0.5).s().p("AtvTvQieAAhyhmIgRgPQh4h1ABimIgBt7IAAtBQAAimB3h1QB3h1CqAAIJTgBISOAAQCpAAB3B1QB4B1AACmIAAN7IAANBQAACmh3B1Qh4B1ioAAIpUABIyNAAg");
	this.shape_33.setTransform(153.2,165.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#147FDD","#00ABFE"],[0,1],-142.8,-0.2,143.2,-0.2).s().p("AE9V3I0NAAQiuAAh+hwIgTgRQiFiCAAi4IAAvcIAAubQAAi3CFiCQCEiCC7AAIKTAAIUNAAQC8AACECCQCECBAAC4IAAPcIAAObQAAC3iECDQiECBi8AAIqTAAg");
	this.shape_34.setTransform(154.1,157.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#147FDD","#00ABFE"],[0,1],-150,-0.1,150.1,-0.1).s().p("AwAW9Qi3AAiGh2IgTgSQiLiIAAjBIAAwNIAAvLQAAjACLiIQCLiIDFAAIK0AAIVOAAQDFAACKCIQCLCIAADAIAAQPIAAPJQAADBiLCIQiKCIjFAAIq1AAI1NAAg");
	this.shape_35.setTransform(154.525,154.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#147FDD","#00ABFE"],[0,1],-153.2,0,153.3,0).s().p("AFUXdI1qAAQi8AAiIh4IgUgTQiNiLAAjFIAAwkIAAvfQAAjFCNiLQCPiLDJAAILDAAIVqAAQDKAACNCLQCPCLgBDFIAAQlIAAPeQABDFiPCLQiNCLjKAAIrDAAg");
	this.shape_36.setTransform(154.75,152.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.4,0,154.5,0).s().p("AFXXpI12AAQi8AAiKh6IgUgSQiPiMAAjHIAAwtIAAvmQAAjHCPiMQCQiMDKAAILJAAIV2AAQDLAACPCMQCPCMAADHIAAQtIAAPmQAADHiPCMQiPCMjLAAIrJAAg");
	this.shape_37.setTransform(154.825,151.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.8,0,154.7,0).s().p("AFXXtI14AAQi9AAiKh7IgUgSQiPiMAAjIIAAwvIAAvoQAAjICPiMQCQiNDLABILLAAIV4AAQDMgBCOCNQCQCMAADIIAAQuIAAPpQAADIiQCMQiOCNjMAAIrLAAg");
	this.shape_38.setTransform(154.85,151.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.8,0,154.8,0).s().p("AFXXtI15AAQi9AAiJh6IgUgTQiPiMgBjHIAAwwIAAvpQABjHCPiMQCPiNDLAAILMAAIV5AAQDLAACPCNQCPCMAADHIAAQwIAAPpQAADHiPCMQiPCNjLAAIrMAAg");
	this.shape_39.setTransform(154.85,151.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#147FDD","#00ABFE"],[0,1],-151.7,0,151.7,0).s().p("AwMXtQjHAAiMiNQiNiMAAjHMAAAggZQAAjHCNiMQCMiNDHAAMAgZAAAQDHAACNCNQCMCMAADHMAAAAgZQAADHiMCMQiNCNjHAAg");
	this.shape_40.setTransform(154.8618,151.675,1.0208,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#147FDD","#00ABFE"],[0,1],-151.6,0,151.7,0).s().p("AwMXtQjHAAiMiNQiNiMAAjHMAAAggZQAAjHCNiMQCMiNDHAAMAgZAAAQDHAACMCNQCNCMAADHMAAAAgZQAADHiNCMQiMCNjHAAg");
	this.shape_41.setTransform(154.8362,151.675,1.0208,1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.2,0,154.2,0).s().p("ArWXnIlHAAQjLAAiOiMQiPiMAAjGIAArIIAA1JQAAjGCPiMQCOiMDLAAILIAAIVzAAQDLAACOCMQCPCMAADGIAALIIAAQsIAAEdQAADGiPCMQiOCLjLABIlkAAI2QAAg");
	this.shape_42.setTransform(154.825,152.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#147FDD","#00ABFE"],[0,1],-145,0.3,144.6,0.3).s().p("AKRWOI08AAIk0AAQi+AAiHiDQiGiEAAi7IgBqeIAAz5QAAi6CHiEQCGiEC/AAIKeAAIUhAAQC/AACGCEQCHCDAAC7IAAKeIAAPtIAAEMQAAC7iHCDQiGCEi+AAIlQAAg");
	this.shape_43.setTransform(154.525,157.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#147FDD","#00ABFE"],[0,1],-105.7,1.4,102.8,1.4).s().p("ArTQPQiKgBhjhgQhihfAAiJIgBnpIAAugIAAgBQAAiIBihgQBihhCLAAIHpAAIO+gBQCMABBiBgQBiBgAACIIABHpIAALdIAADEQAACIhiBgQhiBhiLAAIj1AAIvRABIjiAAg");
	this.shape_44.setTransform(153.375,181.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#147FDD","#00ABFE"],[0,1],-15.2,136.2,288.2,136.2).s().p("AAACbQg+AAgtgtQgsgsAAg/IAAgFQAAg/AsgtQAtgsA+AAIAAAAQA/AAAsAsQAtAtAAA/IAAAFQAAA/gtAsQgsAtg/AAg");
	this.shape_45.setTransform(150.2281,245.4531,0.033,0.0323,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},3).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[]},1).wait(81));

	// bt2_c
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#147FDD","#00ABFE"],[0,1],-13.5,0,13.6,0).s().p("AAACKQg3AAgognQgngoAAg4IAAgFQAAg4AngnQAogoA3AAIAAAAQA4AAAoAoQAnAnAAA4IAAAFQAAA4gnAoQgoAng4AAg");
	this.shape_46.setTransform(422.3374,242.4471,0.037,0.0362);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#147FDD","#00ABFE"],[0,1],-63.7,0,63.7,0).s().p("An8JiQglgOgdgdQg8g6AAhRIgBmIIgBnMQAAhRA7g6QA6g6BTAAIE6gBIIsgBQAoAAAjAOQAkAOAfAdQA7A6AABSIABGHIABHMQAABRg7A6Qg7A6hTAAIk5ABIorABQgpAAgjgOg");
	this.shape_47.setTransform(424.45,205.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#147FDD","#00ABFE"],[0,1],-104.3,0,104.2,0).s().p("AtDPmQg8gXgwgwQhhhfAAiFIgBqCIAArxQAAiGBghfQBhheCIAAIIBgBIOPAAQBDAAA5AWQA7AYAyAwQBgBeAACGIABKCIAALxQAACGhgBfQhgBeiJAAIoBABIuOAAQhEAAg5gXg");
	this.shape_48.setTransform(425.8,181.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#147FDD","#00ABFE"],[0,1],-128.8,0,128.9,0).s().p("AwJTSQhKgdg9g7Qh3h1AAimIgBsZIAAujQAAimB3h1QB4h1CpAAIJ6AAIRmgBQBTAABHAdQBKAdA9A7QB3B1AACmIABMZIAAOkQAAClh4B1Qh3B1ipAAIp6AAIxmABQhTAAhHgdg");
	this.shape_49.setTransform(426.625,166.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#147FDD","#00ABFE"],[0,1],-142.8,0,142.8,0).s().p("AERV3IzgAAQhcAAhPgfQhRgghDhCQiFiCAAi3IAAtwIAAwIQAAi4CEiBQCEiCC8AAIK/AAITgAAQBcAABPAfQBRAhBEBBQCECCAAC4IAANvIAAQIQAAC4iECBQiECCi8AAIq/AAg");
	this.shape_50.setTransform(427.075,158.725);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#147FDD","#00ABFE"],[0,1],-150,0,150,0).s().p("AEfW9I0fAAQhgAAhTggQhWgihHhGQiKiIAAjAIgBucIAAw8QAAjBCLiIQCLiJDFABILiAAIUfAAQBhgBBSAiQBWAhBHBFQCLCJAADBIAAObIAAQ9QAADAiLCIQiKCIjGAAIriAAg");
	this.shape_51.setTransform(427.3,154.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#147FDD","#00ABFE"],[0,1],-153.2,0,153.3,0).s().p("AElXdI07AAQhjAAhVgiQhXgihIhHQiOiLAAjFIAAuwIAAxTQAAjFCOiLQCOiLDJAAILyAAIU7AAQBjAABUAhQBYAjBIBHQCOCLAADFIAAOvIAARUQAADFiOCLQiNCLjKAAIryAAg");
	this.shape_52.setTransform(427.425,152.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.4,0,154.5,0).s().p("AEnXpI1FAAQhkAAhVgiQhZgjhIhHQiQiNAAjGIAAu3IAAxdQAAjGCQiMQCPiMDLAAIL4AAIVGAAQBjAABWAiQBXAjBKBHQCOCMABDGIAAO4IAARcQgBDGiOCNQiPCMjLAAIr5AAg");
	this.shape_53.setTransform(427.45,151.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.7,0,154.8,0).s().p("AEoXsI1JAAQhjAAhWgiQhYgjhJhHQiQiNAAjHIAAu5IAAxfQAAjHCQiMQCPiMDLAAIL6AAIVJAAQBkAABVAiQBYAjBJBHQCQCMAADHIAAO6IAAReQAADHiQCNQiPCMjLAAIr6AAg");
	this.shape_54.setTransform(427.475,151.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.8,0,154.8,0).s().p("AEoXtI1JAAQhkAAhVgiQhZgjhJhIQiPiMAAjHIAAu6IAAxfQAAjHCPiMQCQiNDLAAIL6AAIVJAAQBkAABVAiQBZAjBJBIQCPCMAADHIAAO6IAARfQAADHiPCMQiPCNjMAAIr6AAg");
	this.shape_55.setTransform(427.475,151.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#147FDD","#00ABFE"],[0,1],-151.6,0,151.7,0).s().p("AwMXtQjHAAiMiNQiNiMAAjHMAAAggZQAAjHCNiMQCMiNDHAAMAgZAAAQDHAACMCNQCNCMAADHMAAAAgZQAADHiNCMQiMCNjHAAg");
	this.shape_56.setTransform(427.4862,151.675,1.0208,1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#147FDD","#00ABFE"],[0,1],-154.6,0,154.7,0).s().p("AK8XrI2UAAIlIAAQjLAAiPiMQiQiMAAjHIAArLIAA1MQAAjHCQiMQCPiMDLAAILKAAIV3AAQDLAACPCMQCQCMAADHIAALLIAAQuIAAEeQAADHiQCMQiPCMjLAAIllAAg");
	this.shape_57.setTransform(427.475,151.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#147FDD","#00ABFE"],[0,1],-150,0,149.9,0).s().p("AKnW9I1pAAIk+AAQjFAAiLiIQiLiHAAjBIAAq1IAA0jQAAjBCLiIQCLiIDFAAIK0AAIVNAAQDFAACKCIQCMCIAADAIAAK1IAAQPIAAEVQAADBiLCHQiLCIjFAAIlaAAg");
	this.shape_58.setTransform(427.35,154.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#147FDD","#00ABFE"],[0,1],-118,0,117.9,0).s().p("AorSGIj7AAQibAAhuhrQhthrAAiYIgBoiIAAwMQAAiYBthrQBuhrCaAAIIigBIQtAAQCbAABtBrQBuBsABCXIAAIiIAAMyIAADaQAACYhuBrQhsBsicAAIkQAAIxDAAg");
	this.shape_59.setTransform(426.4,175.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#147FDD","#00ABFE"],[0,1],-15.1,0,15.2,0).s().p("AAACbQg+AAgtgtQgsgsAAg/IAAgFQAAg/AsgtQAtgsA+AAIAAAAQA/AAAsAsQAtAtAAA/IAAAFQAAA/gtAsQgsAtg/AAg");
	this.shape_60.setTransform(422.9281,250.4531,0.033,0.0323,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46}]},19).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[]},1).wait(65));

	// adah
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D7D7D7").s().p("EhOCAVQIgYgBQi2gRh8iHQiAiLgOi8IAA7fIACgYQAZjhC2iBQB2hSCRgUMCcGAAAIAYABQDZAbCBCsQBdB+AICaIAAbfIgCAZQgKByg3BlQgyBchXA8IgPALQh1BJiHAEg");
	this.shape_61.setTransform(564.85,153.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(18,17.3,1093.6,272);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(18,17.3,1093.6,274.2), new cjs.Rectangle(11.3,17.3,1100.3,280.6), new cjs.Rectangle(4.5,7.3,1107.1,293.9), new cjs.Rectangle(1.5,2.4,1110.1,300.3), new cjs.Rectangle(0.4,0.6,1111.2,302.7), new cjs.Rectangle(0.1,0.1,1111.5,303.3), rect=new cjs.Rectangle(0,0,1111.6,303.4), rect, rect, new cjs.Rectangle(0.6,1,1111,302.2), new cjs.Rectangle(9.4,15.3,1102.2,284.5), rect=new cjs.Rectangle(18,17.3,1093.6,272), rect, rect, rect, rect, new cjs.Rectangle(18,17.3,1093.6,276), new cjs.Rectangle(18,17.3,1093.6,281.4), new cjs.Rectangle(18,7.6,1093.6,293.9), new cjs.Rectangle(18,2.5,1093.6,300.3), new cjs.Rectangle(18,0.6,1093.6,302.6), new cjs.Rectangle(18,0.1,1093.6,303.3), rect=new cjs.Rectangle(18,0,1093.6,303.4), rect, rect, new cjs.Rectangle(18,0.3,1093.6,303.1), new cjs.Rectangle(18,7.8,1093.6,293.9), new cjs.Rectangle(18,17.3,1093.6,273.7), rect=new cjs.Rectangle(18,17.3,1093.6,272), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(18,17.3,1093.6,277.1), new cjs.Rectangle(18,17.3,1093.6,282), new cjs.Rectangle(18,7.8,1093.6,293.9), new cjs.Rectangle(18,2.6,1093.6,300.3), new cjs.Rectangle(18,0.6,1093.6,302.6), new cjs.Rectangle(18,0.1,1093.6,303.3), rect=new cjs.Rectangle(18,0,1093.6,303.4), rect, rect, new cjs.Rectangle(18,0.3,1093.6,303.1), new cjs.Rectangle(18,7.6,1093.6,293.9), rect=new cjs.Rectangle(18,17.3,1093.6,272), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(18,17.3,1093.6,274.1), new cjs.Rectangle(18,17.3,1099.6,280.6), new cjs.Rectangle(18,7.2,1107.1,293.9), new cjs.Rectangle(18,2.4,1110.5,300.3), new cjs.Rectangle(18,0.6,1111.7,302.7), new cjs.Rectangle(18,0.1,1112.1,303.3), rect=new cjs.Rectangle(18,0,1112.1,303.4), rect, rect, new cjs.Rectangle(18,0.3,1112,303.1), new cjs.Rectangle(18,7.6,1107.2,294), new cjs.Rectangle(18,17.3,1093.6,272.3), rect=new cjs.Rectangle(18,17.3,1093.6,272), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mainmenu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.expand.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.play();
		
		}
		
		
		window.addEventListener("keydown", keyPressed.bind(this));
		
		  function keyPressed(evt) {
		
		     var theKey = evt.key.toLowerCase();
		
		     if(theKey=="m"){
		
		  this.play();
		
		  }
		
		  }
	}
	this.frame_19 = function() {
		this.stop();
		
		this.collapse.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.gotoAndStop(116);
			this.play();
		
		}
		
		this.menu.bt1.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler() {
			this.gotoAndPlay(22);
			This.play();
		
		}
		
		
		this.menu.bt1.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOutHandler() {
			this.gotoAndPlay(35);
			this.play();
		
		}
		
		//button 2
		
		this.menu.bt2.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3() {
			this.gotoAndPlay(45);
			This.play();
		
		}
		
		
		this.menu.bt2.addEventListener("mouseout", fl_MouseOutHandler_3.bind(this));
		
		function fl_MouseOutHandler_3() {
			this.gotoAndPlay(58);
			this.play();
		}
		
		//button 3
		this.menu.bt3.addEventListener("mouseover", fl_MouseOverHandler_4.bind(this));
		
		function fl_MouseOverHandler_4() {
			this.gotoAndPlay(68);
			This.play();
		
		}
		
		
		this.menu.bt3.addEventListener("mouseout", fl_MouseOutHandler_4.bind(this));
		
		function fl_MouseOutHandler_4() {
			this.gotoAndPlay(80);
			this.play();
		}
		
		//button 4
		this.menu.bt4.addEventListener("mouseover", fl_MouseOverHandler_5.bind(this));
		
		function fl_MouseOverHandler_5() {
			this.gotoAndPlay(91);
			This.play();
		
		}
		
		
		this.menu.bt4.addEventListener("mouseout", fl_MouseOutHandler_5.bind(this));
		
		function fl_MouseOutHandler_5() {
			this.gotoAndPlay(104);
			this.play();
		}
		
		window.addEventListener("keydown", keyPressed.bind(this));
		
		  function keyPressed(evt) {
		
		     var theKey = evt.key.toLowerCase();
		
		     if(theKey=="m"){
		
		  this.stop();
		
		  }
		
		  }
	}
	this.frame_32 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_42 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_55 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_65 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_78 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_88 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_101 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_111 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_132 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		this.stop();
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(13).call(this.frame_32).wait(10).call(this.frame_42).wait(13).call(this.frame_55).wait(10).call(this.frame_65).wait(13).call(this.frame_78).wait(10).call(this.frame_88).wait(13).call(this.frame_101).wait(10).call(this.frame_111).wait(21).call(this.frame_132).wait(3));

	// icon_exit
	this.tombolexit = new lib.Symbol4();
	this.tombolexit.name = "tombolexit";
	this.tombolexit.setTransform(149.8,104.8,1,1,0,0,0,31.8,31.8);

	this.timeline.addTween(cjs.Tween.get(this.tombolexit).wait(135));

	// title_baru
	this.instance = new lib.menuanyarrr();
	this.instance.setTransform(706.35,574,0.9777,0.9777,0,0,0,185.5,162.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:185.6,scaleX:1.0547,scaleY:1.0545,x:720.75,y:480.15},19,cjs.Ease.circOut).wait(95).to({regX:185.5,scaleX:0.9777,scaleY:0.9777,x:706.35,y:574},18,cjs.Ease.circInOut).wait(3));

	// btn_menu
	this.expand = new lib.expand();
	this.expand.name = "expand";
	this.expand.setTransform(400.8,901.15,1,1,0,0,0,16.3,11.3);
	new cjs.ButtonHelper(this.expand, 0, 1, 2, false, new lib.expand(), 3);

	this.collapse = new lib.collapse();
	this.collapse.name = "collapse";
	this.collapse.setTransform(541.3,723.8,1,1,0,0,0,16.3,-11.7);
	new cjs.ButtonHelper(this.collapse, 0, 1, 2, false, new lib.collapse(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(204,51,0,0)").ss(5,1,1).p("AiiAAIFFAA");
	this.shape.setTransform(1165.325,688.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(204,51,0,0)").ss(5,1,1).p("AiihwIFFAAIAADhIlFAAg");
	this.shape_1.setTransform(1171.325,990.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.expand,p:{x:400.8,y:901.15}}]}).to({state:[]},1).to({state:[{t:this.collapse,p:{y:723.8,x:541.3}}]},18).to({state:[{t:this.shape,p:{x:1165.325,y:688.55}},{t:this.collapse,p:{y:728.1,x:541.3}}]},1).to({state:[{t:this.shape,p:{x:1931.925,y:445.95}},{t:this.collapse,p:{y:726.85,x:537.15}}]},94).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.expand,p:{x:403.3,y:903.25}}]},17).wait(3));

	// arrow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(5,1,1).p("AhbAcIBag3IBdA2");
	this.shape_2.setTransform(536.7,989.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(5,1,1).p("AhbAKIBbgTIBcAT");
	this.shape_3.setTransform(536.7,905.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(5,1,1).p("AhbADIBbgFIBcAF");
	this.shape_4.setTransform(536.7,872.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(5,1,1).p("AhbgBIBbADIBcgD");
	this.shape_5.setTransform(536.75,848.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(5,1,1).p("AhbgFIBbALIBcgM");
	this.shape_6.setTransform(536.75,828.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(5,1,1).p("AhbgIIBbASIBcgT");
	this.shape_7.setTransform(536.75,812.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(5,1,1).p("AhbgLIBbAYIBcgZ");
	this.shape_8.setTransform(536.75,798.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(5,1,1).p("AhbgOIBbAdIBcgd");
	this.shape_9.setTransform(536.75,786.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(5,1,1).p("AhbgQIBcAhIBbgh");
	this.shape_10.setTransform(536.75,776.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(5,1,1).p("AhbgSIBcAlIBbgl");
	this.shape_11.setTransform(536.75,766.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(5,1,1).p("AhbgTIBcAoIBbgp");
	this.shape_12.setTransform(536.75,759);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#666666").ss(5,1,1).p("AhbgVIBcAsIBbgt");
	this.shape_13.setTransform(536.75,752.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(5,1,1).p("AhbgWIBcAuIBbgv");
	this.shape_14.setTransform(536.75,746.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#666666").ss(5,1,1).p("AhbgXIBcAwIBbgx");
	this.shape_15.setTransform(536.75,741.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#666666").ss(5,1,1).p("AhbgYIBcAxIBbgx");
	this.shape_16.setTransform(536.75,737);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#666666").ss(5,1,1).p("AhbgZIBcAzIBbgz");
	this.shape_17.setTransform(536.75,733.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#666666").ss(5,1,1).p("AhbgZIBcA0IBbg1");
	this.shape_18.setTransform(536.75,731.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#666666").ss(5,1,1).p("AhbgaIBcA1IBbg1");
	this.shape_19.setTransform(536.75,729.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#666666").ss(5,1,1).p("AhbgaIBcA2IBbg3");
	this.shape_20.setTransform(536.75,728.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#666666").ss(5,1,1).p("ABcgbIhbA3Ihcg2");
	this.shape_21.setTransform(536.75,727.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#666666").ss(5,1,1).p("AhbgYIBcAyIBbgz");
	this.shape_22.setTransform(536.75,736.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#666666").ss(5,1,1).p("AhbgTIBcAnIBbgn");
	this.shape_23.setTransform(536.75,762.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#666666").ss(5,1,1).p("AhbgQIBcAiIBbgj");
	this.shape_24.setTransform(536.75,775.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#666666").ss(5,1,1).p("AhbgNIBbAcIBcgc");
	this.shape_25.setTransform(536.75,789.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#666666").ss(5,1,1).p("AhbgKIBbAVIBcgV");
	this.shape_26.setTransform(536.75,804.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#666666").ss(5,1,1).p("AhbgGIBbAOIBcgP");
	this.shape_27.setTransform(536.75,821.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#666666").ss(5,1,1).p("AhbgDIBbAHIBcgH");
	this.shape_28.setTransform(536.75,839.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#666666").ss(5,1,1).p("AhbAAIC3AA");
	this.shape_29.setTransform(536.75,858.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#666666").ss(5,1,1).p("AhbAEIBbgHIBcAH");
	this.shape_30.setTransform(536.7,879.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#666666").ss(5,1,1).p("AhbAJIBbgRIBcAQ");
	this.shape_31.setTransform(536.7,900.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#666666").ss(5,1,1).p("AhbANIBbgZIBcAZ");
	this.shape_32.setTransform(536.7,921.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#666666").ss(5,1,1).p("AhbASIBbgjIBcAj");
	this.shape_33.setTransform(536.7,944.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#666666").ss(5,1,1).p("AhbAXIBbgtIBcAs");
	this.shape_34.setTransform(536.7,966.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{y:752.1}}]},1).to({state:[{t:this.shape_14,p:{y:746.175}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{y:731.025}}]},1).to({state:[{t:this.shape_19,p:{y:729.225}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},95).to({state:[{t:this.shape_19,p:{y:728.725}}]},1).to({state:[{t:this.shape_18,p:{y:731.725}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_14,p:{y:743.55}}]},1).to({state:[{t:this.shape_13,p:{y:752.3}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_2}]},1).wait(3));

	// tulisan_menu
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(563.1,965.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(563.1,704.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(564.55,704.55,0.5,0.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.CachedBmp_4();
	this.instance_4.setTransform(563.2,965.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},19).to({state:[{t:this.instance_3}]},95).to({state:[{t:this.instance_4}]},18).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:704.55},19,cjs.Ease.circOut).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).to({_off:true,x:563.2,y:965.85},18,cjs.Ease.sineIn).wait(3));

	// button_dummy
	this.tutupan = new lib.tutupan();
	this.tutupan.name = "tutupan";
	this.tutupan.setTransform(1018.05,1181,0.9637,1,0,0,0,565.6,141.7);
	new cjs.ButtonHelper(this.tutupan, 0, 1, 2, false, new lib.tutupan(), 3);

	this.timeline.addTween(cjs.Tween.get(this.tutupan).to({_off:true},1).wait(131).to({_off:false,regY:141.6,scaleX:1,x:1019.8,y:1180.9},0).wait(3));

	// menu_ygy
	this.menu = new lib.menu();
	this.menu.name = "menu";
	this.menu.setTransform(1020.1,1173.75,1,1,0,0,0,565.1,151.7);

	this.timeline.addTween(cjs.Tween.get(this.menu).to({y:918.7},19,cjs.Ease.circOut).wait(95).to({y:1173.75},18,cjs.Ease.circInOut).wait(3));

	// chara_5
	this.instance_5 = new lib.chara5();
	this.instance_5.setTransform(1449.9,697.15,1,1,0,0,0,449.9,624.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).to({x:1359.9,alpha:1},12,cjs.Ease.quintOut).wait(1).to({x:1401.9,alpha:0},9,cjs.Ease.quadIn).wait(21).to({x:1560.9},0).wait(3));

	// chara_4
	this.instance_6 = new lib.chara4();
	this.instance_6.setTransform(1653.6,1082.55,1,1,0,0,0,764.6,1082);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({_off:false},0).to({x:1528.6,alpha:1},12,cjs.Ease.quintOut).wait(1).to({x:1614.6,alpha:0},9,cjs.Ease.quadIn).wait(26).to({x:1721.75},0).wait(21));

	// chara_3
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(1432.45,627.65,0.9421,0.9421,0,0,0,459,665.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({_off:false},0).to({regY:664.9,scaleX:0.9422,scaleY:0.9422,x:1342.45,y:627.5,alpha:1},12,cjs.Ease.quintOut).wait(1).to({regX:459.1,regY:665.1,scaleX:0.9433,scaleY:0.9437,x:1385.05,y:628.7,alpha:0},9,cjs.Ease.quadIn).wait(49).to({regY:665,scaleX:0.8588,scaleY:0.8588,x:1708.3,y:627.6},0).wait(21));

	// chara_2
	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(1549.9,835.1,1,1,0,0,0,549.9,808.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({x:1459.9,y:835.15,alpha:1},12,cjs.Ease.quartOut).wait(1).to({x:1501.9,alpha:0},9,cjs.Ease.quadIn).wait(1).to({x:1679.05},0).to({_off:true},1).wait(70).to({_off:false},0).wait(21));

	// chara_1_main
	this.instance_9 = new lib.chara();
	this.instance_9.setTransform(1340,691.55,1,1,0,0,0,400,535);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.08,scaleY:1.08,x:1342},19,cjs.Ease.quintOut).wait(1).to({x:1384,alpha:0},12,cjs.Ease.quintOut).wait(1).to({regX:400.4,regY:535.4,x:1384.45,y:691.95},0).to({regX:400,regY:535,x:1342,y:691.55,alpha:1},9,cjs.Ease.quintInOut).wait(1).to({x:1384,alpha:0},12,cjs.Ease.quintOut).wait(1).to({regX:400.4,regY:535.4,x:1384.45,y:691.95},0).to({regX:400,regY:535,x:1342,y:691.55,alpha:1},9,cjs.Ease.quintInOut).wait(1).to({x:1384,alpha:0},12,cjs.Ease.quintOut).wait(1).to({regX:400.4,regY:535.4,x:1384.45,y:691.95},0).to({regX:400,regY:535,x:1342,y:691.55,alpha:1},9,cjs.Ease.quintInOut).wait(1).to({x:1384,alpha:0},12,cjs.Ease.quintOut).wait(1).to({regX:400.4,regY:535.4,x:1384.45,y:691.95},0).to({regX:400,regY:535,x:1342,y:691.55,alpha:1},9,cjs.Ease.quintInOut).wait(3).to({regY:535.1,scaleX:1,scaleY:1,x:1340,y:691.65},18,cjs.Ease.sineInOut).wait(3));

	// Layer_5
	this.instance_10 = new lib.adah();
	this.instance_10.setTransform(238,27,1.0445,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(135));

	// bg_baru
	this.instance_11 = new lib.bg_1();
	this.instance_11.setTransform(1012,567,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(135));

	// bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("ECbhhcZIAFAAMAAAC4zIgFAAMk3GAAA");
	this.shape_35.setTransform(996.825,592.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EibgBcZIgFAAMAAAi4yME3LAAAMAAAC4yg");
	this.shape_36.setTransform(996.275,592.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[]},100).wait(35));

	// Layer_1
	this.instance_12 = new lib._4();
	this.instance_12.setTransform(52.15,26.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},100).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1993.7,1322.5);
p.frameBounds = [rect, new cjs.Rectangle(0,0,1993.7,1236.7), new cjs.Rectangle(0,0,1993.7,1244.8), new cjs.Rectangle(0,0,1993.7,1251.3), new cjs.Rectangle(0,0,1993.7,1256.3), new cjs.Rectangle(0,0,1993.7,1260.1), new cjs.Rectangle(0,0,1993.7,1263), new cjs.Rectangle(0,0,1993.7,1265.1), new cjs.Rectangle(0,0,1993.7,1266.7), new cjs.Rectangle(0,0,1993.7,1267.7), new cjs.Rectangle(0,0,1993.7,1268.4), new cjs.Rectangle(0,0,1993.7,1268.9), new cjs.Rectangle(0,0,1993.7,1269.1), new cjs.Rectangle(0,0,1993.7,1269.3), rect=new cjs.Rectangle(0,0,1993.7,1269.4), rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,2099.8,1643.8), new cjs.Rectangle(0,0,2073.3,1643.9), new cjs.Rectangle(0,0,2053.2,1643.9), new cjs.Rectangle(0,0,2038.3,1643.9), new cjs.Rectangle(0,0,2027.6,1643.8), new cjs.Rectangle(0,0,2020.2,1643.8), new cjs.Rectangle(0,0,2015.4,1643.8), new cjs.Rectangle(0,0,2012.5,1643.8), new cjs.Rectangle(0,0,2010.9,1643.8), new cjs.Rectangle(0,0,2010.1,1643.8), rect=new cjs.Rectangle(0,0,2009.8,1643.8), rect, rect=new cjs.Rectangle(0,0,2009.8,1643.9), rect, new cjs.Rectangle(0,0,2010.3,1643.9), new cjs.Rectangle(0,0,2011.8,1643.9), new cjs.Rectangle(0,0,2014.4,1643.9), new cjs.Rectangle(0,0,2018.1,1643.9), new cjs.Rectangle(0,0,2022.7,1643.9), new cjs.Rectangle(0,0,2028.4,1643.9), new cjs.Rectangle(0,0,2035.2,1643.9), new cjs.Rectangle(0,0,2043,1643.9), new cjs.Rectangle(0,0,2051.8,1643.9), new cjs.Rectangle(0,0,2228.9,1643.9), rect=new cjs.Rectangle(0,0,1993.7,1269.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,1993.7,1269.4), rect=new cjs.Rectangle(0,0,1993.7,1269.3), rect, rect, rect, rect=new cjs.Rectangle(0,0,1993.7,1269.2), rect, rect=new cjs.Rectangle(0,0,1993.7,1269), rect, rect, new cjs.Rectangle(0,0,1993.7,1269.4), new cjs.Rectangle(0,0,2418.3,2164.7), new cjs.Rectangle(0,0,2374.2,2164.7), new cjs.Rectangle(0,0,2343.6,2164.7), new cjs.Rectangle(0,0,2323,2164.7), new cjs.Rectangle(0,0,2309.8,2164.7), new cjs.Rectangle(0,0,2301.8,2164.7), new cjs.Rectangle(0,0,2297.2,2164.7), new cjs.Rectangle(0,0,2294.9,2164.7), new cjs.Rectangle(0,0,2293.8,2164.7), new cjs.Rectangle(0,0,2293.4,2164.7), rect=new cjs.Rectangle(0,0,2293.3,2164.7), rect, rect, rect, new cjs.Rectangle(0,0,2294.4,2164.7), new cjs.Rectangle(0,0,2297.6,2164.7), new cjs.Rectangle(0,0,2302.9,2164.7), new cjs.Rectangle(0,0,2310.3,2164.7), new cjs.Rectangle(0,0,2319.9,2164.7), new cjs.Rectangle(0,0,2331.5,2164.7), new cjs.Rectangle(0,0,2345.3,2164.7), new cjs.Rectangle(0,0,2361.3,2164.7), rect=new cjs.Rectangle(0,0,2379.3,2164.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(52,0.6,2327.3,2164.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(52,0.6,2434.5,2164.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.fixx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// login_1
	this.instance = new lib.login_1();
	this.instance.setTransform(-107374180,-107374180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// main_menu
	this.instance_1 = new lib.mainmenu();
	this.instance_1.setTransform(1191.05,1055.75,1,1,0,0,0,1243.2,1082.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(908.3,514,1992.7,1310.8);
p.frameBounds = [rect, rect];
// library properties:
lib.properties = {
	id: '88553BC8ACBD8E41A78531653F744AEA',
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_62.png", id:"_62"},
		{src:"31102022_atlas_1.png", id:"31102022_atlas_1"},
		{src:"31102022_atlas_2.png", id:"31102022_atlas_2"},
		{src:"31102022_atlas_3.png", id:"31102022_atlas_3"},
		{src:"31102022_atlas_4.png", id:"31102022_atlas_4"},
		{src:"31102022_atlas_5.png", id:"31102022_atlas_5"},
		{src:"31102022_atlas_6.png", id:"31102022_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['88553BC8ACBD8E41A78531653F744AEA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;