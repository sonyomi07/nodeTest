function calc(operation, ...numbers) {
    let result;

    // 첫 번째 숫자를 초기값으로 설정
    if (numbers.length === 0) {
        return "숫자를 입력하세요.";
    }
    result = numbers[0];

    // 각 연산에 따라 결과 계산
    switch (operation) {
        case 'add': // 덧셈
            for (let i = 1; i < numbers.length; i++) {
                result += numbers[i];
            }
            break;
        case 'subtract': // 뺄셈
            for (let i = 1; i < numbers.length; i++) {
                result -= numbers[i];
            }
            break;
        case 'multiply': // 곱셈
            for (let i = 1; i < numbers.length; i++) {
                result *= numbers[i];
            }
            break;
        case 'divide': // 나눗셈
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] === 0) {
                    return "0으로 나눌 수 없습니다.";
                }
                result /= numbers[i];
            }
            break;
        default:
            return "올바른 연산을 선택하세요: add, subtract, multiply, divide";
    }

    return result;
}

// 사용 예시
console.log(calc('add', 1, 2, 3)); // 6
console.log(calc('subtract', 10, 5, 2)); // 3
console.log(calc('multiply', 2, 3, 4)); // 24
console.log(calc('divide', 20, 5, 2)); // 2
