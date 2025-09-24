import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede7f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#512da8',
    marginBottom: 16,
  },
  descricao: {
    fontSize: 18,
    color: '#311b92',
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 26,
  },
  botao: {
    backgroundColor: '#673ab7',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 8,
    elevation: 4,
    marginVertical: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
