import React from 'react';
import ReactDOM from 'react-dom';

import {Page, Document, Text, StyleSheet, PDFViewer, Font} from "@react-pdf/renderer"

const PreviewInvoice = () => (
    <div>
        <PDFViewer style={{
            minHeight: "800px",
            minWidth: "800px",
            height: "99%",
            width: "100%",
            border: "0px",
            display: "flex",
            overflow: "hidden"
        }}>
            <Document>
                <Page size="A4" style={styles.body} debug={true}>
                    <Text style={styles.header} fixed>
                        ~ Created with react-pdf ~
                    </Text>
                    <Text style={styles.title}>Don Quijote de la Mancha</Text>
                    <Text style={styles.author}>Miguel de Cervantes</Text>
                    <Text style={styles.text}>
                        Luego volvía diciendo, como si verdaderamente fuera enamorado: —¡Oh
                        princesa Dulcinea, señora deste cautivo corazón! Mucho agravio me
                        habedes fecho en despedirme y reprocharme con el riguroso afincamiento
                        de mandarme no parecer ante la vuestra fermosura. Plégaos, señora, de
                        membraros deste vuestro sujeto corazón, que tantas cuitas por vuestro
                        amor padece. Con estos iba ensartando otros disparates, todos al modo de
                        los que sus libros le habían enseñado, imitando en cuanto podía su
                        lenguaje. Con esto caminaba tan despacio, y el sol entraba tan apriesa y
                        con tanto ardor, que fuera bastante a derretirle los sesos, si algunos
                        tuviera
                    </Text>
                    <Text style={styles.pageNumber} render={({pageNumber, totalPages}) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed/>
                </Page>
            </Document>
        </PDFViewer>
    </div>
);

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        height: '99%',
        orientation: 'portrait',
    },
    view: {
        width: '100%',
        height: '100%',
        padding: 0,
        backgroundColor: 'white',
    },
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

ReactDOM.render(<PreviewInvoice/>, document.getElementById('root'));

export default PreviewInvoice
