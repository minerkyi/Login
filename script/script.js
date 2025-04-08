// 로그인 상태 유지 버튼 제어
let boolKeep = false;
const $btnKeep = document.getElementById('keep-login');
const $imgKeep = document.getElementById('keep-img');

$btnKeep.addEventListener('click', function (e) {
    e.preventDefault();
    if(boolKeep) {
        boolKeep = false;
        $imgKeep.setAttribute('src', './images/check-box.svg');
    } else {
        boolKeep = true;
        $imgKeep.setAttribute('src', './images/check-box-on.svg');
    }
});

// input 제어
const $inputId = document.getElementById('id');
const $inputPw = document.getElementById('pw');

$inputId.addEventListener('input', () => {
    if($inputId.value.trim() !== '') {
        $inputId.classList.remove('error');
        $inputId.nextElementSibling.style.display = 'none';
    } else {
        $inputId.classList.add('error');
        $inputId.nextElementSibling.style.display = 'block';
    }

    // 아이디 입력 시 비밀번호 체크 제외
    if($inputPw.classList.contains('error')) {
        $inputPw.classList.remove('error');
        $inputPw.nextElementSibling.style.display = 'none';
    }
});

$inputPw.addEventListener('input', () => {
    $inputPw.classList.remove('error');
    $inputPw.nextElementSibling.style.display = 'none';
});

// 로그인 버튼 제어
const $btnLogin = document.getElementById('submit');

$btnLogin.addEventListener('click', () => {
    if($inputId.value === $inputPw.value) {
        $inputPw.classList.remove('error');
        $inputPw.nextElementSibling.style.display = 'none';
    } else {
        if(id !== '') { // 아이디가 빈 값이 경우 비밀번호 체크 제외
            $inputPw.classList.add('error');
            $inputPw.nextElementSibling.style.display = 'block';
        }
    }
});
