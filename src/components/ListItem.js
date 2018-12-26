import React, { Component } from 'react';
import { Text } from 'react-native';
import  CardSection  from './CardSection.js';
 
class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{this.props.employee}</Text>
      </CardSection>
    );
  }
}
 
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  }
};
 
export default ListItem;