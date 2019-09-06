const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://database/otimages', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');

  const imageSchema = new mongoose.Schema({
    restaurantId: String,
    url: String,
    urlS: String,
    urlM: String,
    urlL: String,
    name: String,
    source: String,
    date: Date,
    photographer: String,
  });

  const Image = mongoose.model('Image', imageSchema);

  Image.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const randomNumbers = [];
  for (let i = 0; i < 101; i += 1) {
    randomNumbers.push(Math.floor(Math.random() * 91) + 10);
  }

  const sources = ['OpenTable Diner', 'Restaurant', 'Foodspotting'];
  const foodWords = 'Drumstick burgdoggen tenderloin frankfurter flank short loin landjaeger. Pork doner strip steak pork loin drumstick leberkas kevin shankle spare ribs meatball alcatra ham tri-tip pancetta. Cow pig burgdoggen meatball, pancetta meatloaf sirloin chicken. Turkey biltong shankle chicken, pastrami jowl pancetta short ribs chuck bacon cow capicola. Salami short loin alcatra, tail boudin chuck frankfurter meatball pork prosciutto short ribs sirloin fatback. Tail andouille biltong, ham hock shankle salami ground round jowl fatback. Beef ribs ball tip picanha, bacon salami burgdoggen capicola brisket buffalo shank cow pancetta frankfurter bresaola. Rump beef alcatra meatloaf tenderloin biltong shoulder pork chop pig flank landjaeger tail salami. Sausage meatloaf pork, sirloin turkey drumstick meatball bresaola. Jerky tri-tip chicken rump pig tenderloin fatback filet mignon. Flank prosciutto sausage pancetta ribeye short loin tongue turkey capicola turducken. Corned beef drumstick beef tail shoulder. Pork loin ribeye brisket, ground round meatball kevin chicken pork belly doner spare ribs jowl sausage short loin picanha. Tail jowl short loin, leberkas spare ribs pork loin swine ham hock capicola tri-tip landjaeger beef drumstick cupim alcatra. Landjaeger doner shank beef ribs pig shankle pastrami porchetta cow flank kevin kielbasa. Cow tri-tip jerky bresaola rump salami burgdoggen. Prosciutto bresaola venison strip steak pork belly porchetta. Tongue ham hock ball tip alcatra. Capicola shank ball tip, short ribs bresaola alcatra pork chop t-bone jerky shankle ribeye rump turducken. Pig tenderloin buffalo meatloaf kielbasa cupim porchetta andouille jowl shankle pork belly landjaeger pork chop. Ham hock ground round picanha pork loin ball tip shoulder andouille sausage spare ribs short ribs. T-bone chuck beef, buffalo kielbasa turducken corned beef hamburger tail filet mignon doner sausage. Filet mignon shoulder boudin short loin tongue pork loin kielbasa jerky picanha biltong tenderloin. Pastrami kielbasa pork chop ham porchetta prosciutto pig beef chuck kevin flank bacon beef ribs swine. Drumstick tenderloin doner, picanha kielbasa beef ribs buffalo hamburger meatloaf jerky shank ribeye alcatra bresaola frankfurter. Tongue capicola pastrami kielbasa. Hamburger ham strip steak buffalo, frankfurter tail doner andouille tenderloin filet mignon corned beef tri-tip shank sirloin pork chop. Swine chicken drumstick turducken salami ham shank. Jowl andouille filet mignon ribeye. Brisket shank frankfurter pork belly. Chicken drumstick fatback pork loin short loin pork chop shankle leberkas beef ribs pig pastrami ribeye. Boudin salami bresaola swine chuck short ribs drumstick ham pork turkey chicken flank. Capicola alcatra chuck meatball kielbasa, prosciutto jerky beef buffalo. Rump short loin jerky, shank ham hock landjaeger meatloaf strip steak ham swine hamburger chicken. Beef pig biltong meatloaf. Capicola short loin swine kielbasa fatback, ground round tri-tip boudin shank kevin rump chuck spare ribs. Pastrami picanha ham, biltong capicola bacon shank jerky. Strip steak corned beef rump shoulder pork belly doner shank chicken tenderloin kielbasa salami. Meatloaf spare ribs pork chop, shank kielbasa hamburger shoulder ground round burgdoggen capicola sausage doner ball tip bacon venison. Pork chop ribeye pork belly tongue short loin porchetta corned beef buffalo short ribs. Corned beef flank bresaola turducken burgdoggen tongue hamburger kevin sirloin pork chop ball tip porchetta brisket picanha meatball. Venison swine sirloin leberkas, tail short ribs chuck tongue fatback frankfurter. Kielbasa fatback tenderloin burgdoggen, pork chop drumstick porchetta cupim sirloin pork loin chuck frankfurter sausage. Turkey swine filet mignon short ribs pork chop frankfurter venison doner ham hock tongue pastrami beef ribs cow. Fatback tail bacon picanha hamburger pork chop kevin alcatra landjaeger spare ribs ground round andouille drumstick. Salami pork loin jerky, swine sausage ham pastrami sirloin ham hock t-bone short ribs spare ribs short loin shank kielbasa. Kielbasa biltong strip steak buffalo pork loin jowl t-bone chicken. Landjaeger burgdoggen spare ribs, pastrami pancetta porchetta andouille short ribs sausage pork loin kielbasa chuck. Short ribs kielbasa meatball picanha tail pork chop swine rump jowl shankle kevin. Shoulder tail buffalo pig chuck andouille sirloin ham hock picanha tongue chicken frankfurter landjaeger. Spare ribs tongue tri-tip tail, corned beef pork chop andouille leberkas biltong ham ham hock pork loin picanha swine. Prosciutto ribeye burgdoggen bresaola shoulder beef. Buffalo leberkas porchetta, meatball pork belly flank tenderloin drumstick beef. Shankle capicola venison filet mignon, tongue rump t-bone shank. Porchetta andouille landjaeger, meatloaf filet mignon sausage pork belly drumstick shoulder tri-tip kielbasa boudin. Burgdoggen sausage chuck swine. Hamburger biltong spare ribs, capicola chicken picanha burgdoggen. Andouille picanha tongue brisket venison biltong tri-tip bacon cupim meatball t-bone chicken porchetta buffalo. Rump tail doner jerky kevin hamburger swine alcatra tri-tip andouille. Frankfurter beef ball tip turducken filet mignon pork tri-tip ham hock capicola chuck. Beef ribs bacon sausage ball tip t-bone kielbasa turkey. Fatback chuck jerky brisket venison pork belly landjaeger ball tip turducken pastrami ham tail pig hamburger bresaola. Spare ribs picanha corned beef, cupim turducken drumstick flank tail turkey short loin. Prosciutto fatback bresaola cow landjaeger. Jerky pork belly shoulder, meatloaf rump tri-tip ham hock ball tip turducken sausage spare ribs pork loin biltong drumstick. Pork belly ham hock pancetta kielbasa landjaeger. Meatball tongue kielbasa pastrami andouille. Chicken bresaola pork chop ham hock corned beef. Kevin pork chop pancetta porchetta, prosciutto frankfurter turducken. Cow rump prosciutto turducken chicken pastrami short ribs. Meatball ground round corned beef biltong sirloin. Turkey pastrami ball tip shoulder. Frankfurter ball tip fatback, tail spare ribs strip steak kevin burgdoggen rump cow sausage hamburger pork belly pork loin. Pork belly tongue tenderloin short loin shoulder cow capicola boudin. Short loin pancetta drumstick, tenderloin kielbasa picanha turkey rump ball tip pastrami. Shoulder filet mignon ball tip chicken porchetta, venison jowl ham hock sausage tenderloin pig. Shank corned beef leberkas ground round doner, spare ribs frankfurter. Rump turkey alcatra jowl. Frankfurter drumstick beef, tri-tip cow biltong shankle hamburger doner bresaola. Ribeye pork belly porchetta cupim meatloaf ham fatback boudin. Doner swine frankfurter hamburger t-bone short loin. Salami shank frankfurter, shankle venison prosciutto biltong picanha capicola turducken ribeye fatback shoulder porchetta. Alcatra andouille biltong tail bresaola. Jowl pork meatball buffalo kevin turducken. Picanha tenderloin jerky cow turducken, ribeye chicken porchetta meatloaf. Capicola prosciutto pork loin tenderloin sirloin picanha jowl t-bone sausage tongue porchetta short ribs. Rump shank landjaeger flank. Tongue bacon hamburger corned beef pig, pork loin bresaola meatloaf shankle andouille. Frankfurter bacon brisket, tail salami pork loin capicola cupim pancetta jerky pork chop beef cow filet mignon. Bacon boudin spare ribs, chicken pork sirloin brisket filet mignon strip steak pancetta andouille kielbasa. Meatball bresaola short loin flank tail buffalo picanha filet mignon. Bacon ham shoulder short ribs flank, frankfurter leberkas spare ribs beef ribs biltong sirloin cupim. Fatback kevin porchetta, tongue jerky pork belly doner venison. Ribeye tri-tip beef short ribs ham hock beef ribs. Ground round shankle pancetta, porchetta kielbasa alcatra filet mignon burgdoggen tenderloin. Short ribs corned beef boudin, leberkas strip steak tri-tip ribeye bresaola tongue. Bresaola jerky landjaeger, pastrami shankle sirloin fatback salami prosciutto pork buffalo pancetta. Cupim frankfurter tail alcatra turkey beef drumstick landjaeger picanha tongue kielbasa fatback. Chicken pork chop tail, ground round rump ham hock landjaeger tri-tip porchetta prosciutto pig fatback. Ribeye short loin alcatra pastrami';
  const foodNames = foodWords.split('. ');

  const seedRestaurantFxns = [];
  for (let rid = 1; rid < 101; rid += 1) {
    const seedRestaurantFxn = () => {
      const saveDocumentFxns = [];
      for (let i = 0; i < randomNumbers[rid]; i += 1) {
        const saveDocumentFxn = () => {
          const image = new Image({
            url: i % 2 === 0 ? `https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/${rid}.jpg` : 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/filler.jpg',
            urlS: i % 2 === 0 ? `https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/small/${rid}.jpg` : 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/small/filler.jpg',
            urlM: i % 2 === 0 ? `https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/medium/${rid}.jpg` : 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/medium/filler.jpg',
            urlL: i % 2 === 0 ? `https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/large/${rid}.jpg` : 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/large/filler.jpg',
            restaurantId: `r${rid}`,
            source: sources[Math.floor(Math.random() * 3)],
            photographer: faker.name.findName(),
            date: faker.date.past(2),
            name: foodNames[Math.floor(Math.random() * foodNames.length)],
          });
          image.save((err) => {
            if (err) {
              console.log(err);
            }
          });
        };
        saveDocumentFxns.push(saveDocumentFxn);
      }
      saveDocumentFxns.reduce((p, f) => p.then(f), Promise.resolve());
    };
    seedRestaurantFxns.push(seedRestaurantFxn);
  }

  seedRestaurantFxns.reduce((p, f) => p.then(f), Promise.resolve());
  setTimeout(() => {
    console.log('Please wait...');
    mongoose.disconnect();
  });
});
