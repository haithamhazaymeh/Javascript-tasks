var m =90;
if(m<0 || m>100){
    document.write('invaild m')
} else if (m<50){
    document.write("FAIL")
} else if (m >= 50 && m <=  59){
    document.write("D")
} else if (m >= 60 && m <=  69){
    document.write("C")
} else if (m >= 70 && m <=  79){
    document.write("B")
} else if (m >= 80 && m <=  89){
    document.write("A")
} else {
    document.write("A+")
}