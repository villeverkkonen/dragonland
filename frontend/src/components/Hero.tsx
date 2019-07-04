import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import Equipment from './Equipment';
import { EquipmentType } from '../store/equipment/types';
import { createHero } from '../store/hero/actions';

interface HeroProps {
  name: string,
  gold: number,
  equipment: EquipmentType[],
  createHero: (name: string) => void;
}

interface HeroState {
  heroReducer: {
    name: string,
    gold: number,
    equipment: EquipmentType[]
  }
}

interface DispatchProps {
  createHero: (name: string) => void;
}

type createHeroParam = React.SyntheticEvent<{ value: string }>;

export class Hero extends React.Component<HeroProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleNameChange = (event: createHeroParam) => {
    this.setState({
      name: event.currentTarget.value
    })
  }

  createHero = () => {
    this.props.createHero(this.state.name);
  }

  render() {
    const { name, gold, equipment } = this.props;
    return (
      <div>
        <div className="hero-form">
          <h3>Create a hero</h3>
          <label htmlFor="input-name">Name:</label>
          <input type="text" id="input-name" autoFocus onChange={this.handleNameChange} />
          <button className="button create-hero-btn" onClick={this.createHero}>Create</button>
        </div>

        {name && name.length > 0
        ?
          <div className="hero-info">
            <h3>Your hero:</h3>
            <p>Name: {name}</p>
            <p>Gold: {gold}</p>
            <h3>Equipments:</h3>
            {equipment && equipment.length > 0
            ?
              <div className="grid-container">
                {equipment.map(equipment => (
                  <div className="grid-item" key={equipment.id}>
                    <Equipment equipment={equipment} key={equipment.id} />
                  </div>
                ))}
              </div>
            : null}
          </div>
        : null}
      </div>
    );
  };
}

const mapStateToProps = (state: HeroState) => ({
  name: state.heroReducer.name,
  gold: state.heroReducer.gold,
  equipment: state.heroReducer.equipment
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  createHero: (name: string) => dispatch(createHero(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);