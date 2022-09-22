import type { NextPage } from 'next'
import Head from 'next/head'
import { Foods } from '../types';
import FoodList from '../components/Food/FoodList';
import Input from '../components/BaseUI/Input';

const Home: NextPage = () => {
  const foods: Foods = [{
    name: { nl: 'Lassie Toverrijst builtje' },
    brand: 'Lassie',
    categories: ["Grains, legumes, nuts & seeds"],
    unit: 'g',
    packageSize: 300,
    nutrition: {
        per: '100 g',
        kcal: 353,
        fats: 1,
        carbohydrates: 79.6,
        proteins: 5.8
    }
  },{
    name: { nl: 'AH Kipfilet' },
    brand:  'AH' ,
    categories: ['Meat & poultry'],
    unit: 'g',
    packageSize: 600,
    nutrition: {
        per: '100 g',
        kcal: 113,
        fats: 1.9,
        carbohydrates: 0,
        proteins: 24
    }
  }, {
    name: { nl: 'AH Oregano' },
    brand:  'AH' ,
    categories: [ "Herbs & spices" ],
    unit: 'g',
    packageSize: 15,
    nutrition: {
      per: '100 g',
      kcal: 334,
      fats: 0,
      carbohydrates: 67,
      proteins: 0
    }
  }, {
    name: { nl: "Olav's Gerookte zalmfilet" },
    brand:  "Olav's" ,
    categories: [ "Fish & seafood" ],
    unit: 'g',
    packageSize: 200,
    nutrition: {
        per: '100 g',
        kcal: 183,
        fats: 11,
        carbohydrates: 0,
        proteins: 21
    }
  }];
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Food API</h1>
      <main>
        <Input type='number'/>
      <FoodList foods={foods} />
      </main>

    </div>
  )
}

export default Home
