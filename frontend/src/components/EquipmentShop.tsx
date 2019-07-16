import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import EquipmentForSale from './EquipmentForSale';
import { EquipmentType } from '../store/equipment/types';
import { everyEquipmentCollected } from '../store/hero/actions';
import { Redirect } from 'react-router';

interface EquipmentShopProps {
  equipment: EquipmentType[];
  herosEquipment: EquipmentType[];
  gold: number;
  name: string;
  everyEquipmentCollected: () => void;
}

interface EquipmentShopState {
  equipmentReducer: {
    equipment: EquipmentType[];
  },
  heroReducer: {
    gold: number;
    equipment: EquipmentType[];
    name: string;
  }
}

interface DispatchProps {
  everyEquipmentCollected: () => void;
}

class EquipmentShop extends React.Component<EquipmentShopProps, EquipmentShopState> {

  componentDidUpdate() {
    if (this.props.herosEquipment.length === this.props.equipment.length) {
      this.everyEquipmentCollected();
    }
  }

  everyEquipmentCollected = () => {
    this.props.everyEquipmentCollected();
  }

  render() {
    const { equipment, herosEquipment, gold, name } = this.props as EquipmentShopProps;

    if (!name) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3>Gold: {gold}</h3>
        {equipment.length > 0
        ?
          <div className="grid-container">
            {equipment.map(equipment => (
              !herosEquipment.includes(equipment)
              ?
                <div className="grid-item" key={equipment.id}>
                  <EquipmentForSale equipment={equipment} />
                </div>
              : null
            ))}
          </div>
        : null}
      </div>
    )
  }
}

const mapStateToProps = (state: EquipmentShopState) => ({
  equipment: state.equipmentReducer.equipment,
  gold: state.heroReducer.gold,
  herosEquipment: state.heroReducer.equipment,
  name: state.heroReducer.name
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  everyEquipmentCollected: () => dispatch(everyEquipmentCollected())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentShop);