import { EquipmentType } from '../../equipment/types';
import equipmentService from '../../../services/equipment';
import { Dispatch } from 'react';

export const FETCH_EQUIPMENT = 'FETCH_EQUIPMENT';

export function fetchEquipment() {
  return async (dispatch: Dispatch<any>) => {
    const res = await equipmentService.getEquipment();
    dispatch(fetchEquipmentSuccess(res.equipment.sort(compare)));
    return res;
  }
};

export const fetchEquipmentSuccess = (equipment: EquipmentType[]) => ({
  type: FETCH_EQUIPMENT,
  equipment
});

function compare(a: any, b: any) {
  return a.id - b.id;
}