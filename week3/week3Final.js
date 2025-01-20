const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
let purchaseRecords =[];



// 第一階段：新增課程購買記錄
// 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格。

function addPurchaseRecord(memberName,sessions){
    if (memberName !== ''&& typeof(sessions) === 'number'  && sessions > 0 ){
        const singlePrice=(sessions) => {
            if(sessions < 10){
                return 1500
            }else if(sessions < 20){
                return 1300
            }else{
                return 1100
            }
        }
        const pricePerSession = singlePrice(sessions);
        const totalPrice = sessions * pricePerSession;
        let memberObject={
            name:memberName,
            sessions:sessions,
            singlePrice:pricePerSession,
            totalPrice: totalPrice,
        }
        purchaseRecords.push(memberObject)
        console.log(`新增購買記錄成功！會員 ${memberObject.name} 購買 ${memberObject.sessions} 堂課，總金額為 ${memberObject.totalPrice} 元`)
    }else{
        console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。')
    }

}

// 第二階段：計算目前的總營業額
// 新增函式 calculateTotalPrice，計算目前的總營業額為多少。
// >> 印出 console.log 文字為 目前總營業額為 ${totalPrice} 元

function calculateTotalPrice(){
    let totalPrice = 0
    purchaseRecords.forEach(records => {
        totalPrice += records.totalPrice
    });
    console.log(`目前總營業額為 ${totalPrice} 元`)
}

// 第三階段：篩選出還沒有購課的會員
// 新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出。

function filterNoPurchaseMember(){
    let purchaseMemberNames = []
    purchaseRecords.forEach(records=>{
        purchaseMemberNames.push(records.name)
    })

    const noPurchaseMember = members.filter((member)=> !purchaseMemberNames.includes(member))
    console.log(` 未購買課程的會員有：${noPurchaseMember.join(', ')}`)
}

// testData:
addPurchaseRecord("Alice", 4);    // 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
addPurchaseRecord("Bob", 12);     // 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
addPurchaseRecord("Charlie", 25); // 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
addPurchaseRecord("Hannah", 50);  // 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
addPurchaseRecord("", 10);        // 輸入錯誤，請輸入有效的會員名稱和課程數量。

calculateTotalPrice();             // 目前總營業額為 104100 元。
filterNoPurchaseMember();          // 未購買課程的會員有：Diana, Evan, Fiona, George