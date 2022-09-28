export const searchForString =  (arr, value) =>{
    
        var startIndex  = 0,
            stopIndex   = arr.length - 1,
            middle      = Math.floor((stopIndex + startIndex)/2);
    
        while(arr[middle].toLowerCase() != value.toLowerCase() && startIndex < stopIndex){
    
            
            if (value < arr[middle]){
                stopIndex = middle - 1;
            } else if (value > arr[middle]){
                startIndex = middle + 1;
            }
    
            
            middle = Math.floor((stopIndex + startIndex)/2);
        }
    
        
        return (arr[middle] != value) ? -1 : middle;
    
}
