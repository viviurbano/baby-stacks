'use strict';

// document.addEventListener('DOMContentLoaded', () => {
const listCountryCode = [
  '004',
  '008',
  '012',
  '016',
  '020',
  '024',
  '660',
  '010',
  '028',
  '032',
  '051',
  '533',
  '036',
  '040',
  '031',
  '044',
  '048',
  '050',
  '052',
  '112',
  '056',
  '084',
  '204',
  '060',
  '064',
  '068',
  '535',
  '070',
  '072',
  '074',
  '076',
  '086',
  '096',
  '100',
  '854',
  '108',
  '132',
  '116',
  '120',
  '124',
  '136',
  '140',
  '148',
  '152',
  '156',
  '162',
  '166',
  '170',
  '174',
  '180',
  '178',
  '184',
  '188',
  '191',
  '192',
  '531',
  '196',
  '203',
  '384',
  '208',
  '262',
  '212',
  '214',
  '218',
  '818',
  '222',
  '226',
  '232',
  '233',
  '748',
  '231',
  '238',
  '234',
  '242',
  '246',
  '250',
  '254',
  '258',
  '260',
  '266',
  '270',
  '268',
  '276',
  '288',
  '292',
  '300',
  '304',
  '308',
  '312',
  '316',
  '320',
  '831',
  '324',
  '624',
  '328',
  '332',
  '334',
  '336',
  '340',
  '344',
  '348',
  '352',
  '356',
  '360',
  '364',
  '368',
  '372',
  '833',
  '376',
  '380',
  '388',
  '392',
  '832',
  '400',
  '398',
  '404',
  '296',
  '408',
  '410',
  '414',
  '417',
  '418',
  '428',
  '422',
  '426',
  '430',
  '434',
  '438',
  '440',
  '442',
  '446',
  '450',
  '454',
  '458',
  '462',
  '466',
  '470',
  '584',
  '474',
  '478',
  '480',
  '175',
  '484',
  '583',
  '498',
  '492',
  '496',
  '499',
  '500',
  '504',
  '508',
  '104',
  '516',
  '520',
  '524',
  '528',
  '540',
  '554',
  '558',
  '562',
  '566',
  '570',
  '574',
  '580',
  '578',
  '512',
  '586',
  '585',
  '275',
  '591',
  '598',
  '600',
  '604',
  '608',
  '612',
  '616',
  '620',
  '630',
  '634',
  '807',
  '642',
  '643',
  '646',
  '638',
  '652',
  '654',
  '659',
  '662',
  '663',
  '666',
  '670',
  '882',
  '674',
  '678',
  '682',
  '686',
  '688',
  '690',
  '694',
  '702',
  '534',
  '703',
  '705',
  '090',
  '706',
  '710',
  '239',
  '728',
  '724',
  '144',
  '729',
  '740',
  '744',
  '752',
  '756',
  '760',
  '158',
  '762',
  '834',
  '764',
  '626',
  '768',
  '772',
  '776',
  '780',
  '788',
  '792',
  '795',
  '796',
  '798',
  '800',
  '804',
  '784',
  '826',
  '581',
  '840',
  '858',
  '860',
  '548',
  '862',
  '704',
  '092',
  '850',
  '876',
  '732',
  '887',
  '894',
  '716',
  '248',
];

let contryDrawn = document.getElementById('country--drawn').innerHTML;
const countryChosen = document.getElementsByClassName('capital-chosen--item');

//verifica o país sorteado x capital escolhida
// FIXME mudar o país para comparar com a capital

for (let i = 0; i < countryChosen.length; i++) {
  countryChosen[i].addEventListener('click', function () {
    if (countryChosen[i].innerHTML === contryDrawn) {
      console.log(`${countryChosen[i].innerHTML}`);
    }
  });
}

const code =
  listCountryCode[Math.floor(Math.random() * listCountryCode.length)];

const userAction = async () => {
  // const country = await fetch("https://restcountries.com/v3.1/name/brazil/");
  // const country = await fetch('https://restcountries.com/v3.1/all');
  // const country = await fetch(
  //   'https://restcountries.com/v3.1/alpha?codes=076'
  // );

  const country = await fetch(
    'https://restcountries.com/v3.1/alpha?codes=' + code
  );

  const myJson = await country.json(); //extract JSON - country data
  // do something with myJson
  // console.log(myJson);
  // console.log('##### resposta: ', country);
  // console.log(myJson[0].capital);
  // console.log(myJson[0].flag);

  const countryName = myJson[0].name.common;
  const countryCapital = myJson[0].capital[0];
  const countryFlag = myJson[0].flag;

  console.log(`
    country: ${countryName}, 
    capital: ${countryCapital}, 
    bandeira: ${countryFlag}, 
    country code: ${code}`);

  // funciona para enviar, mas acho que tem forma melhor
  document.getElementById('country--drawn').innerHTML = countryName;

  // contryDrawn = countryName;
  return countryName;
};
const bandeira = userAction();
console.log(`${bandeira}`);

// });

// executa assim que o DOM fica pronto TADAHHH -- Apenas exemplo
document.addEventListener('DOMContentLoaded', () => {
  console.log(`pronto, chefia.. Toma aí seu DOM.`);
});
