import React, { Component } from 'react'
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Container from '../resources/components/Container'
import ListPanel from '../resources/components/ListPanel'
import ProductGridThumbnail from '../resources/components/product/ProductGridThumbnail'
import Grid from '../resources/components/Grid'
import colors from '../resources/styles/MainColor'
import Utils from '../resources/helpers/Utils'
import Header from '../resources/components/Header'

var { height, width } = Dimensions.get('window');
const initWidth = width;
const initHeight = initWidth * (500 / 900)

class ApiData extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('http://192.168.8.102:3000/products')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <Container>
        <Header navigation={this.props.navigation} title="Grid List" />
        <ScrollView>
          {this._renderGridList(this.state.dataSource)}
        </ScrollView>
      </Container>
    );
  }

  _renderGridList(data) {
    return (
      <ListPanel onPressSeeAll={() => this._pressSeeAllProducts({ navBarTitle: data.title })} title={data.title} description={data.description}>
        <Grid>
          {
            data.map((item, idx) => {
              return <ProductGridThumbnail onPress={() => this._pressProduct(item.id)} key={idx} {...item} />
            })
          }
        </Grid>
      </ListPanel>
    )
  }

  _pressProduct() {
    Utils.showMessage('You clicked on a product')
  }

  _pressSeeAllProducts() {
    Utils.showMessage('You clicked to see all products')
  }
}
export default ApiData