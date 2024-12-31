// 1) 길이가 5글자 이상인지 확인하는 함수
function checkLength(word) {
    return word.length >= 5;
}


// 2) 첫 글자와 마지막 글자가 같은지 확인하는 함수
function checkFirstLast(word) {
    // 첫 글자와 마지막 글자를 소문자로 변환하여 비교
    return word[0].toLowerCase() === word[word.length - 1].toLowerCase();
}


// 3) 모음이 있는지 확인하는 함수
function checkVowel(word) {
    // 모음 배열
    const vowels = ['a', 'e', 'i', 'o', 'u'];
   
    // 단어를 소문자로 변환
    // word = word.toLowerCase();
   
    // 모음이 하나라도 있으면 true 반환
    for (let vowel of vowels) {
        if (word.includes(vowel)) {
            return true;
        }
    }
    return false;
}


// 테스트할 단어들
const words = ['apple', 'school', 'hi', 'text'];


// 각 단어별로 검사하기
for (let word of words) {
    console.log(`\n단어 "${word}" 검사 결과:`);
    console.log(`1) 5글자 이상: ${checkLength(word) ? 'O' : 'X'}`);
    console.log(`2) 첫/끝 글자 같음: ${checkFirstLast(word) ? 'O' : 'X'}`);
    console.log(`3) 모음 포함: ${checkVowel(word) ? 'O' : 'X'}`);
}
