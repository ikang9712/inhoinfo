import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true}
) {
    const {receiveShadow, castShadow } = options
    return new Promise((resolve, reject)=> {
        const loader = new GLTFLoader()
        loader.load(
            // resource URL
            glbPath,
            // called when resource is loaded
            gltf => {
                const obj = gltf.scene
                obj.name = '3d-model'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)
                obj.traverse(function (child){
                    if(child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })

                resolve(obj)
            },
            // called while loading is progressing
            undefined,
            // called when loading has errors
            function (error) {
                reject(error)
            }
        )
    })
}