'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View, Dimensions, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import colors from '../../styles/MainColor'

const { width } = Dimensions.get('window')
const prdWidth = (width - 45) / 2

class ProductGridThumbnail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity style={ styles.holder } onPress={ this.props.onPress }>
                <Text style={ styles.productImage }> { this.props.face }</Text>
                <Text style={ styles.name } ellipsizeMode='tail' numberOfLines={2}>
                    { this.props.id }
                </Text>
                <Text>${ this.props.price }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: prdWidth,
        height: prdWidth + 110
    },
    productImage: {
        width: prdWidth,
        height: prdWidth,
        fontSize: prdWidth/6,
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: colors.bd_input
    },
    name: {
        marginTop: 6,
        marginBottom: 6,
        color: colors.txt_description
    },
    promotionHolder: {
        flexDirection: 'row'
    }
})

module.exports = ProductGridThumbnail
