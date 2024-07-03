//print the given pattern

//  #   #   #   #
//  #   #   #   #
//  #   #   #   #
//  #   #   #   #

for(row=1;row<=4;row++){
    rowContent = ""
    for(col=1;col<=4;col++){
        rowContent+=" # "
    }
    console.log(rowContent);
}