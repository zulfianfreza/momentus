'use client';

import ReactFlow, {
  Background,
  Node,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNodes from './custom-nodes';
import CustomControls from './custom-controls';

const nodeTypes = {
  customNodes: CustomNodes,
};

const initialNodes: Node[] = [
  {
    id: '2',
    type: 'customNodes',
    data: { label: 'Node 1' },
    position: { x: 200, y: 200 },
  },
];

export default function PreviewCanvas() {
  const [edges, _, onEdgesChange] = useEdgesState([]);
  const [nodes] = useNodesState(initialNodes);

  return (
    <div className=" h-screen flex-1 pt-[72px]">
      <ReactFlowProvider>
        <ReactFlow
          id="second-step"
          fitView
          edges={edges}
          onEdgesChange={onEdgesChange}
          nodes={nodes}
          nodeTypes={nodeTypes}
          proOptions={{ hideAttribution: true }}
          className=" relative"
        >
          <CustomControls />
          {/* <Background /> */}
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
