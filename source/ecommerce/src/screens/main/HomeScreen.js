import React, { useEffect, useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, FlatList, ScrollView,
} from 'react-native'
import FastImage from 'react-native-fast-image'
// import { } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { Colors, TextStyles } from '../../../assets/styles'
import { Text, ProductCardComponent, MainTitle } from '../../components'
import { SCREEN_NAME } from '../../configs'
import { backgroundFlashSale } from '../../../assets/images'
import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375
const HomeScreen = () => {
  const token = useSelector(createSelector((state) => state.user, (user) => user.token))
  const products = useSelector(createSelector((state) => state.products, (products) => products))
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))
  const handlePressMoreCategory = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ExploreScreen)
  }

  const handleViewProductDetail = (product) => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ProductDetailScreen, { product })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={{ alignItems: 'center', marginBottom: 48 * rate }}>
          <FastImage source={backgroundFlashSale} style={{ width: 343 * rate, height: 206 * rate }} />
          <View style={{ position: 'absolute', top: 32 * rate, right: 110 * rate }}>
            <View>
              <Text style={{ ...TextStyles.heading2, color: Colors.backgroundWhite, width: 209 * rate }}>Super Flash Sale 50% Off</Text>
            </View>
            <OclockCmp timer={36000} />
            {/* <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 150 * rate,
              justifyContent: 'space-between',
              marginTop: 29 * rate,
            }}
            >
              <View style={{
                height: 42 * rate,
                width: 42 * rate,
                backgroundColor: Colors.backgroundWhite,
                borderRadius: 5 * rate,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>08</Text>
              </View>
              <Text style={{ ...TextStyles.heading4, color: Colors.backgroundWhite }}>:</Text>
              <View style={{
                height: 42 * rate,
                width: 42 * rate,
                backgroundColor: Colors.backgroundWhite,
                borderRadius: 5 * rate,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>08</Text>
              </View>
              <Text style={{ ...TextStyles.heading4, color: Colors.backgroundWhite }}>:</Text>
              <View style={{
                height: 42 * rate,
                width: 42 * rate,
                backgroundColor: Colors.backgroundWhite,
                borderRadius: 5 * rate,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>08</Text>
              </View>

            </View> */}
          </View>
        </View>
        <View>
          <MainTitle
            title="Category"
            buttonTitle="More Category"
            onRightButtonPress={handlePressMoreCategory}
          />
          <FlatList
            style={{ marginBottom: 24, marginTop: 12 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            extraData={categories}
            keyExtractor={(item) => `list-category-${item.id}`}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                  <View style={{ alignItems: 'center', marginRight: 12, marginLeft: index === 0 ? 16 : 0 }}>
                    <View style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: Colors.neutralLight,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    >
                      <FastImage
                        source={{ uri: `${item.category_image_file}` }}
                        style={{ width: 24, height: 24 }}
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={{ ...TextStyles.captionNormalTextRegular, color: Colors.neutralGrey, marginTop: 8 }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View>
          <MainTitle
            title="Flash Sale"
            buttonTitle="See More"
            onRightButtonPress={() => { }}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products.flashSale}
            extraData={products}
            keyExtractor={(item) => `list-product-${item?.id}`}
            renderItem={({ item, index }) => {
              return (
                <ProductCardComponent
                  onPress={() => handleViewProductDetail(item)}
                  imageSource={{ uri: item.product_image_file }}
                  title={item.name}
                  currentPrice={Helpers.formatCurrency(parseFloat(item.saledPrice).toFixed(2).toString())}
                  defaultPrice={item?.price}
                  saleOffvalue={`${item.sale}% Off`}
                />
              )
            }}
          />
        </View>
        <View>
          <MainTitle
            title="Mega Sale"
            buttonTitle="See More"
            onRightButtonPress={() => { }}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products.megaSale}
            extraData={products}
            keyExtractor={(item) => `list-product-${item?.id}`}
            renderItem={({ item, index }) => {
              return (
                <ProductCardComponent
                  onPress={() => handleViewProductDetail(item)}
                  imageSource={{ uri: item.product_image_file }}
                  title={item.name}
                  currentPrice={Helpers.formatCurrency(parseFloat(item.saledPrice).toFixed(2).toString())}
                  defaultPrice={item?.price}
                  saleOffvalue={`${item.sale}% Off`}
                />
              )
            }}
          />
        </View>
      </View>

      <FastImage />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
    paddingTop: 16 * rate,
  },
})
const OclockCmp = ({ timer }) => {
  const [time, setTime] = useState(timer)

  useEffect(() => {
    const intet = setInterval(() => {
      clearInterval(intet)
      setTime(time - 1)
    }, 1000)
  })
  const times = Helpers.secondToTime(time)
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      width: 150 * rate,
      justifyContent: 'space-between',
      marginTop: 29 * rate,
    }}
    >
      <View style={{
        height: 42 * rate,
        width: 42 * rate,
        backgroundColor: Colors.backgroundWhite,
        borderRadius: 5 * rate,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>{times[0]}</Text>
      </View>
      <Text style={{ ...TextStyles.heading4, color: Colors.backgroundWhite }}>:</Text>
      <View style={{
        height: 42 * rate,
        width: 42 * rate,
        backgroundColor: Colors.backgroundWhite,
        borderRadius: 5 * rate,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>{times[1]}</Text>
      </View>
      <Text style={{ ...TextStyles.heading4, color: Colors.backgroundWhite }}>:</Text>
      <View style={{
        height: 42 * rate,
        width: 42 * rate,
        backgroundColor: Colors.backgroundWhite,
        borderRadius: 5 * rate,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>{times[2]}</Text>
      </View>

    </View>
  )
}
