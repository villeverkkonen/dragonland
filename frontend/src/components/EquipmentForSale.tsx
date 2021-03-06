import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { EquipmentType } from '../store/equipment/types'
import { buyEquipment } from '../store/hero/actions'

interface EquipmentForSaleProps {
  gold: number
  herosEquipment: EquipmentType[]
  equipment: EquipmentType
  buyEquipment: (equipment: EquipmentType) => void
}

interface EquipmentForSaleState {
  heroReducer: {
    gold: number
    equipment: EquipmentType[]
  }
}

interface DispatchProps {
  buyEquipment: (equipment: EquipmentType) => void
}

export class EquipmentForSale extends React.Component<
  EquipmentForSaleProps,
  EquipmentForSaleState
> {
  buyEquipment = (equipment: EquipmentType) => {
    this.props.buyEquipment(equipment)
  }

  render() {
    const { gold, herosEquipment } = this.props as EquipmentForSaleProps
    return (
      <div className="equipment-for-sale">
        <p>{this.props.equipment.title}</p>

        {this.props.equipment.stats.map((stat) => {
          return <div key={stat.title}>{stat.title + ': +' + stat.points}</div>
        })}

        <p>Price: {this.props.equipment.price}</p>
        <img
          src={this.props.equipment.imageUrl}
          alt={this.props.equipment.title}
          className="equipment-img equipment-for-sale-img"
        />
        {gold >= this.props.equipment.price &&
        !herosEquipment.includes(this.props.equipment) ? (
          <button
            onClick={() => this.buyEquipment(this.props.equipment)}
            className="button buy-equipment-btn"
          >
            Buy
          </button>
        ) : (
          <button disabled className="button buy-equipment-btn no-gold">
            No gold
          </button>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: EquipmentForSaleState) => ({
  gold: state.heroReducer.gold,
  herosEquipment: state.heroReducer.equipment,
})

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  buyEquipment: (equipment: EquipmentType) => dispatch(buyEquipment(equipment)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentForSale)
