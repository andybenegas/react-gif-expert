
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
    
    test('Debe mostrar el loading... inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        const category = 'Dragon Ball';
        
        render( <GifGrid category={ category }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

    });

    test('Debe mostrar items cuando se cargan las imágenes mediante el useFecthGifs', () => {

        const category = 'Dragon Ball';
        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: '123',
                title: 'Seiya',
                url: 'https://localhost/seiya.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid category={ category }/> );
        expect( screen.getAllByRole('img').length ).toBe(2);


    });
});