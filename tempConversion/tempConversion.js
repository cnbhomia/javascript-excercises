const ftoc = function(fTemp) {

    cTemp = (fTemp - 32) *(5/9) ;
    console.log(cTemp)
    return parseFloat((cTemp == 0 || Number.isInteger(cTemp)) ? cTemp.toFixed(0): cTemp.toFixed(1)) ;

}

const ctof = function(cTemp) {

    fTemp = cTemp*9/5 + 32;
    console.log(fTemp)
    return parseFloat((fTemp ==0 || Number.isInteger(fTemp))? fTemp.toFixed(0):fTemp.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
