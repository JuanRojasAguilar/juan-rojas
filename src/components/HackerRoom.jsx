import { useGLTF } from "@react-three/drei";

export const HackerRoom = (props) => {
	const { nodes, materials } = useGLTF('/models/iss.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[0, -1.396, -0.436]}>
            <group position={[11.974, 0, -2.01]} rotation={[0, Math.PI / 2, 0]}>
              <group position={[5.928, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.ALM_main}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.ALM_aux}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.ALM_main}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials.ALM_aux}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials['NDS_ports.002']}
                position={[0.206, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials['NDS_ports.002']}
                position={[0.206, 0, 0]}
                rotation={[Math.PI / 3, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_16.geometry}
                material={materials['NDS_ports.002']}
                position={[-0.008, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_18.geometry}
                material={materials['NDS_ports.002']}
                position={[-0.008, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_20.geometry}
                material={materials['NDS_ports.002']}
                position={[-0.008, 0, 0]}
                rotation={[Math.PI, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={materials['NDS_ports.002']}
                position={[0.048, -0.927, -0.001]}
                rotation={[Math.PI, 0, -0.263]}
                scale={0.01}
              />
            </group>
            <group position={[3.77, 1.606, -0.314]} rotation={[-0.209, -Math.PI / 2, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_24.geometry}
                material={materials.DSXR}
              />
              <group position={[0, 0.441, 0]} rotation={[0, 0.873, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.DSXR}
                />
                <group position={[0, 0.151, 0.177]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={materials.DSXR}
                  />
                  <group position={[0.174, 0, 0.152]} rotation={[0.96, 0, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials.DSXR}
                    />
                    <group position={[0.35, 3.658, 0.005]} rotation={[1.309, 0, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_32.geometry}
                        material={materials.DSXR}
                      />
                      <group position={[0.35, -3.658, -0.005]} rotation={[-Math.PI / 6, 0, 0]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_34.geometry}
                          material={materials.DSXR}
                        />
                        <group position={[0.174, 0, 0.152]}>
                          <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_36.geometry}
                            material={materials.DSXR}
                          />
                          <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_38.geometry}
                            material={materials.DSXR}
                            position={[-0.004, -0.181, 0.171]}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group position={[4.445, 0, -1.833]} rotation={[0, Math.PI / 2, 0]}>
              <group position={[-12.015, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41.geometry}
                  material={materials.ERMXL_aux}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.ERMXL_main}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_45.geometry}
                material={materials.NDS_ports}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_47.geometry}
                material={materials.NDS_ports}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_50.geometry}
                material={materials.NDS_ports}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_52.geometry}
                material={materials.NDS_ports}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_54.geometry}
                material={materials.NDS_ports}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_56.geometry}
                material={materials.NDS_ports}
                position={[0.056, -0.001, 0.927]}
                rotation={[Math.PI / 2, 0, -0.176]}
                scale={0.01}
              />
            </group>
            <group position={[8.261, 0, 0]}>
              <group position={[5.496, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.iHab_aux}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.iHab_main}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_59.geometry}
                material={materials.iHab_aux}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_60.geometry}
                material={materials.iHab_main}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_65.geometry}
                material={materials['NDS_ports.001']}
                position={[0.09, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_67.geometry}
                material={materials['NDS_ports.001']}
                position={[3.713, 0, 4.82]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_69.geometry}
                material={materials['NDS_ports.001']}
                position={[3.713, 0, -4.821]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_71.geometry}
                material={materials['NDS_ports.001']}
                position={[0.09, 0, 0]}
                rotation={[2.094, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_73.geometry}
                material={materials['NDS_ports.001']}
                position={[3.713, 0, 4.82]}
                rotation={[Math.PI / 2, -Math.PI / 6, -Math.PI / 2]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_75.geometry}
                material={materials['NDS_ports.001']}
                position={[3.713, 0, -4.821]}
                rotation={[Math.PI / 2, Math.PI / 6, Math.PI / 2]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_77.geometry}
                material={materials['NDS_ports.001']}
                position={[-0.765, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_79.geometry}
                material={materials['NDS_ports.001']}
                position={[-0.765, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_81.geometry}
                material={materials['NDS_ports.001']}
                position={[3.713, 0, 2.024]}
                rotation={[Math.PI, -Math.PI / 2, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_83.geometry}
                material={materials['NDS_ports.001']}
                position={[3.728, 0, -2.023]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_85.geometry}
                material={materials['NDS_ports.001']}
                position={[-0.765, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_87.geometry}
                material={materials['NDS_ports.001']}
                position={[3.712, -0.927, 1.967]}
                rotation={[-2.966, -Math.PI / 2, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_89.geometry}
                material={materials['NDS_ports.001']}
                position={[3.729, -0.927, -1.967]}
                rotation={[2.966, Math.PI / 2, 0]}
                scale={0.01}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_91.geometry}
                material={materials['NDS_ports.001']}
                position={[-0.709, -0.001, 0.927]}
                rotation={[Math.PI / 2, 0, -0.176]}
                scale={0.01}
              />
            </group>
            <group position={[13.984, -1.337, 1.335]} rotation={[2.356, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_93.geometry}
                material={materials.DSXR}
              />
              <group position={[0.44, 0.295, -0.01]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials.DSXR}
                />
                <group position={[0.387, 0.011, 0.008]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_97.geometry}
                    material={materials.DSXR}
                  />
                  <group position={[0.098, -0.105, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_99.geometry}
                      material={materials.DSXR}
                    />
                    <group position={[-0.006, -0.094, 0.105]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_101.geometry}
                        material={materials.DSXR}
                      />
                      <group position={[0.476, 0.009, 0.214]} rotation={[0, 0, 0.611]}>
                        <mesh
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_103.geometry}
                          material={materials.DSXR}
                        />
                        <group position={[0.476, 0.009, 0.214]} rotation={[0, 0, -0.436]}>
                          <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_105.geometry}
                            material={materials.DSXR}
                          />
                          <group position={[0.101, -0.014, 0.105]}>
                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_107.geometry}
                              material={materials.DSXR}
                            />
                            <mesh
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_109.geometry}
                              material={materials.DSXR}
                              position={[0.105, -0.101, 0]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group rotation={[0, Math.PI / 2, 0]}>
              <group position={[-4.99, 0, 4.445]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials.NDS_ports}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_121.geometry}
                  material={materials.NDS_ports}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                />
              </group>
              <group position={[4.985, 0, 4.445]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.NDS_ports}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.NDS_ports}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                />
              </group>
              <group position={[0, 0, 0.674]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_129.geometry}
                  material={materials.NDS_ports}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131.geometry}
                  material={materials.NDS_ports}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_133.geometry}
                material={materials.HALO_main}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_134.geometry}
                material={materials.HALO_aux}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_112.geometry}
              material={materials.PPE_aux}
              position={[-2.755, 0, 0]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_114.geometry}
              material={materials.PPE_main}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_115.geometry}
              material={materials.PPE_aux}
            />
          </group>
        </group>
      </group>
    </group>
	);
};

useGLTF.preload("/models/iss.glb");
