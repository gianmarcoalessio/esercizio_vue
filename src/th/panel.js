import * as T from "three"
  
  export function myPanel(x,y,z,full,ori) {
        var pos=[
            0,0,z, x,0,z, x,y,z, x,y,z, 0,y,z, 0,0,z, 
            0,0,0, x,y,0, x,0,0, x,y,0, 0,0,0, 0,y,0, 
            x,0,0, x,y,z, x,0,z, x,y,z, x,0,0, x,y,0,
            0,0,0, 0,0,z, 0,y,z, 0,y,z, 0,y,0, 0,0,0,
            0,y,0, x,y,z, x,y,0, x,y,z, 0,y,0, 0,y,z,
            0,0,0, x,0,0, x,0,z, x,0,z, 0,0,z, 0,0,0
        ]

        var norm=[  0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1, // front  
                    0, 0,-1,  0, 0,-1,  0, 0,-1,  0, 0,-1,  0, 0,-1,  0, 0,-1, // back
                    1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0, // right
                   -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, // left
           //         0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0, // top
           //         0,-1, 0,  0,-1, 0,  0,-1, 0,  0,-1, 0,  0,-1, 0,  0,-1, 0  // bottom
            ]
        var uv=[ 0,0,1,0,1,1,1,1,0,1,0,0,
                 0,0,1,1,1,0,1,1,0,0,0,1,   
                 0,0,1,1,1,0,1,1,0,0,0,1,   
                 0,0,1,0,1,1,1,1,0,1,0,0,
                 0,0,1,1,1,0,1,1,0,0,0,1,   
                 0,0,1,0,1,1,1,1,0,1,0,0
            ]
   
                 var tm = new T.BufferGeometry();
        tm.setAttribute('position',new T.BufferAttribute(new Float32Array(pos), 3));
        tm.setAttribute('normal', new T.BufferAttribute(new Float32Array(norm), 3));
        tm.setAttribute('uv',new T.BufferAttribute(new Float32Array(uv), 2));
        return tm;
  }
 