import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 34,
    fontWeight: '900',
    color: '#ef6c00',
    marginBottom: 18,
  },
  descricao: {
    fontSize: 20,
    color: '#e65100',
    marginBottom: 28,
    textAlign: 'center',
    lineHeight: 28,
  },
  botao: {
    backgroundColor: '#fb8c00',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 4,
    marginVertical: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: '900',
    fontSize: 18,
  },
});
