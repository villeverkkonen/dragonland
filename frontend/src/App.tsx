import React, { Dispatch } from 'react';
import Routes from './routes/Routes';
import { connect } from 'react-redux';
import { fetchEquipment } from './store/equipment/actions';

interface DispatchProps {
  fetchEquipment: () => void;
}

class App extends React.Component<DispatchProps> {
  componentDidMount() {
    this.props.fetchEquipment();
  }

  render() {
    return (
      <Routes />
    );
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  fetchEquipment: () => dispatch(fetchEquipment())
});

export default connect(null, mapDispatchToProps)(App);
