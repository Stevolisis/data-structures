
//-----------Leetcode----------




//-----------Two Sum----------
const twosum=(nums,target)=>{
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    console.log(nums)

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            console.log([left,right])
            return [left, right];

        } else if (sum < target) {
            console.log('left',left)
            left++;

        } else {
            console.log('right',right)
            right--;
        }
    }
    
}

// twosum([2, 7, 11, 15,1], 9 );





//--------------Best TIme TO Bu And Sell----------------
function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0; // No profit can be achieved with less than 2 prices
    }
    
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {

        const potentialProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);

        
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    
    return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
// console.log(result); 


function maxProfit2(prices) {
    let minPrice = prices[0];
    
    return prices.reduce((maxProfit, price) => {
        minPrice = Math.min(minPrice, price);
        return Math.max(maxProfit, price - minPrice);
    }, 0);
}

const prices2 = [7, 1, 5, 3, 6, 4];
const result2 = maxProfit(prices2);
// console.log(result2); 













//contains duplicate
function checkDuplicate(nums){
    const nums2=new Set(nums);
    
    return nums.length===nums2.size ? false : true
}

console.log(checkDuplicate([1,2,3,4]))