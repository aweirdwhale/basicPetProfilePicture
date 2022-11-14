import fetch from 'node-fetch';

//prédéfinis un animal aléatoirement
const animals = ['Bird', 'Cat', 'Dog', 'fox', 'kangaroo', 'koala', 'panda', 'raccoon', 'red_panda']
const animal = animals[Math.floor(Math.random() * animals.length)]

async function getImage() {
  const PP = await fetch(`https://some-random-api.ml/img/${animal}`)
            .then(res => res.json())
            .then(json => json.link);

  console.log(PP + " -> log 1") //logs

}

//getImage();

export default getImage;