
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













//---------contains duplicate------------
function checkDuplicate(nums){
    const nums2=new Set(nums);
    
    return nums.length===nums2.size ? false : true
}

// console.log(checkDuplicate([1,2,3,4]));







//-----------Product of Array Except Self------------
//------mine---- time-complicity=0(n^2)
function arrayExceptSelf(nums){
    let newArr=[]
    for(let i = 0; i < nums.length; i++){
        newArr.push(nums.filter(num=> num!== nums.at(i)).reduce((a,cv)=>a*cv,1));
    }
    return newArr;
}

// console.log(arrayExceptSelf([1,2,3,4]));



//0(n)
function arrayExceptSelf(nums) {
    const n = nums.length;
    const prefix = [];
    const suffix = [];
    const answer = [];
  
    // Calculate prefix products
    let product = 1;
    for (let i = 0; i < n; i++) {
      prefix[i] = product;
      product *= nums[i];
    }
  
    // Calculate suffix products
    product = 1;
    for (let i = n - 1; i >= 0; i--) {
      suffix[i] = product;
      product *= nums[i];
    }
  
    // Combine prefix and suffix for the answer
    for (let i = 0; i < n; i++) {
      answer[i] = prefix[i] * suffix[i];
    }
  
    return answer;
  }
  
//   console.log('2',arrayExceptSelf([1, 2, 3, 4]));






//------------Maximum Subarray-----------------
function maxSubArray(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize currentSum with the first element
    
    for (let i = 1; i < nums.length; i++) {
      // Compare adding the current element to the current sum or starting a new subarray
      currentSum = Math.max(nums[i], currentSum + nums[i]);
  
      // Update maxSum if the current subarray sum is greater
      maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
  }
  
  // Test the function
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//   console.log(maxSubArray(nums));





  //-----------Maximum Prodyct Subarray-----------------
  function maxProductArr(nums){
    let currentPrdt=nums[0];
    let maxProduct=nums[0];

    for(let i=1; i < nums.length; i++){
        currentPrdt=Math.max(currentPrdt, currentPrdt*nums[i]);
        maxProduct=Math.max(maxProduct,currentPrdt);
    }

    return maxProduct
  }
//   console.log(maxProductArr([2,3,-2,4])); //24



//--------------GPT----------------
function maxProduct(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < 0) {
        [maxProduct, minProduct] = [minProduct, maxProduct];
      }
  
      maxProduct = Math.max(nums[i], maxProduct * nums[i]);
      minProduct = Math.min(nums[i], minProduct * nums[i]);
      result = Math.max(result, maxProduct);
    }
  
    return result;
  }
  
  // Test the function
  console.log(maxProduct([2, 3, -2, 4]));
  