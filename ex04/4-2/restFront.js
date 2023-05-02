async function getUser() { // 로딩 시 사용자 정보를 가져오는 함수
    try {
        const res = await axios.get('/users');
        const users = res.data;
        const list = document.createElementID('list');
        list.innerHTML = '';

        Object.keys(users).map(function (key) {
            
        })
    }
}