import express from 'express';

const app = express();

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

const appointments=[]

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/index.html`);
});
app.post('/submit', (req, res)=>{
    appointments.push({
        fName: req.body.fName,
        lName: req.body.lname,
        date: req.body.date,
        time: req.body.time,
        timeStamp: new Date()
    })

})
app.get('/admin', (req,res)=>{
    res.send(appointments)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});