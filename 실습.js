const btn = document.querySelector('.btn-select');
const list = document.querySelectorAll('li');

// 버튼 클릭 시 토글 보이고, 다른 곳 누르면 토글 숨김
document.addEventListener('click', (e) => {
    if (btn.contains(e.target)) {
        btn.classList.toggle('on');
    } else {
        btn.classList.remove('on');
    }
});

// 선택한 항목으로 텍스트 변경
list.forEach((item) => {
    item.addEventListener('click', () => {
        btn.textContent = item.textContent;
    });
});
