const ApiRoutes = require('express').Router()




const data = 
[

    {
        id:1,
        subject:'First Göktürk Empire',
        content:[
    'Ashina Tuwu',
    'Yili Qaghan / Ashina Tumen (552 - 553) elder son of Tuwu',
    'Yixiji Qaghan / Ashina Keluo (553 - 554) son of Tumen',
    'Shabolue Qaghan / Ashina Shetu (581 - 587) son of Kelou',
    'Xiegashiduona Dulan / Ashina Chuluohou (588 - 599) son of Shetu',
    'Tuli Qaghan or Qimin Qaghan / Ashina Rangan (599 - 609) son of Chuluohou',
    'Shibi Qaghan / Ashina Duoji (609 - 619) son of Rangan',
    'Chuluo Qaghan / Ashina Qilifu (619 - 621) younger brother of Duoji',
    'Jiali Qaghan / Ashina Duobi (621 - 630) third son of Rangan',
    'Yehu Qaghan or Mohe Qaghan / Ashina Yongyulu (587 - 588) brother of Shetu',
    'Mugan Qaghan / Ashina Qijin (554 - 572) younger brother of Kelou',
    'Tuobo Qaghan / Unknown name (572 - 581) younger brother of Qijin',
    'Unknown title / Ashina Anluo (581) son of Tuobo Qaghan']
    },
    {
        id:2,
        subject:'Second Göktürk Empire',
        content:[
    'Ilteris Sad (Idat) (682-694)',
    'Qapagan Khaghan (Mo-cho) (694 - 716)',
    'Inäl Khan 716',
    'Bilgä Khan (716 - 734) (murdered)',
    'Kul Tigin Khan (716 - 731) (co-ruler with Bilge)',
    'Yollug Khan (735 - )',
    'Icen Khan - (744)',
    'Etimis Khan 9744-747) (in exile)']
    },
    {
        id:3,
        subject:'Rise',
        content:'In 691 Ilterish Qaghan died and was succeeded by his younger brother, who assumed the title Qapaghan Qaghan. In 696–697 Qapaghan subjugated the Khitans and sealed an alliance with the Kumo Xi (Tatabï in Turkic texts), which stemmed the advance of the Chinese armies to the northeast, into the foothills of the Khingan, and secured the empires eastern frontier. Between 698 and 701 the northern and western frontiers of Qapaghans state were defined by the Tannu Ola, Altai and Tarbagatai mountain ranges. After defeating the Bayirku tribe in 706–707, the Türks occupied lands extending from the upper reaches of the Kerulen to Lake Baikal. In 709–710 the Türk forces subjugated the Az and the Chik, crossed the Sayan mountains (Kögmen yïš in Turkic texts), and inflicted a crushing defeat on the Yenisei Kyrgyz. The Kyrgyz ruler, Bars beg, fell in battle, and his descendants were to remain vassals of the Göktürks for several generations. '
    },

    {
        id:4,
        subject:'Crisis',
        content:'In violation of custom, the throne was taken by Qapaghans son Inel Qaghan (716). Inel, who had no right to the throne, and his supporters, were killed by Kul Tigin, who had support of many Turkic families, and set on the throne his elder brother Bilge Qaghan, who ruled from 716 to 734 .Bilge Qaghan mounted the throne at a time when the empire founded by his father was on the verge of collapse. The western lands seceded for good, and immediately after the death of Qapagan, the Türgesh leader Suluk proclaimed himself kaghan. The Kitan and Tatabi tribes refused to pay tribute, the Oghuz revolt continued, and the Türk tribes themselves began to rebel. Feeling unable to control the situation, Bilge kaghan offered the throne to his brother, Kul Tigin. '
    },
    {
        id:5,
        subject:'Second Turkic Khaganate',
        content:'he Second Turkic Khaganate (Old Turkic: 𐱅𐰇𐰼𐰰:𐰃𐰠‎, romanized: Türük el, lit. State of the Turks,[4][5] Chinese: 後突厥; pinyin: hòu Tūjué, known as Turk Bilge Qaghan country (Old Turkic: 𐱅𐰇𐰼𐰝:𐰋𐰃𐰠𐰏𐰀:𐰴𐰍𐰣:𐰃𐰠𐰭𐰀‎, romanized: Türük Bilgä Qaγan eli) in Bain Tsokto inscriptions.[6] 682-744), was a khaganate in Central and Eastern Asia founded by Ashina clan of the Göktürks. It was preceded by the Eastern Turkic Khaganate (552-630) and then a period of Tang Chinese rule (630-682). The Second Khaganate[7][8][9] was centered on Ötüken in the upper reaches of the Orkhon River. It was succeeded by its subject Toquz Oghuz confederation, which became the Uyghur Khaganate.'
    },
    {
        id:6,
        subject:'Outline',
        content:'After the fall of Eastern Turkic Khaganate in 679, Ashina Nishufu was declared qaghan and revolted against the Tang dynasty.[10] In 680, he was defeated by Pei Xingjian. Shortly afterwards, Nishufu was killed by his men.[10] Following Nishufus death, Ashina Funian, another scion of the royal clan, was made qaghan and the Eastern Turks once again rebelled against the Tang occupation.[11] The early stages of the rebellion brought about some victories for Funian, however later, Turks were once again defeated by Pei Xiangjin.[11] According to Tonyukuk, the attempt to revolt against the Chinese and set a qaghan on the throne was legitimate action. It was the peoples fault that they deposed and killed Nishufu, and subduing themselves again to the Chinese.[12]'
    },
]


ApiRoutes.get('/',(req, res) =>
{
res.send(data)
})

module.exports = ApiRoutes