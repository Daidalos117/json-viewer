import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import exampleData from './exampleData.json'
import {JSONRender} from "components/renderers/JSONRender";

function App() {



    return (
        <ChakraProvider>
            <div className="App">
                <JSONRender JSONData={JSON.stringify(exampleData)} />
            </div>
        </ChakraProvider>
    );
}

export default App;
