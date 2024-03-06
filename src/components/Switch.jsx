import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import Pokedex from "./Pokedex";

export function Switch(props) {
  const { nodes, materials } = useGLTF("./../../models/Switch.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.joystick_izq.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_flex_dwn.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_fle_izq.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_fle_sup.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_fle_der.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_captura.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_menos.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.joystick_der.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_b.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_y.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_x.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_a.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_home.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_mas.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trigger_sup.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trigger_down.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mando_1.geometry}
        material={materials.Mando_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.btn_pan.geometry}
        material={materials.botones_grises}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mando_2.geometry}
        material={materials.Mando_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.visualizador.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="Screen"
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={materials.Pantalla}


      >
        <Html transform position={[0, 1, 0]} rotation-x={Math.PI * -0.5}
            position-y={0.7}
            style={{
              backgroundColor: '#BBE2EC',
              width: '325px',
              height: '175px',
              overflowY: 'auto'
            }}
            occlude>
          <Pokedex />
        </Html>

      </mesh>
    </group>
  );
}


useGLTF.preload("./../../models/Switch.gltf");