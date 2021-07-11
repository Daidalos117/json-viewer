import React, { useState } from 'react';
import { ChakraProvider, Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';

import { JSONRender } from 'components/renderers/JSONRender';
import { Textarea, Button, Container, Box, Heading } from '@chakra-ui/react';

function App() {
    const [jsonValue, setJsonValue] = useState<null | string>(null);
    const [json, setJson] = useState<null | string>(null);
    const [error, setError] = useState<null | string>(null);

    return (
        <ChakraProvider>
            <Box className="App" minHeight="100vh">
                {!json && (
                    <Container>
                        <Heading mb={6} mt={8}>
                            Paste Your JSON here to format
                        </Heading>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setJson(jsonValue);
                            }}
                        >
                            <Textarea
                                placeholder="Paste JSON here"
                                rows={20}
                                onChange={(e) => setJsonValue(e.target.value)}
                            />

                            <Button type="submit" colorScheme="green" size="lg" mt={2}>
                                Submit
                            </Button>
                        </form>

                        {error && (
                            <Alert status="error" mt={4}>
                                <AlertIcon />
                                <AlertTitle mr={2}>{error}</AlertTitle>
                                <CloseButton position="absolute" right="8px" top="8px" />
                            </Alert>
                        )}
                    </Container>
                )}

                {json && (
                    <JSONRender
                        JSONData={json}
                        onError={(error) => {
                            setJson(null);
                            setError(error);
                        }}
                    />
                )}
            </Box>
        </ChakraProvider>
    );
}

export default App;
