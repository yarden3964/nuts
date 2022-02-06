(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Nuts_atlas_1", frames: [[1031,922,66,66],[951,1317,66,66],[958,651,83,28],[1898,0,142,268],[1898,270,142,268],[698,1428,117,99],[381,1446,117,99],[1568,1425,116,109],[951,1482,117,99],[1070,1482,117,99],[1189,1482,117,99],[1664,489,223,397],[951,1385,60,71],[642,912,52,61],[642,526,314,167],[958,526,123,123],[1682,888,177,177],[1861,888,177,177],[500,1496,116,88],[1568,1303,106,71],[1308,1482,117,99],[1940,1425,106,71],[1686,1524,116,88],[1804,1524,116,88],[1940,1498,106,71],[1427,1482,117,99],[1682,1067,177,177],[1861,1067,177,177],[1682,1246,177,177],[1861,1246,177,177],[1031,1303,177,177],[1210,1303,177,177],[1389,1303,177,177],[519,1317,177,177],[569,0,547,524],[1118,0,544,519],[1118,521,544,519],[0,0,567,545],[1889,540,124,109],[1889,651,124,109],[1686,1425,125,97],[824,1317,125,102],[1813,1425,125,97],[1889,762,124,109],[698,1317,124,109],[0,1446,125,97],[824,1421,125,102],[127,1446,125,97],[254,1446,125,97],[1031,1042,649,259],[0,975,517,469],[1664,0,232,487],[519,975,510,340],[879,695,224,225],[642,695,235,215],[0,547,640,426]]},
		{name:"Nuts_atlas_2", frames: [[0,0,1550,674],[722,676,567,545],[0,1158,567,545],[1291,676,567,545],[569,1223,567,545],[1138,1223,567,545],[0,676,720,480]]},
		{name:"Nuts_atlas_3", frames: [[0,813,1538,863],[0,0,1691,811]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.CachedBmp_203 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_202 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_201 = function() {
	this.initialize(img.CachedBmp_201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2913,175);


(lib.CachedBmp_236 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_243 = function() {
	this.initialize(ss["Nuts_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_198 = function() {
	this.initialize(img.CachedBmp_198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2238,1433);


(lib.CachedBmp_197 = function() {
	this.initialize(img.CachedBmp_197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2238,1433);


(lib.CachedBmp_234 = function() {
	this.initialize(img.CachedBmp_234);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2259,642);


(lib.CachedBmp_233 = function() {
	this.initialize(ss["Nuts_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_232 = function() {
	this.initialize(img.CachedBmp_232);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2626,175);


(lib.CachedBmp_220 = function() {
	this.initialize(img.CachedBmp_220);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2626,1214);


(lib.CachedBmp_192 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_191 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_186 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_185 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_241 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_240 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_229 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_228 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_227 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_226 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_239 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_238 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_223 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_222 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_157 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_153 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_151 = function() {
	this.initialize(img.CachedBmp_151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3049,392);


(lib.CachedBmp_150 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_149 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_147 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_146 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib._18group = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib._32group = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib._8group = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.candy = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(55);
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


(lib.zzz = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FC7E1A").s().p("AgmAvQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIAAgOIAAgDIADgDIApgtIgmAAIgEgBIgBgDIAAgOIABgEIAEgBIBHAAIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAPIgBADIgCACIgoAtIAqAAIADABIABADIAAAOIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape.setTransform(4.325,4.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC7E1A").s().p("AhcBtQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgDIAAgOIABgEIACgCIAqguIgmAAIgEgBIgBgDIAAgPIABgDIAEgBIBIAAIADABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAQIgBADIgBACIgqAtIArAAIAEABIABAEIAAAOIgBADQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAgAAQgOQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgCIAAgPIAAgDIADgDIAqguIgnAAIgEgBIgBgDIAAgOIABgDIAEgBIBJAAIACABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAPIgBADIgCADIgpAtIArAAIAEABIABADIAAAPIgBACQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_1.setTransform(9.75,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC7E1A").s().p("AiUCyQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIAAgOIAAgDIADgDIAqguIgnAAIgEgBIgBgDIAAgOIABgEIAEgBIBIAAIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAPIgBADIgCACIgpAuIArAAIADABIABADIAAAOIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAgnA2QgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgDIAAgOIABgEIACgCIApgtIgmAAIgDgBIgBgEIAAgOIABgDIADgBIBIAAIADABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAAPIgBADIgBADIgpAsIAqAAIAEABIABAEIAAAOIgBADQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAgABHhTQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIAAgOIAAgDIADgDIAqguIgnAAIgEgBIgBgDIAAgOIABgEIAEgBIBIAAIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAPIgBADIgCACIgpAuIArAAIADABIABADIAAAOIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_2.setTransform(15.325,-8.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},6).to({state:[{t:this.shape_2}]},7).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-26.2,30.7,35.6);


(lib.vx = function(mode,startPosition,loop,reversed) {
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
		var self = this
		this.stop();
	}
	this.frame_1 = function() {
		var self = this
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// flash0_ai
	this.instance = new lib.CachedBmp_202();
	this.instance.setTransform(-4.4,-3.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_203();
	this.instance_1.setTransform(-4.4,-3.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-3.1,33,33);


(lib.trueani = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		var self = this
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// אוזניים
	this.instance = new lib.CachedBmp_185();
	this.instance.setTransform(6.05,1.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_186();
	this.instance_1.setTransform(6.05,1.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_187();
	this.instance_2.setTransform(6.05,1.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_188();
	this.instance_3.setTransform(12.25,0.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_189();
	this.instance_4.setTransform(6.05,1.8,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_190();
	this.instance_5.setTransform(6.05,1.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},16).wait(1));

	// אף_ופה
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,1,1).p("Ag/gDQAxArAMg6AAAgRQAHA3A5gc");
	this.shape.setTransform(23.15,85.4778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(0.1,1,1).p("AhDgnQA4AkBQgPQgKAthFANIAAAAIgBgBQg5gWABg4g");
	this.shape_1.setTransform(24.0998,79.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgLAnQg5gWABg4QA4AkBQgPQgKAthFANIAAAAg");
	this.shape_2.setTransform(24.0998,79.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3,1,1).p("AABgVIgFA2IgcgDIADgnQASAAANgZIgBAFQARAZAPAAIgDAnIgcgCIgBg2IgBgKQABABAAABg");
	this.shape_3.setTransform(22.975,88.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#330000").ss(1,1,1).p("AAAgRQAHA3A5gcAg/gDQAxArAMg6");
	this.shape_4.setTransform(23.15,85.4778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACAhIgBg2IAAgIIgBgCIABAKIgFA2IgcgDIADgnQASAAANgZIgBAFQARAZAPAAIgDAngAABgVIgBgKIABACIAAAIg");
	this.shape_5.setTransform(22.975,88.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AABgVIgFA2IgcgDIADgnQASAAANgZIgBAFIAAAIIgBgKQABABAAABQARAZAPAAIgDAnIgcgCg");
	this.shape_6.setTransform(22.975,88.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACAhIgBg2IAAgIQARAZAPAAIgDAngAggAeIADgnQASAAANgZIgBAFIgBgCIABAKIgFA2gAABgVgAABgVIgBgKIABACIAAAIg");
	this.shape_7.setTransform(22.975,88.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#330000").ss(1,1,1).p("AAKgaQgCAGAAAFAg4ANQA5AUgFgwQgBgEgBgFAACgRQgBACAAABAAIgPQgEAjAqAGIALAB");
	this.shape_8.setTransform(23.125,85.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#330000").ss(0.1,1,1).p("AhDgnQA4AkBQgPQgKAqg7AOIgBAAQgDABgDAAQgCABgBAAIAAAAIgBgBQgCgBgBAAQg2gXABg2g");
	this.shape_9.setTransform(24.0998,79.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#330000").s().p("AgLAnIgDgBIgCgJIACAJQg2gXABg2QA4AkBQgPQgKAqg7AOIgBAAIgHABIABgDIgBADIgCABIAAAAgAgBAmIABgLIgBALg");
	this.shape_10.setTransform(24.0998,79.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAVQgbgCgRgPQgOgKgCgOIBsAJIALABIAGABQgFALgPAJQgQAKgVAAIgIAAg");
	this.shape_11.setTransform(23.125,88.8466);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF3333").s().p("AgBAMQgNgBgIgJQgHgGgBgHIA9AGQgCAGgIAFQgIAGgKAAIgEAAg");
	this.shape_12.setTransform(22.925,88.2632);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAVQgbgCgRgPQgOgKgCgOIBsAJIALABIAGABQgFALgPAJQgQAKgVAAIgIAAgAgYgDQAIAIANABQANACAJgHQAIgEACgIIg9gGQABAIAHAGg");
	this.shape_13.setTransform(23.125,88.8466);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_2},{t:this.shape_7},{t:this.shape_1},{t:this.shape_4},{t:this.shape_6}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_10},{t:this.shape_12},{t:this.shape_8},{t:this.shape_9}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_13},{t:this.shape_10},{t:this.shape_12},{t:this.shape_8},{t:this.shape_9}]},1).to({state:[{t:this.shape_2},{t:this.shape_5},{t:this.shape_1},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(1));

	// מתחת_לפה
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7E7DA").s().p("AgbBVQifgLgkiFQA1ALAngmQBDAkBEgTQBHBhCSAJQhMAyh9AAQgWAAgagCg");
	this.shape_14.setTransform(30.35,84.8175);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(30));

	// עיניים
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABvA+QgUgIgGgYQgGgYALgZQAMgaAVgMQAWgMATAIQAUAIAGAZQAGAYgMAZQgLAZgWANQgMAHgMAAQgIAAgIgEgACVglQgKAFgFAMQgGAMADAKQADAMAJADQAJAEAKgFQAKgGAGgLQAFgMgDgLQgDgLgJgEIgHgCQgGAAgGAEgAigAyQgRgCgJgSQgIgQAGgUQAFgXAPgPQAQgNARADQARABAIARQAIARgGAWQgFAWgPANQgOAMgOAAIgEAAgAiRgiQgHAHgCAKQgDALAEAGQAEAIAHAAQAJACAHgHQAIgFACgKQACgLgEgHQgDgJgIAAIgCgBQgHAAgHAGg");
	this.shape_15.setTransform(29.7365,64.8912);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACDAdQgJgEgDgLQgDgLAFgLQAFgMALgGQAKgFAJADQAJAEADAMQACALgFALQgFAMgKAFQgGADgFAAQgEAAgEgBgAiaAUQgIAAgEgJQgDgHADgKQACgKAHgGQAIgHAIABQAHABAEAIQAEAIgDAKQgCAKgHAGQgGAFgHAAIgDAAg");
	this.shape_16.setTransform(30.9724,63.7412);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FC7E1A").s().p("AigAcQgIgBgHgDQgHgCgDgDQgDgCAAgDQAAgGANgFQANgDASAAQASAAANADQANAFAAAGQAAAGgNAEIgIADIgKABIgNABIgQgBgACCAaQgOgCgMgGIgIgGQgGgGAAgGQAAgMAOgIQAPgIAVAAQAUAAAPAIQAOAIAAAMQAAAKgOAIIgCABIgMAFQgJACgMAAIgKAAg");
	this.shape_17.setTransform(31.05,58.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACDAaQgJgEgDgLQgDgLAFgLQAEgIAFgFIAKAAQAMAAAKgCQAEAEACAHQACALgFALQgFAMgKAFQgGADgFAAQgEAAgEgBgAiaARQgIAAgEgJQgDgHADgKQABgIAFgFIARABIANgBQAEAIgDAKQgCAKgHAGQgGAFgHAAIgDAAg");
	this.shape_18.setTransform(30.9724,64.0342);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABvA1QgUgIgGgZQgGgXALgZQAIgRALgLIAJAGQALAGAOACQgGAFgDAIQgGAMADALQADAKAJAEQAJAEAKgGQAKgFAGgLQAFgMgDgLQgCgHgDgEIALgFIAEALQAGAYgMAZQgLAagWAMQgMAIgMAAQgIAAgIgEgAigApQgRgCgJgSQgIgRAGgUQAEgTAMgOQADADAHACQAHADAIABQgFAFgCAIQgDALAEAHQAEAJAHAAQAJAAAHgFQAIgGACgLQACgKgEgIIAKgBQAFAPgFAVQgFAUgPAOQgOAMgOAAIgEAAg");
	this.shape_19.setTransform(29.7365,65.8012);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABvAoQgUgIgGgYQgEgPAEgRQAUAEAZAAIABAAIAAABQADAMAJADQAJAEAKgFQAKgGAGgMIABgBIANgEQgCAOgGAOQgLAYgWANQgMAHgMAAQgIAAgIgEgAigAcQgRgCgJgSQgIgPAGgVIAFgPQADAFAHAEQAIAEAKACQAAAEACADQAEAIAHAAQAJACAHgHQAHgFACgIIAGgDIAGgDQAAAJgDAKQgFAVgPANQgOANgOAAIgEgBg");
	this.shape_20.setTransform(29.7337,67.0762);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACEANQgJgEgDgKIAAgCQAaAAAVgEIgBACQgFALgKAFQgGAEgFAAQgEAAgEgCgAiZAEQgIAAgEgIQgBgDAAgEIANABQAOAAALgEQgDAJgGAFQgGAEgHAAIgDAAg");
	this.shape_21.setTransform(30.875,65.3092);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FC7E1A").s().p("AByAtQgZAAgUgEIgRgEQgagHAAgKQAAgLAagHQASgEAXgCQgFgFAAgHQAAgMAOgHQAPgJAUABQAVgBAOAJQAPAHAAAMQAAALgMAGIABABQAaAHAAALQAAAKgaAHIgNADQgVAFgaAAIgCAAgAiqAlQgKgCgIgFQgIgDgDgFQgCgEAAgEQAAgIALgGIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAFgNAFIACAFQAAAIgIAGIgFACIgGADQgLAFgOAAIgNgBg");
	this.shape_22.setTransform(31.275,60.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AB3AYQgQgGgHgSQATAHAaAAQAXAAATgGQgKAMgNAIQgNAHgLAAQgJAAgIgEgAiYAMQgRgCgJgRQgEgJAAgLQADAHAHAGQAPAMAUAAQAPAAALgGIgJAIQgNANgOAAIgFgBg");
	this.shape_23.setTransform(28.875,68.6762);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC7E1A").s().p("ABMA8IgKgFQgXgMAAgQQABgHAFgHQgSgGAAgIQAAgLAZgHQASgFAXgCQgFgFAAgHQAAgMAOgHQAPgJAVABQAUgBAPAJQAOAHAAAMQAAALgMAHIABABQAaAHAAALQAAAGgOAGQAHAIgBAIQAAAQgWAMIgNAGQgSAFgYABQgZgBgUgGgAi/AsQgIgFgCgHQgFgHAAgJQAAgNAJgJIAAgBQAAgIALgHIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAGgMAFIABAFQAAAFgCACQADAIAAAIQAAARgOALIgIAHQgMAFgOAAQgVAAgOgMg");
	this.shape_24.setTransform(30.85,62.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FC7E1A").s().p("ABIBKQgTgHAAgLQAAgKAOgHQgVgLAAgQQABgHAFgGQgSgGAAgJQAAgLAZgHQASgFAXgCQgFgFAAgHQAAgMAOgHQAPgJAVABQAUgBAPAJQAOAHAAAMQAAALgMAHIABABQAaAHAAALQAAAHgOAGQAHAHgBAIQAAAQgWAMIgHADQAHAGAAAHQAAALgSAHQgTAHgaABQgagBgSgHgAjDA1QgNgIAAgLQAAgKAJgHQgEgHAAgJQAAgMAJgKIAAgBQAAgIALgHIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAGgMAFIABAFQAAAFgCADQADAIAAAHQAAAQgMALIABAGQAAALgOAIQgOAIgSAAQgUAAgNgIg");
	this.shape_25.setTransform(30.55,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},3).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},3).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},15).wait(1));

	// ראש
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FC7E1A").s().p("AiHDnQhaglgehQQgJi6CWiWQDMhWBqCOQB9DXiECjQhoAshaAAQhFAAg9gZg");
	this.shape_26.setTransform(33.6432,67.3837);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(30));

	// ידיים
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E87027").s().p("AhzD1IBZhUQA7hpBZg6IgIgZQgahTgBhfQAAhuAwgbICIBuQAODBhJCGQh9BYh9AgIgPBWIg+AqQgQg7AQgngAjNEhIAPhZIgzhHQgZhBgFhbIgCgpIBxDiIAVCDIgSAng");
	this.shape_27.setTransform(38.4553,123.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E87027").s().p("AhzD1IBZhUQA7hpBZg6QgihegBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh9AgIgPBWIg+AqQgQg7AQgngAjNEhIAPhZIgzhHQgehPgCh2IBxDiIAVCDIgSAng");
	this.shape_28.setTransform(38.4553,123.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E87027").s().p("AjsEjIgSAGQAAgPABgOIgJgMIAkhUIgfhRQgKhUAchyIA1D3IgEAoIBEglQBThWBlgkQgKhiAbhqQAbhrA1gOIBoCNQgjC9hoBxQiOA2iBAAIgkBPIgXAIIgUAZg");
	this.shape_29.setTransform(37.675,120.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E87027").s().p("AkMEEIgTAEQACgQADgNIgHgOIAvhNIgThVQABhTAshvIASD8IgJAoIBJgbQBdhLBqgVQADhiAphmQAqhlA3gIIBUCbQg9C2h3BhQiVAih/gTIgvBLIgYAEIgXAXg");
	this.shape_30.setTransform(34.425,119.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E87027").s().p("AkkDhIgTABQAEgPAFgNIgFgOIA5hGIgIhXQANhSA6hoIgQD8IgOAmIBLgRQBng9BsgHQAQhhA3hfQA3hfA3AAIA+ClQhVCsiCBRQiYANh9gkIg3BDIgZACIgaATg");
	this.shape_31.setTransform(31.2,118.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},3).to({state:[{t:this.shape_29}]},3).to({state:[{t:this.shape_30}]},3).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_28}]},14).wait(1));

	// חלק_אחורי_של_הרגל
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D25F26").s().p("AiaDVQlZorL5CkQAFB2gnBuQg7B+i/Apg");
	this.shape_32.setTransform(71.1913,171.9822);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D25F26").s().p("AiaDVQgegxgWgrQjjnBK3CWQAFB2goBuQgSAoggAfQhFBEiDAcg");
	this.shape_33.setTransform(71.2009,171.9859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_33}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(9).to({_off:true},20).wait(1));

	// מרכז_גוף
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7E7DA").s().p("AhUG7QiJiHBKi1QhnhrAPjnQAIh9AriiQB0BKDphaQAhCfASCQQA2GwhTEmIgSAAQhvAAiOhIg");
	this.shape_34.setTransform(36.859,141.4001);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7E7DA").s().p("AhTG7QiKiHBKi1QifijB7nOQB0BKDphaQCEJ+hvGHIgSAAQhvAAiNhIg");
	this.shape_35.setTransform(36.8396,141.4001);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7E7DA").s().p("AhTG7IgQgQQh1iCBFiqQifijB7nOQB0BKDphaQB2I5hLF0QgKAtgMArIgSAAQhvAAiNhIg");
	this.shape_36.setTransform(36.8418,141.4001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},3).to({state:[{t:this.shape_35}]},3).to({state:[{t:this.shape_35}]},3).to({state:[{t:this.shape_36}]},20).wait(1));

	// גוף
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D25F26").s().p("AgXIAQjIglheg5Qheg6ACh1QAChTA6hEQhAirgOiBQgVjLBmhiQANAOB4ACQB4ACBGggQAxA5A3AjQBHAsBPAKQEHE3hSE3IABALIAAACQAECEh5BQQhSA2h3AAQg4AAg+gMg");
	this.shape_37.setTransform(54.2228,141.1626);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D25F26").s().p("AgXIAQjIglheg5Qheg6ACh1QAChTA6hEQikm4CnihQANAOB4ACQB4ACBGggQBvCBCPARQEHE3hSE3IABALIAAACQAECEh5BQQhSA2h3AAQg4AAg+gMg");
	this.shape_38.setTransform(54.2221,141.1626);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D25F26").s().p("AgXIAQi0ghhegyIgUgLQheg6ACh1QAChTA6hEQikm4CnihQANAOB4ACQB4ACBGggQBvCBCPARQEHE3hSE3IABALIAAACQADBlhGBGQgVAWgdATQhSA2h3AAQg4AAg+gMg");
	this.shape_39.setTransform(54.2221,141.1626);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_39}]},20).wait(1));

	// נעליים
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#882F0D").s().p("AAaBPQAChDA3gMQACABBjALQAyAFBNgBQibAag1AnQgRAEgRAAQgVAAgWgGgAk2gBQAPhdCKAMQATADA1AXQA0AYApALIiIADQhBAYg4AAQggAAgdgHg");
	this.shape_40.setTransform(38.925,191.6944);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#882F0D").s().p("AAiBGQgGhDA2gSQACACBkgBQAyAABMgKQiXAqgwAtQgZAIgaAAQgNAAgNgBgAk1AbQAFhdCKgEQATABA3ARQA3ASApAGIiGATQhMAmhFAAQgRAAgRgCg");
	this.shape_41.setTransform(42.425,192.1447);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#882F0D").s().p("AAcBOQAAhEA3gMQACACBjAIQAyAFBNgDQiaAcg1AoQgSAFgTAAQgTAAgUgFgAk2ACQAOhcCKAJQASADA1AXQA1AXApAKIiIAGQhCAZg5AAQgeAAgcgHg");
	this.shape_42.setTransform(40.775,191.6478);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#882F0D").s().p("AAlBDQgJhDA1gUQACACBkgEQAygCBMgMQiVAugwAvQgaAKgfAAIgSAAgAk0AkQACheCKgIQASAAA3AQQA5APApAFIiGAYQhPArhIAAIgagBg");
	this.shape_43.setTransform(43.3,192.0944);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#882F0D").s().p("AAcBNQAAhDA3gNQABACBkAHQAyAEBNgDQiaAdg0ApQgTAFgUAAQgSAAgUgFgAk2AEQANhcCKAIQASADA1AWQA2AXApAJIiIAHQhDAbg7AAQgcAAgbgHg");
	this.shape_44.setTransform(40.925,191.7335);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#882F0D").s().p("AAcBNQAAhDA3gNQABACBkAHQAyAEBNgDQiaAdg0ApQgTAFgUAAQgSAAgUgFgAk2AEQAJg/BFgQQAegHArACIASAFQAUAGAhAOQA2AXApAJIiIAHQhDAag7AAQgcAAgbgGg");
	this.shape_45.setTransform(40.925,191.736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_40}]},3).to({state:[{t:this.shape_41}]},3).to({state:[{t:this.shape_42}]},3).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_45}]},16).wait(1));

	// זנב
	this.instance_6 = new lib.CachedBmp_191();
	this.instance_6.setTransform(47.8,42.7,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_192();
	this.instance_7.setTransform(48.5,42.75,0.5,0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B84C16").s().p("AAYCPIgZhDIgDgGQgvh8ABglQAAgpAOgWQAFgHAFgDQAEgBAFAAQAVgBAPAIQARAIAIAVQAHAPABAYIgBAZQgDAYgIAQQgDAGgDADQgGAFgIAAQgIABgFgCIgDgCIgDAAIgCgDQADAIAHAeIALA5IAMBCIAAAQIAAACIgBAEQgCAAgFgXg");
	this.shape_46.setTransform(93.899,93.3739);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CF5B25").s().p("AASCOQgHgggDgIIACAEIADAAIAEACQAEACAIgBQAIgBAGgFQAEgCADgHQAIgPACgYIABgaQgBgYgHgOQgIgUgQgJQgPgIgVACQgFgBgFACQgEACgGAIQgNAVgBApQgBAkAvB+QgpgNgmgqQg1g6gPhRQgQhSAfg4QAfg5A7ABQA7ACA0A6QA2A6AQBRQAPBSgfA4QgeA5g8gBQgIAAAAACIgMg4g");
	this.shape_47.setTransform(92.9332,81.3491);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F27922").s().p("ACoIFQhEjCiikkQiikigphsQgphtBdg4QBdg4B4AzQB5A0BNCBQBNCAAEB/QADB+hYAcQg3ASg7gHIgLhBQAAgCAIAAQA8ABAeg5QAfg5gPhRQgQhSg2g7Qg0g6g8gBQg6gBgfA4QgfA5AQBSQAPBRA1A6QAlArAqAMIACAGIAaBCQAIAhAAgOIAAgCQB3HigMAAQgDAAgQgtg");
	this.shape_48.setTransform(89.0438,101.3919);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B74C16").s().p("ABlKcIAAAAIAAAAIAAAAgAkchiQiMkBCDjNQEHjrEcEYQD7IRligRQEWJ4lIAnQgBgEmAr6gAiYpoQhdA4ApBtQApBsCiEjQCiEjBEDCQBEDCicp2IAAgQQA7AHA3gSQBYgcgDh/QgEh/hNiAQhNiBh5g0Qg6gYgyAAQg4AAgxAdg");
	this.shape_49.setTransform(82.9405,109.7765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},7).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,119.5,200.1);


(lib.tree = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_197();
	this.instance.setTransform(-40.9,1.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(-40.9,1.3,1119,716.5), null);


(lib.time = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AtICZQAmk4FCgbAH1isQE4AlAcFC");
	this.shape.setTransform(84.05,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(12,1,1).p("AApm+IAAHTIEHAAAnGHVQgMgKgLgLQjGi5AAkHQAAkGDGi5QDGi6EXAAQEYAADGC6QDGC5AAEGQAAEBi9C3QgEAEgFAEQjGC6kYAAQkHAAi/ilIiwCMAHnG4ICiCX");
	this.shape_1.setTransform(81.15,86.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.time, new cjs.Rectangle(-4,-4,176.1,159.5), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4834").ss(8,1,1).p("AtICZQAmk4FCgbAH1isQE4AlAcFC");
	this.shape.setTransform(84.05,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4834").ss(12,1,1).p("AApm+IAAHTIEHAAAnGHVQgMgKgLgLQjGi5AAkHQAAkGDGi5QDGi6EXAAQEYAADGC6QDGC5AAEGQAAEBi9C3QgEAEgFAEQjGC6kYAAQkHAAi/ilIiwCMAHnG4ICiCX");
	this.shape_1.setTransform(81.15,86.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-4,-4,176.1,159.5), null);


(lib.strattree = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_198();
	this.instance.setTransform(-40.9,1.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.strattree, new cjs.Rectangle(-40.9,1.3,1119,716.5), null);


(lib.stratbrunch = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2E130C").ss(3,1,1).p("EBAOgBcQwsBI1ziUQlejYr6haQiXABBKBMIFXBvIgJBJQitAzp8g6Qzvjq1iA5QrTAAqvCMQh4A4CnAoQSFgjMyA9QAOABAPABQAGAAAFABQBAAFA+AFQF5AiErA4QCTAbCAAgQBmAbBmAYQH+B3IBBCQAFABAFABQBjAPAuACQASACASACQACAAACAAQACABABAAQApAEApAEQAOACAQACQAKAAAKABQBsAKBsAIQBqAIBpAFQAvgBAugCQCKgECCgBQECgEDkAHQCxAFCfALIAiADQBLAFBHAHIAGABQAIABAJABQa+CqgxhS");
	this.shape.setTransform(411.9339,47.4409,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E130C").ss(1,1,1).p("AAEEPIAAgEIAAgCIAAgBIgBhUIAAgHIgDi5IAAgFIAAgIIgCiPIAAgxIgBg1");
	this.shape_1.setTransform(823.35,29.7,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C6851").s().p("AQSDSIgdAAQjcgFkkgpQkJgljohAIh2gjQgxgPiQgxQh5gphKgVQlLhei2ADQi2ACgngGQgngFAbgGIgCACQAMgDAqgDQA3gFBBAEQAqACBMAIQC0ASBmATIAIACQCBAYC6A+QEiBfATAFQB9AmCLAdQCXAgClAXQB4APCHAMQCjANC3AIIBLADQBBACgWAHQgOAEhRAAIh2gCg");
	this.shape_2.setTransform(324.2437,53.7371,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#875A3B").s().p("EAhHAEoIjgABQjRAAAbgKQAbgKC1gJIDFgJIdegJQARAAAfABQAWACAFAFIAAAJIAAAFQgBAMgUACIoIAlQi1ANjtAAQmfAApKgogEA/vAELIAAgJQACACAAADIgCAEgEA/vAECIAAAAgEAhaADSQjKAChugIQhugJhCgQQhCgPgxgDQgzgEiFACQiGACAmgMQAmgLBWgHQBWgIATgDQAQgDAVABIAlAFIAMACQALACAHAEIAGAEQADADAJAAIAWgBQAlgBA6AEIBeAHIBXABIEIAAIAOgBIGWALQE1AHHlgNQHkgMBHACQBHABgZANQgaAMhBAMQhBAMgoABIzLANQgjgDgdgFQgMgDgsgBQgtgBgGAEQgHAEA+ALgAIOC1QmegImEg+QmHg9AggDQAfgCCGARQCGARAGgCQAJgCATACICqAUQC5AWBOAGQCZAOC1AEQCMADDDgBQAFAEANAAICqAAIBpgBQAngCApgEIg8AQQhNASghABQjJAFiUAAIiAgBgASeB2QA1gHAWAAQg6AIhEAEIAzgFgEAgzABjQhWACAEgKQAEgJAYgGQAYgGAHgDQAJgDAVAAIOlAAQAXAAASABQASABBGAAQBHAAAlAEQAmADkIAaQjtALjuAAQjuAAjugLgACjBcQh1gChJgDQhogEhWgHQhbgHhygPQhZgLh3gVIjOgiQmVhFlbglQhmgTi0gRQhMgIgqgDQhBgDg3AEQgqADgMADIACgBQjfguidAEQidAEhagDQhbgEAXgHQAWgHAjgNQAjgOBEACQBbACDGAAQC9AABkADQCxAFDTAVQCXAPDqAdQELAiCVAZIChAbQBmASA7AJQBIAMCTAUQBsAOAoAEQA9AFB5AEIAIABQA7AGB6AAIA1AAQCoAECyABQDhACGwgEQG9gDDUABQAiAAAmACQAmACAvAUQAuAUgsAMQgsALgnAGQgoAFgmAAIkBADIhSAAQABgFgEgDQgCgCgHgBQglgIgxAIIg/ANQkpACisAAIhvAAQlJAAkPgFgAWcgOIscgDQhvAAg4gCQhdgDhJgKIitgaQidgYgWgKQgXgJC7ATIDRAUQC/AKFjgBQF6gCCqAHQAWAAAQAEIBxARQAiALAeAIIgeABIgfAAQhSAAg6gHgAUNhqQifhMgOgCIhKgHQgtgFgdgHQgPgEg6gTQhegehhgMIg/gIIhegdQhrgiAvAFQAuAEBLAPQBLAOAWAGIBfAaQA4AQAoAJIBaARQA4AKAhAIIA9ARIA8AQQAuAMARAHIAqAVIAbALQAQAHAOALQAOALAKAVQAIAQgIAAQgJgHhUgogAVKhFQgHgCgMgHIAIADIARAIIgGgCgEg+ZgB0ICXgsQAqgMA8gJQBIgLBcgHQA3gFBvgEQEmgOBsAAQBsAAArgJQArgJgtAZQgtAYgJAEQgHADgLABIgUABQhpgCiCADIjqAJQiwAHhXAMQhPAKhIATQgbAGg/AJQgeADgfAGIgaAEIgtAHIgWADQgQAABlgeg");
	this.shape_3.setTransform(415.4123,58.1525,1,1,0,180,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B2E1B").s().p("EAqKAFAIkegYIgGAAQhHgHhLgGIgigDIh9gLIhjgGQjRgQBPANQATACgBACIgRAAIgNgBQiGgDiQAAIgBAAIAAAAIihABIgQAAIgDgBQghgLiIAMIhgAGIhdADQhpgGhqgHIgIgCQhFgOhpgBIgigBIgUgCIgegDIhSgJQAIgPgHAKIgEAFIgEgBIgkgEQgugChjgPIgKgBQisgagYgGIgdgGQACgBAIAAIAIAAInShOQjHgmiXgfQhmgXhmgaQiAghiTgbQgBgDAQAAQiGgdiVgVQiggWhMgGQhMgHhggCIh+gKIgDgCIgBAAIgHABIgdgDQgNgCgdgDIgxgHQgTgDgDgCQgDgDgCAAQgngCgdgGQgdgGgWgGIglgLQgQgDglgEIhhgDQgxgDgMgCIAJAAIABAAQARgBgaABIgCAAIgDAAQgQgBgPACQgXABgygEQgDADhdAEIiCAEQglABBwgQQBugRABgBQABgCAQgBQARgCgBABIHMARQEoAJk4gXQk6gXgfACIg0ACQgVABAEgBIAQgFQAMgCAOgBQAZgDAWAAQBfAABgADQBNACA1AFIBiAKQAtAEBSARIAVACIARADQALABAPAEQASAFASAEIAUADQBWACBFAIQBEAIAgAJIAsALQAJABAEACIAcAIQArAKAVAGIDhBEIBeAdQBSAIC4AZQDoA+EJAlQEkAqDbAEIAdABIE6ArQBsANgKACIAZgBIAAgBIAmABIAhABIAWACQG1gHB+ANQB9ALAKADIAUAEIAiAGQAUAFDBAWQLPAtALAGQALAGGkAZIJyAlQDMANAiABIABAAQhxgLpEgwQrSg8pbg8Qpcg7VdBfQVdBeA7gFQAjgDCbAGIA6ADIAAAIQgKADALBQIAAABIABADIgBAAIAAgDIAAADQgwAXg9AEIgRAAQigAAxihagAV8EFIAQAAIChgBIAAAAIABAAQCQAACGADIANABIARAAQgEAHjBAAQj4AAgpgKgAPiEOQhggBhCgMQBqAHBpAGIBdgDQhAADg3AAIgXAAgARwELIAAAAgAdiEIIAAAAgANAEBIAAAAgAHkDhIBSAJQgvgEgnAEIAEgJgAHfDiIgCgCIAEABIgCACIAAgBgAHkDhIAAAAgA+li4QgdgBgcgHIgEgBIB+AKIhBgBgA/ijBIAAAAgEg11gD0IiPgGIgsgCIhJgDQgkgCgBABIgZADIjdgMIAagEIAggBIDAABIAJgCIAPAAQAMgBAeABQAeAAAqAEQAIABBSADQC6AAEDABQAIACBGgCIBsgKQh4AYgvgBQgLgBgIACQifAFhxAAQg9AAgvgBgASLj2QhBgJghgHQgigIgkAAQgkABghgCQgggDgYADQgSAEAEAAIgJABIgEABIgIACQgHAAgGgEQgIgHAEgDQAFgEAJgEQAJgEAIgBQAHgCADgCQACgCABgEIgBgVQgCgSgSgPQgSgQg2gnIAKABQARAGAtAXQBpA4AQAGIAAgBIAiACQAUABATAEQAUAEAQAJIANAGQABADATAIIAkAQQALAFgIgBIAQAEQAwANgRAAIgbgCgEg/xgD+IgHgDIgKgFIgBAAIgBgBIgBgBIgBAAIAAgBIgBAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgCIAAgBIABAAIAAgCIAAAAIAAAAIABgBIAAgBIAAAAIAFgDIAHgFIAFgEIAAAAIABgBIABAAIABgBIABAAIADgCIABAAIAAgBIABAAIAAgBIABgBIAAAAIABAAIABAAIAAgBIATgDIgNAIIAAABIgBAAIAAABIAAAAIAAABIgBAAIgBAAIAAABIgBABIgBAAIAAAAIgCABIAAAAIAAAAIgBABIgBAAIAAABIgBAAIAAAAIgBABIgBAAIAAAAIgBABIgCABIgDACIgBABIAAABIAAAAIgBAAIAAAAIgBABIgCABIAAAAIgBABIAAAAIgBAAIgBABIAAAAIAAAAIgBABIAAAAIAAAAIAAACIAAABIAAACIAAABIAAAAIABABIAAAAIAAABIABAAIAAAAIABABIABAAIAAAAIAAABIABAAIAAABIAJALIABABIACACgEg/8gEHIAEADIgEgEg");
	this.shape_4.setTransform(413.125,41.2546,1,1,0,180,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF8265").s().p("AQGExQlkgQiogcQingcBcABQBcAAC2AeISwgKIBTgBQBDgBBIADQBIACiKAQQiLAQkMAQQiGAHicAAQicAAiygHgEAqIAEGQhsgCgxgEIg4gGIgagGQg+gMAHgEQAGgDAtABQAsABAMACQAdAFAjADIAdACQAhACA9gBIK6gBQAlgCCZADQCZADiKAMQiKAMhHgHInyADIheAAIhmgBgAM/C0QgNAAgFgEIgCgCQgDgDADgFQACgEAFgCQAGgCAOAAQDKABAvgCIA5gCQBEgEA6gJQAhgFAdgGIAYgFIA/gNQAxgIAlAIQAHABACADQAEADgBAFIgBAAQgCAGgGABQgHADgTgCQgegCgnAFIhDANQhTARhNAIQgpAEgnABIhpABgAd9CzIhXgBIhegGQg6gFglABIgWABQgJAAgDgCIgGgFQgHgDgLgDQgMgEADgDQAEgFAwABQAvABBBAEIBnAHQAgACAtgBIEEAAQAMAABQgIQBPgHgiAOQgjAOhVAHIgOABgEAlmACoQCIgLDGgGIDUgHQBBgGBlgBICngCQBIgCBngIICugPQC1gNBwgFQBagEBIAKIABAxIgQgCQhxgOgiABIg7ABQhbABiFALIjfASQhoAGiBAEQhOACmkACIh1ABQkbAAB0gKgEAkiABaQhygDg8gKIgrgHIiXgdQgSgCg2gCQg3gDAtgHQAtgGAUgBQATgCAQADIBvAWQA7ALAVADQAyAHBIACQBOACB5ABIDuAAQBBAAAOAIQANAHg8ADIhGAEIi4AAIiygBgADGAqIg1AAQh6AAg7gFIgIgBQiFgNgbgKQgbgLBhAFQBgAGEsAEQEsAFJRgBIBkABQBaABgBAIQAAAHi7AEgAcKAkIgjgBIghgBQgngBgtgKQgegIgigMIgGgCQgagIgNgIQgVgQgMgGIgKgEIgIgGIgpglQglgiAoAWIA4AfIAhAVQARAMAJAFQANAGAgAKQAvAOATADQAbAFAiACQAXABAogBIAfABQARABAmgBQAmAAg1AMQgyAKgSAAIgDAAgAirgMQhGgMiygpQiTgjhbgOQhngQiWgIQiqgIhVgEIjfgPQjDgNDBgEQDAgDALgCQALgDBgAGICxAKQCqALBjAQQBRAMCQAiQCaAlAyAIQAyAIAUAEIBuAYQBZAThRAAQhTAAhHgLgAWigvIgsgmQgSgPgdgMQgSgIgkgMQhhgggegJQiJgqiTgbIhvgXQhhgVA7AHQA7AHAlADQAlACAPACQDpArDaBQQAzATAWAPQANAJAhAmQAiAmgEAFIgCAAQgHAAgigdgAVygdIgRgGIgCAAIgCgBIgRgIIgIgDIgNgHQgWgOghgPQgYgKg5gSIgsgNIgYgHIgJgBIhLgGQgpgFgfgJIgtgNIgsgOQg1gShAgKIgKgCQghgGgjgDIg2gGQgfgEgWgGQgrgLghgUQgggUgRgRQgRgRAhAQQAgAQAGABQAFABAPAHQAiAUA3AJIAkAEIA/AJQBhALBeAeQA6AUAPADQAdAIAtAFIBKAHQAOABCfBNQBUAoAJAGIgFgBgEg/2gBEQAHgRAPgLQAOgKATgJQASgKAkgBIAYgCQARgBAUgFIBHgOQA8gMAqgDQArgChjAZIhsAbQgVAGgWACIgmACQgfADgWATQgKAIgIAEIgVAMIgFABQgGAAAFgMgEg6egBeQBigVAMAAQG8glFmAlQATgBASABQARABBXgCQBXgChSAKQhRALg6ADIssAAQhWANg7ADIgPABQgcAABRgRgEgiwgDYQnxgNk3AGQhEABiCANQiCAMA3gMQA4gLAvgHIA4gJQAogHAzgDQAigCA7ABQFKAAGgAJQDsAFH+APIAzABIBvADQBmADAGAHQAFAGi/AAQjAAAqGgSg");
	this.shape_5.setTransform(414.1305,61.3004,1,1,0,180,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C4027").s().p("EAmJAFoIgRgCIEeAXQStBhBmgGQA9gEAwgYIAAAEQAQAbisAAQllAAyMhzgEA5lAGNQgiAAjMgNIpygmQmkgZgLgFQgLgGrPgtQjBgXgUgEIgigHIgUgDQgKgDh9gMQh+gMm1AGIgWgCIghgBIgmAAIAAAAIgZABQAKgBhsgNIk6gsQDAAEAVgGQAWgHhBgCIhLgDQi3gIiigNQiHgMh4gPQilgXiXggQiLgdh+glQgTgFkihgQi6g+iBgYIgIgCQFbAlGVBEIDOAkQB3AUBZAMQByAOBbAIQBWAHBnADQBKAEB1ACQE8AGGLgBQCsAAEpgDIgYAFQgdAGghAEQgWAAg1AHIgzAGIg5ACQgvACjKgBQgOAAgGACQgFADgCADQgDAFADADIACACQjDACiMgEQi1gEiZgNQhOgHi5gUIiqgVQgTgCgJACQgGACiGgRQiGgQgfACQggACGHA8QGEA+GeAJQC2AEEngJQAhAABNgTIA8gPQBNgIBTgRIBDgMQAngFAeACQATACAHgCQAGgCACgGIABAAIBSgBIEBgCQAmAAAogGQAngFAsgMQAsgLgugUQgvgUgmgCQgmgDgiAAQjUAAm9ADQmwAEjhgCQiygCiogDIO/AAQC7gFAAgHQABgIhagBIhkgBQpRABksgFQksgEhggGQhhgFAbALQAbAKCFANQh5gFg9gGQgogDhsgPQiTgThIgMQg7gJhmgSIihgcQiVgYkLgjQjqgdiXgPQjTgUixgGQhkgDi9AAQjGABhbgCQhEgDgjAOQgjAOgWAHQgXAHBbADQBaAECdgFQCdgDDfAtQgbAGAnAFQAnAGC2gCQC2gDFLBeQBKAVB5ApQCQAyAxAPIB3AiQi4gYhSgIIhegdIjhhEQgVgGgrgKIgcgHQgEgCgJgCIgsgLQgggJhEgIQhFgIhWgBIgUgEQgSgDgSgFQgPgFgLAAIgRgDIgVgDQhSgQgtgFIhigJQg1gFhNgDQhggDhfAAQgWABgZACQgOABgMADIgQAEQgEACAVgBIA0gCQAfgCE6AXQE4AXkogKInMgQQABgBgRACQgQABgBABQgBAChuAQQhwAQAlgBICCgEQBdgEADgCQAyADAXgBQAPgBAQAAIADAAIACAAQAaAAgRABIgBAAIgJAAQAMACAxACIBhAEQAlAEAQADIAlAKQAWAHAdAGQAdAFAnACQACAAADADQADACATAEIAxAGQAdADANADQsyg9yFAjQingoB4g4QKviMLTAAQVig5TvDqQJ8A6CtgzIAJhJIlXhvQhKhMCXgBQL6BaFeDYQVzCUQshIIABA0QhIgKhaAEQhwAFi1ANIiuAPQhnAIhIACIinACQhlABhBAFIjUAHQjGAGiIAMQiJALGlgCQGkgDBOgCQCBgEBogGIDfgSQCFgKBbgBIA7gBQAigBBxANIAQACIACCPQgFgGgWgBQgfgCgRABI9eAIIjFAJQi1AJgbALQgbAKDRgBIDggBQOZA/HygkIIIglQAUgBABgNIADC6Ig6gDQibgGgjADQg7AF1dhfQ1dhfJcA8QJbA7LSA8QJEAxBxAKIgBAAgAIQB6QCoAdFkAPQFkAOEMgOQEMgQCLgQQCKgQhIgCQhIgChDAAIhTABIywAKQi2gehcAAIgGAAQhQAAChAbgEAmvABpIAaAGIA4AGQAxAEBsACQBCACCCgBIHygDQBHAHCKgMQCKgMiZgDQiZgDglACIq6ACQg9AAghgCIgdgCITLgNQAoAABBgMQBBgMAagNQAZgMhHgCQhHgBnkAMQnlAMk1gHImWgLQBVgHAjgOQAigOhPAIQhQAHgMAAIkEAAQgtABgggCIhngGQhBgFgvgBQgwAAgEAEQgDADAMAEIgMgCIglgEQgVgBgQACQgTAEhWAIQhWAGgmAMQgmALCGgCQCFgBAzADQAxADBCAQQBCAQBuAIQBuAJDKgCgEAwNgAHQEIgagmgEQglgEhHABQhGAAgSgBQgSgCgXAAIulAAQgVAAgJADQgHADgYAGQgYAGgEAKQgEAJBWgBQHcAUHbgUgAe3h2QgUABgtAGQgtAHA3ADQA2ACASACICXAdIArAHQA8AKByADQB5ACDxgBIBGgDQA8gEgNgHQgOgIhBAAIjuAAQh5gBhOgCQhIgCgygHQgVgDg7gLIhvgWQgJgCgLAAIgPABgAbchoIAhABIAjABQARABA2gLQA1gMgmAAQgmABgRgBIgfgBQgoABgXgBQgigCgbgFQgTgDgvgPQgggKgNgGQgJgFgRgMIghgUIg4ggQgogWAlAiIApAlIAIAGIAKAEQAMAHAVAPQANAIAaAJIAGACIhxgQQgQgEgWgBQiqgGl6ABQljACi/gKIjRgUQi7gUAXAKQAVAKCeAXICtAbQBJAKBdADQA4ACBvAAIMcADQBFAIBmgCIAeAAQAtAKAnABgAyNlGQgLACjAAEQjBADDDANIDfAPQBVAFCqAHQCWAJBnAPQBbAOCTAjQCyAqBGALQBHALBSAAQBSAAhZgTIhugYQgUgEgygIQgygIiagkQiQgjhRgMQhjgQiqgLIixgKQhEgEgZAAIgOABgAMdmUIBvAXQCTAbCJAqQAeAJBhAgQAkAMASAIQAdAMASAPIAsAmQAnAiAEgFQAEgFgigmQghgmgNgJQgWgPgzgTQjahQjpgrQgPgCglgCQglgDg7gHIgUgBQgPAABJAPgAOMk+IAsAOIAtANQAfAJApAFIBLAGIAJABIAYAHIAsANQA5ASAYALQAhAOAWAOIANAIQAMAHAHACIAGABIACABIACAAIARAGIAFABQAIAAgIgQQgKgUgOgLQgOgMgQgGIgbgLIgqgVQgRgHgugMIg8gRIg9gQQghgIg4gLIhagRQgogIg4gQIhfgaQgWgGhLgOQhLgPgugEQgvgFBrAiIBeAdIgkgFQg3gJgigUQgPgHgFgBQgGgBgggQQghgQARARQARARAgAUQAhAVArAKQAWAGAfAEIA2AGQAjAEAhAFQA2AoASAQQASAPACASIABAVQgBADgCACQgDADgHABQgIACgJAEQgJAEgFADQgEAEAIAHQAGADAHAAIAIgBIAEgCIAJgBQgEAAASgDQAYgEAgADQAhACAkAAQAkgBAiAIQAhAIBBAIQBBAJhFgUIgQgEQAIABgLgEIgkgRQgTgIgBgCIgNgHQgQgJgUgEQgTgEgUgBIgigCIAAABQgQgFhpg4QgtgYgRgFQBAAKA1ASgEg5tgDCIBJAEIAsACICPAFQCJAFDzgJQAIgBALABQAvABB4gZIhsAKQhGACgIgBQkDgCi6ABQhSgDgIgCQgqgEgeAAQgegBgMABIgPABIgJABIjAAAIggAAQAfgFAegEQA/gIAbgHQBIgSBPgLQBXgLCwgIIDqgIQCCgDBpABIAUAAQALgBAHgEQAJgDAtgZQAtgZgrAJQgrAJhsABQhsAAkmANQhvAFg3AEQhcAHhIALQg8AKgqAMIiXAsQiFAnBGgMIAtgIIDdAMIAZgCIAGAAIAfAAgEg/jgC+IgCgDIgBAAIgJgMIAAAAIgBgBIAAAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIABAAIAAgBIAAAAIABAAIABAAIAAgBIABgBIAAAAIACgBIABAAIAAAAIABgBIAAAAIAAAAIABgBIADgCIACgBIABgBIAAAAIABgBIABAAIAAgBIABAAIAAAAIABgBIABAAIAAgBIAAAAIACAAIAAAAIABgBIABgBIAAAAIABgBIABAAIAAAAIAAgBIAAAAIABgBIAAAAIANgIIgTADIAAAAIgBAAIgBABIAAAAIgBABIAAAAIgBAAIAAABIgBAAIgDACIgBABIgBAAIgBABIgBAAIAAAAIgFAEIgHAFIgFAEIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAACIAAACIAAABIAAABIAAACIABAAIAAACIAAAAIAAABIABAAIAAABIAAAAIABAAIAAABIAAAAIAAABIABAAIAAAAIABABIABAAIABABIABAAIAKAFIAHAEIACACgEg6JgEuQgqADg8AMIhHAOQgUAFgRABIgYACQgkABgSAKQgTAJgOAKQgPALgHARQgHARANgGIAVgMQAIgEAKgIQAWgSAfgEIAmgCQAWgCAVgGIBsgbQBagXgbAAIgHAAgEg4agD+QgMAAhiAVQhhAUA7gEQA7gDBWgNIMsAAQA6gDBRgLQBSgKhXACQhXACgRgBQgSgBgTABQizgSjJAAQjIAAjeASgEgiagFjQKGASDAAAQC/AAgFgGQgGgHhmgDIhvgDIgzgBQn+gPjsgFQmggJlKAAQg7gBgiACQgzADgoAIIg4AIQgvAHg4AMQg3ALCCgMQCCgMBEgCQBigBB1AAQD9AAFUAIgAduFGQABgCgTgDQhPgMDRAPIBjAGIB9AMQifgLixgFgATcFCQCIgLAhALIADABQiCABiKAEIBggGgAJ0EsIAiABQBpABBFAPIAIABQhsgIhsgKgAHtEeIAEgEQAHgKgIAPIgDgBgArVBOQCXAeDHAnIHSBNIgIAAQgIAAgCABIAdAGQAYAGCsAaQoBhCn+h3gA9Yh6QBgACBMAHQBMAHCgAWQCVAUCGAdQgQAAABADQkrg4l5gigA/hiFIAHAAIABAAIADABIgLgBgEg/wgDKIAAAAIAEADg");
	this.shape_6.setTransform(411.9339,47.4409,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stratbrunch, new cjs.Rectangle(-1.5,-1.5,826.9,97.9), null);


(lib.stop = function(mode,startPosition,loop,reversed) {
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
		var self = this;
		self.stop()
		self.addEventListener("rollover",next)
		self.cursor = "pointer"
		
		function next(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this;
		self.stop()
		
		self.addEventListener("rollout",next)
		self.cursor = "pointer"
		function next(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_153();
	this.instance.setTransform(24.3,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_152();
	this.instance_1.setTransform(18.3,-17.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_155();
	this.instance_2.setTransform(23.7,-11.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_154();
	this.instance_3.setTransform(18.3,-17.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.3,-17.1,283.5,276.6);


(lib.startSquirrel2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// שוונצים_באוזניים
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AEMAyIAogvIgmBXgAkzgQIArAxIgEAlgADuA3IAJhMIASAuIgbAeIAAAAgAEMAyIgDgZIAuheIgrB3gAkGAHIAQgwIAIBMIAAAAIgYgcgAkIAhgAk3hZIAxBgIgCAagAEJAZg");
	this.shape.setTransform(48.45,8.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// אוזניים
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#872E0C").s().p("AjwiKQBGBuAwCCQgdAKgcAhQg/iDACiYgAB7BhQAwiDBHhuQACCYhACDQgdgggcgKg");
	this.shape_1.setTransform(48.8,31.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8720").s().p("AkKifIAEgjQByCAAyCwQgCAFhYBQQhmhtAYj1gAivCkQAcggAcgKQgviDhHhtQgCCXBACDgABiBuQgPhfC3i/QAaEkhZBFgAB/B0QAcAKAdAgQA/iDgCiXQhGBtgwCDg");
	this.shape_2.setTransform(48.4427,29.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// אף_ופה
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABTAuQhLAygIhLQgHBMhMg0AhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXg");
	this.shape_3.setTransform(47.95,81.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("Ag2AMQgegeADgXQBPAjBUgiQgVBDg9APIAAAAQgYAAgegeg");
	this.shape_4.setTransform(47.9616,79.2254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8E8DB").s().p("AkYgQQCVgFAuheQBHA1BhgyQBEBuCCgOQg8B1jIAOIgkABQiuAAhbiEg");
	this.shape_5.setTransform(48.325,86.3944);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// עיניים
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AChA4QgSgGgHgVQgHgUAIgXQAIgXASgMQASgMATAGQARAGAIAVQAHAVgIAWQgIAXgSAMQgMAIgMAAQgGAAgHgCgAC9ggQgEAJAAAMQAAAMAEAJQAFAJAHAAQAGAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgGAAQgHAAgFAJgAjFAyQgSgMgIgXQgIgWAHgVQAHgVASgGQATgGASAMQATAMAHAXQAIAXgHAUQgHAVgTAGQgGACgGAAQgMAAgMgIgAiuggQgFAJAAAMQAAAMAFAJQAFAJAGAAQAHAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgHAAQgGAAgFAJg");
	this.shape_6.setTransform(47.15,64.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACrAVQgFgIAAgNQAAgMAFgJQAEgIAHgBQAHABAEAIQAFAJAAAMQAAANgFAIQgEAKgHgBQgHABgEgKgAjBAVQgEgIAAgNQAAgMAEgJQAFgIAHgBQAGABAFAIQAFAJAAAMQAAANgFAIQgFAKgGgBQgHABgFgKg");
	this.shape_7.setTransform(49.025,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// ראש
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8720").s().p("AkbCWQglk8Djh9QBUgmBzAjQDWBrglFXQiTCciLAAQiPAAiJiig");
	this.shape_8.setTransform(48.0002,69.0803);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// יד_ימין
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E97027").s().p("AimBSIDPhUQioiHgIg0IBhglQCRA6BGCgQAtBkhYgGQh1ATh/AEQgHAtgZApIgrAgQgThLAmhGg");
	this.shape_9.setTransform(68.6806,113.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// יד_שמאל
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E97027").s().p("ACPDDQgZgpgHgtQh/gEh1gTQhYAGAthkQBGigCSg6IBgAkQgIA1ioCHIDQBUQAlBGgTBLg");
	this.shape_10.setTransform(26.8223,113.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// בטן
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8E8DB").s().p("AhgINQgiggg9gVQCHi+jVm4IEWl1IEEFfQjlERCaF9QgmAEgvA2QhtgzhgAsg");
	this.shape_11.setTransform(47.5,130.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// גוף_תחתון
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D25F26").s().p("AhXIMIgCgEQgJgYgXgSIgJgHQgcgVgmgIIgJgCQgsgHgjASIgEABQgWANgLAUIADAJQkpi6EDl+IFonLIFuHkQDsFkkWCvQgJgJgLgIQgngcg1AGQgzAFgiAfIgFADQgGAFgEAGQgNAPgFARIgCAFIACACQh1gdhKAfIAGgKg");
	this.shape_12.setTransform(47.7982,133.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#872E0C").s().p("AB3AvQgPgKgLgNIgBgCIABgFQAGgRAMgNQAFgHAGgFIAEgDQAjgfAzgFQA1gFAnAbQALAIAIAJIADAEQgEAdgbAYQgjAgg0AFIgOAAQgrAAgggWgAjaBAQgzgKgfgkQgPgQgHgOIgDgKQALgTAVgNIAFgCQAigRAtAGIAJACQAmAIAcAVIAJAHQAXATAJAXIACADIgHAKQgLAPgTALQgcAOghAAQgOAAgPgCg");
	this.shape_13.setTransform(48.2,184.5702);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// זנב
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B84C16").s().p("Ak2m8QEoiuCdBZQCdBZAAABQDnIYlmHMIltADQlDmeDNpOg");
	this.shape_14.setTransform(47.925,89.4191);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startSquirrel2, new cjs.Rectangle(0,0,95.6,191.5), null);


(lib.startSquirrel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// שוונצים_באוזניים
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AEMAyIAogvIgmBXgAkzgQIArAxIgEAlgADuA3IAJhMIASAuIgbAeIAAAAgAEMAyIgDgZIAuheIgrB3gAkGAHIAQgwIAIBMIAAAAIgYgcgAkIAhgAk3hZIAxBgIgCAagAEJAZg");
	this.shape.setTransform(48.45,8.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// אוזניים
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#872E0C").s().p("AjwiKQBGBuAwCCQgdAKgcAhQg/iDACiYgAB7BhQAwiDBHhuQACCYhACDQgdgggcgKg");
	this.shape_1.setTransform(48.8,31.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8720").s().p("AkKifIAEgjQByCAAyCwQgCAFhYBQQhmhtAYj1gAivCkQAcggAcgKQgviDhHhtQgCCXBACDgABiBuQgPhfC3i/QAaEkhZBFgAB/B0QAcAKAdAgQA/iDgCiXQhGBtgwCDg");
	this.shape_2.setTransform(48.4427,29.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// אף_ופה
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABTAuQhLAygIhLQgHBMhMg0AhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXg");
	this.shape_3.setTransform(47.95,81.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("Ag2AMQgegeADgXQBPAjBUgiQgVBDg9APIAAAAQgYAAgegeg");
	this.shape_4.setTransform(47.9616,79.2254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8E8DB").s().p("AkYgQQCVgFAuheQBHA1BhgyQBEBuCCgOQg8B1jIAOIgkABQiuAAhbiEg");
	this.shape_5.setTransform(48.325,86.3944);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// עיניים
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AChA4QgSgGgHgVQgHgUAIgXQAIgXASgMQASgMATAGQARAGAIAVQAHAVgIAWQgIAXgSAMQgMAIgMAAQgGAAgHgCgAC9ggQgEAJAAAMQAAAMAEAJQAFAJAHAAQAGAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgGAAQgHAAgFAJgAjFAyQgSgMgIgXQgIgWAHgVQAHgVASgGQATgGASAMQATAMAHAXQAIAXgHAUQgHAVgTAGQgGACgGAAQgMAAgMgIgAiuggQgFAJAAAMQAAAMAFAJQAFAJAGAAQAHAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgHAAQgGAAgFAJg");
	this.shape_6.setTransform(47.15,64.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACrAVQgFgIAAgNQAAgMAFgJQAEgIAHgBQAHABAEAIQAFAJAAAMQAAANgFAIQgEAKgHgBQgHABgEgKgAjBAVQgEgIAAgNQAAgMAEgJQAFgIAHgBQAGABAFAIQAFAJAAAMQAAANgFAIQgFAKgGgBQgHABgFgKg");
	this.shape_7.setTransform(49.025,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// ראש
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8720").s().p("AkbCWQglk8Djh9QBUgmBzAjQDWBrglFXQiTCciLAAQiPAAiJiig");
	this.shape_8.setTransform(48.0002,69.0803);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// יד_ימין
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E97027").s().p("AimBSIDPhUQioiHgIg0IBhglQCRA6BGCgQAtBkhYgGQh1ATh/AEQgHAtgZApIgrAgQgThLAmhGg");
	this.shape_9.setTransform(68.6806,113.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// יד_שמאל
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E97027").s().p("ACPDDQgZgpgHgtQh/gEh1gTQhYAGAthkQBGigCSg6IBgAkQgIA1ioCHIDQBUQAlBGgTBLg");
	this.shape_10.setTransform(26.8223,113.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// בטן
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8E8DB").s().p("AhgINQgiggg9gVQCHi+jVm4IEWl1IEEFfQjlERCaF9QgmAEgvA2QhtgzhgAsg");
	this.shape_11.setTransform(47.5,130.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// גוף_תחתון
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D25F26").s().p("AhXIMIgCgEQgJgYgXgSIgJgHQgcgVgmgIIgJgCQgsgHgjASIgEABQgWANgLAUIADAJQkpi6EDl+IFonLIFuHkQDsFkkWCvQgJgJgLgIQgngcg1AGQgzAFgiAfIgFADQgGAFgEAGQgNAPgFARIgCAFIACACQh1gdhKAfIAGgKg");
	this.shape_12.setTransform(47.7982,133.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#872E0C").s().p("AB3AvQgPgKgLgNIgBgCIABgFQAGgRAMgNQAFgHAGgFIAEgDQAjgfAzgFQA1gFAnAbQALAIAIAJIADAEQgEAdgbAYQgjAgg0AFIgOAAQgrAAgggWgAjaBAQgzgKgfgkQgPgQgHgOIgDgKQALgTAVgNIAFgCQAigRAtAGIAJACQAmAIAcAVIAJAHQAXATAJAXIACADIgHAKQgLAPgTALQgcAOghAAQgOAAgPgCg");
	this.shape_13.setTransform(48.2,184.5702);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// זנב
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B84C16").s().p("Ak2m8QEoiuCdBZQCdBZAAABQDnIYlmHMIltADQlDmeDNpOg");
	this.shape_14.setTransform(47.925,89.4191);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startSquirrel, new cjs.Rectangle(0,0,95.6,191.5), null);


(lib.start = function(mode,startPosition,loop,reversed) {
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
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("התחלה", "bold 18px 'Rubik'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 23;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.9,29.2,1.1371,1.1371);

	this.instance = new lib.CachedBmp_240();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_241();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.soundBtn = function(mode,startPosition,loop,reversed) {
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
		var self = this;
		self.stop()
		self.addEventListener("rollover",next)
		self.cursor = "pointer"
		
		function next(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this;
		self.stop()
		
		self.addEventListener("rollout",next)
		self.cursor = "pointer"
		function next(){
			self.gotoAndStop(0)
		}
	}
	this.frame_2 = function() {
		var self = this;
		self.stop()
		self.addEventListener("rollover",next)
		self.cursor = "pointer"
		
		function next(){
			self.gotoAndStop(3)
		}
	}
	this.frame_3 = function() {
		var self = this;
		self.stop()
		
		self.addEventListener("rollout",next)
		self.cursor = "pointer"
		function next(){
			self.gotoAndStop(2)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_156();
	this.instance.setTransform(18.3,-17.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_158();
	this.instance_1.setTransform(23.3,-10.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_157();
	this.instance_2.setTransform(18.3,-17.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_159();
	this.instance_3.setTransform(18.3,-17.1,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_160();
	this.instance_4.setTransform(18.3,-17.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.3,-17.1,283.5,272.5);


(lib.restart = function(mode,startPosition,loop,reversed) {
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
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("שחקו שוב", "bold 18px 'Rubik'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 23;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.05,15.65,1.1371,1.1371);

	this.instance = new lib.CachedBmp_228();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_229();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.myQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this
		self.txt.font="bold 18px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("לחצו על כל התשובות הנכונות:", "bold 18px 'Rubik'", "#46322E");
	this.txt.name = "txt";
	this.txt.lineHeight = 23;
	this.txt.lineWidth = 253;
	this.txt.parent = this;
	this.txt.setTransform(355.8,18.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#46322E").ss(9,1,1).p("EgxDgLFMBiHAAAQBfAABDBDQBEBDAABgIAAO/QAABfhEBEQhDBDhfAAMhiHAAAQhfAAhEhDQhDhEAAhfIAAu/QAAhgBDhDQBEhDBfAAg");
	this.shape.setTransform(312.9182,65.4733,0.9287,0.9224);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgxDALGQhfAAhEhDQhDhDAAhgIAAu/QAAhfBDhEQBEhDBfAAMBiHAAAQBfAABDBDQBEBEAABfIAAO/QAABghEBDQhDBDhfAAg");
	this.shape_1.setTransform(312.9182,65.4733,0.9287,0.9224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.myQ, new cjs.Rectangle(-4.5,-4.5,634.9,140), null);


(lib.progressNut = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_183();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressNut, new cjs.Rectangle(0,0,30,35.5), null);


(lib.nut = function(mode,startPosition,loop,reversed) {
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
		var self = this
		self.stop()
	}
	this.frame_1 = function() {
		var self = this
		self.stop()
	}
	this.frame_2 = function() {
		var self = this
		self.stop()
	}
	this.frame_3 = function() {
		var self = this
		self.stop()
	}
	this.frame_4 = function() {
		var self = this
		self.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglOOQhRgJAYhaQkHgsh2kAIgMgZQhJixgKkNIAcAEIAAgCIgRgDIgygIQjRovNEhdQgOhgAehHQAghLBQgvQADAbAWAQQAaARAyACQiFA9gHCTQJeCGhEFUIgKAlQgUBCgrBJIgGABIgKACQAYKZoRCDQAOBmhRAAIgVgBg");
	this.shape.setTransform(61.4633,89.8918);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9933").ss(4,1,1).p("Ao6AoQAKENBJCxQAGANAGAMQB2EAEHAsQgYBaBRAJQBoANgQhyQIRiDgYqZQAFgBAFgBQADgBADAAQArhJAUhCQAGgTAEgSQBElUpeiGQAHiTCFg9QgygCgagRQgWgQgDgbQhQAvggBLQgeBHAOBgQtEBdDRIvQAYAFAaADQAIACAJAB");
	this.shape_1.setTransform(59.5133,89.8918);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D4939").ss(4,1,1).p("AI8AKQArhJAUhCQAGgTAEgSQBElUpeiGQAHiTCFg9QgygCgagRQgWgQgDgbQhQAvggBLQgeBHAOBgQtEBdDRIvQAYAFAaADQAIACAJABAo6AoQAKENBJCxQAGANAGAMQB2EAEHAsQgYBaBRAJQBoANgQhyQIRiDgYqZ");
	this.shape_2.setTransform(61.4633,89.8918);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF66FF").ss(4,1,1).p("AgHACQAFgCAEAAQADgBADAA");
	this.shape_3.setTransform(117.85,91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CC0000").ss(4,1,1).p("AI8AKQArhJAUhCQAGgTAEgSQBElUpeiGQAHiTCFg9QgygCgagRQgWgQgDgbQhQAvggBLQgeBHAOBgQtEBdDRIvQAYAFAaADQAIACAJABAo6AoQAKENBJCxQAGANAGAMQB2EAEHAsQgYBaBRAJQBoANgQhyQIRiDgYqZ");
	this.shape_4.setTransform(61.4633,89.8918);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#30A126").ss(4,1,1).p("AgHACQAFgCAEAAQADgBADAA");
	this.shape_5.setTransform(117.85,91);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AouIvQhThTg1heQhgirAAjTQAAlHDojoQAkgkAngeQA6gvBAghQCkhVDFAAQFIAADoDnQDnDoAAFHQAADThgCrQg1BehSBTQjoDolIAAQlGAAjojog");
	this.shape_6.setTransform(61.4,95.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#30A126").ss(4,1,1).p("Ao6AoQAKENBJCxQAGANAGAMQB2EAEHAsQgYBaBRAJQBoANgQhyQIRiDgYqZQAFgBAFgBQADgBADAAQArhJAUhCQAGgTAEgSQBElUpeiGQAHiTCFg9QgygCgagRQgWgQgDgbQhQAvggBLQgeBHAOBgQtEBdDRIvQAYAFAaADQAIACAJAB");
	this.shape_7.setTransform(61.4633,89.8918);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.498)").s().p("AovIvQjnjnAAlIQAAlHDnjoQDojnFHAAQFIAADnDnQDoDoAAFHQAAFIjoDnQjnDolIAAQlHAAjojog");
	this.shape_8.setTransform(61.8,95.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:61.4633}}]}).to({state:[{t:this.shape,p:{x:59.5133}},{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:61.4633}},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_6},{t:this.shape,p:{x:61.4633}},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape,p:{x:61.4633}},{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-3.2,158.6,186.2);


(lib.newgame = function(mode,startPosition,loop,reversed) {
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
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("סיום משחק", "bold 18px 'Rubik'", "#D18A5C");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 23;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.05,15.65,1.1371,1.1371);

	this.instance = new lib.CachedBmp_226();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_227();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.mathQ4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.candy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mathQ4, new cjs.Rectangle(0,0,640,426), null);


(lib.mathQ4A9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._32group();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mathQ4A9, new cjs.Rectangle(0,0,517,469), null);


(lib.mathQ4A8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._18group();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mathQ4A8, new cjs.Rectangle(0,0,649,259), null);


(lib.mathQ4A7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._8group();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mathQ4A7, new cjs.Rectangle(0,0,232,487), null);


(lib.holidayQ9A9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holidayQ9A9, new cjs.Rectangle(0,0,224,225), null);


(lib.holidayQ9A8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holidayQ9A8, new cjs.Rectangle(0,0,510,340), null);


(lib.holidayQ9A7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holidayQ9A7, new cjs.Rectangle(0,0,720,480), null);


(lib.holidayQ9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holidayQ9, new cjs.Rectangle(0,0,235,215), null);


(lib.falseAni = function(mode,startPosition,loop,reversed) {
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
	this.frame_30 = function() {
		var self = this;
		self.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(2));

	// אוזניים
	this.instance = new lib.CachedBmp_170();
	this.instance.setTransform(23.5,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_171();
	this.instance_1.setTransform(25.75,13.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_172();
	this.instance_2.setTransform(29.75,9.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_173();
	this.instance_3.setTransform(29.75,9.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_174();
	this.instance_4.setTransform(25.75,13.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_175();
	this.instance_5.setTransform(23.5,0,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_176();
	this.instance_6.setTransform(25.75,13.85,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_177();
	this.instance_7.setTransform(29.75,9.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},12).to({state:[{t:this.instance_7}]},4).to({state:[]},1).wait(1));

	// אף_ופה
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,1,1).p("Ag/gDQAxArAMg6AAAgRQAHA3A5gc");
	this.shape.setTransform(40.6,83.6778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(0.1,1,1).p("AhDgnQA4AkBQgPQgKAthFANIAAAAIgBgBQg5gWABg4g");
	this.shape_1.setTransform(41.5498,77.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgLAnQg5gWABg4QA4AkBQgPQgKAthFANIAAAAg");
	this.shape_2.setTransform(41.5498,77.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#330000").ss(1,1,1).p("AgyANQA4AUgGgwQAAgEAAgEAAIgRQgBACAAACAAQgZQgCAFAAAGAAOgOQgEAjApAF");
	this.shape_3.setTransform(40,83.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#330000").ss(0.1,1,1).p("AhDgnQA4AkBQgPQgKAqg7AOIgBAAQgDABgDAAQgCABgBAAIAAAAIgBgBQgCgBgBAAQg2gXABg2g");
	this.shape_4.setTransform(41.5498,77.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AgLAnIgDgBQg2gXABg2QA4AkBQgPQgKAqg7AOIgBAAIACgLIgCALIgGABIAAgDIAAADIgDABIAAAAgAgOAmIgCgJIACAJg");
	this.shape_5.setTransform(41.5498,77.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#330000").ss(1,1,1).p("Ag6AfQAxgHgGgwQAAgEgBgFAgIgaQAAACAAABAAAgjQgBAGgBAFAgBgYQgFAjBBAZ");
	this.shape_6.setTransform(41.625,84.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330000").s().p("AgLAnIgDgBIgCgJIACAJQg2gXABg2QA4AkBQgPQgKAqg7AOIgBAAIACgLIgCALIgGABIAAgDIAAADIgDABIAAAAg");
	this.shape_7.setTransform(41.5498,77.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4}]},12).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4}]},4).to({state:[]},1).wait(1));

	// מתחת_לפה
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7E7DA").s().p("AgbBVQifgLgjiFQA0ALAngmQBDAkBEgTQBGBhCTAJQhMAyh9AAQgWAAgagCg");
	this.shape_8.setTransform(47.8,83.0175);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(30).to({_off:true},1).wait(1));

	// עיניים
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AB1BCQgUgJgHgaQgGgZAMgaQAMgcAWgNQAXgNAVAJQAVAJAGAaQAGAZgMAbQgMAbgXANQgNAIgMAAQgJAAgJgEgACegoQgLAGgFANQgGANADAKQADAMAKAEQAJAEALgFQAKgGAGgMQAGgNgDgLQgDgNgKgEQgDgBgEAAQgGAAgHADgAiqA1QgSgCgKgTQgIgSAGgVQAGgYAQgQQAQgOASADQASACAJASQAIASgFAXQgGAXgQAOQgPAOgOAAIgFgBgAiagkQgHAHgCAKQgDAMADAHQAFAJAIAAQAJABAIgHQAHgFADgLQACgLgEgIQgEgJgIgBIgCAAQgHAAgIAGg");
	this.shape_9.setTransform(47.8106,63.1203);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACLAeQgKgEgDgMQgDgLAGgMQAFgNALgGQALgGAJAEQAKAEADANQADALgGAMQgGANgKAGQgGADgGAAQgEAAgEgCgAijAVQgIAAgFgJQgDgIADgLQACgKAHgHQAJgHAIABQAIABAEAJQAEAIgCALQgDAKgHAGQgHAGgHAAIgDAAg");
	this.shape_10.setTransform(49.1337,61.9042);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC7E1A").s().p("AihAcQgHgBgHgDQgHgCgDgDQgDgCAAgDQAAgGANgFQANgDASAAQASAAANADQANAFAAAGQAAAGgNAEIgIADIgKABIgNABIgRgBgACCAaQgOgCgLgGIgJgGQgGgGAAgGQAAgMAPgIQAOgIAVAAQAUAAAPAIQAOAIAAAMQAAAKgOAIIgCABIgMAFQgJACgMAAIgKAAg");
	this.shape_11.setTransform(48.5,57.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACDAaQgJgEgDgLQgDgLAFgLQAEgIAFgFIAKAAQAMAAAKgCQAEAEACAHQACALgFALQgFAMgKAFQgGADgFAAQgEAAgEgBgAiaARQgIAAgEgJQgDgHADgKQABgIAFgFIARABIANgBQAEAIgDAKQgCAKgHAGQgGAFgHAAIgDAAg");
	this.shape_12.setTransform(48.4224,62.2342);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABvA1QgUgIgGgZQgGgXALgZQAIgRALgLIAJAGQALAGAOACQgGAFgDAIQgGAMADALQADAKAJAEQAJAEAKgGQAKgFAGgLQAFgMgDgLQgCgHgDgEIALgFIAEALQAGAYgMAZQgLAagWAMQgMAIgMAAQgIAAgIgEgAigApQgRgCgJgSQgIgRAGgUQAEgTAMgOQADADAHACQAHADAIABQgFAFgCAIQgDALAEAHQAEAJAHAAQAJAAAHgFQAIgGACgLQACgKgEgIIAKgBQAFAPgFAVQgFAUgPAOQgOAMgOAAIgEAAg");
	this.shape_13.setTransform(47.1865,64.0012);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABvAoQgUgIgGgYQgEgPAEgRQAUAEAZAAIABAAIAAABQADAMAJADQAJAEAKgFQAKgGAGgMIABgBIANgEQgCAOgGAOQgLAYgWANQgMAHgMAAQgIAAgIgEgAigAcQgRgCgJgSQgIgPAGgVIAFgPQADAFAHAEQAIAEAKACQAAAEACADQAEAIAHAAQAJACAHgHQAHgFACgIIAGgDIAGgDQAAAJgDAKQgFAVgPANQgOANgOAAIgEgBg");
	this.shape_14.setTransform(47.1837,65.2762);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACEANQgJgEgDgKIAAgCQAaAAAVgEIgBACQgFALgKAFQgGAEgFAAQgEAAgEgCgAiZAEQgIAAgEgIQgBgDAAgEIANABQAOAAALgEQgDAJgGAFQgGAEgHAAIgDAAg");
	this.shape_15.setTransform(48.325,63.5092);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FC7E1A").s().p("AByAtQgZAAgUgEIgRgEQgagHAAgKQAAgLAagHQASgEAXgCQgFgFAAgHQAAgMAOgHQAPgJAUABQAVgBAOAJQAPAHAAAMQAAALgMAGIABABQAaAHAAALQAAAKgaAHIgNADQgVAFgaAAIgCAAgAiqAlQgKgCgIgFQgIgDgDgFQgCgEAAgEQAAgIALgGIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAFgNAFIACAFQAAAIgIAGIgFACIgGADQgLAFgOAAIgNgBg");
	this.shape_16.setTransform(48.725,58.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AiwgOQgBADgDABQgCACgDgBQgDgBgBgDQgCgCABgDQABgDAFgIQAEgIAEgDQADgDgBANQgBANgBADgAC/AdQAAAFgEAEQgEAEgFAAQgFAAgEgEQgDgEAAgFQAAgGADgPQADgPAEgHQAEgIAGAWQAFAXAAAGg");
	this.shape_17.setTransform(46.005,71.6219);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().p("ACpAmQgDgEAAgFQAAgGADgPQADgPAEgHQAEgIAGAWQAFAXAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEgAi5gJQgDgBgBgDQgCgCABgDIAGgLQAEgIAEgDQADgDgBANIgCAQQgBADgDABIgDABIgCAAg");
	this.shape_18.setTransform(46.005,71.6219);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AB3AYQgQgGgHgSQATAHAaAAQAXAAATgGQgKAMgNAIQgNAHgLAAQgJAAgIgEgAiYAMQgRgCgJgRQgEgJAAgLQADAHAHAGQAPAMAUAAQAPAAALgGIgJAIQgNANgOAAIgFgBg");
	this.shape_19.setTransform(46.325,66.8762);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC7E1A").s().p("ABMA8IgKgFQgXgMAAgQQABgHAFgHQgSgGAAgIQAAgLAZgHQASgFAXgCQgFgFAAgHQAAgMAPgHQAOgJAVABQAUgBAPAJQAOAHAAAMQAAALgMAHIABABQAaAHAAALQAAAGgOAGQAGAIAAAIQAAAQgWAMIgNAGQgTAFgXABQgZgBgUgGgAi/AsQgIgFgCgHQgFgHAAgJQAAgNAJgJIAAgBQAAgIALgHIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAGgMAFIABAFQAAAFgCACQADAIAAAIQAAARgOALIgIAHQgMAFgOAAQgVAAgOgMg");
	this.shape_20.setTransform(48.3,60.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AiegSQAAAFgEAEQgDAEgGAAQgFAAgDgEQgEgEAAgFQAAgFADgQQAEgQAEgHQAEgIAFAYQAFAXAAAFgAC4AzQABAFgEAEQgDAEgFABQgFABgEgDQgEgDgBgFQgBgGABgQQABgQACgIQADgIAJAWQAJAWABAGg");
	this.shape_21.setTransform(46.0111,74.6968);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFFF").s().p("ACkA/QgEgDgBgFQgBgGABgQQABgQACgIQADgIAJAWQAJAWABAGQABAFgEAEQgDAEgFABIgCAAQgEAAgDgCgAizgJQgEgEAAgFQAAgFADgQQAEgQAEgHQAEgIAFAYQAFAXAAAFQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_22.setTransform(46.0111,74.6968);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC7E1A").s().p("ABIBKQgTgHAAgMQAAgJAOgHQgVgLAAgQQABgHAFgGQgSgGAAgJQAAgLAZgHQASgFAXgCQgFgFAAgHQAAgMAPgHQAOgJAVABQAUgBAPAJQAOAHAAAMQAAALgMAHIABABQAaAHAAALQAAAHgOAGQAGAHAAAIQAAAQgWAMIgHADQAHAGAAAGQAAAMgSAHQgTAHgaABQgagBgSgHgAjDA1QgNgIAAgLQgBgKAKgHQgDgHgBgJQAAgMAJgKIAAgBQAAgIALgHIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAGgMAFIABAFQAAAFgCADQADAIAAAHQAAAQgMALIABAGQAAALgOAIQgOAIgSAAQgUAAgNgIg");
	this.shape_23.setTransform(48,62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("Ai+gVQgCAFgEACQgFADgFgCQgFgCgCgFQgDgFACgFQACgFAIgNQAIgOAHgGQAGgFgDAXQgCAYgCAFgADYA3QABAFgEAEQgDAFgFABQgFAAgEgDQgEgDgBgGQgBgFACgQQAAgQADgIQADgIAIAWQAJAWABAGg");
	this.shape_24.setTransform(45.35,79.0251);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FFFF").s().p("ADDBDQgDgDgBgGQgBgFACgQQAAgQADgIQACgIAJAWQAJAWABAGQABAFgEAEQgDAFgFABIgBAAQgFAAgEgDgAjPgNQgEgCgCgFQgDgFABgFQADgFAIgNQAIgOAGgGQAHgFgDAXQgDAYgCAFQgBAFgFACQgDACgDAAIgEgBg");
	this.shape_25.setTransform(45.35,79.0251);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABvAyQgUgGgGgUQgGgUALgTQAMgVAVgKQAWgKATAGQAUAHAGAUQAGATgMAVQgLAUgWAKQgMAGgMAAQgIAAgIgDgACVgeQgKAEgFAKQgGAKADAIQADAJAJADQAJADAKgFQAKgEAGgJQAFgJgDgJQgDgKgJgDIgHgBQgGAAgGADgAigAoQgRgBgJgPQgIgNAGgQQAFgTAPgLQAQgLARACQARABAIAOQAIAOgGARQgFASgPALQgOAKgOAAIgEgBgAiRgbQgHAFgCAIQgDAJAEAFQAEAGAHAAQAJACAHgGQAIgDACgJQACgIgEgHQgDgGgIgBIgCAAQgHAAgHAFg");
	this.shape_26.setTransform(47.1865,63.104);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ACDAXQgJgDgDgJQgDgJAFgJQAFgJALgFQAKgEAJADQAJADADAJQACAJgFAJQgFAKgKAEQgGACgGAAIgHgBgAiaAQQgIAAgEgHQgDgGADgIQACgIAHgFQAIgFAIABQAHAAAEAHQAEAGgDAJQgCAHgHAFQgGAEgGAAIgEAAg");
	this.shape_27.setTransform(48.4224,62.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},4).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_23},{t:this.shape_25},{t:this.shape_24}]},4).to({state:[{t:this.shape_20},{t:this.shape_19}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},4).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_27},{t:this.shape_26}]},4).to({state:[]},1).wait(1));

	// ראש
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC7E1A").s().p("AiHDnQhaglgehQQgJi6CWiWQDMhWBqCOQB9DXiECjQhoAshaAAQhFAAg9gZg");
	this.shape_28.setTransform(51.0932,65.5837);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(30).to({_off:true},1).wait(1));

	// ידיים
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E87027").s().p("AhzD1IBZhUQA7hpBZg6QgihegBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh9AgIgPBWIg+AqQgQg7AQgngAjNEhIAPhZIgzhHQgehPgCh2IBxDiIAVCDIgSAng");
	this.shape_29.setTransform(55.9053,121.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E87027").s().p("Ak1EgIAxhNIgThVQADhVAuhsIAND7IghCBIgfAdgAh/DVIBihJQBGhgBfgxQgXhhAMhtQAMhtAzgVIB7B8QgJDChXB9QiGBJiAASIgZBTIhCAjQgKg8AVgmg");
	this.shape_30.setTransform(54.5,122.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E87027").s().p("AlaD9IBEg7IAFhYQAchQA3hPQAeCYhFBRIhDBzIgnASgAisCjIBvgzQBahQBngbQgChjAihoQAjhoA2gKIBeCUQgxC5hwBpQiTAsiAgLIgqBNIhIAUQAEg9Abggg");
	this.shape_31.setTransform(48.925,120.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E87027").s().p("AhdDlIBihJQBHhhBfgyQgXhgAMhsQAMhuAygVIB7B9QgIDBhYB9QiGBKh/ARIgZBUIhDAjQgJg9AUglgAlYEBIAViDQAphnBUiRQgBB+gIBBIhXBjIAPBZIgvAng");
	this.shape_32.setTransform(51.025,120.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E87027").s().p("AgXD1IBZhUQA7hpBag6QgjheAAhtQgBhuAwgbICJBuQANDBhJCGQh9BYh9AgIgPBWIg+AqQgPg7APgngAltCJIBCh0QBKhRBOhiQgbCFADAhIhzA+IgSBZIg5AVg");
	this.shape_33.setTransform(46.6803,121.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E87027").s().p("AASD1IBahUQA7hpBag6QgjheAAhtQgBhuAwgbICJBuQANDBhJCGQh9BYh9AgIgPBWIg/AqQgPg7APgngAmXAyIAZgjICHgxQB3gSAGgtQANBogUAcIiNgXIhLA6g");
	this.shape_34.setTransform(42.4553,121.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E87027").s().p("AAbD1IBZhUQA8hpBZg6QgihegBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh+AgIgPBWIg+AqQgQg7AQgngAkIgzIhlAMIgygyIApgSICbAbQBjAlAKgbQACBjgKAag");
	this.shape_35.setTransform(41.6303,121.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E87027").s().p("AgVD1IBYhUQA8hpBZg6QgihegBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh+AgIgPBWIg9AqQgQg7AQgngAkVh1IhSg8IgIhKIAxASIBdB/QAfA/AQgaQAbB0gSAUQhFg0gniEg");
	this.shape_36.setTransform(46.5053,121.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E87027").s().p("AgjD/IBYhUQA8hpBZg7QgihdgBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh+AgIgPBWIg9AqQgQg7AQgngAkTiwIhOhYIAHhYIAzAfIBNCoQAUBRAZgcQAFCPgZATQhDhKgPikg");
	this.shape_37.setTransform(47.9053,120.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E87027").s().p("Ag6EEIBZhUQA7hpBag8QgjhcAAhtQgBhuAwgbICJBuQANDBhJCGQh9BYh9AgIgPBWIg+AqQgPg7APgngAkKisIhAhiIAUhXIAuAmIAzCyQAIBTAHgeQAFCUgcAPQg2hUAJijg");
	this.shape_38.setTransform(50.1803,119.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E87027").s().p("AhCEnIBYhUQA8hpBZg8QgihcgBhtQAAhuAwgbICIBuQAODAhJCHQh9BYh+AgIgOBWIg+AqQgQg7AQgngAkIArQgqhbAhigIgxhsIBGhMIABAmIAZC4QgDBTALgdQAaCjg1AAQgJAAgKgEg");
	this.shape_39.setTransform(51.0053,116.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},3).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},2).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_39}]},9).to({state:[{t:this.shape_39}]},4).to({state:[]},1).wait(1));

	// חלק_אחורי_של_הרגל
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D25F26").s().p("AiaDVQlZorL5CkQAFB2gnBuQg7B+i/Apg");
	this.shape_40.setTransform(88.6413,170.1822);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(30).to({_off:true},1).wait(1));

	// מרכז_גוף
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7E7DA").s().p("AhTG7QiKiHBKi1QifijB7nOQB0BKDphaQCEJ+hvGHIgSAAQhvAAiNhIg");
	this.shape_41.setTransform(54.2896,139.6001);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(30).to({_off:true},1).wait(1));

	// גוף
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D25F26").s().p("AgXIAQjIglheg5Qheg6ACh1QAChTA6hEQikm4CnihQANAOB4ACQB4ACBGggQBvCBCPARQEHE3hSE3IABALIAAACQAECEh5BQQhSA2h3AAQg4AAg+gMg");
	this.shape_42.setTransform(71.6721,139.3626);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(30).to({_off:true},1).wait(1));

	// נעליים
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#882F0D").s().p("AAaBPQAChDA3gMQACABBjALQAyAFBNgBQibAag1AnQgRAEgRAAQgVAAgWgGgAk2gBQAPhdCKAMQATADA1AXQA0AYApALIiIADQhBAYg4AAQggAAgdgHg");
	this.shape_43.setTransform(56.375,189.8944);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#882F0D").s().p("AAVA1QANhBA5gDQACACBfAbQAwAOBMAMQidgCg7AeIgJAAQghAAghgPgAk3AOQAPhcCKAMQATADA0AXQA1AYAoALIiHADQhBAYg5AAQgfAAgdgIg");
	this.shape_44.setTransform(56.525,188.2523);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#882F0D").s().p("AANAzQANhBA5gDQACACBfAbQAwAOBMAMQidgCg7AeIgJAAQghAAghgPgAiyhBQATgCA5AIQA5AIArAAIiCAoQhXBAhTACQgLhdCHgbg");
	this.shape_45.setTransform(57.3337,188.4706);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#882F0D").s().p("AjHgwQAQgKA3gSQA3gRAmgTIhjBdQgyBfhLAlQgzhPBvhSgAgOBQQANhCA4gDQACADBfAbQAwAOBMANQidgCg7AdIgJABQghAAgggQg");
	this.shape_46.setTransform(60.133,185.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#882F0D").s().p("AjegRQAKgQAogqQAngqAYgkIgqCCQADBrgvBGQhTguA4h9gAgtB2QANhCA5gDQABACBgAcQAwAOBMAMQidgCg7AeIgKAAQggAAghgPg");
	this.shape_47.setTransform(63.1929,181.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#882F0D").s().p("AjaAQQACgSAQg4QAQg2AGgrIAVCHQAzBegKBSQhegCgIiKgAhICNQANhDA6gCQABACBfAbQAwAOBMANQidgCg7AdIgJABQghAAghgPg");
	this.shape_48.setTransform(59.875,179.15);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_45}]},2).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},3).to({state:[{t:this.shape_48}]},5).to({state:[{t:this.shape_48}]},7).to({state:[{t:this.shape_48}]},9).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(9).to({_off:false},0).wait(21).to({_off:true},1).wait(1));

	// זנבב
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B84C16").s().p("AAcCPIgbhDIgCgFQgyh8AAgkQAAgqANgWQAFgHAFgDQAEgBAFAAQAVgCAPAIQARAIAJAUQAHAPABAYIAAAZQgCAYgIAQQgDAHgDACQgGAFgIABQgIABgEgCIgEgCIgDAAIgCgDQADAIAIAeIAMA4IANBDIABAQIAAABQAAABAAABQAAABAAABQAAAAgBAAQAAABAAAAQgCAAgGgXg");
	this.shape_49.setTransform(111.2083,89.9658);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B74C16").s().p("AB4KaIAAAAIAAAAIAAAAgAkZhcQiRj9B/jQQECjwEhERQEGIMligJQEkJxlIAuQAAgEmRrygAifpkQhcA6ArBsQArBrCoEgQCpEfBIDAQBHDBiopyIgBgQQA7AFA3gTQBXgegGh/QgGh/hQh+QhQh/h6gxQg2gWgyAAQg7AAgxAfg");
	this.shape_50.setTransform(100.2373,106.5672);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CF5B25").s().p("AAVCNQgHgfgEgJIACAEIADAAIAEACQAFACAIgBQAIgBAFgFQAEgDADgGQAHgQACgYIABgaQgCgXgHgOQgIgVgRgHQgPgJgVACQgFABgFABQgEACgFAIQgNAWAAAoQAAAlAxB8QgpgMgngpQg2g5gRhQQgShSAeg5QAeg5A7AAQA7AAA1A5QA3A5ASBSQARBQgeA5QgdA6g8AAQgIAAAAACIgNg4g");
	this.shape_51.setTransform(110.1816,78);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F27922").s().p("AC4ICQhIjBiokgQiokfgrhrQgshrBcg6QBcg6B6AwQB5AxBQB/QBQB/AGB/QAGB+hXAeQg3ATg7gGIgNhBQAAgCAIAAQA8AAAdg6QAeg5gRhRQgShSg3g5Qg1g5g7AAQg7AAgeA5QgeA5ASBSQARBRA2A5QAmApAqAMIACAGIAcBBQAIAhAAgOIAAgCQCBHggLAAQgEAAgRgtg");
	this.shape_52.setTransform(106.1711,98.0316);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B84C16").s().p("AADCQIgThFIgCgFQgkiCAEgjQAEgpAPgVQAGgHAFgCQAFgBAFABQAVAAAOAJQAQALAGAVQAGAPgCAYIgDAZQgEAYgKAPQgDAGgFADQgFAEgIAAQgIAAgEgDIgGgDIgCgDQADAIAEAgIAFA4IAGBEIgCAQIAAACIgBAEQgCAAgDgYg");
	this.shape_53.setTransform(113.9713,91.5813);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B74C16").s().p("AASKgIAAAAIAAAAIAAAAgAkph9Qh1kMCUjBQEajSEDEvQDMIllggwQDeKOlLAKQAAgEk7sZgAh4p0QhiAvAgBwQAfBvCIEwQCIEwAyDHQAzDIhkqCIABgPQA7ALA4gMQBagVAIh+QAIh/hCiHQhCiGh0g+QhBgjg7AAQguAAgqAVg");
	this.shape_54.setTransform(103.1279,107.0527);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CF5B25").s().p("AAFCQQgDghgCgIIABADIAGADQAFADAIAAQAIAAAFgEQAEgDAEgGQAKgPAEgYIADgZQABgYgFgOQgGgVgQgLQgPgJgUAAQgFgBgFABQgFACgGAHQgPAVgFAoQgDAjAkCDQgogRgiguQgwg/gIhQQgJhUAkg1QAjg2A7AHQA7AGAvA+QAxA/AHBTQAJBSgkA2QgjA2g7gHQgIgBgBACIgHg4g");
	this.shape_55.setTransform(113.3,79.3901);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F27922").s().p("ABiIOQgyjIiIkwQiIkwgfhvQgghvBigwQBigvByA9QB0A/BCCGQBCCGgIB/QgIB9haAWQg4AMg7gMIgFhDQABgBAHABQA7AFAkg1QAjg2gIhRQgIhUgwg/Qgwg+g7gHQg6gGgkA2QgjA0AIBUQAIBSAxA+QAhAvAoAQIABAGIAUBEQAFAhABgOIABgBQBMHpgLAAQgEAAgMgvg");
	this.shape_56.setTransform(110.0135,99.4063);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},9).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},17).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},4).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.1,198.4);


(lib.endOfAni = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.continueBtn = function(mode,startPosition,loop,reversed) {
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
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("המשיכו", "bold 18px 'Rubik'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 23;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.9,29.2,1.1371,1.1371);

	this.instance = new lib.CachedBmp_238();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_239();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.clouds = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_163();
	this.instance.setTransform(0,0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clouds, new cjs.Rectangle(0,0.2,775,337), null);


(lib.check = function(mode,startPosition,loop,reversed) {
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
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("בידקו", "bold 18px 'Rubik'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 23;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.9,29.2,1.1371,1.1371);

	this.instance = new lib.CachedBmp_222();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_223();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.bubblle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#E5A965").ss(13,1,1).p("EAi9gFlIAAp4QBKjNkjiDMhI4gDaQoYBSgRHEIAAdoQhILGIig5MBHpgDaQFsAIAzkwIgUrIQJ1EEFAlnQj3ALlvi/Qlvi9AMjLg");
	this.shape.setTransform(286.5556,234.9369);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egx9AN3IAA9oQARnEIYhSMBI4ADaQEjCDhKDNIAAJ4QgMDLFvC9QFvC/D3gLQlAFnp1kEIAULIQgzEwlsgIMhHpADaQgoAEglAAQnPAABCqRg");
	this.shape_1.setTransform(286.5556,234.9369);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,74.1,654.2,321.70000000000005);


(lib.bubble = function(mode,startPosition,loop,reversed) {
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
		var self = this;
		self.stop()
	}
	this.frame_1 = function() {
		var self = this;
		self.stop()
		self.header.font = "bold 18px Rubik "
		self.txt.font = "18px Rubik "
	}
	this.frame_2 = function() {
		var self = this;
		self.stop()
		self.header.font = "bold 18px Rubik "
		self.txt.font = "18px Rubik "
	}
	this.frame_3 = function() {
		var self = this;
		self.stop()
		self.header.font = "bold 20px Rubik "
		self.txt.font = "20px Rubik "
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFE").s().p("Ax8GOQgMgPgEgPIgPg9QgHgkAAgcQACj2gCj3QgBgzARg7QAahXBsgJQA6gFBQADICJAGIGyAPILAAaIF5AQQA4ACApArQApAsgFA5QgBANABAkQACAfgDASQgHAtAZAmQAPAXArAlQBPBCCAARIATAHQgxAVg0ADQgsACg2gKQgygKgeAGQgPACgEAHQgEAFAAAOIABClQAAA9gWAWQgWAXg+ADIjOAJIwsAmIj9ALQiSAFhrABIgEAAQhhAAgwg+g");
	this.shape.setTransform(123.8493,50.6591);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7AF72").s().p("AwYH5QhHgCg3glQg7gngRg/QgLgoAAgmQABkkgBkkQAAhYAyg1QAwgyBXgLQBBgHBYADICYAKIAKAAQA5gCBYAEICSAGIFhAMIFOANICsAFQBkAEBHAFIBlACQA+ACAnAFQBCAJAuAyQAwA0gCBCIAAAzQABAfgCATQgGAvAaAjQATAaAsAbQBmA/B6gBQAOAAAHACQAKAEADALQAEALgHAJIgPAPQgwAuhIAMQgqAHhagFIgZgEQgigFgGAGQgGAFAAAkIAACFQAAAkgWAfQgXAegiALQhBAUg1gBQg4gBhVAEIiMAGQhXACkuAKIlHANIlkANIjRAJQhPADhCAAIg/gBgAwjnHQhtAJgZBXQgRA7AAAzQADD3gDD2QAAAcAIAkIAOA9QAEAPAMAPQAyA/BjgBQBrgBCSgFID9gLIQtgmIDNgJQA/gDAWgXQAVgWAAg9IAAilQAAgOADgFQAFgHAOgCQAegGAyAKQA2AKAsgCQA0gDAxgVIgSgHQiBgRhOhCQgrglgQgXQgZgmAHgtQADgSgBgfQgCgkABgNQAFg5gpgsQgogrg5gCIl4gQIrBgaImxgPIiKgGIgygBQgxAAgmADg");
	this.shape_1.setTransform(126.161,50.5527);

	this.txt = new cjs.Text("בפעם הבאה נאסוף את כולם", "18px 'Rubik'", "#573926");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 23;
	this.txt.lineWidth = 197;
	this.txt.parent = this;
	this.txt.setTransform(207,38.7);

	this.header = new cjs.Text("נשארו אגוזים על העץ!", "bold 20px 'Rubik'", "#573926");
	this.header.name = "header";
	this.header.textAlign = "right";
	this.header.lineHeight = 25;
	this.header.lineWidth = 197;
	this.header.parent = this;
	this.header.setTransform(204,15.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.header,p:{text:"נשארו אגוזים על העץ!",font:"bold 20px 'Rubik'",lineHeight:25.05}},{t:this.txt,p:{text:"בפעם הבאה נאסוף את כולם",font:"18px 'Rubik'"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.header,p:{text:"יש פה אגוזים מקולקלים!",font:"bold 18px 'Rubik'",lineHeight:22.55}},{t:this.txt,p:{text:"לא כדאי לקחת אותם!\n פעם הבא נשים לב",font:"18px 'Rubik'"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.header,p:{text:"כל הכבוד!",font:"bold 20px 'Rubik'",lineHeight:25.05}},{t:this.txt,p:{text:"יש לנו מלא אגוזים לחורף",font:"bold 18px 'Rubik'"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.3,101.1);


(lib.bigger = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF9933").ss(1,1,1).p("AAVAUQgBABgBAAQgMANgQAAQgSAAgMgNQgNgMAAgQQAAgSANgMQAMgMASAAQAQAAAMAMQAMAMAAASQAAAPgKAMIAgAe");
	this.shape.setTransform(12.6187,13.1159,1.4188,1.4188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDBDQgcgcAAgnQAAgnAcgcQAcgcAnAAQAnAAAcAcQAdAcgBAnQABAngdAcQgcAdgngBQgnABgcgdg");
	this.shape_1.setTransform(13.5499,13.5499,1.4188,1.4188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bigger, new cjs.Rectangle(0,0,27.1,27.1), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4B6474").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,1280,720), null);


(lib.bar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6D4939").s().p("Ah3TiMAAAgnDIDvAAMAAAAnDg");
	this.shape.setTransform(12.025,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(0,0,24.1,250), null);


(lib._123 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// אוזניים
	this.instance = new lib.CachedBmp_140();
	this.instance.setTransform(17.3,2.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_141();
	this.instance_1.setTransform(17.3,2.9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_142();
	this.instance_2.setTransform(15.35,2.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_143();
	this.instance_3.setTransform(17.3,2.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_144();
	this.instance_4.setTransform(19.8,0,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_145();
	this.instance_5.setTransform(19.8,0,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_146();
	this.instance_6.setTransform(17.3,2.9,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_147();
	this.instance_7.setTransform(15.35,2.3,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_148();
	this.instance_8.setTransform(17.3,2.9,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_149();
	this.instance_9.setTransform(19.8,0,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_150();
	this.instance_10.setTransform(19.8,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},6).wait(1));

	// אף_ופה
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AgpgdIAggJIAFBPIglAAgAAHgoIAgALIADBGIglAAg");
	this.shape.setTransform(47.975,94.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXgABTAuQhLAygIhLQgHBMhMg0");
	this.shape_1.setTransform(47.95,84.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFApIAChRIAgAKIADBHgAgpApIAAhHIAggJIAFBQg");
	this.shape_2.setTransform(47.975,94.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("Ag2AMQgegeADgXQBPAjBUgiQgVBDg9APIAAAAQgYAAgegeg");
	this.shape_3.setTransform(47.9616,82.1254);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABTAuQgCACgDACQgTALgOAEQgEABgDAAQgKABgHgDQgCgBgBgBQgIgFgEgJQgBgBAAAAQgEgLgBgPQgCAPgDAKQgEAJgGAGQgCABgCABQgIAEgLgBQgJgCgKgEQgKgFgLgHQgCgCgDgBAhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXg");
	this.shape_4.setTransform(47.95,84.5286);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("AhAAjQgZgKAAgfQgBghAKgBIAVAMQAKAGAJAEQALABAIgDIAEgHQAGgGAEgJIACgCQAFgCADAFIABABQAEAJAIAFIADAGQAHADAJgBIAIgFQAOgEATgLQAQgCgCAfQgCAigbAKQgbAKgkAAQglAAgZgKg");
	this.shape_5.setTransform(48.1804,93.4083);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABKgFIAFgBQgTALgPAEQANgJAQgFgAhOgIQAEAAAFAEIANAIIgWgMg");
	this.shape_6.setTransform(47.925,90.1722);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AgCACQACgFADAC");
	this.shape_7.setTransform(39.575,90.21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgGASQABAFAAAFQAAAUgJAJQgBABgBABQgHAEgKACQgIAAgJgBQgBAAgBAAQgLgDgNgEQgBAAgBgBQgBgBgBAAAAFARQgDABgCAAQgDAAgDAAAAFARQAAgCAAgCAgHAMQABADAAADQgWgDgagaQgegfADgXQBPAjBUgiQgUBAg5ARABSA4QgDABgDABQgTAHgOABQgBAAgCAAQgEAAgEgBQgEAAgDgBQgBgBAAAAQgEgCgDgCQgBgBgCgBQgFgGgDgKQAAgBAAAAQgCgIAAgKQAAgDABgC");
	this.shape_8.setTransform(47.9616,84.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("AgaA9QgTgDgWgNQgVgNgBggIAAgGQAAgKACgGQABgGAEACIADABIACABIAYAHIACAAQAGADATAAQgDAEANgKQgBABAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIACgCQAJgJAAgUQAEgIADgBQABgBACAEQAAAKABAIIABABIgBAHQAFAJAHAFQACACAEgBIABgBIABACQADAHAJgBIAGgEIAIgDIARgHQAJgEAGgBQAGgBABARQABAQgEASQgFARgLAHQgMAGgNAEQgOAEgTADIgSACIgUgCgAgngDQgRABADAQQADAQAOAKIADACQAOAHARAAQAQAAAOgHIAEgDQAPgJADgPQAEgPgTgCQgSgDgTAAQgTAAgSACgABLgXQgUAHgNABQANgBAUgHIAFgCIgFACgAAYgRIgCgBIACABg");
	this.shape_9.setTransform(48.11,92.7025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF7878").s().p("AgfAUIgDgCQgOgJgDgQQgDgRARgBQASgCATABQATgBASADQATADgEAPQgDAOgPAKIgEACQgOAHgQABQgRgBgOgHg");
	this.shape_10.setTransform(47.9309,94.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s().p("AgGAqIgBgGIABAGQgWgDgagbQgegeADgXQBPAjBUgiQgUBAg5ARIAAgEIAAAEIgFABIgGAAg");
	this.shape_11.setTransform(47.9616,82.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("ABTAuQgCACgDACQgOAIgLAFQgEABgEABQgBAAgBABQgDAAgCAAQgKABgHgDQgCgBgBgBQgIgFgEgJQgFgLgBgQQgCARgFALQgDAIgGAEIAAABQgCAAgBABQgEACgFABQgFABgFgBQgEgBgDgBQgFgBgEgCQgBAAgCgBQgKgFgLgHQgCgCgDgBAhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXg");
	this.shape_12.setTransform(47.95,84.5333);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660000").s().p("AgjAlQgMgKgEgYQgEgYACgDQACgGADAEIADAFQAEAEADABQAGACACgCIACgDIAKgDIACgCIAAAAQAGgFAEgIQACgBACgIQAJAMACAHQADAGAMACQgDAEAIgCQAJgCAAABIABAAIAAABIAEgDIACAAIAIgDQAEADgEAXQgFAXgNAKQgOAJgWABIgCABQgVAAgLgKgAgaABQgMABACAKQACALAKAHIACABQAJAFALAAQALAAAIgFIADgCQAKgGACgKQADgKgNgCQgMgBgMAAIgYABgAgtgVIgIgDIAIADgAAzgZIABABIgHAEIgCAAIAIgFg");
	this.shape_13.setTransform(47.9362,93.1513);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF7878").s().p("AgUANIgCgBQgKgGgCgKQgCgLAMgBIAYgBQAMAAAMACQANABgDAKQgCAJgKAHIgDABQgIAFgLAAQgLAAgJgFg");
	this.shape_14.setTransform(47.706,94.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAEIAEABIgCABIgKADQAFgGADABgAA0AEQAKgFAMgEIAFgBQgOAHgMAFIgIACIAHgEgAgKgGIAEgBQgEAHgGAEQABgKAFAAgAhOgIQAEgBAFAEIANAIIgWgLg");
	this.shape_15.setTransform(47.925,90.2222);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgGASQABAFAAAFQAAAUgJAJQgBABgBABQgHAEgKACQgIAAgJgBQgBAAgBAAQgLgDgNgEQgBAAgBgBQgBgBgBAAAAFARQgDABgCAAQgDAAgDAAQgWgDgagaQgegfADgXQBPAjBUgiQgUBAg5ARQAAgCAAgCAgHAMQABADAAADABSA4QgDABgDABQgTAHgOABQgBAAgCAAQgEAAgEgBQgEAAgDgBQgBgBAAAAQgEgCgDgCQgBgBgCgBQgFgGgDgKQAAgBAAAAQgCgIAAgKQAAgDABgC");
	this.shape_16.setTransform(47.9616,84.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330000").s().p("AgGAqIgBgGIABAGQgWgDgagbQgegeADgXQBPAjBUgiQgUBAg5ARIAAgEIAAAEIgFABIgGAAgAAFApIAAAAg");
	this.shape_17.setTransform(47.9616,82.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},33).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_3},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},3).to({state:[{t:this.shape_17},{t:this.shape_10},{t:this.shape_9},{t:this.shape_16},{t:this.shape_7}]},2).to({state:[{t:this.shape_3},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_3},{t:this.shape_15},{t:this.shape_13},{t:this.shape_14},{t:this.shape_12}]},1).wait(1));

	// Layer_13
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8E8DB").s().p("AkYgQQCVgFAuheQBHA1BhgyQBEBuCCgOQg8B1jIAOIgkABQiuAAhbiEg");
	this.shape_18.setTransform(48.325,89.2944);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(44));

	// עיניים
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AChA4QgSgGgHgVQgHgUAIgXQAIgXASgMQASgMATAGQARAGAIAVQAHAVgIAWQgIAXgSAMQgMAIgMAAQgGAAgHgCgAC9ggQgEAJAAAMQAAAMAEAJQAFAJAHAAQAGAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgGAAQgHAAgFAJgAjFAyQgSgMgIgXQgIgWAHgVQAHgVASgGQATgGASAMQATAMAHAXQAIAXgHAUQgHAVgTAGQgGACgGAAQgMAAgMgIgAiuggQgFAJAAAMQAAAMAFAJQAFAJAGAAQAHAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgHAAQgGAAgFAJg");
	this.shape_19.setTransform(47.15,67.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ACrAVQgFgJAAgMQAAgMAFgIQAEgJAHAAQAHAAAEAJQAFAIAAAMQAAAMgFAJQgEAJgHAAQgHAAgEgJgAjBAVQgEgJAAgMQAAgMAEgIQAFgJAHAAQAGAAAFAJQAFAIAAAMQAAAMgFAJQgFAJgGAAQgHAAgFgJg");
	this.shape_20.setTransform(49.025,66.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF8720").s().p("AifALIgFAAIgDAAIgHgBQghgCgOgDQgMgCAAgDQAAgGBFgEQBEgFBgAAQBhAABFAFQBEAEAAAGQAAAEgbAEIgpADIgYABQg9AEhRAAQhcAAhDgFg");
	this.shape_21.setTransform(48.05,62.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ACrAVQgFgJAAgMQAAgMAFgIQAEgJAHAAQAHAAAEAJQAFAIAAAMQAAAMgFAJQgEAJgHAAQgHAAgEgJgAjBAVQgEgJAAgMQAAgMAEgIQAEgIAFgBIAHABQAEABADAHQAFAIAAAMQAAAMgFAJQgFAJgGAAQgHAAgFgJg");
	this.shape_22.setTransform(49.025,66.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AChAyQgSgGgHgUQgHgVAIgWQAFgPAJgKIAYgCIApgDQAGAGADAKQAHAUgIAWQgIAYgSAMQgMAIgMAAQgGAAgHgDgAC9gmQgEAJAAANQAAAMAEAIQAFAJAHAAQAGAAAFgJQAFgIAAgMQAAgNgFgJQgFgJgGAAQgHAAgFAJgAjFAtQgSgMgIgYQgIgWAHgUQAEgMAIgHQAOADAhADQgFABgEAHQgFAJAAANQAAAMAFAIQAFAJAGAAQAHAAAFgJQAFgIAAgMQAAgNgFgJQgDgGgEgCIACAAIAGABQAJAKAFAQQAIAWgHAVQgHAUgTAGQgGADgGAAQgMAAgMgIg");
	this.shape_23.setTransform(47.15,67.9142);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ACrAKQgFgJAAgLIAAgBIAYgGIAIgCIAAAJQAAALgFAJQgEAJgHAAQgHAAgEgJgAjBAKQgEgJAAgLIAAgBIAGABIAHABIADAAIAFABIALACQgBAJgEAHQgFAJgGAAQgHAAgFgJg");
	this.shape_24.setTransform(49.025,67.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF8720").s().p("AiIAdIgMgCIgLgBIgGgBIgCAAIgHgBIgHgCQgcgEgMgHIgGgCQgGgFAAgEQAAgOBEgLQBFgKBgAAQBhAABFAKQBEALAAAOQAAAGgJAEIgLAFIgHACIgYAFIgRADIgYADIgKABQg5AHhLAAQhNAAg7gHg");
	this.shape_25.setTransform(47.35,63.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AChAoQgSgGgHgUQgGgQAEgSIAKgCIAXgDIARgCIAAABQAAAMAFAJQAFAIAGAAQAHAAAFgIQAFgJAAgMIgBgJIAKgEQAFASgHAVQgIAXgSAMQgMAHgMAAQgGAAgHgCgAjFAjQgSgMgIgXQgIgWAGgTIAFADQANAGAcAFIAAABQAAAMAFAJQAFAIAGAAQAHAAAFgIQAEgHABgKIAMACQAEASgFAQQgHAUgTAGQgGACgGAAQgMAAgMgHg");
	this.shape_26.setTransform(47.1547,68.9392);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF8720").s().p("AiBAfIgGgBIgNgCIgCAAIgKgCIgEgBIgEAAIgDgBIgDgBIgGgBQgdgEgNgGIgCgCIgCgCQgHgEAAgEQAAgFALgFIAAAAQARgIApgGQBEgLBgAAQBhAABEALQAwAHAOAKIACABIABAAIAAABQAEADAAACQAAADgCADIgIAFIgFACIgEACIgIACIgRAEIgIABIgRADIgWADIgHABIgDABQg7AGhKAAQhIAAg5gFg");
	this.shape_27.setTransform(46.85,65.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ACpABIgCgDIARgDIAHgDIAFgCQgBAHgEAEQgEAJgHAAQgGAAgFgJgAjDABIAAgBIAEABIADAAIAFACIAKABQgEAHgGgBQgGAAgGgJg");
	this.shape_28.setTransform(49.2,68.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AChAnQgSgGgHgUQgDgIAAgHIAGgBIAXgDIARgCIAIgCIACAEQAFAIAGAAQAHAAAFgIQADgFABgHIAFgCIAHgFQAAAMgEAMQgIAXgSAMQgMAHgMAAQgGAAgHgCgAjFAiQgSgMgIgXQgEgKAAgKIACACQANAGAcAFIAHABIACAAIABABQAFAIAGAAQAGAAAEgFIACAAIAMACIAHABQgBAGgCAHQgHAUgTAGQgGACgGAAQgMAAgMgHgADigoIAAAAIAAABg");
	this.shape_29.setTransform(47.175,69.0392);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF8720").s().p("AiBBBIgGgCIgHgDIgGgCIgCAAIgKgDQgCgCgCAAIgEAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgDgBIgGgCQgdgLgNgNIgCgDIgCgDQgHgJAAgJQAAgMALgLIAAAAQARgQApgOQBEgXBgAAQBhAABEAXQAwAQAOAUIADAEQAEAHAAAGQAAAGgCAGIgBACIgHAIIgFAGIgEADIgIAFIgRAJIgIADQgHADgKACQgIADgKACIgEABIgHADIgDABQg7AOhKgBQhIABg5gMg");
	this.shape_30.setTransform(46.85,65.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ACgAbQgLgDgGgJQAJgCAJgDQAJgCAIgEIAIgDIARgHIAHgFIAFgEIAFgFIAHgIQgBAHgDAIQgIAXgSAMQgMAHgMAAQgGAAgHgCgAjGAWQgSgMgIgXIgCgFQANANAcAJIAHADIACABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIADAAQADAAACACIAKADIACAAIAGACQgGAHgKADQgGACgGAAQgMAAgMgHg");
	this.shape_31.setTransform(47.275,70.2392);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF8720").s().p("AiKBiIgHgEIgGgCIgHgDIgCAAIgLgGQgCgDgDAAIgDAAQgDgDgCAAIgCgCIgIgDQgdgQgOgTQgCgCgBgEIgCgEQgIgOABgNQAAgSALgQIABAAQARgaAsgVQBJghBnAAQBoAABJAhQAzAYAQAfIACAGQAFAKgBAKQAAAJgCAKIgBACIgHAMIgFAIIgGAHIgIAHIgRAMIgJAFQgIAFgKADQgJAGgLADIgEABIgHADQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQg/AWhPAAQhNAAg9gSg");
	this.shape_32.setTransform(46.9,65.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},29).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},2).to({state:[{t:this.shape_31},{t:this.shape_30}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},2).wait(1));

	// ראש
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF8720").s().p("AkbCWQglk8Djh9QBUgmBzAjQDWBrglFXQiTCciLAAQiPAAiJiig");
	this.shape_33.setTransform(48.0002,71.9803);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(44));

	// יד_ימין
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E97027").s().p("AimBSIDPhUQioiHgIg0IBhglQCRA6BGCgQAtBkhYgGQh1ATh/AEQgHAtgZApIgrAgQgThLAmhGg");
	this.shape_34.setTransform(68.6806,116.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(44));

	// יד_שמאל
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E97027").s().p("ACPDDQgZgpgHgtQh/gEh1gTQhYAGAthkQBGigCSg6IBgAkQgIA1ioCHIDQBUQAlBGgTBLg");
	this.shape_35.setTransform(26.8223,115.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(44));

	// בטן
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8E8DB").s().p("AhgINQgiggg9gVQCHi9jVm5IEWl1IEEFfQjlERCaF9QgmAEgvA2QhtgzhgAsg");
	this.shape_36.setTransform(47.5,133.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(44));

	// גוף_תחתון
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D25F26").s().p("AhXIMIgCgEQgJgYgXgSIgJgHQgcgVgmgIIgJgCQgsgHgjASIgEACQgWAMgLAUIADAJQkpi6EDl+IFonLIFuHkQDsFkkWCvQgJgJgLgIQgngbg1AFQgzAFgiAfIgFADQgGAFgEAGQgNAPgFARIgCAFIACACQh1gdhKAfIAGgKg");
	this.shape_37.setTransform(47.7982,136.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#872E0C").s().p("AB3AvQgPgKgLgNIgBgCIABgFQAGgRAMgNQAFgHAGgFIAEgDQAjgfAzgFQA1gFAnAbQALAIAIAJIADAEQgEAdgbAYQgjAgg0AFIgOAAQgrAAgggWgAjaBAQgzgKgfgkQgPgQgHgOIgDgKQALgTAVgNIAFgCQAigRAtAGIAJACQAmAIAcAVIAJAHQAXATAJAXIACADIgHAKQgLAPgTALQgcAOghABQgOAAgPgDg");
	this.shape_38.setTransform(48.2,187.4702);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#872E0C").s().p("AB3A8QgPgNgLgQIgBgDIABgEIAAgBIAAgBQADgNAGgKQAEgIAFgIQAFgJAGgHIAEgDQAjgnAzgHQA1gHAnAjQALAKAIAMIADAEIAAABQgEAlgbAeQgjApg0AGIgPABQgqAAgggcgAjaBRQgzgNgfgtQgPgUgHgTIgCgIIgBgEQALgZAVgRIAFgBQAigXAtAJQAFAAAEACQAmAKAcAbIAJAJQAQAQAJAUIAHARIABACIABADIgBADIgGAJQgLATgTAOQgcATgiAAQgOAAgOgEg");
	this.shape_39.setTransform(48.2,187.504);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D25F26").s().p("AhYISIgBgDIABgCIgBgEIgHgOQgKgUgPgQIgJgJQgcgbgmgKQgFgCgFAAQgsgJgiAXIgFABQgVARgMAZIABAEIgBACIAEAJQkqi6EDl+IFonLIFvHjQDqFjkSCvIAAgBIgDgEQgIgMgLgKQgngjg2AHQgyAHgjAnIgEADQgGAHgFAJQgFAIgEAIQgGAJgDAKIgBAFIABABIAAABQhxgchJAcIABgDg");
	this.shape_40.setTransform(47.8051,136.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_37},{t:this.shape_38}]},3).to({state:[{t:this.shape_40},{t:this.shape_39}]},7).to({state:[{t:this.shape_37},{t:this.shape_38}]},3).to({state:[{t:this.shape_40},{t:this.shape_39}]},8).to({state:[{t:this.shape_37},{t:this.shape_38}]},3).to({state:[{t:this.shape_40},{t:this.shape_39}]},6).to({state:[{t:this.shape_37},{t:this.shape_38}]},5).to({state:[{t:this.shape_40},{t:this.shape_39}]},6).to({state:[{t:this.shape_40},{t:this.shape_39}]},2).wait(1));

	// זנב
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B84C16").s().p("Ak2m8QEoiuCdBZQCdBZAAABQDnIYlmHMIltADQlDmeDNpOg");
	this.shape_41.setTransform(47.925,92.3191);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B84C16").s().p("AjRIpQk2mnDepJQErilCcBeQCbBdAAACQDWIfl0HBg");
	this.shape_42.setTransform(48.0448,92.459);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B84C16").s().p("AlBm2QEji2CgBVQCfBVAAACQD1ISlaHVIltAMQlNmVC9pUg");
	this.shape_43.setTransform(47.8686,92.5445);
	this.shape_43._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).to({state:[{t:this.shape_41}]},7).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_41}]},7).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_41}]},8).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_41}]},7).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(7).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(10).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},8).wait(3).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.6,196.4);


(lib.treeAndGrass = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_201();
	this.instance.setTransform(0,664.7,0.5,0.5);

	this.instance_1 = new lib.tree();
	this.instance_1.setTransform(721.2,358.9,1,1,0,0,0,518.4,358.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.treeAndGrass, new cjs.Rectangle(0,1.3,1456.5,750.9000000000001), null);


(lib.timepic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(84,75.8,1,1,0,0,0,84,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-3.7497},0).wait(1).to({rotation:-7.4994,x:84.05},0).wait(1).to({rotation:-11.2492},0).wait(1).to({rotation:-14.9989,y:75.75},0).wait(1).to({rotation:-10.999,x:84},0).wait(1).to({rotation:-6.9991,y:75.8},0).wait(1).to({rotation:-2.9992,x:84.05},0).wait(1).to({rotation:1.0007,x:84},0).wait(1).to({rotation:5.0005},0).wait(1).to({rotation:9.0004,x:83.95},0).wait(1).to({rotation:13.0003},0).wait(1).to({rotation:17.0002,x:84},0).wait(1).to({rotation:21.0001,x:83.95},0).wait(1).to({rotation:25},0).wait(1).to({rotation:20,x:84,y:75.85},0).wait(1).to({rotation:15,y:75.8},0).wait(1).to({rotation:10,x:83.95,y:75.85},0).wait(1).to({rotation:5,x:84,y:75.8},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-20.4,196.2,191.3);


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
	this.instance = new lib.time();
	this.instance.setTransform(135.1,125.3,0.8066,0.8066,0,0,0,84.1,75.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(12,1,1).p("AQ/gQQAAGlk7EqQk6Erm9AAQm7AAk7krQk7kqAAmlQAAmlE7kqQE7krG7AAQG9AAE6ErQE7EqAAGlgAVOAAQAAIbmOF9QmOF+oyAAQoxAAmOl+QmOl9AAobQAAoaGOl9QGOl+IxAAQIyAAGOF+QGOF9AAIag");
	this.shape.setTransform(135.775,130.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-6,-6,283.6,272.5), null);


(lib.startS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		self.header.font="bold 32px Varela Round"
		self.txt.font="bold 24px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.startBtn = new lib.start();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(277.15,387.15,1,1,0,0,0,39.1,41.3);

	this.txt = new cjs.Text("עזרו לסאני לאגור מספיק אגוזים לחורף.\n\nעל העץ יש אגוזים טובים ואגוזים מקולקלים.\nלחצו על כל האגוזים עם התשובה הנכונה והיזהרו שלא לקטוף אגוזים שגויים.\nשימו לב לשעון וקטפו את האגוזים הכי מהר שאפשר.\nבהצלחה!", "bold 24px 'Rubik'", "#6B4834");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 32;
	this.txt.lineWidth = 465;
	this.txt.parent = this;
	this.txt.setTransform(509.6,99.7);

	this.header = new cjs.Text("סאני צריך עזרה!", "bold 50px 'Rubik Black'", "#6B4834");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 65;
	this.header.lineWidth = 398;
	this.header.parent = this;
	this.header.setTransform(292.75,29.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgwXAhuQk2gBjdjcQjbjbAAk3MAAAgr9QAAk3DbjcQDdjbE2gBMBguAAAQE3ABDcDbQDcDcAAE3MAAAAr9QAAE3jcDbQjcDck3ABg");
	this.shape.setTransform(277.1376,215.75,0.7204,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.header},{t:this.txt},{t:this.startBtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startS, new cjs.Rectangle(0.1,0,554.1,441.9), null);


(lib.startAnimation = function(mode,startPosition,loop,reversed) {
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
		
	}
	this.frame_41 = function() {
		var self = this;
		self.txt.font="bold 24px Varela Round";
	}
	this.frame_98 = function() {
		var self = this;
		self.txt.font="bold 24px Varela Round";
	}
	this.frame_158 = function() {
		var self = this;
		self.txt.font="bold 24px Varela Round";
	}
	this.frame_215 = function() {
		var self= this;
		self.stop();
		
		stage.removeChild(stage.getChildByName("endOfAni"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(57).call(this.frame_98).wait(60).call(this.frame_158).wait(57).call(this.frame_215).wait(21));

	// Layer_2
	this.instance = new lib.stratbrunch();
	this.instance.setTransform(1365.6,147.05,1,1,0,0,0,411.9,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:47.4,x:1401.45,y:146.95},0).wait(1).to({x:1437.35},0).wait(1).to({x:1473.2},0).wait(1).to({x:1509.1},0).wait(1).to({x:1545},0).wait(1).to({x:1580.85},0).wait(1).to({x:1616.75},0).wait(1).to({x:1652.65},0).wait(1).to({x:1688.5},0).wait(1).to({x:1724.4},0).wait(1).to({x:1760.3},0).wait(1).to({x:1796.15},0).wait(1).to({x:1832.05},0).wait(1).to({x:1867.95},0).wait(1).to({x:1903.8},0).wait(1).to({x:1939.7},0).wait(1).to({x:1975.6},0).wait(1).to({x:2011.45},0).wait(1).to({x:2047.35},0).wait(1).to({x:2083.25},0).wait(1).to({x:2119.1},0).wait(1).to({x:2155},0).wait(1).to({x:2190.9},0).to({_off:true},1).wait(212));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6C4027").ss(8,1,1).p("A1Z1+MAqzAAAQCRAABmBmQBnBnAACRMAAAAhBQAACRhnBnQhmBmiRAAMgqzAAAQiRAAhmhmQhnhnAAiRMAAAghBQAAiRBnhnQBmhmCRAAg");
	this.shape.setTransform(1181.1567,336.1922,1.4178,1.1621);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A1YV/QiSAAhmhmQhnhnAAiRMAAAghBQAAiRBnhmQBmhnCSAAMAqxAAAQCSAABmBnQBnBmgBCRMAAAAhBQABCRhnBnQhmBmiSAAg");
	this.shape_1.setTransform(1181.1567,336.1922,1.4178,1.1621);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(108,64,39,0.949)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_2.setTransform(1181.15,336.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.949)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_3.setTransform(1181.15,336.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(108,64,39,0.894)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_4.setTransform(1181.15,336.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.894)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_5.setTransform(1181.15,336.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(108,64,39,0.843)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_6.setTransform(1181.15,336.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.843)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_7.setTransform(1181.15,336.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(108,64,39,0.788)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_8.setTransform(1181.15,336.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.788)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_9.setTransform(1181.15,336.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(108,64,39,0.737)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_10.setTransform(1181.15,336.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.737)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_11.setTransform(1181.15,336.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(108,64,39,0.682)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_12.setTransform(1181.15,336.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.682)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_13.setTransform(1181.15,336.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(108,64,39,0.631)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_14.setTransform(1181.15,336.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.631)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_15.setTransform(1181.15,336.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(108,64,39,0.58)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_16.setTransform(1181.15,336.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.58)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_17.setTransform(1181.15,336.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(108,64,39,0.525)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_18.setTransform(1181.15,336.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.525)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_19.setTransform(1181.15,336.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(108,64,39,0.475)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_20.setTransform(1181.15,336.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.475)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_21.setTransform(1181.15,336.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(108,64,39,0.42)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_22.setTransform(1181.15,336.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.42)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_23.setTransform(1181.15,336.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(108,64,39,0.369)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_24.setTransform(1181.15,336.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.369)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_25.setTransform(1181.15,336.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(108,64,39,0.318)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_26.setTransform(1181.15,336.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.318)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_27.setTransform(1181.15,336.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(108,64,39,0.263)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_28.setTransform(1181.15,336.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.263)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_29.setTransform(1181.15,336.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(108,64,39,0.212)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_30.setTransform(1181.15,336.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.212)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_31.setTransform(1181.15,336.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(108,64,39,0.157)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_32.setTransform(1181.15,336.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.157)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_33.setTransform(1181.15,336.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(108,64,39,0.106)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_34.setTransform(1181.15,336.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.106)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_35.setTransform(1181.15,336.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(108,64,39,0.051)").ss(8,1,1).p("EgmFgTMQAAioCRh3QCSh3DNAAMA8rAAAQDOAACRB3QCRB3AACoMAAAAmYQAACpiRB3QiRB3jOAAMg8rAAAQjNAAiSh3QiRh3AAipg");
	this.shape_36.setTransform(1181.15,336.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.051)").s().p("A+UZjQjOAAiRh3QiSh4AAioMAAAgmXQAAipCSh3QCRh3DOAAMA8qAAAQDNAACRB3QCSB3AACpMAAAAmXQAACoiSB4QiRB3jNAAg");
	this.shape_37.setTransform(1181.15,336.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(108,64,39,0)").ss(8,1,1).p("A1Z1+MAqzAAAQCRAABmBmQBnBnAACRMAAAAhBQAACRhnBnQhmBmiRAAMgqzAAAQiRAAhmhmQhnhnAAiRMAAAghBQAAiRBnhnQBmhmCRAAg");
	this.shape_38.setTransform(1181.1567,336.1922,1.4178,1.1621);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0)").s().p("A1YV/QiSAAhmhmQhnhnAAiRMAAAghBQAAiRBnhmQBmhnCSAAMAqxAAAQCSAABmBnQBnBmgBCRMAAAAhBQABCRhnBnQhmBmiSAAg");
	this.shape_39.setTransform(1181.1567,336.1922,1.4178,1.1621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[]},1).wait(216));

	// txt
	this.instance_1 = new lib.bubblle("synched",0);
	this.instance_1.setTransform(1306.2,518.65,0.6413,0.6413,0,0,0,320.7,154.6);

	this.txt = new cjs.Text("אוי לא.....\nנראה לי שהחורף עומד להגיע!", "normal 400 24px 'Varela Round'", "#872E0C");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 33;
	this.txt.lineWidth = 229;
	this.txt.parent = this;
	this.txt.setTransform(1265.95,519.3);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},40).to({state:[{t:this.instance_1},{t:this.txt,p:{x:1265.95,text:"אוי לא.....\nנראה לי שהחורף עומד להגיע!",y:519.3}}]},1).to({state:[]},48).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1},{t:this.txt,p:{x:1256.8,text:"תעזרו לי בבקשה לאסוף מזון\nלפני שהחורף מגיע",y:519.3}}]},2).to({state:[{t:this.instance_1},{t:this.txt,p:{x:1250.65,text:"דרך אגב, לא הצגתי את עצמי\nקוראים לי סאני\nואני צריך שתעזרו לי ",y:511.85}}]},60).to({state:[]},57).wait(21));

	// Layer_6
	this.instance_2 = new lib._123();
	this.instance_2.setTransform(1654.55,818.4,1,1,-21.1703,0,0,46.9,96.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:47.8,regY:98.2,rotation:-21.1713,x:1655.8,y:819.35},0).wait(26).to({x:1649.7,y:804.45},0).wait(1).to({x:1642.6,y:788.85},0).wait(1).to({x:1634.45,y:772.5},0).wait(1).to({x:1625.35,y:755.45},0).wait(1).to({x:1615.25,y:737.75},0).wait(1).to({x:1604.15,y:719.25},0).wait(1).to({x:1592.05,y:700.1},0).wait(1).to({x:1578.9,y:680.2},0).wait(1).to({x:1564.8,y:659.6},0).wait(1).to({x:1549.7,y:638.3},0).wait(1).to({x:1533.55,y:616.2},0).wait(178).to({_off:true},1).wait(20));

	// startSquirrel
	this.instance_3 = new lib.startSquirrel2();
	this.instance_3.setTransform(1457.05,605.2,1,1,0,0,0,47.8,95.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:1490.1,y:604.75},0).wait(1).to({x:1523.15,y:604.3},0).wait(1).to({x:1556.25,y:603.85},0).wait(1).to({x:1589.3,y:603.4},0).wait(1).to({x:1622.35,y:602.95},0).wait(1).to({x:1655.45,y:602.55},0).wait(1).to({x:1688.5,y:602.1},0).wait(1).to({x:1721.55,y:601.65},0).wait(1).to({x:1754.65,y:601.2},0).wait(1).to({x:1787.7,y:600.75},0).wait(1).to({x:1820.8,y:600.35},0).wait(1).to({x:1853.85,y:599.9},0).wait(1).to({x:1886.9,y:599.45},0).wait(1).to({x:1920,y:599},0).wait(1).to({x:1953.05,y:598.55},0).wait(1).to({x:1986.1,y:598.1},0).wait(1).to({x:2019.2,y:597.7},0).wait(1).to({x:2052.25,y:597.25},0).wait(1).to({x:2085.3,y:596.8},0).wait(1).to({x:2118.4,y:596.35},0).wait(1).to({x:2151.45,y:595.9},0).wait(1).to({x:2184.55,y:595.5},0).to({_off:true},1).wait(213));

	// Layer_1
	this.instance_4 = new lib.CachedBmp_220();
	this.instance_4.setTransform(324.9,148.55,0.5,0.5);

	this.instance_5 = new lib.strattree();
	this.instance_5.setTransform(559.35,357.55,1,1,0,0,0,518.4,358.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).to({state:[]},216).wait(20));

	// Layer_5
	this.instance_6 = new lib.clouds();
	this.instance_6.setTransform(2039.25,403.35,1,1,0,0,0,387.4,168.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:387.5,x:2039.1,y:399.05},0).wait(1).to({x:2038.85,y:394.85},0).wait(1).to({x:2038.45,y:390.65},0).wait(1).to({x:2038,y:386.55},0).wait(1).to({x:2037.5,y:382.45},0).wait(1).to({x:2036.9,y:378.35},0).wait(1).to({x:2036.2,y:374.35},0).wait(1).to({x:2035.4,y:370.35},0).wait(1).to({x:2034.55,y:366.45},0).wait(1).to({x:2033.6,y:362.5},0).wait(1).to({x:2032.6,y:358.65},0).wait(1).to({x:2031.5,y:354.85},0).wait(1).to({x:2030.3,y:351.05},0).wait(1).to({x:2029.05,y:347.3},0).wait(1).to({x:2027.7,y:343.6},0).wait(1).to({x:2026.25,y:339.95},0).wait(1).to({x:2024.75,y:336.3},0).wait(1).to({x:2023.15,y:332.7},0).wait(1).to({x:2021.5,y:329.15},0).wait(1).to({x:2019.7,y:325.65},0).wait(1).to({x:2017.9,y:322.2},0).wait(1).to({x:2015.95,y:318.75},0).wait(1).to({x:2013.95,y:315.35},0).wait(1).to({x:2011.85,y:312},0).wait(1).to({x:2009.7,y:308.7},0).wait(1).to({x:2007.45,y:305.45},0).wait(1).to({x:2005.15,y:302.2},0).wait(1).to({x:2002.7,y:299},0).wait(1).to({x:2000.25,y:295.85},0).wait(1).to({x:1997.65,y:292.75},0).wait(1).to({x:1995,y:289.65},0).wait(1).to({x:1992.25,y:286.65},0).wait(1).to({x:1989.45,y:283.65},0).wait(1).to({x:1986.55,y:280.65},0).wait(1).to({x:1983.55,y:277.75},0).wait(1).to({x:1980.5,y:274.85},0).wait(1).to({x:1977.35,y:272.05},0).wait(1).to({x:1974.1,y:269.25},0).wait(1).to({x:1970.8,y:266.45},0).wait(1).to({x:1967.4,y:263.75},0).wait(1).to({x:1963.95,y:261.05},0).wait(1).to({x:1960.4,y:258.4},0).wait(1).to({x:1956.75,y:255.8},0).wait(1).to({x:1953.05,y:253.25},0).wait(1).to({x:1949.25,y:250.75},0).wait(1).to({x:1945.35,y:248.25},0).wait(1).to({x:1941.4,y:245.8},0).wait(1).to({x:1937.35,y:243.4},0).wait(1).to({x:1933.2,y:241},0).wait(1).to({x:1929,y:238.7},0).wait(1).to({x:1924.7,y:236.4},0).wait(1).to({x:1920.35,y:234.15},0).wait(1).to({x:1915.9,y:231.95},0).wait(1).to({x:1911.35,y:229.75},0).wait(1).to({x:1906.75,y:227.65},0).wait(1).to({x:1902.05,y:225.55},0).wait(1).to({x:1897.25,y:223.5},0).wait(1).to({x:1892.4,y:221.45},0).wait(1).to({x:1887.45,y:219.5},0).wait(1).to({x:1882.45,y:217.55},0).wait(1).to({x:1877.35,y:215.65},0).wait(1).to({x:1872.15,y:213.8},0).wait(1).to({x:1866.9,y:212},0).wait(1).to({x:1861.55,y:210.2},0).wait(1).to({x:1856.1,y:208.45},0).wait(1).to({x:1850.6,y:206.75},0).wait(1).to({x:1845,y:205.1},0).wait(1).to({x:1839.3,y:203.5},0).wait(1).to({x:1833.55,y:201.9},0).wait(1).to({x:1827.7,y:200.35},0).wait(1).to({x:1821.8,y:198.85},0).wait(1).to({x:1815.8,y:197.4},0).wait(1).to({x:1809.7,y:195.95},0).wait(1).to({x:1803.55,y:194.55},0).wait(1).to({x:1797.3,y:193.25},0).wait(1).to({x:1790.95,y:191.9},0).wait(1).to({x:1784.55,y:190.65},0).wait(1).to({x:1778.05,y:189.4},0).wait(1).to({x:1771.5,y:188.25},0).wait(1).to({x:1764.85,y:187.1},0).wait(1).to({x:1758.1,y:185.95},0).wait(1).to({x:1751.25,y:184.9},0).wait(1).to({x:1744.35,y:183.85},0).wait(1).to({x:1737.4,y:182.85},0).wait(1).to({x:1730.35,y:181.9},0).wait(1).to({x:1723.2,y:181},0).wait(1).to({x:1715.95,y:180.1},0).wait(1).to({x:1708.65,y:179.3},0).wait(1).to({x:1701.25,y:178.5},0).wait(1).to({x:1693.8,y:177.7},0).wait(1).to({x:1686.25,y:177},0).wait(1).to({x:1678.6,y:176.3},0).wait(1).to({x:1670.9,y:175.7},0).wait(1).to({x:1663.1,y:175.1},0).wait(1).to({x:1655.2,y:174.5},0).wait(1).to({x:1647.25,y:174},0).wait(1).to({x:1639.2,y:173.5},0).wait(1).to({x:1631.05,y:173.05},0).wait(1).to({x:1622.85,y:172.65},0).wait(1).to({x:1614.6,y:172.3},0).wait(1).to({x:1606.2,y:171.95},0).wait(1).to({x:1597.75,y:171.7},0).wait(1).to({x:1589.2,y:171.45},0).wait(1).to({x:1580.6,y:171.2},0).wait(1).to({x:1571.9,y:171.05},0).wait(1).to({x:1563.15,y:170.9},0).wait(1).to({x:1554.3,y:170.85},0).wait(1).to({x:1545.35,y:170.75},0).wait(1).to({x:1536.3},0).wait(1).to({x:1527.2,y:170.8},0).wait(1).to({x:1518,y:170.85},0).wait(1).to({x:1508.75,y:170.95},0).wait(1).to({x:1499.4,y:171.1},0).wait(1).to({x:1490,y:171.3},0).wait(1).to({x:1480.45,y:171.5},0).wait(1).to({x:1470.85,y:171.75},0).wait(1).to({x:1461.2,y:172.05},0).wait(1).to({x:1451.45,y:172.4},0).wait(1).to({x:1441.6,y:172.8},0).wait(1).to({x:1431.7,y:173.2},0).wait(1).to({x:1421.7,y:173.65},0).wait(1).to({x:1411.6,y:174.15},0).wait(1).to({x:1401.45,y:174.7},0).wait(1).to({x:1391.2,y:175.25},0).wait(1).to({x:1380.85,y:175.85},0).wait(1).to({x:1370.45,y:176.55},0).wait(1).to({x:1359.95,y:177.2},0).wait(1).to({x:1349.35,y:177.95},0).wait(1).to({x:1338.7,y:178.7},0).wait(1).to({x:1328,y:179.55},0).wait(1).to({x:1317.15,y:180.4},0).wait(1).to({x:1306.25,y:181.25},0).wait(1).to({x:1295.3,y:182.2},0).wait(1).to({x:1284.2,y:183.15},0).wait(1).to({x:1273.05,y:184.15},0).wait(1).to({x:1261.85,y:185.2},0).wait(1).to({x:1250.55,y:186.3},0).wait(1).to({x:1239.15,y:187.45},0).wait(1).to({x:1227.65,y:188.6},0).wait(1).to({x:1216.1,y:189.8},0).wait(1).to({x:1204.5,y:191.05},0).wait(1).to({x:1192.75,y:192.3},0).wait(1).to({x:1180.95,y:193.65},0).wait(1).to({x:1169.1,y:195},0).wait(1).to({x:1157.1,y:196.4},0).wait(1).to({x:1145.05,y:197.85},0).wait(1).to({x:1132.95,y:199.3},0).wait(1).to({x:1120.75,y:200.8},0).wait(1).to({x:1108.45,y:202.4},0).wait(1).to({x:1096.05,y:204},0).wait(1).to({x:1083.6,y:205.6},0).wait(1).to({x:1071.1,y:207.3},0).wait(1).to({x:1058.45,y:209},0).wait(1).to({x:1045.75,y:210.75},0).wait(1).to({x:1033,y:212.55},0).wait(1).to({x:1020.1,y:214.35},0).wait(1).to({x:1007.2,y:216.25},0).wait(1).to({x:994.15,y:218.15},0).wait(1).to({x:981.05,y:220.1},0).wait(1).to({x:967.85,y:222.1},0).wait(1).to({x:954.6,y:224.1},0).wait(1).to({x:941.2,y:226.2},0).wait(1).to({x:927.8,y:228.3},0).wait(1).to({x:914.25,y:230.45},0).wait(1).to({x:900.65,y:232.6},0).wait(1).to({x:887,y:234.85},0).wait(1).to({x:873.25,y:237.1},0).wait(1).to({x:859.4,y:239.4},0).wait(1).to({x:845.45,y:241.75},0).wait(1).to({x:831.45,y:244.1},0).wait(1).to({x:817.35,y:246.55},0).wait(1).to({x:803.2,y:249},0).wait(1).to({x:788.9,y:251.5},0).wait(1).to({x:774.6,y:254.05},0).wait(1).to({x:760.15,y:256.6},0).wait(1).to({x:745.65,y:259.25},0).wait(1).to({x:731.1,y:261.9},0).wait(1).to({x:716.4,y:264.6},0).wait(1).to({x:701.65,y:267.3},0).wait(1).to({x:686.85,y:270.1},0).wait(1).to({x:671.95,y:272.9},0).wait(1).to({x:656.95,y:275.75},0).wait(1).to({x:641.85,y:278.65},0).wait(1).to({x:626.7,y:281.6},0).wait(1).to({x:611.45,y:284.55},0).wait(1).to({x:596.15,y:287.55},0).wait(1).to({x:580.75,y:290.6},0).wait(1).to({x:565.25,y:293.7},0).wait(1).to({x:549.7,y:296.8},0).wait(1).to({x:534.05,y:300},0).wait(1).to({x:518.3,y:303.2},0).wait(1).to({x:502.5,y:306.45},0).wait(1).to({x:486.6,y:309.75},0).wait(1).to({x:470.6,y:313.05},0).wait(1).to({x:454.55,y:316.4},0).wait(1).to({x:438.4,y:319.8},0).wait(1).to({x:422.2,y:323.25},0).wait(1).to({x:405.9,y:326.75},0).wait(1).to({x:389.5,y:330.25},0).wait(1).to({x:373.05,y:333.85},0).wait(1).to({x:356.5,y:337.45},0).wait(1).to({x:339.9,y:341.05},0).wait(1).to({x:323.15,y:344.75},0).wait(1).to({x:306.35,y:348.45},0).wait(1).to({x:289.5,y:352.2},0).wait(1).to({x:272.5,y:356},0).wait(1).to({x:255.45,y:359.85},0).wait(1).to({x:238.35,y:363.75},0).wait(1).to({x:221.15,y:367.65},0).wait(1).to({x:203.85,y:371.6},0).wait(1).to({x:186.45,y:375.6},0).wait(1).to({x:169,y:379.65},0).wait(1).to({x:151.45,y:383.7},0).wait(1).to({x:133.85,y:387.8},0).wait(1).to({x:116.1,y:392},0).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271.4,0,2875.8,926.4);


(lib.squirrel = function(mode,startPosition,loop,reversed) {
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
		var self = this;
		self.stop()
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
	}
	this.frame_2 = function() {
		var self = this
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_184();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.falseAni();
	this.instance_1.setTransform(45.5,98.7,1,1,0,0,0,69,99.2);

	this.instance_2 = new lib.trueani();
	this.instance_2.setTransform(56,98,1,1,0,0,0,62.5,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-1.2,113.10000000000001,199.7);


(lib.progressBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this
		self.countQ.font ="bold 18px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// flash0_ai
	this.instance = new lib.CachedBmp_182();
	this.instance.setTransform(35.2,-40.9,0.5,0.5);

	this.bar = new lib.bar();
	this.bar.name = "bar";
	this.bar.setTransform(46.6,100,1,0.8,0,0,0,12,125);

	this.countQ = new cjs.Text("", "bold 18px 'Rubik'", "#6D4939");
	this.countQ.name = "countQ";
	this.countQ.textAlign = "center";
	this.countQ.lineHeight = 23;
	this.countQ.lineWidth = 68;
	this.countQ.parent = this;
	this.countQ.setTransform(81.8,233.65);

	this.instance_1 = new lib.CachedBmp_181();
	this.instance_1.setTransform(0,193.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_180();
	this.instance_2.setTransform(16,-54.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.countQ},{t:this.bar},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBar, new cjs.Rectangle(0,-54.6,157,331.8), null);


(lib.forcomb = function(mode,startPosition,loop,reversed) {
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
	this.startbtn = new lib.start();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(36.2,105.7,1,1,0,0,0,39.1,41.3);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחרו משחק, 0, חגים ומועדים, 1, חשבון, 2, , ', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(36.15,1.95,1.654,1.654,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-47.4,-17.1,167.1,167), null);


(lib.endfeedback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		self.header.font = "bold 64px Varela Round"
		self.txt.font = "bold 32px Varela Round"
		self.feedback.font = "bold 24px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.restart = new lib.restart();
	this.restart.name = "restart";
	this.restart.setTransform(223.9,313.45,1,1,0,0,0,39.1,41.3);

	this.newgame = new lib.newgame();
	this.newgame.name = "newgame";
	this.newgame.setTransform(360.9,313.45,1,1,0,0,0,39.1,41.3);

	this.feedback = new cjs.Text("", "bold 18px 'Rubik'", "#6D4939");
	this.feedback.name = "feedback";
	this.feedback.textAlign = "center";
	this.feedback.lineHeight = 25;
	this.feedback.lineWidth = 531;
	this.feedback.parent = this;
	this.feedback.setTransform(290.5,204.5);

	this.txt = new cjs.Text("יש לי מלא אגוזים לחורף", "bold 32px 'Rubik'", "#6D4939");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 42;
	this.txt.lineWidth = 395;
	this.txt.parent = this;
	this.txt.setTransform(292.35,131.05);

	this.header = new cjs.Text("כל הכבוד!", "bold 64px 'Rubik'", "#6D4939");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 82;
	this.header.lineWidth = 340;
	this.header.parent = this;
	this.header.setTransform(292.35,32.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D4939").ss(7,1,1).p("Egh8gW1MBD5AAAQE3AADcDcQDcDcAAE3IAAWNQAAE3jcDcQjcDck3AAMhD5AAAQk3AAjcjcQjbjcAAk3IAA2NQAAk3DbjcQDcjcE3AAg");
	this.shape.setTransform(292.35,188.2633,1,1.2878);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egh8AW2Qk3AAjcjcQjbjcgBk3IAA2NQABk3DbjcQDcjcE3AAMBD5AAAQE3AADbDcQDdDcAAE3IAAWNQAAE3jdDcQjbDck3AAg");
	this.shape_1.setTransform(292.35,188.2633,1,1.2878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.header},{t:this.txt},{t:this.feedback},{t:this.newgame},{t:this.restart}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endfeedback, new cjs.Rectangle(-3.5,-3.5,591.7,383.5), null);


(lib.timefeedback = function(mode,startPosition,loop,reversed) {
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
		var self = this;
		self.stop()
		
		self.header.font="bold 64px Varela Round"
		self.txt.font="bold 32px Varela Round"
	}
	this.frame_1 = function() {
		var self = this;
		self.stop()
		self.header.font="bold 64px Varela Round"
		self.txt.font="bold 32px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.continueBtn = new lib.continueBtn();
	this.continueBtn.name = "continueBtn";
	this.continueBtn.setTransform(640.05,516.35,1,1,0,0,0,39.1,41.3);

	this.txt = new cjs.Text("כדאי למהר החורף מתקרב", "bold 40px 'Rubik'", "#6B4834");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 52;
	this.txt.lineWidth = 465;
	this.txt.parent = this;
	this.txt.setTransform(640,269.8);

	this.header = new cjs.Text("נגמר הזמן!", "bold 50px 'Rubik Black'", "#6B4834");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 65;
	this.header.lineWidth = 350;
	this.header.parent = this;
	this.header.setTransform(640,199.2);

	this.instance = new lib.timepic();
	this.instance.setTransform(640,395.4,0.7314,0.7314,0,0,0,84,75.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgwXAhuQk2gBjdjcQjbjbAAk3MAAAgr9QAAk3DbjcQDdjbE2gBMBguAAAQE3ABDcDbQDcDcAAE3MAAAAr9QAAE3jcDbQjcDck3ABg");
	this.shape.setTransform(640,360);

	this.instance_1 = new lib.zzz();
	this.instance_1.setTransform(411,414.3);

	this.instance_2 = new lib.CachedBmp_236();
	this.instance_2.setTransform(360.15,431.7,0.5,0.5);

	this.instance_3 = new lib.squirrel();
	this.instance_3.setTransform(350.05,476.4,1,1,0,0,180,55.9,99.3);

	this.instance_4 = new lib.CachedBmp_243();
	this.instance_4.setTransform(255.4,144.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.header,p:{text:"נגמר הזמן!"}},{t:this.txt,p:{text:"כדאי למהר החורף מתקרב",lineWidth:465}},{t:this.continueBtn}]}).to({state:[{t:this.instance_4},{t:this.header,p:{text:"הפסקה!"}},{t:this.txt,p:{text:"התעייפתי קצת\nעוד מעט נמשיך לקטוף אגוזים",lineWidth:522}},{t:this.continueBtn},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(255.4,144.3,769.1999999999999,431.49999999999994);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(22.8,21.75,0.1664,0.1661,0,0,0,137.1,130.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,47.2,45.3), null);


(lib.starFrame = function(mode,startPosition,loop,reversed) {
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
		var self = this;
		self.stop();
		self.header.font = "bold 30px Varela Round";
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_234();
	this.instance.setTransform(217.4,115.45,0.5,0.5);

	this.forcombo = new lib.forcomb();
	this.forcombo.name = "forcombo";
	this.forcombo.setTransform(912.85,334.6,1,1,0,0,0,7.9,11);

	this.header = new cjs.Text("בחרו משחק ולחצו על התחלה", "30px 'Rubik'", "#6C4027");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 40;
	this.header.lineWidth = 447;
	this.header.parent = this;
	this.header.setTransform(942.3,219.3);

	this.instance_1 = new lib.CachedBmp_233();
	this.instance_1.setTransform(696.5,98,0.5,0.5);

	this.instance_2 = new lib.startSquirrel();
	this.instance_2.setTransform(1220.2,605.2,1,1,0,0,0,47.8,95.8);

	this.instance_3 = new lib.CachedBmp_232();
	this.instance_3.setTransform(88.05,668.05,0.5,0.5);

	this.instance_4 = new lib.tree();
	this.instance_4.setTransform(322.5,357.55,1,1,0,0,0,518.4,358.9);

	this.instance_5 = new lib.startAnimation();
	this.instance_5.setTransform(1065.35,458.2,1,1,0,0,0,1302.2,458.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.header},{t:this.forcombo},{t:this.instance}]}).to({state:[{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.8,0,2426.8,926.4);


(lib.branch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this
		self.timer.font = "Bold 24px Varela Round"
		self.gameName.font = "Bold 24px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.gameName = new cjs.Text("", "24px 'Rubik'", "#FFFFFF");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 32;
	this.gameName.lineWidth = 208;
	this.gameName.parent = this;
	this.gameName.setTransform(1100.9,26.95);

	this.soundBtn = new lib.soundBtn();
	this.soundBtn.name = "soundBtn";
	this.soundBtn.setTransform(74.4,120.9,0.1349,0.1392,0,0,0,160.8,120.4);

	this.clock = new lib.Symbol3();
	this.clock.name = "clock";
	this.clock.setTransform(183.3,121,0.8134,0.8437,0,0,0,22.7,21.8);

	this.stopBtn = new lib.stop();
	this.stopBtn.name = "stopBtn";
	this.stopBtn.setTransform(128.75,120.25,0.1351,0.135,0,0,0,160.6,119.7);

	this.timer = new cjs.Text("", "24px 'Rubik'", "#FFFFFF");
	this.timer.name = "timer";
	this.timer.textAlign = "center";
	this.timer.lineHeight = 32;
	this.timer.lineWidth = 100;
	this.timer.parent = this;
	this.timer.setTransform(253.6,113.3);

	this.instance = new lib.CachedBmp_151();
	this.instance.setTransform(-60.75,-11.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.timer},{t:this.stopBtn},{t:this.clock},{t:this.soundBtn},{t:this.gameName}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.branch, new cjs.Rectangle(-60.7,-11.5,1524.5,196), null);


// stage content:
(lib.Nuts = function(mode,startPosition,loop,reversed) {
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
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this; //שמירה של הבמה
		stage.enableMouseOver(24); //מאפשר מעבר עכבר
		
		canvas.style.direction = "rtl";
		
		WebFontConfig = {
			google: {
				//שנו לשם הפונט שתרצו להשתמש בו
				families: ['Varela Round']
			}
		};
		(function () {
			var wf = document.createElement('script');
			wf.src = ('https' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		})();
		
		init()
		function init() {
			createjs.Sound.registerSound("sounds/falsewav.mp3", "NO");
			createjs.Sound.registerSound("sounds/truemp3.mp3", "YES");
			createjs.Sound.registerSound("sounds/clockwav.mp3", "clock");
		}
		
		
		//משתנים גלובאלים
		var mychoice = 0;
		var qnum; //מספר שאלה
		var press; //יכיל מערך של מסיחים שנבחרו
		var clicked; //יכיל את מספר המסיחים שנבחרו
		var check; //כפתור בדיקה
		var corrects = 0; //כמה תשובות נכונות ענה
		var wrong = -1; //השאלה הקודמת שהייתה
		var bg; //רקע
		var mytime; //זמן
		var timer; //האינרטוול 
		var squirrel //סנאי
		var wrongBefore = true; //האם טעה מקודם - בשביל האנימציה
		var totalTime = 0 //זמן משחק
		var grade = 0 //ציון
		var totalWrong = 0 //מספר טעויות
		var soundOn = true; //סאונד - דלוק או מכובה
		var game; //המערך של המשחק
		var gametime; //זמן לשאלה
		var starFrame;
		var gamename
		firstFrame();
		
		//מסך פתיחה
		function firstFrame() {
			stage.removeAllChildren()
			mychoice = 0
			//הוספת הקומבו לבמה
			starFrame = new lib.starFrame();
			starFrame.x = -100;
			starFrame.y = -10;
			stage.addChild(starFrame);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			starFrame.forcombo.startbtn.alpha = 0.3;
		}
		
		
		//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
		$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			//שמירת הערך שנבחר בקומבו
			console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				starFrame.forcombo.startbtn.alpha = 0.3;
				starFrame.forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				starFrame.forcombo.startbtn.alpha = 1;
				starFrame.forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			}
		}
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			var endOfAni = new lib.endOfAni()
			endOfAni.name = "endOfAni"
			stage.addChild(endOfAni)
			starFrame.gotoAndStop(1);
			endOfAni.addEventListener("removed", gameScreen)
			//if (mychoice == 1) {
			//	holiday();
			//} else if (mychoice == 2) {
			//	math();
			//}
		}
		
		function gameScreen(){
			var message = new lib.startS ()
			message.x = 360;
			message.y =140
			stage.addChild(message)
			message.startBtn.addEventListener("click",gamestart)
			
		}
		function gamestart() {
			if (mychoice == 1) {
				holiday();
			} else if (mychoice == 2) {
				math();
			}
		}
		
		
		
		
		
		var game;
		var gametime;
		
		
		function holiday() {
			gamename = "חגים ומועדים"
			gametime = 60
			game = [
				[ //0
					//[0]השאלה[1]כמהתשובותנכונות[2]נסיונותמענה
					["חגים שיש להם חול המועד", "", 0, false],
		
					["פסח", "text", true, false],
					["חנוכה", "text", false, false],
					["פורים", "text", false, false],
					["סוכות", "text", true, false],
					["ראש השנה", "text", false, false],
					[" יום העצמאות", "text", false, false],
					[" יום כיפור", "text", false, false]
				],
				[ //1
					["כל החגים שחוגגים בתשרי", "", 0, false],
		
					["טו בשבט", "text", false, false],
					["סוכות", "text", true, false],
					["ראש השנה", "text", true, false],
					["שמחת תורה", "text", true, false],
					["פסח", "text", false, false],
					["חנוכה", "text", false, false]
				],
				[ //2
					["שלושת הרגלים", "", 0, false],
		
					["פסח", "text", true, false],
					["שבועות", "text", true, false],
					["סוכות", "text", true, false],
					["חנוכה", "text", false, false],
					["פורים", "text", false, false]
				],
				[ //3
					["כל המנהגים שנוהגים לעשות בפורים", "", 0, false],
		
					["משלוח מנות", "text", true, false],
					["קריאת מגילת אסתר", "text", true, false],
					["ללבוש תחפושות", "text", true, false],
					["להרעיש ברעשנים", "text", true, false],
					["לאכול מצות", "text", false, false],
					["להדליק נרות", "text", false, false],
					["לתקוע בשופר", "text", false, false],
					["לאכול דגים", "text", false, false],
				],
				[ //4
					["כל השמות של חג הפסח", "", 0, false],
		
					["חג החירות", "text", true, false],
					["חג האביב", "text", true, false],
					["חג המצות", "text", true, false],
					["חג הגאולה", "text", true, false],
					["חג ההודיה", "text", false, false],
					["חג המולד", "text", false, false],
		
				],
				[ //5
					["כל המועדים הלאומיים", "", 0, false],
		
					["לג בעומר", "text", false, false],
					["יום העצמאות", "text", true, false],
					["יום ירושלים", "text", true, false],
					["יום האם", "text", false, false],
					["יום השמיטה", "text", false, false],
					["יום הקציר", "text", false, false],
		
				],
				[ //6
					["כל מועדי הצומות", "", 0, false],
		
					["עשרה בטבת", "text", true, false],
					["תשעה באב", "text", true, false],
					["יז בתמוז", "text", true, false],
					["תענית אסתר", "text", true, false],
					["יום הכיפורים", "text", true, false],
					["כד בחשוון", "text", false, false],
					["שלושה עשר באלול", "text", false, false],
					["טו תשרי", "text", false, false],
		
		
				],
				[ //7
					["כל המנהגים והמצוות של חג הפסח", "", 0, false],
		
					["בעור חמץ", "text", true, false],
					["קריאת הגדה", "text", true, false],
					["מכירת חמץ", "text", true, false],
					["הגעלת כלים", "text", true, false],
					["אכילת מצות", "text", true, false],
					["אכילת אוזני המן", "text", false, false],
					["נטיעת עצים", "text", false, false],
					["בניית סוכה", "text", false, false],
					["הדלקת נרות בחנוכיה", "text", false, false],
		
		
				],
				[ //8
					["מה שייך לשיר אחד מי יודע?", "", 0, false],
		
					["13 מידיא", "text", true, false],
					["7 ימי שבתא", "text", true, false],
					["9 ירחי לידה", "text", true, false],
					["6 סדרי משנה", "text", true, false],
					["2 מלכיא", "text", false, false],
					["14 כוכביא", "text", false, false],
					["3 אבות", "text", true, false],
					["10 דיבריא", "text", true, false],
					["חד גדיא", "text", false, false],
					["8 סוכריא ", "text", false, false]
				],
				[ //9
					["במשך שבעת ימי חג הסוכות נוהגים ליטול את 4 המינים אשר מייצגים את הגיוון בעם ישראל. מיהם ארבעת המינים?", lib.holidayQ9, 0, false],
		
					["רימון", "text", false, false],
					["כתוב בתורה לקחת פרי עץ הדר והכוונה היא לפרי אתרוג", "text", true, false],
					["ערבה", "text", true, false],
					["לולב", "text", true, false],
					["תאנה", "text", false, false],
					["שעורה", "text", false, false],
					[lib.holidayQ9A7, "img", false, false],
					[lib.holidayQ9A8, "img", false, false],
					[lib.holidayQ9A9, "img", true, false],
					["זית", "text", false, false],
					["תמר", "text", false, false]
				]
			]
			startgame(); // קריאהלתחילתהמשחק
		
		}
		function math() {
			gamename = "חשבון"
			gametime = 30
			game = [
				[ //0
					//[0] השאלה [1] כמה תשובות נכונות [2] נסיונות מענה
					["הכפולות של הסיפרה 9", "", 0, false],
					//[4] תמיד פולס [2] נכון או לא נכון [1] סוג מסיח [0] תוכן [0]
					[" 27", "text", true, false],
					["19", "text", false, false],
					[" 35  ", "text", false, false],
					[" 45  ", "text", true, false],
					[" 18", "text", true, false],
					["79", "text", false, false],
					[" 60", "text", false, false],
					[" 90", "text", true, false]
		
				],
				[ //1
					["מספרים הקטנים מתוצאת התרגיל 42/6", "", 0, false],
		
					["4", "text", true, false],
					["1", "text", true, false],
					["6", "text", true, false],
					["15", "text", false, false],
					["13", "text", false, false],
					["2", "text", true, false],
					["10", "text", false, false]
				],
				[ //2
					["כל המספרים הזוגיים", "", 0, false],
		
					["22", "text", true, false],
					["33", "text", false, false],
					["44", "text", true, false],
					["55", "text", false, false],
					["9", "text", false, false]
				],
				[ //3
					["לדני יש 64 סוכריות. יוסי לקח לדני חצי מהן. דני רוצה לחלק את הסוכריות לקבוצות שוות. מה יכול להתאים?", lib.mathQ4, 0, false],
		
					["דני יכול לעשות 8 קבוצות כאשר בכל קבוצה יש 4 סוכריות", "text", true, false],
					["שתי קבוצות של 16 סוכריות", "text", true, false],
					["שלוש קבוצות של 11 סוכריות", "text", false, false],
					["שלוש קבוצות של 12 סוכריות", "text", false, false],
					["שתי קבוצות של 14 סוכריות", "text", false, false],
					["שתי קבוצות של 32 סוכריות", "text", false, false],
					[lib.mathQ4A7, "img", false, false],
					[lib.mathQ4A8, "img", false, false],
					[lib.mathQ4A9, "img", true, false],
					["לא ניתן לחלק את הסוכריות לקבוצות שוות", "text", false, false],
					["קבוצה אחת של 32 סוכריות", "text", true, false]
				],
				[ //4
					["כל המספרים הראשוניים", "", 0, false],
		
					["4", "text", false, false],
					["1", "text", true, false],
					["6", "text", false, false],
					["15", "text", false, false],
					["13", "text", true, false],
					["2", "text", true, false],
					["10", "text", false, false]
				],
				[ //5
					["כל המספרים האי זוגיים", "", 0, false],
		
					["28", "text", false, false],
					["9", "text", true, false],
					["35", "text", true, false],
					["128", "text", false, false],
					["14", "text", false, false],
					["77", "text", true, false],
					["100", "text", false, false]
				],
				[ //6
					["כל המספרים המתחלקים ב- 5", "", 0, false],
		
					["5", "text", true, false],
					["20", "text", true, false],
					["28", "text", false, false],
					["15", "text", true, false],
					["30", "text", true, false],
					["44", "text", false, false],
					["55", "text", true, false],
					["14", "text", false, false]
				],
				[ //7
					["כל המספרים המתחלקים גם ב- 2 וגם ב- 7", "", 0, false],
		
					["7", "text", false, false],
					["14", "text", true, false],
					["20", "text", false, false],
					["21", "text", false, false],
					["28", "text", true, false],
					["32", "text", false, false],
					["63", "text", false, false],
					["70", "text", true, false]
				],
				[ //8
					["כל המספרים שהסיפרה 8 מופיעה בערך העשרות", "", 0, false],
		
					["108", "text", false, false],
					["18", "text", false, false],
					["180", "text", true, false],
					["81", "text", true, false],
					["48", "text", false, false],
					["284", "text", true, false],
					["10", "text", false, false]
				],
				[ //9
					["על כל המספרים המתחלקים גם ב- 3 וגם ב- 6", "", 0, false],
		
					["3", "text", false, false],
					["14", "text", false, false],
					["12", "text", true, false],
					["22", "text", false, false],
					["18", "text", true, false],
					["36", "text", true, false],
					["9", "text", false, false],
					["30", "text", true, false],
					["33", "text", false, false],
					["66", "text", true, false],
					["70", "text", false, false]
				]
			];
		
			startgame(); //קריאה לתחילת המשחק
		
		}
		
		
		//איפוס כל הנתונים ותחילת המשחק
		function startgame() {
			stage.removeAllChildren()
			corrects = 0;
			wrong = -1;
			totalTime = 0
			grade = 0
			totalWrong = 0
			wrongBefore = true;
			soundOn = true;
			//שאלה ראשונה
			start();
		}
		//פונקציה של השאלות
		function start() {
		
			var gamelength = game.length
			//רקע
			bg = new lib.bg();
			bg.name = "bg"
			//חישוב אנימציה לרקע אם צדק מקודם
			darkPre = (1 / gamelength) * (corrects - 1)
			if (wrongBefore == false)
				bg.alpha = darkPre;
			else
				bg.alpha = (1 / gamelength) * corrects;
			dark = (1 / gamelength) * corrects
			stage.addChild(bg);
		
			var ani = new createjs.Tween.get(bg).to({
				alpha: dark
			}, 500)
		
		
			//עץ
			var tree = new lib.treeAndGrass()
			tree.x = -80
			stage.addChild(tree)
		
		
			//סנאי
			squirrel = new lib.squirrel()
			squirrel.x = 1100
			squirrel.y = 520
			stage.addChild(squirrel)
		
			//מד התקדמות
			var progressBar = new lib.progressBar()
			progressBar.x = 20
			progressBar.y = 430
			progressBar.name = "progressBar"
			stage.addChild(progressBar)
			progressBar.countQ.text = gamelength + " / " + corrects;
		
			//ירוק למד
			var progressHeight = (190 / gamelength) * corrects //*corrects
			var progress = new createjs.Shape(new createjs.Graphics().f("#9CBB49").drawRect(37.6, 200 - progressHeight, 18, progressHeight));
		
			progressBar.addChild(progress)
		
			//הוספת אגוזים
			for (var v = 0; v < corrects; v++) {
				var place = v % 5 //מיקום בשורה - שארית של 5
				var row = Math.floor(v / 5) //מספר שורה על פי חלוקה ל5
				var nut = new lib.progressNut();
				nut.y = 180 - row * 20;
				nut.x = 101 - place * 13
				progressBar.addChild(nut)
			}
			//מיקום תשובות לפי מספר מסיח
			var answerPlaces = [null, 509.95, 581.95, 678.3, 752.1, 846.65, 411.8, 341.6, 922.25, 1015, 241.65, 173.25];
			//הגרלת שאלה
			qnum = Math.floor(Math.random() * gamelength)
			while (game[qnum][0][3] == true || (wrong == qnum && corrects < gamelength - 1)) //בדיקה האם השאלה כבר נענתה, האם זאת השאלה הקודמת שהייתה והאם זאת השאלה האחרונה
				qnum = Math.floor(Math.random() * gamelength) // אם כן אז המשך להגריל
				//alert(qnum)
			clicked = 0 //כמה לחצתי
		
			//כפתור בדיקה
			check = new lib.check()
		
			check.x = 632
			check.y = 504
			stage.addChild(check); //הוספה לבמה
			//הוספת אירוע לחיצה
			check.addEventListener("click", checkme)
			check.visible = false; //הסתרה
		
			//שאלה
			var theQ = new lib.myQ(); //שמית השאלה
			theQ.x = 327; //מיקום
			theQ.y = 19;
			theQ.name = "question"
			stage.addChild(theQ); //הוספה לבמה
		
			//ענפים
			var branch = new lib.branch()
			branch.name = "branch"
			stage.addChild(branch)
			branch.stopBtn.addEventListener("click", stoptime)
			branch.soundBtn.addEventListener("click", soundOnOff)
			branch.gameName.text = gamename
		
			//אם יש סאונד או לא
			if (soundOn == true)
				branch.soundBtn.gotoAndStop(0)
			else
				branch.soundBtn.gotoAndStop(2)
		
			//טקסט שאלה
				var question = new createjs.Text(game[qnum][0][0], "bold 20px Varela Round", "#46322E"); //הופסת טקסט
			question.textAlign = "right" //יישור לימין
			question.lineWidth = 480
			question.x = 585
			question.y = 40
		
			theQ.addChild(question) //הוספה לשאלה
		
			//אם יש תמונה בשאלה	
			if (game[qnum][0][1] != "") {
				var questimg = new(game[qnum][0][1])
				questimg.x = 10
				questimg.y = 20
				width = questimg.getBounds().width;
				height = questimg.getBounds().height;
				var imagescale;
				//התאמה לגודל	
				if (width > height)
					imagescale = 80 / width
				else
					imagescale = 80 / height
				questimg.scale = imagescale;
		
				//זכוכית מגדלת
				var bigger = new lib.bigger()
				bigger.y = height - 10
				bigger.x = width - 10
				bigger.name = "bigger"
				bigger.scale = 1 / imagescale;
				questimg.addChild(bigger)
				//הוספת פונקציות הגדלה והקטנה
				questimg.addEventListener("rollover", bigImg)
				questimg.addEventListener("rollout", smallImg)
				questimg.name = "questimg"
				theQ.addChild(questimg)
			}
		
			press = new Array(game[qnum].length); //יצירת מערך לפי מספר המסיחים
		
			//הוספת מסיחים
			for (var i = 1; i < game[qnum].length; i++) {
		
				var questionlenght = game[qnum].length - 1;
				var anum = Math.floor(Math.random() * questionlenght + 1);
				while (game[qnum][anum][3] == true)
					anum = Math.floor(Math.random() * questionlenght + 1)
				game[qnum][anum][3] = true
				var answer = new lib.nut(); //יצירת מסיח
				press[i] = false; //סימן שלא לחצו על השאלה
				//מערך תיקונים למסיחים לפי מספר המסיחים כדי שיראו טוב
				var fix = [null, null, null, null, null, null, 70, 30, 10, 50, 80, 20, 0];
				//מיקום מסיח בשורות שונות
				if (i % 2 == 0) {
					answer.y = 300;
				} else {
					answer.y = 155;
				}
				//מיקום לפי מערך מיקומים + תיקונים
				answer.x = answerPlaces[i] - fix[game[qnum].length]
				answer.name = "ans" + anum //שם
				stage.addChild(answer)
		
				console.log(answer.name)
				//טקסט בשאלה
				if (game[qnum][anum][1] == "text") { // בדקנו האם זה טקסט או תמונה. מידע מתוך המסיח
					var theanswer = new createjs.Text(game[qnum][anum][0], "bold 14px Varela Round", "brown");
					theanswer.textAlign = "right"
					theanswer.lineWidth = 90;
					theanswer.y = 50
					theanswer.x = 100
		
		
				} else {
					//תמונה בשאלה
					var theanswer = new(game[qnum][anum][0]) //יצירת תמונה
		
					width = theanswer.getBounds().width;
					height = theanswer.getBounds().height;
		
					//גודל
					var imagescale;
					if (width > height)
						imagescale = 70 / width
					else
						imagescale = 70 / height
					theanswer.scale = imagescale;
					theanswer.x = 90 - imagescale * width
					theanswer.y = 50
					//זכוכית מגדלת
					var bigger = new lib.bigger()
					bigger.y = height - 20
					bigger.x = width - 20
					bigger.scale = 1 / imagescale
					bigger.name = "bigger"
					theanswer.addEventListener("rollover", bigImg)
					theanswer.addEventListener("rollout", smallImg)
		
					theanswer.addChild(bigger)
		
		
		
		
				}
				answer.addChild(theanswer) //הוספה
				//אירועי עכבר
				answer.addEventListener("rollover", over)
				answer.addEventListener("rollout", out)
				answer.cursor = "pointer";
				answer.addEventListener("click", choose);
			}
			//זמן
			mytime = gametime;
			timer = setInterval(clock, 1000)
			//עיצוב שעון
			var min = Math.floor(mytime / 60)
			if (min < 10)
				min = "0" + min;
			var sec = mytime % 60
			if (sec < 10)
				sec = "0" + sec
			branch.timer.text = min + ":" + sec
		
		}
		
		//בלחיצה על כפתור סאונד- מכבה ומדליקה את הסאונד
		function soundOnOff(evt) {
			if (soundOn == true) {
				evt.currentTarget.gotoAndStop(3)
				soundOn = false
				createjs.Sound.muted = true;
		
			} else {
				evt.currentTarget.gotoAndStop(1)
				soundOn = true
				createjs.Sound.muted = false;
		
		
			}
		
		}
		
		//הגדלת תמונה
		function bigImg(evt) {
			var img = evt.currentTarget;
		
			//הגדלה לפי הסקייל הקודם
			width = img.getBounds().width;
			height = img.getBounds().height;
			img.getChildByName("bigger").visible = false
			img.x -= 20
			img.y -= 20
			var imagescale;
		
			//תמונה שאלה -מזיז
			if (img.name == "questimg") {
				img.y -= 20
				if (width > height)
					imagescale = 80 / width
				else
					imagescale = 80 / height
			} else {
				if (width > height)
					imagescale = 70 / width
				else
					imagescale = 70 / height
			}
			img.scale = imagescale * 2;
		}
		//הקטנה
		function smallImg(evt) {
			var img = evt.currentTarget;
		
			width = img.getBounds().width;
			height = img.getBounds().height;
			img.getChildByName("bigger").visible = true
		
			img.x += 20
			img.y += 20
			var imagescale;
			if (img.name == "questimg") {
				img.y += 20
				if (width > height)
					imagescale = 80 / width
				else
					imagescale = 80 / height
			} else {
				if (width > height)
					imagescale = 70 / width
				else
					imagescale = 70 / height
			}
			img.scale = imagescale;
		
		}
		
		//עצירת משחק
		function stoptime() {
			//עצירה של האינטרוול
			clearInterval(timer);
			//הוספת משוב
			var timefeedback = new lib.timefeedback()
			timefeedback.gotoAndStop(1)
			stage.addChild(timefeedback)
			timefeedback.name = "timefeedback"
			timefeedback.continueBtn.addEventListener("click", back)
		
			stage.removeChild(stage.getChildByName("question"))
			//הסרת כפתורים בענף
			var branch = stage.getChildByName("branch");
			branch.timer.visible = false;
			branch.clock.visible = false;
			branch.stopBtn.visible = false;
			branch.soundBtn.visible = false;
			squirrel.visible = false;
			//הסרת מסיחים
			for (var a = 1; a < game[qnum].length; a++) { //לולאה שתעבור על כל המסיחים
				var answer = stage.getChildByName("ans" + a)
				stage.removeChild(answer)
				game[qnum][a][3] = false
			}
		}
		
		//חזרה מעצירת משחק
		function back() {
			stage.removeAllChildren()
			wrongBefore = true
			wrong = qnum;
			start();
		
		}
		
		//זמנים
		function clock(evt) {
			var branch = stage.getChildByName("branch");
			mytime--;
			var min = Math.floor(mytime / 60)
			if (min < 10)
				min = "0" + min;
			var sec = mytime % 60
			if (sec < 10)
				sec = "0" + sec
			branch.timer.text = min + ":" + sec
		
			//נגמר הזמן
			if (mytime == 0) {
				var timefeedback = new lib.timefeedback()
				stage.addChild(timefeedback)
				timefeedback.continueBtn.addEventListener("click", nextQ)
				wrongBefore = true
				totalWrong++
				stage.removeChild(stage.getChildByName("question"))
				var branch = stage.getChildByName("branch");
				branch.timer.visible = false;
				branch.clock.visible = false;
				branch.stopBtn.visible = false;
				branch.soundBtn.visible = false;
				var clockSound = createjs.Sound.play("clock")
		
				for (var a = 1; a < game[qnum].length; a++) { //לולאה שתעבור על כל המסיחים
					game[qnum][a][3] = false
					var answer = stage.getChildByName("ans" + a)
					answer.mouseEnabled = false //נטרול העכבר
				}
				clearInterval(timer);
			}
		
		
		}
		
		//פונקציה שמופעלת בלחיצה על מסיח
		function choose(evt) {
			var object = evt.currentTarget; //מקבלת את המסיח שנלחץ
			//ans11
			var answernum = object.name.charAt(3); //שומרת את המספר
			if (object.name.length > 4)
				answernum = parseInt(answernum.toString() + object.name.charAt(4).toString());
			if (press[answernum] == false) { //בדיקה האם כבר לחצו על המסיח
				press[answernum] = true; //סימון שנלחץ
				clicked++ //הוספה למונה המסיחים שנלחצו
				check.visible = true; //מראה את הכפתור
				object.gotoAndStop(1); //מראה שנלחץ
			} else { //ביטול לחיצה
				press[answernum] = false;
				//עדכון מונה הלחיצות
				clicked--
				//אם אין כפתורים שנבחרו מסתיר את הכפתור
				if (clicked == 0)
					check.visible = false
				object.gotoAndStop(0);
			}
		
		}
		
		//מעבר עכבר על מסיח
		function over(evt) {
			var change = evt.currentTarget //קבלת המסיח
			change.gotoAndStop(2); //שינוי מראה
		}
		//יציאה ממעבר עכבר למסיח
		function out(evt) {
			var change = evt.currentTarget //קבלת המסיח
			var answernum = change.name.charAt(3) //קבלת המספר
		
			//במידה וידנם יותר מ10 מסיחים- הופת התו הרביעי לשם המסיח
			//למסיחים 10 ו11
			if (change.name.length > 4)
				answernum = parseInt(answernum.toString() + change.name.charAt(4).toString());
		
			//חזרה למראה לפי האם המסיח נבחר
			if (press[answernum] == false) {
				change.gotoAndStop(0);
			} else {
				change.gotoAndStop(1);
			}
		}
		
		//בדיקה
		function checkme() {
		
			stage.removeChild(check);
		
			var bubble = new lib.bubble()
			bubble.x = -257
			bubble.y = 19
		
			clearInterval(timer);
			wrongAnswer = false;
			var iswrong = false; //האם טעה- כרגע לא
			for (var a = 1; a < game[qnum].length; a++) { //לולאה שתעבור על כל המסיחים
				game[qnum][a][3] = false
				var answer = stage.getChildByName("ans" + a)
				answer.mouseEnabled = false //נטרול העכבר
				if (press[a] == true) { //אם נלחץ
					var vx = new lib.vx()
					vx.x = 105
					vx.y = 35
					answer.addChild(vx)
					if (game[qnum][a][2] == false) { //אם המסיח לא נכון
						answer.gotoAndStop(3)
						vx.gotoAndStop(0)
						iswrong = true; //סימון שטעה
						wrongAnswer = true;
						wrongBefore = true
		
					} else {
						answer.gotoAndStop(4)
						vx.gotoAndStop(1)
						bubble.gotoAndStop(2)
					}
		
				} else { //אם לא לחץ
					if (game[qnum][a][2] == true) { //אם המסיח כן נכון
						iswrong = true //סימון שטעה
						answer.gotoAndStop(0)
						bubble.gotoAndStop(2)
					}
				}
			}
			if (iswrong == false) //צדק
			{
				bubble.gotoAndStop(3)
				squirrel.gotoAndStop(2)
				game[qnum][0][3] = true;
				corrects++
				wrongBefore = false
				var instance = createjs.Sound.play("YES")
				//חישוב ניקוד על פי הנוסחא 
				grade += Math.floor(100 / ((game.length * (game[qnum][0][2] + 1))));
		
				gamelength = game.length
				var progressBar = stage.getChildByName("progressBar")
				progressBar.countQ.text = gamelength + " / " + corrects;
		
				var progressHeight = (190 / gamelength) * corrects //*corrects
				var progress = new createjs.Shape(new createjs.Graphics().f("#9cbb49").drawRect(37.6, 200 - progressHeight, 18, progressHeight));
		
				progressBar.addChild(progress)
		
				for (var v = 0; v < corrects; v++) {
					var place = v % 5
					var row = Math.floor(v / 5)
					var nut = new lib.progressNut();
					nut.y = 180 - row * 20;
					nut.x = 101 - place * 13
					progressBar.addChild(nut)
				}
		
		
		
		
			} else { //טעה
				totalWrong++
				var instance = createjs.Sound.play("NO")
				squirrel.gotoAndStop(1)
				//לחץ על תשובות לא נכונות
				if (wrongAnswer == false)
					bubble.gotoAndStop(1)
			}
			//כפתור המשיכי
			var continueBtn = new lib.continueBtn()
			continueBtn.x = 632
			continueBtn.y = 504
			continueBtn.cursor = "pointer"
			continueBtn.addEventListener("click", nextQ);
			stage.addChild(continueBtn);
			squirrel.addChild(bubble)
		
		}
		
		//שאלה הבאה
		function nextQ() {
		
			var instance = createjs.Sound.stop("clock")
			wrong = qnum;
			game[qnum][0][2]++
			totalTime += gametime - mytime
			stage.removeAllChildren()
			//בדיקה האם השאלה האחרונה
			if (corrects == game.length) {
				end()
			} else
				start();
		}
		//סיום מסחק
		function end() {
			//רקע
			bg = new lib.bg();
			bg.name = "bg"
		
			stage.addChild(bg);
			//עץ
			var tree = new lib.treeAndGrass()
			tree.x = -80
			stage.addChild(tree)
		
		
			//סנאי
			squirrel = new lib.squirrel()
			squirrel.x = 1100
			squirrel.y = 520
			stage.addChild(squirrel)
		
			var gamelength = game.length
		
			var progressBar = new lib.progressBar()
			progressBar.x = 20
			progressBar.y = 430
			stage.addChild(progressBar)
			progressBar.countQ.text = gamelength + " / " + corrects;
		
			var progressHeight = (190 / gamelength) * corrects //*corrects
			var progress = new createjs.Shape(new createjs.Graphics().f("#DFAB67").drawRect(37.6, 200 - progressHeight, 18, progressHeight));
		
			progressBar.addChild(progress)
		
			for (var v = 0; v < corrects; v++) {
				var place = v % 5
				var row = Math.floor(v / 5)
				var nut = new lib.progressNut();
				nut.y = 180 - row * 20;
				nut.x = 101 - place * 13
				progressBar.addChild(nut)
			}
		
			//זמן וניקוד
			var min = Math.floor(totalTime / 60)
			//if (min < 10)
			//min = "0" + min;
			var sec = totalTime % 60
			if (sec < 10)
				sec = "0" + sec
		
			usertime = min + ":" + sec;
		
			var endfeedback = new lib.endfeedback()
			endfeedback.feedback.text = "הציון שלך: " + grade + " | שגיאות: " + totalWrong + " | זמן כולל: " + usertime;
			endfeedback.x = 347.65
			endfeedback.y = 171.75
		
			stage.addChild(endfeedback)
		
			endfeedback.newgame.addEventListener("click", firstFrame)
			endfeedback.restart.addEventListener("click", restartGame)
		
		}
		//משחק חדש- בדיקה איזה  משחק להפעיל
		function restartGame() {
			if (mychoice == 1) {
				holiday();
			} else if (mychoice == 2) {
				math();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'F051DA0CC0522B40965BE824CE9E5A21',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#CBFFFD",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_201.png?1644147752807", id:"CachedBmp_201"},
		{src:"images/CachedBmp_198.png?1644147752807", id:"CachedBmp_198"},
		{src:"images/CachedBmp_197.png?1644147752807", id:"CachedBmp_197"},
		{src:"images/CachedBmp_234.png?1644147752807", id:"CachedBmp_234"},
		{src:"images/CachedBmp_232.png?1644147752807", id:"CachedBmp_232"},
		{src:"images/CachedBmp_220.png?1644147752807", id:"CachedBmp_220"},
		{src:"images/CachedBmp_151.png?1644147752807", id:"CachedBmp_151"},
		{src:"images/Nuts_atlas_1.png?1644147752588", id:"Nuts_atlas_1"},
		{src:"images/Nuts_atlas_2.png?1644147752589", id:"Nuts_atlas_2"},
		{src:"images/Nuts_atlas_3.png?1644147752589", id:"Nuts_atlas_3"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644147752807", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644147752807", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1644147752807", id:"an.ComboBox"}
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
an.compositions['F051DA0CC0522B40965BE824CE9E5A21'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;