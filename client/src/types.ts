import { Mesh, BufferGeometry, Material, Vector3, Euler } from 'three';
import { ThreeEvent } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';

// Enums
export enum SupportedLocations {
  Iowa = 'G_Iowa',
  Nevada_Depot = 'G_Nevada',
  Texas_ASP = 'G_Texas_ASP',
  Texas_Unit = 'G_Texas_Unit',
  Germany_Depot = 'G_Germany',
  Poland_ASP = 'G_Poland',
  Poland_Unit = 'G_Poland_Unit',
}

export enum SupportedASPLocations {
  Seg_Ammo = 'G_Segregated_Ammunition',
  Inbound_Inspection = 'G_Inbound_Inspection',
}

export enum UserType {
  ItemManager = 'Item Manager',
  AccountableOfficer = 'Accountable Officer',
}

export enum LocationType {
  Map = 'MAP',
  ASP = 'ASP',
  Depot = 'DEPOT',
  Manufacturer = 'MANUFACTURER',
  Unit = 'UNIT',
  Seg_Ammo = 'SEGREGATED AMMUNITION STORAGE AREA',
  Inbound_Inspection = 'INBOUND INSPECTION AREA',
}

export enum TransitTypes {
  Train = 'train',
  Truck = 'truck',
  Air = 'air',
}

export enum ItemType {
  TankRound = '120mm Tank Round',
  HighExplosiveRound = '40mm Ammo',
  Flare = 'Flare',
  // Addtional items for the bunker storage
  ThaadMissile = 'THAAD MISSILE',
  PropellingCharge = 'PROPELLING CHARGE',
  FiftyCalAmmoLinked = '50 CAL AMMO, LINKED',
  Explosive = 'EXPLOSIVE',
  Tracer = 'TRACER',
  PatriotPac2Missile = 'PATRIOT PAC-2 MISSILE',
  PatriotPac3Missile = 'PATRIOT PAC-3 MISSILE',
  PatriotPac2GemPlus = 'PATRIOT PAC-2 GUIDANCE ENHANCED MISSILE PLUS (GEM+)',
  Sabot = 'SABOT',
  Primer = 'PRIMER',
}

export enum FilterByRegions {
  All = 'All',
  CONUS = 'CONUS',
  Europe = 'Europe',
}

export enum PinLocations {
  Segregated_Ammunition,
  Inbound_Inspection,
  Decontamination_Cleaning,
  Equipment_Maintenance,
  Rail_Outbound,
  Stowing_Unstowing,
  Retrograde_Staging,
  Helicopter_Loading_Sling,
  Container_Repair_Facility,
  FlatRack_Container_Exchange,
  Outbound_Inspection,
}

// Redux
export interface MapState {
  panelView: LocationType;
  currentMapLocation: SupportedLocations | undefined;
  currentASPLocation: string | undefined;
  showProcessFlowModal: boolean;
  showStockTransportModal: boolean;
  showStockTransportToast: boolean;
  stockTransportNumber: string | undefined;
  resetMap: boolean;
  currentRegionFilter: FilterByRegions;
  resetDetailedASP: boolean;
  selectedBunkerId: number;
  genericSTO: boolean;
  stoSubmitted: boolean;
  aspPinClicked: PinLocations | undefined;
}
export interface SetPanelViewAction {
  panelView: LocationType;
}

export interface SetCurrentMapLocationAction {
  currentMapLocation: SupportedLocations | undefined;
}

export interface SetCurrentASPLocationAction {
  currentASPLocation: string | undefined;
}

export interface SetShowProcessFlowModalAction {
  showProcessFlowModal: boolean;
}

export interface SetShowStockTransportModalAction {
  showStockTransportModal: boolean;
}

export interface SetShowStockTransportToastAction {
  showStockTransportToast: boolean;
  stockTransportNumber: string | undefined;
}

export interface SetResetMapAction {
  resetMap: boolean;
}

export interface SetCurrentRegionFilterAction {
  currentRegionFilter: FilterByRegions;
}

export interface SetResetDetailedASPAction {
  resetDetailedASP: boolean;
}

export interface SetSelectedBunkerIdAction {
  selectedBunkerId: number;
}

export interface SetGenericSTOAction {
  genericSTO: boolean;
}

export interface SetStoSubmittedAction {
  stoSubmitted: boolean;
}

export interface SetAspPinClickedAction {
  aspPinClicked: PinLocations | undefined;
}

export interface AuthState {
  user: User;
}

export type User = {
  id: number;
  name: string;
  role: UserType;
  description?: string;
  location?: string;
  stockType?: string;
  profilePicSrc?: string;
};
export interface SetUserAction {
  user: {
    id: number;
    name: string;
    role: UserType;
    description?: string;
    location?: string;
    stockType?: string;
  };
}

export interface StoState {
  item: string;
  quantity: string;
  from: string;
  from_sloc?: string;
  to: string;
  to_sloc?: string;
  date: string;
  reason: string;
}

export interface SetStoItemAction {
  item: string;
}
export interface SetStoQuantityAction {
  quantity: string;
}
export interface SetStoFromAction {
  from: string;
}
export interface SetStoFromSlocAction {
  from_sloc: string;
}
export interface SetStoToAction {
  to: string;
}
export interface SetStoToSlocAction {
  to_sloc: string;
}
export interface SetStoDateAction {
  date: string;
}
export interface SetStoReasonAction {
  reason: string;
}

// GLTFs & Three.js
export type MapGLTF = GLTF & {
  nodes: {
    Plane027: THREE.Mesh;
    Plane027_1: THREE.Mesh;
    Plane047: THREE.Mesh;
    Plane047_1: THREE.Mesh;
    G_pin_Texas_Unit: THREE.Mesh;
    G_pin_Poland_Unit: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane009_1: THREE.Mesh;
    Plane009_2: THREE.Mesh;
    Plane009_3: THREE.Mesh;
    Curve003: THREE.Mesh;
    Curve003_1: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve001_1: THREE.Mesh;
    Curve001_2: THREE.Mesh;
    Curve004: THREE.Mesh;
    Curve004_1: THREE.Mesh;
    Curve006: THREE.Mesh;
    Curve006_1: THREE.Mesh;
    Curve006_2: THREE.Mesh;
    Plane040: THREE.Mesh;
    Plane040_1: THREE.Mesh;
    Plane040_2: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane001_1: THREE.Mesh;
    Curve024: THREE.Mesh;
    Curve024_1: THREE.Mesh;
    Curve024_2: THREE.Mesh;
    Curve024_3: THREE.Mesh;
    Curve285: THREE.Mesh;
    Curve285_1: THREE.Mesh;
    Curve285_2: THREE.Mesh;
    Curve285_3: THREE.Mesh;
    Curve285_4: THREE.Mesh;
    Plane037: THREE.Mesh;
    Plane037_1: THREE.Mesh;
    Plane037_2: THREE.Mesh;
    Plane038: THREE.Mesh;
    Plane038_1: THREE.Mesh;
    Plane039: THREE.Mesh;
    Plane039_1: THREE.Mesh;
  };
  materials: {
    g_poland_combined: THREE.MeshStandardMaterial;
    g_warehouses_01_combined: THREE.MeshStandardMaterial;
    g_germany_combined: THREE.MeshStandardMaterial;
    g_warehouses_asp_combined: THREE.MeshStandardMaterial;
    M_patches: THREE.MeshStandardMaterial;
    M_Poland_Unit: THREE.MeshStandardMaterial;
    g_Tanks_Shadow: THREE.MeshStandardMaterial;
    g_tanks_combined: THREE.MeshStandardMaterial;
    g_iowa_combined: THREE.MeshStandardMaterial;
    g_warehouses_depo_combined: THREE.MeshStandardMaterial;
    g_texas_combined: THREE.MeshStandardMaterial;
    g_nevada_combined: THREE.MeshStandardMaterial;
    M_ASP_Shadow: THREE.MeshStandardMaterial;
    M_pinShadows: THREE.MeshStandardMaterial;
    M_extraPins: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    M_Plants: THREE.MeshStandardMaterial;
    M_WM_East: THREE.MeshStandardMaterial;
    M_WM_West: THREE.MeshStandardMaterial;
    g_baseplane_combined: THREE.MeshStandardMaterial;
    g_baseplane_extension_combined: THREE.MeshStandardMaterial;
    M_US_States: THREE.MeshStandardMaterial;
    M_pins: THREE.MeshStandardMaterial;
  };
};

export interface MeshObject {
  [name: string]: Mesh<BufferGeometry, Material | Material[]>;
}

export interface MeshObjectProps {
  name: string;
  gltf: string;
  position?: Vector3 | [number, number, number];
  rotation?: Euler | [number, number, number];
  scale?: Vector3 | number;
  onPointerOver?: (event: ThreeEvent<PointerEvent>) => void;
  onPointerOut?: (event: ThreeEvent<PointerEvent>) => void;
}

// Map Left Panel

export type SupportedUnitsOrLocations = {
  icon: string;
  location?: string;
};

export enum UpcomingEventTypes {
  Gunnery = 'Gunnery',
  Deployment = 'Deployment',
}

export enum DescriptionTagTypes {
  Transit = 'Transit',
  Date = 'Date',
  Training = 'Training',
  Backordered = 'Backordered',
}

export type DescriptionTagData = {
  tagType: DescriptionTagTypes;
  date?: string;
  transitType?: TransitTypes;
  estimatedDate?: boolean;
};

export enum CardTypes {
  ForecastedStockAndTurnIns, // Recommended Stock Transports, Scheduled Issues/Turn-ins (Map and ASPs)
  TotalItemStock,
  ShipmentsAndIssues, // Stock in Transit, Upcoming Shipments, Scheduled Issues/Turn-ins (Units)
  LocationItemStock,
  ProductionRate,
  UpcomingEvents,
  Notifications,
  AvailableStock,
  Bunker,
  DetailedShipment,
}

export type ForecastedStockAndTurnIns = {
  recLocationName: string;
  recLocationAddr?: string;
  recLocationId?: string;
  recShipmentAmount?: number;
  turnIn?: boolean;
  recReorderDate?: string;
  reason?: string;
  iconSrc?: string;
  tags?: DescriptionTagData[];
};

export type TotalItemStock = {
  locationType: LocationType;
  stockId: string;
  stockName: string;
  stockOnHand?: number;
  percentOfAuthorized?: number; // for all other location types
  percentCapacity?: number; // for Manufacturers
  productionRate?: number; // for Manufacturers
  region?: string; // currentRegionFilter on map state
};

export type Item = {
  stockName: ItemType;
  stockId?: string;
  stockOnHand?: number;
  percentOfAuthorized?: number;
  // LocationItemStock card specific data
  stockIncoming?: number;
  stockOutgoing?: number;
  subcomponentsOnHand?: any;
  wipStock?: number;
  recSafetyStock?: number;
  // Production Rate card specific data
  productionRate?: number;
  percentCapacity?: number;
  shiftsPerDay?: number | string;
  // Available Stock card specific data
  stockDueIn?: number;
  stockProjIssuance?: number;
  // Detailed Shipments data
  shipmentStockAmt?: number;
};

export enum ShipmentStatus {
  BadLot = 'Bad Lot',
  Passed = 'Passed',
}

export type ShipmentsAndIssues = {
  region: string;
  originName: string;
  originId?: string;
  destinationName: string;
  destinationId?: string;
  shipmentAmount?: number; // this field is not used for the Detailed ASP shipments, use the shipmentStockAmt field in the Item type
  tags?: DescriptionTagData[];
  // Detailed Shipments data
  items?: Item[];
  shipmentId?: string;
  status?: ShipmentStatus;
};

export type UpcomingEvents = {
  event: UpcomingEventTypes;
  date: string;
  location: string;
};

export type Notifications = {
  message: string;
  date?: string;
  time?: string;
  active?: boolean;
};

export type BunkerData = {
  id: number;
  availableRacks: number;
  totalRacks: number;
  items: Item[];
  badLot: boolean;
};
export interface Issue {
  origin: string;
  destination: string;
  amt: number;
  tags: string[];
} // is this the same as a shipment?

export interface Event {
  title: string;
  location: string;
  date: string;
}
