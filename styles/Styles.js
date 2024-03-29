import { StyleSheet } from 'react-native';
const Styles = StyleSheet.create({
    //Style Home
    textHeader: {
        paddingHorizontal: 20,
        fontSize: 35,
        paddingTop: 20,
        fontWeight: 'bold',
        color: '#239dad'
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 20,
        paddingLeft: 25,
        height: 38
    },
    viewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 75,
        paddingLeft: 30,
        paddingBottom: 14,
        paddingVertical: 10,
        // backgroundColor:'#fcf1e8'
        backgroundColor: 'white',
    },
    textContent: {
        color: 'black',
        fontSize: 18,
        paddingRight: 100,
        marginTop: 10
    },
    touchContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
        backgroundColor: '#fabc91',
        borderRadius: 14,
        paddingHorizontal: 10,
        marginTop: 25,
        paddingVertical: 10
    },
    imageContent: {
        marginLeft: -40,
        marginTop: 60,
        width: 150,
        height: 150
    },
    viewCategories: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7b181',
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 20,
        paddingVertical: 20
    },
    textContent_2: {
        color: '#239dad',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 10
    },
    //Style translate
    translateImage: {
        width: 50,
        height: 50
    },
    parent: {
        marginLeft: 5
    },
    textInput: {
        paddingLeft: 8,
        padding: 30,
        margin: 5,//lề trên
        backgroundColor: "white",
        borderRadius: 15
    },
    textTo: {
        fontSize: 16,
        marginTop: 5,//lề trên
        marginLeft: 5,
        marginRight: 5,
        color: "#0400ff"
    },
    textOutput: {
        backgroundColor: "white",
        marginLeft: 5,
        marginTop: 5,
        marginRight: 5,
        height: 200,
        padding: 8,
        borderRadius: 15
    },
    fixToText: {
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    //Style themes
    divThemes: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fef3bd",
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    textTheme: {
        color: '#f47373',
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 100,
        marginTop: 10
    },
    vocaFrTitle: {
        fontSize: 20,
        color: '#001dfc',
        fontWeight: 'bold'
    },
    vocaVnTitle: {
        fontSize: 18,
        color: '#2239f0',
        fontWeight: '100'
    },
    feedItem: {
        // height:82,
        // width:330,
        // margin:15,
        // backgroundColor:'white',
        // borderRadius:15,
        // borderWidth: 2,
        // borderColor: 'orange',
        // padding:5,
        // alignItems:"center",
        // flexDirection:"row",
        // marginVertical:4,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fef3bd",
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 10
    },
    vocaDetail: {
        padding: 5,
        backgroundColor: '#ffe4b5'
    },
    vocaHeader: {
        backgroundColor: 'white',
        padding: 10,
        height: 50
    },
    vocaText: {
        color: "#0033ff",
        fontSize: 15
    },
    vocDesc: {
        backgroundColor: 'white',
        padding: 5,
        height: 370,
        marginTop: 10
    },
    //Style search tab 
    searchTab: {
        backgroundColor: '#afc6f0',
        borderWidth: 2,
        borderColor: 'white'
    },
    searchDetail: {
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 15,
        backgroundColor: '#afc6f0'
    },
    searchDetailName: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        borderRadius: 5
    },
    searchDetailContent: {
        padding: 10,
        marginTop: 5,
        height: 420,
        backgroundColor: 'white',
        borderRadius: 5
    },
    searchAntonym: {
        padding: 10,
        height: 475,
        backgroundColor: 'white',
        borderRadius: 5
    },

});
export default Styles;