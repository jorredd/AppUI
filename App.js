import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Content } from 'native-base'
import Swiper from 'react-native-swiper'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      outerScrollEnabled: true
    }
  }
  verticalScroll = (index) => {
    if (index !== 1) {
      this.setState({
        outerScrollEnabled: false
      })
    }
    else {
      this.setState({
        outerScrollEnabled: true
      })
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Swiper
            loop={false}
            showsPagination={false}
            index={1}
            scrollEnabled={this.state.outerScrollEnabled}
          >
            <View style={styles.slideDefault}>
              <Text style={styles.text}>LEFT!</Text>
            </View>
            {/* SECOND SWIPER STARTS HERE */}
            <Swiper
              loop={false}
              showsPagination={false}
              horizontal={false}
              index={1}
              onIndexChanged={(index) => this.verticalScroll(index)}
            >
              <View style={styles.slideDefault}>
                <Text style={styles.text}>TOP MENU!</Text>
              </View>
              <View style={styles.slideDefault}>
                <Text style={styles.text}>HOME!</Text>
              </View>
              <View style={styles.slideDefault}>
                <Text style={styles.text}>BOTTOM MENU!</Text>
              </View>
            </Swiper>
            {/* SECOND SWIPER ENDS HERE */}
            <View style={styles.slideDefault}>
              <Text style={styles.text}>RIGHT!</Text>
            </View>
          </Swiper>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'

  },
  slideDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100,100,100, .8)'
  }
});
