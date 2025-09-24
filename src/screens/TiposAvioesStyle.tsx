import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#006064',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 18,
    color: '#004d40',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 26,
  },
  botao: {
    backgroundColor: '#00acc1',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 8,
    elevation: 3,
    marginVertical: 9,
  },
  textoBotao: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
