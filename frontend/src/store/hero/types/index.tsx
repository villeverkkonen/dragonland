import { EquipmentType } from "../../equipment/types";

export interface HeroType {
  name: string;
  gold: number;
  life: number;
  attack: number;
  defense: number;
  maxHit: number;
  everyEquipmentCollected: boolean;
  roundsFought: number;
  hits: number;
  equipment: EquipmentType[];
};