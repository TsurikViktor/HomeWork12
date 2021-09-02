/**
 * Создать функцию калькулятор которая умеет
 * прибавлять, вычитать, устанавливать новое 
 * базовое знаячение и возвращать значение.
 * 
 * Если вместо числа передается что-то другое, например строка
 * - возвращать NaN и ничего не делать
 */


let res;

function createCalculator(res) {

    function add(a) {
        
        if (isNaN(a)) {
           console.log(NaN)
        } else {
           console.log(res += a) ;
        }; 
    };
    function sub(a) {

        if (isNaN(a)) {
           console.log(NaN)
        } else {
           console.log(res -= a);
        }; 
    };
    function set(a) {
 
        if (isNaN(a)) {
            console.log(NaN)
        } else {
            res = a;
            console.log(``);
        };
    };
    function get() {

        console.log(res);
    };
    return {
        add,
        sub,
        set,
        get
    };
  };
  
const calculator = createCalculator(100);
  
calculator.add(10); // 110
calculator.add(10); // 120
calculator.sub(20); // 100
calculator.set(20); //
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
calculator.get(); // 40

//console.log(`***************`);

//calculator.sub(`dgnh`);
//calculator.sub(20);
//calculator.add(100);
//calculator.sub(200);
//calculator.add(10); 
//calculator.get();
//calculator.add(100);
//calculator.sub(200);
//calculator.add();
//calculator.get();
//calculator.set(500);
//calculator.set(`sfdg`)
//calculator.get();
//calculator.add(10);
//calculator.get();