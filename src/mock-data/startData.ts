const foods: Foods = [
    {
        name: { nl: 'Lassie Toverrijst builtje' },
        brands: [ 'Lassie' ],
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
        brands: [ 'AH' ],
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
    },{
        name: { nl: 'AH Oregano' },
        brands: [ 'AH' ],
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
        brands: [ "Olav's" ],
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
    },
    {
        name: { en: "Banana" },
        categories: [ "Fruits" ],
        unit: 'g',
        nutrition: {
            per: '100 g',
            kcal: 85,
            fats: 0.22,
            carbohydrates: 20.1,
            proteins: 0.73
        }
    },{
        name: { en: "Broccoli" },
        state: "raw",
        categories: [ "Vegetables" ],
        unit: 'g',
        nutrition: {
            per: '100 g',
            kcal: 39,
            fats: 0.34,
            carbohydrates: 6.27,
            proteins: 2.57
        }
    },{
        name: { nl: 'Philadelphia Original' },
        brands: [ 'Philadelphia' ],
        categories: [ "Dairy" ],
        unit: 'g',
        packageSize: 200,
        nutrition: {
          per: '100 g',
          kcal: 235,
          fats: 21.5,
          carbohydrates: 4,
          proteins: 5.5
        }
    },
    {
        name: { nl: 'AH Verse scharreleieren M' },
        brands: [ 'AH' ],
        categories: [ "Eggs"],
        nutrition: {
          per: '100 g',
          kcal: 131,
          fats: 9.1,
          carbohydrates: 0.2,
          proteins: 12
        }
    },
    {
        name: {
          nl:"AH Volle melk"
        },
        brands: [ "AH" ],
        categories: [ "Dairy" ],
        packageSize: 224,
        unit: "ml",
        nutrition: {
          per: "100 ml",
          kcal: 100,
          proteins: 6.4,
          fats: 2,
          carbohydrates: 61,
        },
    },
    {
        name: { nl: 'Milka Tablet melk oreo' },
        brands: [ 'Milka' ],
        categories: [ "Chocolade"],
        unit: 'g',
        packageSize: 100,
        nutrition: {
          per: '100 g',
          kcal: 564,
          fats: 35,
          carbohydrates: 56,
          proteins: 4.8
        }
    }
];

export type Food = {
    name: {
        nl?: string,
        en?: string
    },
    state?: string,
    brands?: string[],
    categories: string[],
    unit?: 'g' | 'ml',
    packageSize?: number,
    nutrition: {
        per: '100 g' | '100 ml',
        kcal: number,
        fats: number,
        carbohydrates: number,
        proteins: number
    }
}

export type Foods = Food[];

export default foods;