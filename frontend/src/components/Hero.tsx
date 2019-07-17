import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import Equipment from './Equipment';
import HeroStats from './HeroStats';
import { EquipmentType } from '../store/equipment/types';
import { createHero } from '../store/hero/actions';

interface HeroProps {
  name: string;
  equipment: EquipmentType[];
  createHero: (name: string) => void;
};

interface HeroState {
  heroReducer: {
    name: string;
    equipment: EquipmentType[]
  }
};

interface DispatchProps {
  createHero: (name: string) => void;
};

type createHeroParam = React.SyntheticEvent<{ value: string }>;

export class Hero extends React.Component<HeroProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      nameRequiredWarning: false
    };
  };

  handleNameChange = (event: createHeroParam) => {
    this.setState({
      name: event.currentTarget.value
    });
  };

  createHero = () => {
    if (this.state.name.length > 0 && this.state.name.length < 16) {
      this.props.createHero(this.state.name);
    } else {
      this.setState({ nameRequiredWarning: true });
    }
  };

  render() {
    const { name, equipment } = this.props as HeroProps;

    return (
      <div>
        {name.length === 0 ?
          <div className="hero-form">
            <h3>Create a hero</h3>
            {this.state.nameRequiredWarning
            ? <div className="name-required-warning"><p>Name has to be 1-15 characters</p></div>
            : null}
            <label htmlFor="input-name">Name:</label>
            <input type="text" id="input-name" onChange={this.handleNameChange} autoFocus />
            <button className="button create-hero-btn" onClick={this.createHero}>Create</button>
          </div>
        : null}

        {name && name.length > 0
        ?
          <div className="hero-info">
            <h3>{name}</h3>
            <HeroStats />
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
  equipment: state.heroReducer.equipment
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  createHero: (name: string) => dispatch(createHero(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);