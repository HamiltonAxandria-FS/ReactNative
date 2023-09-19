import { StyleSheet, Text, View } from 'react-native';

export default function Heading({children, level}) {
    const headingLevel = level ? level : 5;
  return (
    <View style={styles.container}>
      <Text accessibilityRolerole={`h${headingLevel}`} >{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
