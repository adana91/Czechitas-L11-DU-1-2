// tady je místo pro náš program


for (let hrs = 0; hrs <= 23; hrs++) {
    for (let mins = 0; mins <= 59; mins++) {
        console.log(`${hrs}:${mins.toString().padStart(2, '0')}`)
    }
}
