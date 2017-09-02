import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#fff'
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    padding: 10,
    textAlign: 'center',
    width: 300
  },
  buttonContainer: {
    height: 50,
    borderColor: '#00F',
    borderWidth: 1,
    margin: 2,
    borderRadius: 5,
    width: 300,
    justifyContent: 'center'
  },
  button: {
    textAlign: 'center',
    color: '#00F',
    fontSize: 16,
  },
  link: {
    color: '#00f',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center'
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  feedback: {
    textAlign: 'center'
  }
})
