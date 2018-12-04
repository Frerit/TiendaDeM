import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView, StatusBar} from "react-native";
import {Header, Left, Button, Icon, Title,
    Right, Body, Container, Tabs, Tab, TabHeading} from "native-base";
import styles, {colors, sliderWidth, itemWidth} from "./../../styles";

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ENTRIES1} from "./dummy/data";
import SliderEntry from "./component/sliderentry";
import ShoppingCartIcon from "../../navigation/component/shoppin-cart";


class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 1
        };
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    render() {
        const { slider1ActiveSlide } = this.state;
        return (
            <SafeAreaView style={styles.safeArea} >
                <View  style={{flex: 1}}>
                    <StatusBar
                        translucent={true}
                        barStyle={'light-content'}
                    />
                    <Header>
                        <Left>
                            <Button transparent onPress={() => console.log("asd")}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                        <Title>Header</Title>
                        </Body>
                        <Right>
                            <ShoppingCartIcon/>
                        </Right>
                    </Header>
                    <ScrollView
                        style={styles.scrollviews}
                        scrollEventThrottle={200}
                        directionalLockEnabled={true}
                    >
                        <View style={styles.exampleContainer}>
                        <Carousel slideStyle={styles.slideInnerContainer}
                                  ref={c => this._slider1Ref = c}
                                  data={ENTRIES1}
                                  renderItem={this._renderItemWithParallax}
                                  sliderWidth={sliderWidth}
                                  itemWidth={itemWidth}
                                  hasParallaxImages={true}
                                  firstItem={1}
                                  inactiveSlideScale={0.94}
                                  inactiveSlideOpacity={0.7}
                                  containerCustomStyle={styles.slider}
                                  contentContainerCustomStyle={styles.sliderContentContainer}
                                  loop={true}
                                  loopClonesPerSide={2}
                                  autoplay={true}
                                  autoplayDelay={500}
                                  autoplayInterval={3000}
                                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                        />
                        <Pagination
                            dotsLength={ENTRIES1.length}
                            activeDotIndex={slider1ActiveSlide}
                            containerStyle={styles.paginationContainer}
                            dotColor={colors.gray}
                            dotStyle={styles.paginationDot}
                            inactiveDotColor={colors.black}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                            carouselRef={this._slider1Ref}
                            tappableDots={!!this._slider1Ref}
                        />
                        </View>
                        <View style={styles.headerTabs}>
                            <Container>
                                <Tabs tabBarUnderlineStyle={{borderBottomWidth:1}} tabBarActiveTextColor={colors.background1}>
                                    <Tab tabStyle={styles.tabContainer}
                                         textStyle={styles.colorText}
                                         activeTabStyle={styles.tabActive}
                                         activeTextStyle={styles.textColorActive}
                                         heading="Herramientas" >
                                        <Text> Test </Text>
                                       {/* <Tab1 />*/}
                                    </Tab>
                                    <Tab tabStyle={styles.tabContainer}
                                         textStyle={styles.colorText}
                                         activeTabStyle={styles.tabActive}
                                         activeTextStyle={styles.textColorActive}
                                         heading="Games">
                                        {/*<Tab2 />*/}
                                    </Tab>
                                    <Tab tabStyle={styles.tabContainer}
                                         textStyle={styles.colorText}
                                         activeTabStyle={styles.tabActive}
                                         activeTextStyle={styles.textColorActive}
                                         heading="Tegnologia" >
                                        {/*<Tab3 />*/}
                                    </Tab>
                                </Tabs>
                            </Container>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home; 