import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

function generateTickets(poolSize, tickets, ticketSize) {
    let pool = Array.from({length: poolSize}, (_, i) => i + 1);
    shuffleArray(pool);
    let allTickets = [];

    for (let i = 0; i < tickets; i++) {
        let currentTicket = [];
        for (let j = 0; j < ticketSize; j++) {
            if (pool.length === 0) {
                pool = Array.from({length: poolSize}, (_, i) => i + 1);
                shuffleArray(pool);
            }
            let number = pool.pop();
            currentTicket.push(number);
        }
        allTickets.push(currentTicket);
    }
    return allTickets;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const LotteryGenerator = () => {
    const [lotteryNumbers, setLotteryNumbers] = useState([]);
    const [poolSize, setPoolSize] = useState(48);
    const [tickets, setTickets] = useState(5);
    const [ticketSize, setTicketSize] = useState(5);

    const handleGenerate = () => {
        const generatedNumbers = generateTickets(poolSize, tickets, ticketSize);
        setLotteryNumbers(generatedNumbers);
    };

    return (
        <Container>
            <Box component="form" noValidate autoComplete="off" sx={{ '& .MuiTextField-root': { m: 1, width: '3ch' } }}>
                <TextField
                    label="Pool Size"
                    type="number"
                    value={poolSize}
                    onChange={(e) => setPoolSize(Number(e.target.value))}
                />
                <TextField
                    label="Number of Tickets"
                    type="number"
                    value={tickets}
                    onChange={(e) => setTickets(Number(e.target.value))}
                />
                <TextField
                    label="Ticket Size"
                    type="number"
                    value={ticketSize}
                    onChange={(e) => setTicketSize(Number(e.target.value))}
                />
            </Box>
            <Button variant="contained" color="primary" onClick={handleGenerate}>
                Generate Lottery Numbers
            </Button>
            <div id="output">
                {lotteryNumbers.map((ticket, index) => (
                    <Typography key={index} variant="body1">
                        Ticket {index + 1}: {ticket.join(', ')}
                    </Typography>
                ))}
            </div>
        </Container>
    );
};

export default LotteryGenerator;
