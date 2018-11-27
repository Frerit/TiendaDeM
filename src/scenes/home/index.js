import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView, StatusBar} from "react-native";
import {Header, Left, Button, Icon, Title, Right, Body} from "native-base";
import styles, {colors, sliderWidth, itemWidth} from "./../../styles";

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ENTRIES1} from "./dummy/data";
import SliderEntry from "./component/sliderentry";


class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 1
        };
    }


    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
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
                            <Button transparent>
                                <Icon name='ios-contact-outline' />
                            </Button>
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
                            dotColor={'rgba(255, 255, 255, 0.92)'}
                            dotStyle={styles.paginationDot}
                            inactiveDotColor={colors.black}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                            carouselRef={this._slider1Ref}
                            tappableDots={!!this._slider1Ref}
                        />
                        </View>
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
                                dotColor={'rgba(255, 255, 255, 0.92)'}
                                dotStyle={styles.paginationDot}
                                inactiveDotColor={colors.black}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                carouselRef={this._slider1Ref}
                                tappableDots={!!this._slider1Ref}
                            />
                        </View>
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
                                dotColor={'rgba(255, 255, 255, 0.92)'}
                                dotStyle={styles.paginationDot}
                                inactiveDotColor={colors.black}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                carouselRef={this._slider1Ref}
                                tappableDots={!!this._slider1Ref}
                            />
                        </View>
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
                                dotColor={'rgba(255, 255, 255, 0.92)'}
                                dotStyle={styles.paginationDot}
                                inactiveDotColor={colors.black}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                carouselRef={this._slider1Ref}
                                tappableDots={!!this._slider1Ref}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home; 