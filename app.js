const schedule = require('node-schedule');

// Em uma data/horário específica
const someDate = new Date(2021, 7, 4, 20, 39, 0);
schedule.scheduleJob(someDate, () => {
    console.log('job ran @', new Date().toString())
});

// Em intervalos

// 1º jeito de cancelar
// schedule.scheduleJob('m-job', '*/2 * * * * *', () => {
//     console.log('I ran...');
//     schedule.cancelJob('m-job');
// })

// 2º jeito de cancelar
const mJob = schedule.scheduleJob('m-job', '*/2 * * * * *', () => {
    console.log('I ran...');
    mJob.cancel();
})