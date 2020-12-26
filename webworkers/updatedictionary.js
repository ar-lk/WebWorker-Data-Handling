self.onmessage = function(event) {
    //initialize data object to arrays
    var cddata = (event.data != null && event.data.oldlist != null && event.data.oldlist.length > 0?event.data.oldlist:[]);
    var csdata = (event.data != null && event.data.newlist != null && event.data.newlist.length > 0?event.data.newlist:[]);
    //loop list to see it exists
    for (var j = 0; j < csdata.length; j++) {
        var slist = csdata[j];
        //loop dictionary data
        var textfound = cddata.some(x => x.toLowerCase().includes(slist.toLowerCase()));
        //if not add that text to olddata array
        if(slist && slist.length >= 3 && textfound == false){
            cddata.push(slist);
        }    
    }
    self.postMessage(cddata);
}