$(document).ready(function () {



    var summa = $('input[name="data"]').val(); //кнопки 1
    var procent = 0.00875;
    var procent01 = 0.0041;
    var procent10 = 0.0091;
    // var total = parseInt(summa) * parseFloat(procent);
    var totalEx = parseInt(summa) * parseFloat(procent);
    var totalEx01 = parseInt(summa) * parseFloat(procent01);
    var totalEx010 = parseInt(summa) * parseFloat(procent10);


    var total = parseInt(totalEx);
    var total01 = parseInt(totalEx01);
    var total010 = parseInt(totalEx010);

    var total001 = parseInt(total01) * 1;
    var total002 = parseInt(total01) * 2;
    var total003 = parseInt(total01) * 3;
    var total004 = parseInt(total01) * 4;
    var total005 = parseInt(total01) * 5;
    var total006 = parseInt(total01) * 6;
    var total007 = parseInt(total01) * 7;
    var total008 = parseInt(total01) * 8;
    var total009 = parseInt(total01) * 9;
    var total0010 = parseInt(total01) * 10;
    var total0011 = parseInt(total01) * 11;
    var total0012 = parseInt(total01) * 12;



    var total1 = parseInt(total) * 13;
    var total2 = parseInt(total) * 14;
    var total3 = parseInt(total) * 15;
    var total4 = parseInt(total) * 16;
    var total5 = parseInt(total) * 17;
    var total6 = parseInt(total) * 18;
    var total7 = parseInt(total) * 19;
    var total8 = parseInt(total) * 20;
    var total9 = parseInt(total) * 21;
    var total10 = parseInt(total) * 22;
    var total11 = parseInt(total) * 23;
    var total12 = parseInt(total) * 24;
    var total13 = parseInt(total) * 25;
    var total14 = parseInt(total) * 26;
    var total15 = parseInt(total) * 27;
    var total16 = parseInt(total) * 28;
    var total17 = parseInt(total) * 29;
    var total18 = parseInt(total) * 30;
    var total19 = parseInt(total) * 31;
    var total20 = parseInt(total) * 32;
    var total21 = parseInt(total) * 33;
    var total22 = parseInt(total) * 34;
    var total23 = parseInt(total) * 35;
    var total24 = parseInt(total) * 36;
    var total25 = parseInt(total) * 37;
    var total26 = parseInt(total) * 38;
    var total27 = parseInt(total) * 39;
    var total28 = parseInt(total) * 40;
    var total29 = parseInt(total) * 41;
    var total30 = parseInt(total) * 42;
    var total31 = parseInt(total) * 43;
    var total32 = parseInt(total) * 44;
    var total33 = parseInt(total) * 45;
    var total34 = parseInt(total) * 46;
    var total35 = parseInt(total) * 47;
    var total36 = parseInt(total) * 48;
    var total37 = parseInt(total) * 49;
    var total38 = parseInt(total) * 50;
    var total39 = parseInt(total) * 51;
    var total40 = parseInt(total) * 52;
    var total41 = parseInt(total) * 53;
    var total42 = parseInt(total) * 54;
    var total43 = parseInt(total) * 55;
    var total44 = parseInt(total) * 56;
    var total45 = parseInt(total) * 57;
    var total46 = parseInt(total) * 58;
    var total47 = parseInt(total) * 59;
    var total48 = parseInt(total) * 60;
    var total49 = parseInt(total) * 61;
    var total50 = parseInt(total) * 62;
    var total51 = parseInt(total) * 63;
    var total52 = parseInt(total) * 64;
    var total53 = parseInt(total) * 65;
    var total54 = parseInt(total) * 66;
    var total55 = parseInt(total) * 67;
    var total56 = parseInt(total) * 68;
    var total57 = parseInt(total) * 69;
    var total58 = parseInt(total) * 70;
    var total59 = parseInt(total) * 71;
    var total60 = parseInt(total) * 72;
    var total61 = parseInt(total) * 73;
    var total62 = parseInt(total) * 74;
    var total63 = parseInt(total) * 75;
    var total64 = parseInt(total) * 76;
    var total65 = parseInt(total) * 77;
    var total66 = parseInt(total) * 78;
    var total67 = parseInt(total) * 79;
    var total68 = parseInt(total) * 80;
    var total69 = parseInt(total) * 81;
    var total70 = parseInt(total) * 82;
    var total71 = parseInt(total) * 83;
    var total72 = parseInt(total) * 84;
    var total73 = parseInt(total) * 85;
    var total74 = parseInt(total) * 86;
    var total75 = parseInt(total) * 87;
    var total76 = parseInt(total) * 88;
    var total77 = parseInt(total) * 89;
    var total78 = parseInt(total) * 90;
    var total79 = parseInt(total) * 91;
    var total80 = parseInt(total) * 92;
    var total81 = parseInt(total) * 93;
    var total82 = parseInt(total) * 94;
    var total83 = parseInt(total) * 95;
    var total84 = parseInt(total) * 96;
    var total85 = parseInt(total) * 97;
    var total86 = parseInt(total) * 98;
    var total87 = parseInt(total) * 99;
    var total88 = parseInt(total) * 100;
    var total89 = parseInt(total) * 101;
    var total90 = parseInt(total) * 102;
    var total91 = parseInt(total) * 103;
    var total92 = parseInt(total) * 104;
    var total93 = parseInt(total) * 105;
    var total94 = parseInt(total) * 106;
    var total95 = parseInt(total) * 107;
    var total96 = parseInt(total) * 108;

    var total97 = parseInt(total010) * 109;
    var total98 = parseInt(total010) * 110;
    var total99 = parseInt(total010) * 111;
    var total100 = parseInt(total010) * 112;
    var total101 = parseInt(total010) * 113;
    var total102 = parseInt(total010) * 114;
    var total103 = parseInt(total010) * 115;
    var total104 = parseInt(total010) * 116;
    var total105 = parseInt(total010) * 117;
    var total106 = parseInt(total010) * 118;
    var total107 = parseInt(total010) * 119;
    var total108 = parseInt(total010) * 120;

    
    $("#total01").text(total001); // вывод итого
    $("#total02").text(total002); // вывод итого
    $("#total03").text(total003); // вывод итого
    $("#total04").text(total004); // вывод итого
    $("#total05").text(total005); // вывод итого
    $("#total06").text(total006); // вывод итого
    $("#total07").text(total007); // вывод итого
    $("#total08").text(total008); // вывод итого
    $("#total09").text(total009); // вывод итого
    $("#total010").text(total0010); // вывод итого
    $("#total011").text(total0011); // вывод итого
    $("#total012").text(total0012); // вывод итого


    $("#total1").text(total1); // вывод итого
    $("#total2").text(total2); // вывод итого
    $("#total3").text(total3); // вывод итого
    $("#total4").text(total4); // вывод итого
    $("#total5").text(total5); // вывод итого
    $("#total6").text(total6); // вывод итого
    $("#total7").text(total7); // вывод итого
    $("#total8").text(total8); // вывод итого
    $("#total9").text(total9); // вывод итого
    $("#total10").text(total10); // вывод итого
    $("#total11").text(total11); // вывод итого
    $("#total12").text(total12); // вывод итого
    $("#total13").text(total13);// вывод итого
    $("#total14").text(total14); // вывод итого
    $("#total15").text(total15); // вывод итого
    $("#total16").text(total16); // вывод итого
    $("#total17").text(total17); // вывод итого
    $("#total18").text(total18); // вывод итого
    $("#total19").text(total19); // вывод итого
    $("#total20").text(total20); // вывод итого
    $("#total21").text(total21); // вывод итого
    $("#total22").text(total22); // вывод итого
    $("#total23").text(total23); // вывод итого
    $("#total24").text(total24); // вывод итого
    $("#total25").text(total25); // вывод итого
    $("#total26").text(total26); // вывод итого
    $("#total27").text(total27); // вывод итого
    $("#total28").text(total28); // вывод итого
    $("#total29").text(total29); // вывод итого
    $("#total30").text(total30); // вывод итого
    $("#total31").text(total31); // вывод итого
    $("#total32").text(total32); // вывод итого
    $("#total33").text(total33);// вывод итого
    $("#total34").text(total34); // вывод итого
    $("#total35").text(total35); // вывод итого
    $("#total36").text(total36); // вывод итого
    $("#total37").text(total37); // вывод итого
    $("#total38").text(total38); // вывод итого
    $("#total39").text(total39); // вывод итого
    $("#total40").text(total40); // вывод итого
    $("#total41").text(total41); // вывод итого
    $("#total42").text(total42); // вывод итого
    $("#total43").text(total43); // вывод итого
    $("#total44").text(total44); // вывод итого
    $("#total45").text(total45); // вывод итого
    $("#total46").text(total46); // вывод итого
    $("#total47").text(total47); // вывод итого
    $("#total48").text(total48); // вывод итого
    $("#total49").text(total49); // вывод итого
    $("#total50").text(total50); // вывод итого
    $("#total51").text(total51); // вывод итого
    $("#total52").text(total52); // вывод итого
    $("#total53").text(total53);// вывод итого
    $("#total54").text(total54); // вывод итого
    $("#total55").text(total55); // вывод итого
    $("#total56").text(total56); // вывод итого
    $("#total57").text(total57); // вывод итого
    $("#total58").text(total58); // вывод итого
    $("#total59").text(total59); // вывод итого
    $("#total60").text(total60); // вывод итого
    $("#total61").text(total61); // вывод итого
    $("#total62").text(total62); // вывод итого
    $("#total63").text(total63); // вывод итого
    $("#total64").text(total64); // вывод итого
    $("#total65").text(total65); // вывод итого
    $("#total66").text(total66); // вывод итого
    $("#total67").text(total67); // вывод итого
    $("#total68").text(total68); // вывод итого
    $("#total69").text(total69); // вывод итого
    $("#total70").text(total70); // вывод итого
    $("#total71").text(total71); // вывод итого
    $("#total72").text(total72); // вывод итого
    $("#total73").text(total73);// вывод итого
    $("#total74").text(total74); // вывод итого
    $("#total75").text(total75); // вывод итого
    $("#total76").text(total76); // вывод итого
    $("#total77").text(total77); // вывод итого
    $("#total78").text(total78); // вывод итого
    $("#total79").text(total79); // вывод итого
    $("#total80").text(total80); // вывод итого
    $("#total81").text(total81); // вывод итого
    $("#total82").text(total82); // вывод итого
    $("#total83").text(total83); // вывод итого
    $("#total84").text(total84); // вывод итого
    $("#total85").text(total85); // вывод итого
    $("#total86").text(total86); // вывод итого
    $("#total87").text(total87); // вывод итого
    $("#total88").text(total88); // вывод итого
    $("#total89").text(total89); // вывод итого
    $("#total90").text(total90); // вывод итого
    $("#total91").text(total91); // вывод итого
    $("#total92").text(total92); // вывод итого
    $("#total93").text(total93);// вывод итого
    $("#total94").text(total94); // вывод итого
    $("#total95").text(total95); // вывод итого
    $("#total96").text(total96); // вывод итого


    $("#total97").text(total97); // вывод итого
    $("#total98").text(total98); // вывод итого
    $("#total99").text(total99); // вывод итого
    $("#total100").text(total100); // вывод итого
    $("#total101").text(total101); // вывод итого
    $("#total102").text(total102); // вывод итого
    $("#total103").text(total103); // вывод итого
    $("#total104").text(total104); // вывод итого
    $("#total105").text(total105); // вывод итого
    $("#total106").text(total106); // вывод итого
    $("#total107").text(total107); // вывод итого
    $("#total108").text(total108); // вывод итого



    $("#year_1").text(total0012);
    $("#year_2").text(total12);
    $("#year_3").text(total24);
    $("#year_4").text(total36);
    $("#year_5").text(total48);
    $("#year_6").text(total60);
    $("#year_7").text(total72);
    $("#year_8").text(total84);
    $("#year_9").text(total96);
    $("#year_10").text(total108);

});




$(document).keyup(function () {


     var summa = $('input[name="data"]').val(); //кнопки 1
    var procent = 0.00875;
    var procent01 = 0.0041;
    var procent10 = 0.0091;
    // var total = parseInt(summa) * parseFloat(procent);
    var totalEx = parseInt(summa) * parseFloat(procent);
    var totalEx01 = parseInt(summa) * parseFloat(procent01);
    var totalEx010 = parseInt(summa) * parseFloat(procent10);


    var total = parseInt(totalEx);
    var total01 = parseInt(totalEx01);
    var total010 = parseInt(totalEx010);

    var total001 = parseInt(total01) * 1;
    var total002 = parseInt(total01) * 2;
    var total003 = parseInt(total01) * 3;
    var total004 = parseInt(total01) * 4;
    var total005 = parseInt(total01) * 5;
    var total006 = parseInt(total01) * 6;
    var total007 = parseInt(total01) * 7;
    var total008 = parseInt(total01) * 8;
    var total009 = parseInt(total01) * 9;
    var total0010 = parseInt(total01) * 10;
    var total0011 = parseInt(total01) * 11;
    var total0012 = parseInt(total01) * 12;



    var total1 = parseInt(total) * 13;
    var total2 = parseInt(total) * 14;
    var total3 = parseInt(total) * 15;
    var total4 = parseInt(total) * 16;
    var total5 = parseInt(total) * 17;
    var total6 = parseInt(total) * 18;
    var total7 = parseInt(total) * 19;
    var total8 = parseInt(total) * 20;
    var total9 = parseInt(total) * 21;
    var total10 = parseInt(total) * 22;
    var total11 = parseInt(total) * 23;
    var total12 = parseInt(total) * 24;
    var total13 = parseInt(total) * 25;
    var total14 = parseInt(total) * 26;
    var total15 = parseInt(total) * 27;
    var total16 = parseInt(total) * 28;
    var total17 = parseInt(total) * 29;
    var total18 = parseInt(total) * 30;
    var total19 = parseInt(total) * 31;
    var total20 = parseInt(total) * 32;
    var total21 = parseInt(total) * 33;
    var total22 = parseInt(total) * 34;
    var total23 = parseInt(total) * 35;
    var total24 = parseInt(total) * 36;
    var total25 = parseInt(total) * 37;
    var total26 = parseInt(total) * 38;
    var total27 = parseInt(total) * 39;
    var total28 = parseInt(total) * 40;
    var total29 = parseInt(total) * 41;
    var total30 = parseInt(total) * 42;
    var total31 = parseInt(total) * 43;
    var total32 = parseInt(total) * 44;
    var total33 = parseInt(total) * 45;
    var total34 = parseInt(total) * 46;
    var total35 = parseInt(total) * 47;
    var total36 = parseInt(total) * 48;
    var total37 = parseInt(total) * 49;
    var total38 = parseInt(total) * 50;
    var total39 = parseInt(total) * 51;
    var total40 = parseInt(total) * 52;
    var total41 = parseInt(total) * 53;
    var total42 = parseInt(total) * 54;
    var total43 = parseInt(total) * 55;
    var total44 = parseInt(total) * 56;
    var total45 = parseInt(total) * 57;
    var total46 = parseInt(total) * 58;
    var total47 = parseInt(total) * 59;
    var total48 = parseInt(total) * 60;
    var total49 = parseInt(total) * 61;
    var total50 = parseInt(total) * 62;
    var total51 = parseInt(total) * 63;
    var total52 = parseInt(total) * 64;
    var total53 = parseInt(total) * 65;
    var total54 = parseInt(total) * 66;
    var total55 = parseInt(total) * 67;
    var total56 = parseInt(total) * 68;
    var total57 = parseInt(total) * 69;
    var total58 = parseInt(total) * 70;
    var total59 = parseInt(total) * 71;
    var total60 = parseInt(total) * 72;
    var total61 = parseInt(total) * 73;
    var total62 = parseInt(total) * 74;
    var total63 = parseInt(total) * 75;
    var total64 = parseInt(total) * 76;
    var total65 = parseInt(total) * 77;
    var total66 = parseInt(total) * 78;
    var total67 = parseInt(total) * 79;
    var total68 = parseInt(total) * 80;
    var total69 = parseInt(total) * 81;
    var total70 = parseInt(total) * 82;
    var total71 = parseInt(total) * 83;
    var total72 = parseInt(total) * 84;
    var total73 = parseInt(total) * 85;
    var total74 = parseInt(total) * 86;
    var total75 = parseInt(total) * 87;
    var total76 = parseInt(total) * 88;
    var total77 = parseInt(total) * 89;
    var total78 = parseInt(total) * 90;
    var total79 = parseInt(total) * 91;
    var total80 = parseInt(total) * 92;
    var total81 = parseInt(total) * 93;
    var total82 = parseInt(total) * 94;
    var total83 = parseInt(total) * 95;
    var total84 = parseInt(total) * 96;
    var total85 = parseInt(total) * 97;
    var total86 = parseInt(total) * 98;
    var total87 = parseInt(total) * 99;
    var total88 = parseInt(total) * 100;
    var total89 = parseInt(total) * 101;
    var total90 = parseInt(total) * 102;
    var total91 = parseInt(total) * 103;
    var total92 = parseInt(total) * 104;
    var total93 = parseInt(total) * 105;
    var total94 = parseInt(total) * 106;
    var total95 = parseInt(total) * 107;
    var total96 = parseInt(total) * 108;

    var total97 = parseInt(total010) * 109;
    var total98 = parseInt(total010) * 110;
    var total99 = parseInt(total010) * 111;
    var total100 = parseInt(total010) * 112;
    var total101 = parseInt(total010) * 113;
    var total102 = parseInt(total010) * 114;
    var total103 = parseInt(total010) * 115;
    var total104 = parseInt(total010) * 116;
    var total105 = parseInt(total010) * 117;
    var total106 = parseInt(total010) * 118;
    var total107 = parseInt(total010) * 119;
    var total108 = parseInt(total010) * 120;

    
    $("#total01").text(total001); // вывод итого
    $("#total02").text(total002); // вывод итого
    $("#total03").text(total003); // вывод итого
    $("#total04").text(total004); // вывод итого
    $("#total05").text(total005); // вывод итого
    $("#total06").text(total006); // вывод итого
    $("#total07").text(total007); // вывод итого
    $("#total08").text(total008); // вывод итого
    $("#total09").text(total009); // вывод итого
    $("#total010").text(total0010); // вывод итого
    $("#total011").text(total0011); // вывод итого
    $("#total012").text(total0012); // вывод итого


    $("#total1").text(total1); // вывод итого
    $("#total2").text(total2); // вывод итого
    $("#total3").text(total3); // вывод итого
    $("#total4").text(total4); // вывод итого
    $("#total5").text(total5); // вывод итого
    $("#total6").text(total6); // вывод итого
    $("#total7").text(total7); // вывод итого
    $("#total8").text(total8); // вывод итого
    $("#total9").text(total9); // вывод итого
    $("#total10").text(total10); // вывод итого
    $("#total11").text(total11); // вывод итого
    $("#total12").text(total12); // вывод итого
    $("#total13").text(total13);// вывод итого
    $("#total14").text(total14); // вывод итого
    $("#total15").text(total15); // вывод итого
    $("#total16").text(total16); // вывод итого
    $("#total17").text(total17); // вывод итого
    $("#total18").text(total18); // вывод итого
    $("#total19").text(total19); // вывод итого
    $("#total20").text(total20); // вывод итого
    $("#total21").text(total21); // вывод итого
    $("#total22").text(total22); // вывод итого
    $("#total23").text(total23); // вывод итого
    $("#total24").text(total24); // вывод итого
    $("#total25").text(total25); // вывод итого
    $("#total26").text(total26); // вывод итого
    $("#total27").text(total27); // вывод итого
    $("#total28").text(total28); // вывод итого
    $("#total29").text(total29); // вывод итого
    $("#total30").text(total30); // вывод итого
    $("#total31").text(total31); // вывод итого
    $("#total32").text(total32); // вывод итого
    $("#total33").text(total33);// вывод итого
    $("#total34").text(total34); // вывод итого
    $("#total35").text(total35); // вывод итого
    $("#total36").text(total36); // вывод итого
    $("#total37").text(total37); // вывод итого
    $("#total38").text(total38); // вывод итого
    $("#total39").text(total39); // вывод итого
    $("#total40").text(total40); // вывод итого
    $("#total41").text(total41); // вывод итого
    $("#total42").text(total42); // вывод итого
    $("#total43").text(total43); // вывод итого
    $("#total44").text(total44); // вывод итого
    $("#total45").text(total45); // вывод итого
    $("#total46").text(total46); // вывод итого
    $("#total47").text(total47); // вывод итого
    $("#total48").text(total48); // вывод итого
    $("#total49").text(total49); // вывод итого
    $("#total50").text(total50); // вывод итого
    $("#total51").text(total51); // вывод итого
    $("#total52").text(total52); // вывод итого
    $("#total53").text(total53);// вывод итого
    $("#total54").text(total54); // вывод итого
    $("#total55").text(total55); // вывод итого
    $("#total56").text(total56); // вывод итого
    $("#total57").text(total57); // вывод итого
    $("#total58").text(total58); // вывод итого
    $("#total59").text(total59); // вывод итого
    $("#total60").text(total60); // вывод итого
    $("#total61").text(total61); // вывод итого
    $("#total62").text(total62); // вывод итого
    $("#total63").text(total63); // вывод итого
    $("#total64").text(total64); // вывод итого
    $("#total65").text(total65); // вывод итого
    $("#total66").text(total66); // вывод итого
    $("#total67").text(total67); // вывод итого
    $("#total68").text(total68); // вывод итого
    $("#total69").text(total69); // вывод итого
    $("#total70").text(total70); // вывод итого
    $("#total71").text(total71); // вывод итого
    $("#total72").text(total72); // вывод итого
    $("#total73").text(total73);// вывод итого
    $("#total74").text(total74); // вывод итого
    $("#total75").text(total75); // вывод итого
    $("#total76").text(total76); // вывод итого
    $("#total77").text(total77); // вывод итого
    $("#total78").text(total78); // вывод итого
    $("#total79").text(total79); // вывод итого
    $("#total80").text(total80); // вывод итого
    $("#total81").text(total81); // вывод итого
    $("#total82").text(total82); // вывод итого
    $("#total83").text(total83); // вывод итого
    $("#total84").text(total84); // вывод итого
    $("#total85").text(total85); // вывод итого
    $("#total86").text(total86); // вывод итого
    $("#total87").text(total87); // вывод итого
    $("#total88").text(total88); // вывод итого
    $("#total89").text(total89); // вывод итого
    $("#total90").text(total90); // вывод итого
    $("#total91").text(total91); // вывод итого
    $("#total92").text(total92); // вывод итого
    $("#total93").text(total93);// вывод итого
    $("#total94").text(total94); // вывод итого
    $("#total95").text(total95); // вывод итого
    $("#total96").text(total96); // вывод итого


    $("#total97").text(total97); // вывод итого
    $("#total98").text(total98); // вывод итого
    $("#total99").text(total99); // вывод итого
    $("#total100").text(total100); // вывод итого
    $("#total101").text(total101); // вывод итого
    $("#total102").text(total102); // вывод итого
    $("#total103").text(total103); // вывод итого
    $("#total104").text(total104); // вывод итого
    $("#total105").text(total105); // вывод итого
    $("#total106").text(total106); // вывод итого
    $("#total107").text(total107); // вывод итого
    $("#total108").text(total108); // вывод итого



    $("#year_1").text(total0012);
    $("#year_2").text(total12);
    $("#year_3").text(total24);
    $("#year_4").text(total36);
    $("#year_5").text(total48);
    $("#year_6").text(total60);
    $("#year_7").text(total72);
    $("#year_8").text(total84);
    $("#year_9").text(total96);
    $("#year_10").text(total108);


});



// вывод месяца

$(document).ready(function () {

    var month = $('input[name="month"]').val();


$("#title__month").text(month); // вывод итого


});

$(document).change(function () {

    var month = $('input[name="month"]').val();
$("#title__month").text(month); // вывод итого


});



// вывод общее

// $(document).ready(function () {

//     var summa = $('input[name="data"]').val();
//     var month = $('input[name="month"]').val();
//     var procent = 0.00875;
//     var totalAll11 = parseInt(summa) * parseFloat(procent);
//     var totalAll22 = parseInt(totalAll11) * ( parseInt(month));
//     var totalAll33 = parseInt(totalAll22);

//     $("#choose__right_month").text(totalAll33);
// });

// $(document).change(function () {

//     var summa = $('input[name="data"]').val();
//     var month = $('input[name="month"]').val();
//     var procent = 0.00875;
//     var totalAll11 = parseInt(summa) * parseFloat(procent);
//     var totalAll22 = parseInt(totalAll11) * ( parseInt(month) - 12 );
//     var totalAll33 = parseInt(totalAll22);

//     $("#choose__right_month").text(totalAll33);
// });

// $(document).keyup(function () {

//     var summa = $('input[name="data"]').val();
//     var month = $('input[name="month"]').val();
//     var procent = 0.00875;
//     var totalAll11 = parseInt(summa) * parseFloat(procent);
//     var totalAll22 = parseInt(totalAll11) * ( parseInt(month) - 12 );
//     var totalAll33 = parseInt(totalAll22);

//     $("#choose__right_month").text(totalAll33);
// });


// $(document).ready(function () {
//   var allSumm = $(".item__change .item_total").text();
//   $("#choose__right_month").text(allSumm);
// });



// конец вывод общее




// выделнеие красным на основании общего вывода

// $(document).ready(function () {
//   var fig = $("#choose__right_month").text();
//   var elements = $(".item_total").filter(function() {
//     return $(this).text() === fig;
// }).closest('div.item').addClass('item__change');
// });

// $(document).change(function () {
//     $('.item').removeClass('item__change')
//     var fig = $("#choose__right_month").text();
//     var elements = $(".item_total").filter(function() {
//         return $(this).text() === fig;
//     }).closest('div.item').addClass('item__change');
// });


$(document).ready(function () {
    var fig = $('input[name="month"]').val();
  // var fig = $("#choose__right_month").text();
  var elements = $(".item_month").filter(function() {
    return $(this).text() === fig;
}).closest('div.item').addClass('item__change');
});

$(document).change(function () {
    $('.item').removeClass('item__change')
    var fig = $('input[name="month"]').val();
    // var fig = $("#choose__right_month").text();
    var elements = $(".item_month").filter(function() {
        return $(this).text() === fig;
    }).closest('div.item').addClass('item__change');
});

// конец выделнеие красным на основании общего вывода


// новый вывод общего

$(document).ready(function () {
  var allSumm = $(".item__change .item_total").text();
  $("#choose__right_month").text(allSumm);
});
$(document).change(function () {
  var allSumm = $(".item__change .item_total").text();
  $("#choose__right_month").text(allSumm);
});


// конец новый вывод общего


// $(document).change(function () {
//     $('.item').hide();
//     $('.item').each(function(i,elem) {
//         $('.item').show();
//         if ($(this).hasClass("item__change")) {
//             return false;
//         } else {
//             $('.item').hide();
//         }
//     });
// });



// $(document).ready(function () {
//   $(".year__wr").fadeOut();
//   $(".item__change").parent().addClass("year__wr_open").fadeIn();
// });
// $(document).change(function () {
//   // $(".year__wr").fadeOut();
//   $(".item__change").parent().addClass("year__wr_open").fadeIn();
// });


$(document).ready(function () {
    // $(".year__wr").fadeOut();
    if ($(".year__wr div").hasClass("item__change")) {
        $(".item__change").parent().addClass('year__wr_open');
        // $(".year__wr_open").fadeIn();
    } else {
      // $(".year__wr").removeClass("year__wr_open");
      // $(".year__wr").fadeOut();
  }
});

// $(".year__wr").fadeOut();
$(document).change(function () {
    // $(".year__wr").removeClass("year__wr_open");
    if ($(".year__wr div").hasClass("item__change")) {
        $(".year__wr").find(".item__change").parent().addClass('year__wr_open');
        // $(".year__wr_open").fadeIn();
    } else {
      // $(".year__wr").removeClass("year__wr_open");
      // $(".year__wr").fadeOut();
  }
});

$(document).ready(function () {
    $(".year__title_arrow").click(function () {
        $(this).parents().eq(1).find(".year__wr").toggleClass("year__wr_open");
        // $(".year__wr_open").fadeTo('slow',0.5);
    });
});


$(document).ready(function () {
    $(".year__title_arrow").click(function () {
        $(this).removeClass("arrow_rotate");
        $(this).parents().eq(1).find(".year__wr_open").parents().eq(0).find(".year__title_arrow").addClass("arrow_rotate");
        // $(".year__wr_open").fadeTo('slow',0.5);
    });
});


$(document).ready(function () {
    if ($(".all__year div div").hasClass("item__change")) {
        $(".item__change").parents().eq(1).find(".year__title_arrow").addClass("arrow_rotate");
    } else {
    }
});

$(document).change(function () {
    if ($(".all__year div div").hasClass("item__change")) {
        $(".item__change").parents().eq(1).find(".year__title_arrow").addClass("arrow_rotate");
    } else {
    }
});
// $(document).on('change', function () {
//     if ($(".all__year div").hasClass("year__wr_open")) {
//         $(".year__wr_open").parents().eq(0).find(".year__title_arrow").addClass("arrow_rotate");
//     } else {
//   }
// });

// $(".year__title_arrow").click(function () {
//     $(".year__wr_open").fadeIn();
// });


$(document).ready(function () {
    $(".all__close").click(function () {
        $("div").removeClass("arrow_rotate");
        $("div").removeClass("year__wr_open");
    });
});
$(document).ready(function () {
    $(".all__open").click(function () {
        $(".year__title_arrow").addClass("arrow_rotate");
        $(".year__wr").addClass("year__wr_open");
    });
});