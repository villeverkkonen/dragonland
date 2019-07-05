import { EquipmentType } from "../../equipment/types";

export interface HeroType {
  name: string;
  gold: number;
  life: number;
  equipment: EquipmentType[];
};