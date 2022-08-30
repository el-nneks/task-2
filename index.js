
    // // TASK 1
    // usinf function expression
    // // No. 1
    const calcTip = function(bill) {
       return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
       }
       console.log(calcTip(100) + " for trial")
    // No.2
       const bills = [125, 155, 44];
    // No.3
       const tips = [
        calcTip(bills[0]),
        calcTip(bills[1]),
        calcTip(bills[2])
        ];
    // No.4
       const total = [
        bills[0]+tips[0],
        bills[1]+tips[1],
        bills[2]+tips[2]
        ];
    //    Answer
       console.log(`When the BILL individually is ${bills[0]},${bills[1]} and ${bills[2]},the TIP is ${calcTip(bills[0])},${calcTip(bills[1])} and ${calcTip(bills[2])} while the TOTAL amount when the bill and the tip is added up is ${bills[0]+tips[0]},${bills[1]+tips[1]} and ${bills[2]+tips[2]} respectively` )
    
    //    TASK 2
    function isEqual (a,b) {
        return ((a ===  100 || b === 100) || (a + b === 100))
    }
    console.log(isEqual(0,100));
    console.log(isEqual(100,0));
    console.log(isEqual(10,0));
    console.log(isEqual(0,10));
    console.log(isEqual(20,80));
    console.log(isEqual(50,50));
    
    // TASK 3
    function closeTo100 (x,y) {
        if (x != y)
        {
            x1 = 100 - x;
            y1 = 100 - y;
            if (x1 < y1){
                return x + " is nearest";
            }
            if (y1 < x1){
                return y  + " is nearest";
            }
            else{
                return 0;
            }
        } else{
            return (x + y) -1 + " is nearest";
        }
    }
    console.log(closeTo100(99,1));
    console.log(closeTo100(49,51));
    console.log(closeTo100(50,50));