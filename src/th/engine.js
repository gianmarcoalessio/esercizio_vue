import * as T from "three"
import {myPanel} from '@th/panel.js'

export class Engine {
    constructor(sc) {
        this.sc = sc;
        this.textures = {}
        this.mats = {},
        this.objs = {};
        this.init();
        this.nodes = [];
        

    }
    init() {
        this.reset();
        this.mats._ = new T.MeshPhongMaterial({ color: 0xf02020 });
        this.mats.nero = new T.MeshPhongMaterial({ color: 0x202020 });
        this.mats.bianco = new T.MeshPhongMaterial({ color: 0xffffff });
        this.mats.giallo = new T.MeshBasicMaterial({ color: 0xffff00 ,map: this.getTexture('./public/star.png')});
        
       // this.getPanel(1.5,0.5,0.25,'LAP')

    }
    reset() {
        for (var x in this.textures) {
            this.textures[x].dispose();
            delete this.textures[x];
        }
        for (var x in this.mats) {
            this.mats[x].dispose();
            delete this.mats[x];
        }
        for (var x in this.objs) {
            this.objs[x].dispose();
            delete this.objs[x];
        }
    }
    getTexture(file) {
        if (this.textures[file]) return this.textures[file];
        var loader = new T.TextureLoader();
        try {
            this.textures[file] = loader.load(file);
            return this.textures[file];
        } catch (e) {
            console.log('error',e.message);
            return undefined;
        }
    }
    getMat(ky, color, tex) {
        if (this.mats[ky]) return this.mats[ky];
        if (!color && ! tex) return this.mats._;
        var tx = tex ? this.getTexture(tex) : undefined;
        var mat = new T.MeshPhongMaterial({ color, map: tx });
        this.mats[ky] = mat;
        return mat;
    }
    getPanel(x,y,z,LAP='LAP') {
        try {
            var ky=`p${LAP}:${x}:${y}:${z}` // istanza
            if (this.objs[ky])  return this.objs[ky];
            var pp=myPanel(x,y,z,LAP);
            this.objs[ky]=pp;
            return pp;
        } catch (e) {
            console.log("errore",e.message);
        }
    }
    dispose() {
        this.reset();

    }
}
