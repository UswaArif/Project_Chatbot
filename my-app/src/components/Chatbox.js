import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Button, TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

const Chatbox = () => {
    const [messages, setMessages] = useState([]); 
    const [newMessage, setNewMessage] = useState(''); 

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]); 
            setNewMessage(''); 
        }
    };

    return ( 
        <div>
            <Box
                    sx={{
                        width: '57.3%',
                        position: 'absolute',
                        top: '70px',
                        left: '20%',
                        height: '84vh',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '16px',
                        justifyContent: 'space-between', 
                    }}
                    >
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            paddingBottom: '16px',
                        }}
                    >
                        {messages.map((msg, index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography variant="body1" sx={{ backgroundColor: '#dcdcdc', padding: '8px', borderRadius: '8px' }}>
                                    {msg}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Input field and send button at the bottom */}
                    <Box sx={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                        <TextField
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="Type your message..."
                        />
                        <Button onClick={handleSendMessage} variant="contained" sx={{ height: '100%' }}>
                        Send
                        </Button>
                    </Box>
                </Box>
        </div>
     );
}
 
export default Chatbox;