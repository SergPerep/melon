import { Collection } from "mongodb";
import foods, { Foods } from "../mock-data/startData";

const deleteAllCategories = async (catColl: Collection) => {
    const result = await catColl.deleteMany({});
    console.log(`-- Deleted ${result.deletedCount} docs from categories collection`);
}

const deleteAllBrands = async (brandsColl: Collection) => {
    const result = await brandsColl.deleteMany({});
    console.log(`-- Deleted ${result.deletedCount} docs from brands collection`);
}

const deleteAllFoods = async (foodsColl: Collection) => {
    const result = await foodsColl.deleteMany({});
    console.log(`-- Deleted ${result.deletedCount} docs from foods collection`);
}

const insertCategories = async(foods: Foods, catColl: Collection) => {
    // Extract list of categories from foods array
    const catArr = foods.reduce((prevVal: string[], curVal) => {
        const categories = curVal.categories.reduce(
            (prevVal: string[], curVal) => [...prevVal, curVal], []
        );
        return [...prevVal, ...categories]
    },[]);
    const catSet = new Set(catArr);
    // Insert categories in DB
    const result = await catColl.insertMany([...catSet].map(categoryStr => ({ name: categoryStr })));
    console.log(`-- Inserted ${result.insertedCount} docs into categories collection`)
}

const insertBrands = async (foods: Foods, brandsColl: Collection) => {
    // Extract list of brands from foods
    const brandsArr = foods.reduce((prevVal: string[], curVal) => {
        if (!curVal.brands) return prevVal;
        const brands = curVal.brands?.reduce((prevVal: string[], curVal) => [...prevVal, curVal], []);
        return [...prevVal, ...brands]
    }, []);

    const brandsSet = new Set(brandsArr);
    // Insert brands in DB
    const result = await brandsColl.insertMany([...brandsSet].map(brandStr => ({name: brandStr})));
    console.log(`-- Inserted ${result.insertedCount} docs into brands collection`)

}

const insertFoods = async(foods: Foods, foodsColl: Collection, catColl: Collection, brandsColl: Collection) => {
    // Replace brands and categories in foods with corresponding ids in DB
    const foodsArr = await Promise.all( 
            foods.map(async(food) => {
                const categoriesIds = await Promise.all( 
                    food.categories.map( async(categoryStr) => {
                        const result = await catColl.findOne({ name: categoryStr});
                        return result?._id.toString();
                    }
                ));
                if (food.brands) {
                    const brandsIds = await Promise.all(
                        food.brands.map( async (brandStr) => {
                            const result = await brandsColl.findOne({ name: brandStr });
                            return result?._id.toString();
                        })
                    )
                    return  {...food, categories: categoriesIds, brands: brandsIds}
                }
                return {...food, categories: categoriesIds}
            }
    ));

    // Insert foods in DB
    const result = await foodsColl.insertMany(foodsArr);
    console.log(`-- Inserted ${result.insertedCount} docs into foods collection`)
}

const resetDb = async (foodsColl: Collection, catColl: Collection, brandsColl: Collection) => {
    await deleteAllCategories(catColl);
    await insertCategories(foods, catColl);
    await deleteAllBrands(brandsColl);
    await insertBrands(foods, brandsColl);
    await deleteAllFoods(foodsColl);
    await insertFoods(foods, foodsColl, catColl, brandsColl);
}

export default resetDb;