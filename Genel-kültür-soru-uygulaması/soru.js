function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
}

Soru.prototype.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCevap
}



let sorular = [
new Soru("1-İstiklal Marşı hangi yıl yazılmıştır?", { A : "1919",  B : "1920", C : "1921",}, "C"),
new Soru("2-Vücuttaki en güçlü kas hangisidir?", { A : "Bacak kası", B : "Kol kası", C : "Dil kası",}, "C"),
new Soru("3-Türk Silahlı Kuvvetlerinde hangi rütbe daha yüksektir?", {A : "Tuğgeneral", B : "Korgeneral", C : "Tümgeneral",}, "A"),
new Soru("4-Hangi gezegen Güneş'e daha uzak mesafededir?", { A : "Venüs",  B : "Mars", C : "Uranüs",}, "C"),
new Soru("5-Dünyanın İlk Kadın Savaş Pilotu kimdir?", { A : "Raymonde de Laroche",  B : "Sabiha Gökçen", C : "Bedriye Tahir",}, "B"),
new Soru("6-Tarihçilerin Kutbu olarak bilinen dünyaca ünlü tarihçimiz kimdir?", { A : "İlber Ortaylı",  B : "Mehmet Fuat Köprülü", C : "Halilİnalcık",}, "C"),
new Soru("7-Dünyanın En Uzun Nehrinin Adı Nedir?", { A : "Amazon Nehri",  B : "Mississippi Nehri", C : "Nil Nehri",}, "C"),
new Soru("8-Ankara'nın en kalabalık ilçesini hangisidir?", { A : "Keçiören",  B : "Çankaya", C : "Sincan",}, "B"),
new Soru("9-Hababam Sınıfı kim tarafından yazılmıştır?", { A : "Ertem Eğilmez",  B : "Oktay Rifat", C : "Rıfat Ilgaz",}, "C"),
new Soru("10-Mustafa Kemal Atatürk'ün nüfusa kayıtlı olduğu il hangisidir?", { A : "Bursa",  B : "Ankara", C : "Gaziantep",}, "C"),
new Soru("11-Ankara ne zaman başkent olmuştur?", { A : "1920",  B : "1923", C : "1933",}, "B"),
new Soru("12-Hangi ülkenin nüfusu İstanbul'un nufüsundan daha fazladır?", { A : "Belçika",  B : "Hollanda", C : "Yunanistan",}, "B"),
new Soru("13-Verilen illerden hangileri aynı bölgededir?", { A : "Manisa-Balıkesir",  B : "Osmaniye-Malatya", C : "Çorum-Amasya",}, "C"),
new Soru("14-Yeni sistemde genel seçimlerde kaç milletvekili seçilecektir?", { A : "550",  B : "600", C : "650",}, "B"),
new Soru("15-Osmanlı’da Lale devri hangi padişah döneminde yaşamıştır?", { A : "III. Ahmet",  B : "IV. Murat", C : "III. Selim",}, "A"),
new Soru("16-Hangisi Kurtuluş Savaşı sırasında gerçekleşmiştir?", { A : "Kut'ul Amare Zaferi",  B : "İnönü Zaferi", C : "Çanakkale Zaferi",}, "B"),
new Soru("17-Azerbaycan bayrağında kaç renk bulunur?", { A : "3",  B : "4", C : "5",}, "B"),
new Soru("18-Hangi ülkenin iki tane başkenti vardır?", { A : "Güney Afrika",  B : "Senegal", C : "Venezuela",}, "A"),
new Soru("19-Hangi ilimizde demiryolu yoktur?", { A : "Aydın",  B : "Muğla", C : "Batman",}, "B"),
new Soru("20-Üç büyük dince kutsal sayılan şehir hangisidir?", { A : "Mekke",  B : "Kudüs", C : "İstanbul",}, "B"),
new Soru("21-2003 yılında Eurovision ülkemizi tmesil eden ve yarışmada birinci gelen sanatçımız kimdir?", { A : "Sertap Erener",  B : "Ajda Pekkan", C:"GrupAthena",}, "A"),
];