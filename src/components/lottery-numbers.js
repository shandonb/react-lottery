import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';

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

function generateExtraBall(poolSize, tickets) {
    let pool = Array.from({length: poolSize}, (_, i) => i + 1);
    shuffleArray(pool);
    let extraBalls = [];
    for (let i=0; i<tickets; i++) {
        if (pool.length === 0) {
            pool = Array.from({length: poolSize}, (_,i) => i+1);
            shuffleArray(pool);
        }
        let number = pool.pop();
        extraBalls.push(number);
    }
    return extraBalls;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const LotteryGenerator = () => {
    const [lotteryNumbers, setLotteryNumbers] = useState([]);
    const [extraBalls, setExtraBalls] = useState([]);    
    const [poolSize, setPoolSize] = useState(48);
    const [tickets, setTickets] = useState(5);
    const [ticketSize, setTicketSize] = useState(5);
    const [extraBallEnabled, setExtraBallEnabled] = useState(true);
    const [extraPoolSize, setExtraBallPoolSize] = useState(18);

    const handleGenerate = () => {
        const generatedNumbers = generateTickets(poolSize, tickets, ticketSize);
        setLotteryNumbers(generatedNumbers);

        if (extraBallEnabled) {
            const generatedExtraBalls = generateExtraBall(extraPoolSize, tickets);
            setExtraBalls(generatedExtraBalls);
        } else {
            setExtraBalls([]);
        }
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
                <FormControlLabel
                    control={
                        <Checkbox 
                            defaultChecked
                            checked={extraBallEnabled}
                            onChange={(e) => setExtraBallEnabled(e.target.checked)}
                        />} 
                    label="Extra Ball?" 
                />
                {extraBallEnabled && (
                    <TextField
                        label="Extra Pool Size"
                        type="number"
                        value={extraPoolSize}
                        onChange={(e) => setExtraBallPoolSize(Number(e.target.value))}
                    />
                )}
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
                {extraBalls.length > 0 && (
                    <div>
                        <Typography variant="h6"> Extra Ball</Typography>
                        {extraBalls.map((ball, index) => (
                            <Typography key={index} variant="body1">
                                Extra Ball {index + 1}: {ball}
                            </Typography>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default LotteryGenerator;
