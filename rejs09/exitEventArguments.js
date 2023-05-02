process.on('exit', (code) => {
    console.log('프로세스가 종료되었습니다.');
    console.log(`exit 이벤트 매개변수 : ${code}`);
});

process.on('uncaughtExeption',(error) =>{
    console.log('예외가 발생하였습니다.');
    console.log(`uncaughtException 이벤트 매개 변수: ${error}`);
});

error.error.error();