var React = require('react-native')
var {StyleSheet} = React

var styles = StyleSheet.create({
  swipeout: {
    backgroundColor: '#dbddde',
    flex: 1,
    overflow: 'hidden',
  },
  swipeoutBtnTouchable: {
    flex: 1,
  },
  swipeoutBtn: {
    alignItems: 'flex-end',
    backgroundColor: '#b6bec0',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingLeft: 20,
    paddingRight: 20
  },
  swipeoutBtnText: {
    color: '#fff',
    textAlign: 'center',
  },
  swipeoutBtns: {
    backgroundColor: '#b6bec0',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  swipeoutContent: {
    flex: 1
  },
  colorDelete: {
    backgroundColor: '#fb3d38',
  },
  colorPrimary: {
    backgroundColor: '#006fff'
  },
  colorSecondary: {
    backgroundColor: '#fd9427'
  },
})

module.exports = styles