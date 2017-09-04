import { StyleSheet } from 'react-native'

const blue = '#90caf9'
const navy = '#1a237e'
const white = '#fff'
const black = '#000'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: blue
  },
  input: {
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: white,
    margin: 2,
    padding: 10,
    textAlign: 'center',
    width: 300
  },
  buttonContainer: {
    height: 50,
    borderColor: navy,
    backgroundColor: white,
    borderWidth: 1,
    margin: 2,
    borderRadius: 5,
    width: 300,
    justifyContent: 'center'
  },
  button: {
    textAlign: 'center',
    color: navy,
    fontSize: 16,
  },
  link: {
    color: navy,
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
  },
  topics: {
    flex: 1,
    backgroundColor: blue
  },
  header: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    flex: 24
  }
})
