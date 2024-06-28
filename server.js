const express = require('express');
const path = require('path');
const app = express();

// 정적 파일 서빙
app.use(express.static(path.join(__dirname)));

// 루트 경로로 접속 시 final.html 서빙
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'final.html'));
});

// 서버 포트 설정
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
