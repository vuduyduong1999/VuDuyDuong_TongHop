/* eslint-disable react/destructuring-assignment */
import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native'

import {
  back, refresh, male, female, butonBg,
} from '../../assets/images'

const { width } = Dimensions.get('window')
const rateScreen = width / 375
const Font = {
  normalSF: {
    fontFamily: 'SFProText-Regular',
  },
  semiBoldSF: {
    fontFamily: 'SFProText-Semibold',
  },
  BoldSF: {
    fontFamily: 'SFProText-Bold',
  },

}

class CalculatorBMI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heightValue: '176',
      weightValue: '63',
      isSelectedText1: false,
      isSelectedText2: false,
      bmi: '0',
      isModalVisible: false,
    }
  }

  handleHeightTextChange = (text) => { this.setState({ heightValue: text }) }

  handleWeightTextChange = (text) => { this.setState({ weightValue: text }) }

  text1selected = () => {
    this.setState({
      isSelectedText1: true,
    })
  }

  text2selected = () => {
    this.setState({
      isSelectedText2: true,
    })
  }

  textmove = () => {
    this.setState({
      isSelectedText1: false,
      isSelectedText2: false,

    })
  }

  calculatorBMI = () => {
    const { weightValue, heightValue } = this.state
    const rs = weightValue / ((heightValue / 100) * (heightValue / 100))
    this.setState({
      bmi: rs.toFixed(1),
      isModalVisible: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalVisible: false,
    })
  }

  setDefaut = () => {
    this.setState({
      heightValue: '0',
      weightValue: '0',
    })
  }

  render() {
    return (
      <View style={styles.contain}>
        <View>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 * rateScreen, paddingTop: 34 * rateScreen,
          }}
          >
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={back} />
                <Text style={{
                  paddingLeft: 16 * rateScreen, ...Font.normalSF, fontSize: 16 * rateScreen, color: '#72909D',
                }}
                >
                  Weight Diary
                </Text>
              </View>
              <Text style={{ fontSize: 28 * rateScreen, ...Font.normalSF, color: '#E0F2F1' }}>
                <Text style={{ ...Font.semiBoldSF }}>BMI </Text>
                Calculator
              </Text>
            </View>
            <TouchableOpacity onPress={this.setDefaut}>
              <Image source={refresh} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 * rateScreen }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 * rateScreen }}>
            <TouchableOpacity style={{
              width: 144 * rateScreen,
              height: 144 * rateScreen,
              backgroundColor: 'rgba(114,144,157,0.15)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10 * rateScreen,
            }}
            >
              <Image source={male} />
              <Text style={{
                ...Font.semiBoldSF, color: '#72909D', fontSize: 18 * rateScreen, paddingTop: 18 * rateScreen,
              }}
              >
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              width: 144 * rateScreen,
              height: 144 * rateScreen,
              backgroundColor: 'rgba(114,144,157,1)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10 * rateScreen,
            }}
            >
              <Image source={female} />
              <Text style={{
                ...Font.semiBoldSF, color: '#fff', fontSize: 18 * rateScreen, paddingTop: 18 * rateScreen,
              }}
              >
                Female
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 32 * rateScreen }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16 * rateScreen }}>
              <View style={{
                width: 144 * rateScreen,
                height: 72 * rateScreen,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <Text style={{ ...Font.normalSF, fontSize: 14 * rateScreen, color: '#72909D' }}>
                  <Text style={{ ...Font.BoldSF, color: '#E0F2F1' }}>cm </Text>
                  ft
                </Text>
              </View>
              <View style={{
                backgroundColor: '#2F3F4B',
                width: 144 * rateScreen,
                height: 72 * rateScreen,
                borderRadius: 31 * rateScreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >
                <TextInput
                  // eslint-disable-next-line react/destructuring-assignment
                  value={this.state.heightValue}
                  onFocus={this.text1selected}
                  onTouchEnd={this.textmove}
                  onChangeText={this.handleHeightTextChange}
                  style={{
                    color: this.state.isSelectedText1 ? '#fff' : '#72909D',
                    ...Font.BoldSF,
                    fontSize: 36 * rateScreen,
                  }}
                  placeholder="0"
                  placeholderTextColor="#72909D"
                  keyboardType="numeric"
                />
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16 * rateScreen }}>
              <View style={{
                width: 144 * rateScreen,
                height: 72 * rateScreen,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <Text style={{ ...Font.normalSF, fontSize: 14 * rateScreen, color: '#72909D' }}>
                  <Text style={{ ...Font.BoldSF, color: '#E0F2F1' }}>kg </Text>
                  lb
                </Text>
              </View>
              <View style={{
                backgroundColor: '#2F3F4B',
                width: 144 * rateScreen,
                height: 72 * rateScreen,
                borderRadius: 31 * rateScreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >
                <TextInput
                  // eslint-disable-next-line react/destructuring-assignment
                  value={this.state.weightValue}
                  onFocus={this.text2selected}
                  onTouchEnd={this.textmove}
                  onChangeText={this.handleWeightTextChange}
                  style={{
                    color: this.state.isSelectedText2 ? '#fff' : '#72909D',
                    ...Font.BoldSF,
                    fontSize: 36 * rateScreen,
                  }}
                  placeholder="0"
                  placeholderTextColor="#72909D"
                  keyboardType="numeric"
                />
              </View>
            </View>

          </View>
          <TouchableOpacity
            onPress={this.calculatorBMI}
            style={{
              width: 312 * rateScreen,
              height: 54 * rateScreen,
              borderRadius: 27 * rateScreen,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={butonBg}
              resizeMode="contain"
              style={{
                width: 312 * rateScreen,
                height: 54 * rateScreen,
              }}
            />
            <Text style={{
              position: 'absolute',
              ...Font.BoldSF,
              fontSize: 18 * rateScreen,
              color: '#E0F2F1',
            }}
            >
              Calculate your BMI
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.isModalVisible}
          animationType="slide"
          transparent
        >
          <View style={{
            flex: 1, backgroundColor: 'rgba(50,65,72,0.7)', justifyContent: 'center', alignItems: 'center',
          }}
          >
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#72909D',
              width: 250 * rateScreen,
              height: 250 * rateScreen,
              borderRadius: 15 * rateScreen,
            }}
            >
              <Text style={{ ...Font.BoldSF, fontSize: 36 * rateScreen, color: '#fff' }}>
                Your BMI
              </Text>
              <Text style={{
                ...Font.BoldSF, fontSize: 72 * rateScreen, paddingTop: 17 * rateScreen, color: '#fff',
              }}
              >
                {this.state.bmi}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 30 * rateScreen,
                right: 29 * rateScreen,
                width: 50 * rateScreen,
                height: 50 * rateScreen,
                backgroundColor: '#72909D',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10 * rateScreen,
              }}
              onPress={this.closeModal}
            >
              <Text style={{ ...Font.BoldSF, fontSize: 20 * rateScreen, color: '#fff' }}>X</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#37474F',
  },
})
export default CalculatorBMI
