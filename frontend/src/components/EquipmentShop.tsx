import React from 'react';
import { connect } from 'react-redux';
import EquipmentForSale from './EquipmentForSale';
import { EquipmentType } from '../store/equipment/types';

interface EquipmentShopProps {
  equipment: EquipmentType[];
  gold: number;
}

interface EquipmentShopState {
  equipmentReducer: {
    equipment: EquipmentType[];
  },
  heroReducer: {
    gold: number;
  }
}

class EquipmentShop extends React.Component<EquipmentShopProps, EquipmentShopState> {

  render() {
    const { equipment, gold } = this.props as EquipmentShopProps;
    return (
      <div>
        <h3>Gold: {gold}</h3>
        {equipment.length > 0
        ?
          <div className="grid-container">
            {equipment.map(equipment => (
              <div className="grid-item" key={equipment.id}>
                <EquipmentForSale equipment={equipment}/>
              </div>
            ))}
          </div>
        : null}
      </div>
    )
  }
}

const mapStateToProps = (state: EquipmentShopState) => ({
  equipment: state.equipmentReducer.equipment,
  gold: state.heroReducer.gold
});

export default connect(mapStateToProps)(EquipmentShop);