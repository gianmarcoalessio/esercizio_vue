<template>
    <div ref="th" class="relative h-full w-full overflow-hidden" @ssresize="resizeelement()">
        <slot/>
    </div>
</template>

<script>
import * as T from "three"
import {Engine} from "@th/engine" 
import Stats  from '@jsm/stats';
import { OrbitControls } from '@jsm/orbit.js'
var scene,camera,renderer,amb;

export default {
    data() {
        return  {
            id:undefined
        }
    },
    methods: {
        resizeelement() {
            var el=this.$refs.th;
            var {width,height}=el.getClientRects()[0]
            if (width>0 && height>0) {
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize( width, height );
            }
        }
    },
    mounted() {
        // imposta renderer
        var el=this.$refs.th;
        var {width,height}=el.getClientRects()[0]
        window.addEventListener("resize",this.resizeelement);
        renderer = new T.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.shadowMap.enabled=true;
       // renderer.setPixelRatio(2);
        el.appendChild(renderer.domElement);
        var stats = new Stats();
		el.appendChild( stats.dom );
 
        // camera         
        
        camera = new T.PerspectiveCamera(28, width/height, 0.1, 1000);
        
        // scena 
        scene = new T.Scene();
        amb=new Engine(scene);
        window.amb=amb;
        scene.add( new T.AmbientLight( 0x222244 ) );
        const light = new T.DirectionalLight();
        light.position.set( 0.5, 0.5, 1 );
        light.castShadow = true;
        light.shadow.camera.zoom = 4; // tighter shadow map
        scene.add( light );
        
        //aggiunge pavimento

        var  background = new T.Mesh( new T.PlaneGeometry( 10, 10 ), new T.MeshPhongMaterial( { color: 0x000066 } ) );
        background.receiveShadow = true;
        background.position.set( 0, 0, -1 );
        background.receiveShadow = true;
				
       //    scene.add( background );

       var g=amb.getPanel(1.5,1,0.5);
       var cube = new T.Mesh(
            g,
            amb.mats.giallo

        );
        const edges = new T.EdgesGeometry( g );
        const line = new T.LineSegments( edges, new T.LineBasicMaterial( { color: 0xffffff} ) );
        scene.add(line);
       // cube.rotation.x=Math.PI/2
        cube.castShadow=true;
        cube.receiveShadow = true;
    //    scene.add(cube);
        var controls = new OrbitControls( camera, renderer.domElement );
        controls.maxPolarAngle = Math.PI * 0.5;
        controls.minDistance = 0.1;
        controls.maxDistance = 1000;
/*        var cubeA = new Mesh( geometry, material );
        cubeA.position.set( 2, 0, 0 );

var cubeB = new Mesh( geometry, material );
cubeB.position.set( -2, -1, 0 );

//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
var group = new Group();
group.add( cubeA );
group.add( cubeB );
group.position.set(0.5,0,0);    

    scene.add(group);
*/
/*
var points = [new Vector3( - 1000, 0, 0 ),
                new Vector3( 0, 1000, 0 ),
                new Vector3( 1000, 0, 0 ) 
      ]
      var tm= new BufferGeometry().setFromPoints( points );
      scene.add(new Line( tm,new MeshBasicMaterial({ color: 0xff0000 })));

*/


        camera.position.z = 5;
        var sc=this;
        var animate=()=> {
            sc.id=requestAnimationFrame(animate);
          //  cube.rotation.x += 0.01;
          //  cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            stats.update();
        };
        animate();
    },
    beforeUnmount() {
        amb.reset();
        window.removeEventListener("resize",this.resizeelement);
        window.cancelAnimationFrame(this.id);
    }
}
</script>

<style>

</style>