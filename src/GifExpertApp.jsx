import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Caballeros del Zodíaco']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        // categories.push(NewCategory);
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'Super campeones']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
        />

        {
            categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))        
        }
    </>
  )
}
