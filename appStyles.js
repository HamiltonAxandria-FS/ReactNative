import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 'auto',
      backgroundColor: '#FCC8B2',
      alignItems: 'center',
      justifyContent: 'center',
    },
      headings: {
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'DejaVu Sans Mono, monospace',
      },
      smallHeadings: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'DejaVu Sans Mono, monospace',
      },
      bookButton: {
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer"

      },
      textForms: {
      width: '200px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      }
    });

    export default styles;