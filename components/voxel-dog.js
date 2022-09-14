import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'

function easeOutCirc(x) {
    return Math.sqrt(1-Math.pow(x-1,4))
}

const VoxelDog = () => {
    THREE.ColorManagement.legacyMode = false;
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))

    //initial camera position
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI),
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(()=> {
        const { current: container } = refContainer
        if (container && renderer) {
            
            const scW = container.clientWidth
            const scH = container.clientHeight 
            renderer.setSize(scW,scH)
        }
    }, [renderer])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(()=> {
        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW,scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            // inho
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            setRenderer(renderer)

            // camera setting (zoom in out)
            const scale = scH * 0.004
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)
            
            // light setting
            const pl = new THREE.PointLight("#ffffff", 20)
            pl.position.set(0,0,0)
            pl.castShadow = true;
            pl.power = 50
            scene.add(pl)
            const ambientlight = new THREE.AmbientLight('#ffffff',0.1)
            scene.add(ambientlight)

            // control setting
            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target 
            setControls(controls)

            //load file asynchronously, loadGLTFModel outputs Promise with value.
            loadGLTFModel(scene, '/bouche.glb', {
                receiveShadow: true,
                castShadow: true
            }).then(()=> {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0

            //rotating animation
            // const composer = new EffectComposer(renderer)
            const animate = () => {
                req = requestAnimationFrame(animate)
                frame = frame <= 100 ? frame + 1 : frame
                if (frame <= 100){
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 2
                    camera.position.y = 10
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }
                renderer.render(scene, camera)
                // const renderPass = new RenderPass( scene, camera );
                // composer.addPass( renderPass );
                // composer.render()
            }
            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }

        }
    }, [])

    useEffect(()=> {
        window.addEventListener('resize', handleWindowResize, false)
        return() => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    return (
        <Box 
        ref={refContainer}
        className='voxel-dog'
        mt={['-20px','-60px','-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={window.innerWidth > window.innerHeight ? window.innerHeight: window.innerWidth}
        h={window.innerWidth > window.innerHeight ? window.innerHeight: window.innerWidth}
        position={"relative"}
        borderRadius={'lg'}
        overflow={'hideen'}
        >
            {loading && (
                <Spinner 
                size="xl" 
                position="absolute" 
                left="50%"
                top="50%"
                ml="calc(0px-var(--spinner-size)/2)"
                mt="calc(0px-var(--spinner-size))"
                />
            )}
        </Box>
    )
}

export default VoxelDog