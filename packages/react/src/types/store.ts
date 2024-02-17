import {
  ConnectionMode,
  type ConnectionStatus,
  type CoordinateExtent,
  type NodeDimensionUpdate,
  type UpdateNodePositions,
  type NodeOrigin,
  type OnConnect,
  type OnError,
  type OnViewportChange,
  type SelectionRect,
  type SnapGrid,
  type ConnectingHandle,
  type Transform,
  type XYPosition,
  type PanZoomInstance,
  type PanBy,
  type OnConnectStart,
  type OnConnectEnd,
  type OnSelectionDrag,
  type OnMoveStart,
  type OnMove,
  type OnMoveEnd,
  type IsValidConnection,
  type UpdateConnection,
  type EdgeLookup,
  type ConnectionLookup,
  type NodeLookup,
} from '@xyflow/system';

import type {
  Edge,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  DefaultEdgeOptions,
  FitViewOptions,
  OnNodesDelete,
  OnEdgesDelete,
  OnSelectionChangeFunc,
  UnselectNodesAndEdgesParams,
  OnDelete,
  OnNodeDrag,
  OnBeforeDelete,
} from '.';

export type ReactFlowStore<NodeType extends Node = Node> = {
  rfId: string;
  width: number;
  height: number;
  transform: Transform;
  nodes: NodeType[];
  nodeLookup: NodeLookup<NodeType>;
  edges: Edge[];
  edgeLookup: EdgeLookup<Edge>;
  connectionLookup: ConnectionLookup;
  onNodesChange: OnNodesChange<NodeType> | null;
  onEdgesChange: OnEdgesChange | null;
  hasDefaultNodes: boolean;
  hasDefaultEdges: boolean;
  domNode: HTMLDivElement | null;
  paneDragging: boolean;
  noPanClassName: string;

  panZoom: PanZoomInstance | null;
  minZoom: number;
  maxZoom: number;
  translateExtent: CoordinateExtent;
  nodeExtent: CoordinateExtent;
  nodeOrigin: NodeOrigin;
  nodeDragThreshold: number;

  nodesSelectionActive: boolean;
  userSelectionActive: boolean;
  userSelectionRect: SelectionRect | null;

  connectionPosition: XYPosition;
  connectionStatus: ConnectionStatus | null;
  connectionMode: ConnectionMode;

  snapToGrid: boolean;
  snapGrid: SnapGrid;

  nodesDraggable: boolean;
  nodesConnectable: boolean;
  nodesFocusable: boolean;
  edgesFocusable: boolean;
  edgesUpdatable: boolean;
  elementsSelectable: boolean;
  elevateNodesOnSelect: boolean;
  elevateEdgesOnSelect: boolean;
  selectNodesOnDrag: boolean;

  multiSelectionActive: boolean;

  connectionStartHandle: ConnectingHandle | null;
  connectionEndHandle: ConnectingHandle | null;
  connectionClickStartHandle: ConnectingHandle | null;

  onNodeDragStart?: OnNodeDrag<NodeType>;
  onNodeDrag?: OnNodeDrag<NodeType>;
  onNodeDragStop?: OnNodeDrag<NodeType>;

  onSelectionDragStart?: OnSelectionDrag;
  onSelectionDrag?: OnSelectionDrag;
  onSelectionDragStop?: OnSelectionDrag;

  onMoveStart?: OnMoveStart;
  onMove?: OnMove;
  onMoveEnd?: OnMoveEnd;

  onConnect?: OnConnect;
  onConnectStart?: OnConnectStart;
  onConnectEnd?: OnConnectEnd;

  onClickConnectStart?: OnConnectStart;
  onClickConnectEnd?: OnConnectEnd;

  connectOnClick: boolean;
  defaultEdgeOptions?: DefaultEdgeOptions;

  fitViewOnInit: boolean;
  fitViewDone: boolean;
  fitViewOnInitOptions: FitViewOptions | undefined;

  onNodesDelete?: OnNodesDelete;
  onEdgesDelete?: OnEdgesDelete;
  onDelete?: OnDelete;
  onError?: OnError;

  // event handlers
  onViewportChangeStart?: OnViewportChange;
  onViewportChange?: OnViewportChange;
  onViewportChangeEnd?: OnViewportChange;
  onBeforeDelete?: OnBeforeDelete;

  onSelectionChangeHandlers: OnSelectionChangeFunc[];

  ariaLiveMessage: string;
  autoPanOnConnect: boolean;
  autoPanOnNodeDrag: boolean;
  connectionRadius: number;

  isValidConnection?: IsValidConnection;

  lib: string;
};

export type ReactFlowActions<NodeType extends Node> = {
  setNodes: (nodes: NodeType[]) => void;
  setEdges: (edges: Edge[]) => void;
  setDefaultNodesAndEdges: (nodes?: NodeType[], edges?: Edge[]) => void;
  updateNodeDimensions: (updates: Map<string, NodeDimensionUpdate>) => void;
  updateNodePositions: UpdateNodePositions;
  resetSelectedElements: () => void;
  unselectNodesAndEdges: (params?: UnselectNodesAndEdgesParams) => void;
  addSelectedNodes: (nodeIds: string[]) => void;
  addSelectedEdges: (edgeIds: string[]) => void;
  setMinZoom: (minZoom: number) => void;
  setMaxZoom: (maxZoom: number) => void;
  setTranslateExtent: (translateExtent: CoordinateExtent) => void;
  setNodeExtent: (nodeExtent: CoordinateExtent) => void;
  cancelConnection: () => void;
  updateConnection: UpdateConnection;
  reset: () => void;
  triggerNodeChanges: (changes: NodeChange<NodeType>[]) => void;
  panBy: PanBy;
  fitView: (nodes: NodeType[], options?: FitViewOptions) => boolean;
};

export type ReactFlowState<NodeType extends Node = Node> = ReactFlowStore<NodeType> & ReactFlowActions<NodeType>;
